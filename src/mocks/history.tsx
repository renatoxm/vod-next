import { IVideoPreview } from '@/types/Video';
import { MockedVideoCollection } from './apiResponses';

const vids = MockedVideoCollection.result;

export const MockedHistoryCollection: IVideoPreview[] = vids.slice(0, 3);
