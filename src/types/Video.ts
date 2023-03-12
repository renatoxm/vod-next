export interface IThumbnail {
  height: number;
  width: number;
  url: string;
}

export type IVideoPreview = {
  id: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    title: string;
    liveBroadcastContent: boolean | string;
    publishedAt: string;
    thumbnails: {
      default: IThumbnail;
      standart?: IThumbnail;
      medium: IThumbnail;
      high: IThumbnail;
      maxres?: IThumbnail;
    };
  };
  contentDetails: {
    duration: string;
  };
  statistics: {
    viewCount: number;
    likeCount: number;
  };
};

export type IVideo = IVideoPreview & {
  etag: string;
  kind: string;
  snippet: {
    description: string;
    localized: {
      description: string;
      title: string;
    };
    tags: string[];
  };
  contentDetails: {
    caption: boolean;
    definition: string;
    dimension: string;
    licensedContent: boolean;
    projection: string;
  };
  statistics: {
    likeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
};
