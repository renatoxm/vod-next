import { IThumbnail } from './Video';

export interface IChannel {
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: IThumbnail;
      medium: IThumbnail;
      high: IThumbnail;
    };
  };
  statistics: {
    viewCount: number;
    subscriberCount: number;
    videoCount: number;
  };
  status: {
    privacyStatus: 'public' | 'private';
    isLinked: boolean;
    longUploadsStatus: 'allowed' | 'disallowed' | 'eligible';
    madeForKids: boolean;
  };
}
