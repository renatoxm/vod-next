import { IVideo, IVideoPreview } from '@/types/Video';
import redis from '@/lib/redis';
import YoutubeAPI from './youtube';

export type YoutubeApiResponse = {
  items: IVideo[];
};

export interface FetchVideosArgs {
  cacheConfig?: {
    name: string;
    expire?: number;
  };
  query: string;
  maxResults?: number;
}

const api = new YoutubeAPI();
class VideosAPI {
  static async fetch(args: FetchVideosArgs) {
    const { cacheConfig, query, maxResults } = args;
    try {
      if (cacheConfig) {
        const cache = await redis.get<IVideoPreview[]>(cacheConfig.name);

        if (cache?.length) {
          console.log(`Fetching data from cache...`);
          return cache;
        }
      }

      console.log(`Fetching data from API...`);
      const items = await api.search({
        q: query,
        maxResults,
      });

      if (cacheConfig) {
        await redis.set(cacheConfig.name, JSON.stringify(items));
      }
      return items;
    } catch (e) {
      const error = e as Error;
      console.error(`Redis error:`, error);
      return [];
    }
  }
}

export default VideosAPI;
