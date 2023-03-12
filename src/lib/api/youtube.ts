import axios from 'axios';
import { IVideoPreview, IVideo } from '@/types/Video';
import { handleAxiosError } from '@/lib/utils/handleAxiosError';
import qs from 'qs';
import _ from 'lodash';
import { IChannel } from '@/types/Channel';
import { ICommentThread } from '@/types/Comment';

const ax = axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  paramsSerializer: {
    serialize(params) {
      return qs.stringify(params, { indices: false, arrayFormat: `repeat` });
    },
  },
});

ax.interceptors.request.use((config) => {
  config.params = {
    part: [`snippet`],
    maxResults: 32,
    key: process.env.NEXT_PUBLIC_YOUTUBE_KEY,
    ...config.params,
  };
  return config;
});

export type YoutubeVideosResponse = {
  items: IVideo[];
};

export type YoutubeChannelResponse = {
  items: IChannel[];
};

export type YoutubeCommentThreadResponse = {
  items: ICommentThread[];
};

type YoutubeVideoPart =
  | 'contentDetails'
  | 'fileDetails'
  | 'id'
  | 'liveStreamingDetails'
  | 'localizations'
  | 'player'
  | 'processingDetails'
  | 'recordingDetails'
  | 'snippet'
  | 'statistics'
  | 'status'
  | 'suggestions'
  | 'topicDetails';

type YoutubeChannelPart = 'snippet' | 'id' | 'statistics' | 'status';

type YoutubeCommentThreadPart = 'id' | 'snippet' | 'replies';

interface YoutubeCommonParams {
  location?: string;
  maxResults?: number;
  videoCategoryId?: number;
}

export interface YoutubeSearchParams extends YoutubeCommonParams {
  q: string;
}

export interface YoutubeVideoListParams extends YoutubeCommonParams {
  part: YoutubeVideoPart[];
  id?: string[];
}

export interface YoutubeChannelParams extends YoutubeCommonParams {
  part: YoutubeChannelPart[];
  id: [string];
}
export interface YoutubeCommentThreadsParams extends YoutubeCommonParams {
  part: YoutubeCommentThreadPart[];
  videoId: string;
}

export interface YoutubeVideoParams extends YoutubeCommonParams {
  part: YoutubeVideoPart[];
  id: [string];
}

class YoutubeAPI {
  protected formatYoutubeResponse(items: IVideo[]): IVideoPreview[] {
    return items.map((item) => ({
      id: item.id,
      contentDetails: _.pick(item.contentDetails, `duration`),
      statistics: _.pick(item.statistics, [`viewCount`, `likeCount`]),
      snippet: _.pick(item.snippet, [
        `categoryId`,
        `channelId`,
        `channelTitle`,
        `liveBroadcastContent`,
        `publishedAt`,
        `thumbnails`,
        `title`,
      ]),
    }));
  }

  async search(params?: YoutubeSearchParams) {
    try {
      const response = await ax.get<YoutubeVideosResponse>(`/search`, {
        params,
      });
      const id = response.data.items.map((i: any) => i.id.videoId);
      return await this.videoList({
        part: [`snippet`, `statistics`, `contentDetails`],
        id,
      });
    } catch (error) {
      handleAxiosError(error);
      return [];
    }
  }

  async videoList(params?: YoutubeVideoListParams) {
    try {
      const {
        data: { items },
      } = await ax.get<YoutubeVideosResponse>(`/videos`, {
        params,
      });
      return this.formatYoutubeResponse(items);
    } catch (error) {
      handleAxiosError(error);
      return [];
    }
  }

  async channelByID(params?: YoutubeChannelParams) {
    try {
      const {
        data: { items },
      } = await ax.get<YoutubeChannelResponse>(`/channels`, {
        params,
      });
      return items[0];
    } catch (error) {
      handleAxiosError(error);
      return null;
    }
  }

  async commentThreads(params?: YoutubeCommentThreadsParams) {
    try {
      const {
        data: { items },
      } = await ax.get<YoutubeCommentThreadResponse>(`/commentThreads`, {
        params,
      });
      return items;
    } catch (error) {
      handleAxiosError(error);
      return [];
    }
  }

  async videoById(params: YoutubeVideoParams) {
    try {
      const {
        data: { items },
      } = await ax.get<YoutubeVideosResponse>(`/videos`, {
        params,
      });

      const video = items[0];

      let comments: ICommentThread[] = [];

      if (video.statistics.commentCount > 0) {
        comments = await this.commentThreads({
          videoId: params.id[0],
          part: [`snippet`, `replies`],
        });
      }

      const channel = await this.channelByID({
        id: [video.snippet.channelId],
        part: [`snippet`, `statistics`, `status`],
      });
      return {
        video,
        comments,
        channel,
      };
    } catch (error) {
      handleAxiosError(error);
      return null;
    }
  }
}

export default YoutubeAPI;
