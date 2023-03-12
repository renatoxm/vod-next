import { useVideoCollection } from './useVideoCollection';

import { IVideoPreview } from '@/types/Video';
import { useStore } from '@/lib/providers/GlobalStoreProvider';

export interface IHistoryVideo extends IVideoPreview {
  date: string;
}

export const useHistoryCollection = (searchLine?: string): IHistoryVideo[] => {
  const { data, isLoading } = useVideoCollection();
  const { historyStore } = useStore();

  if (!data || isLoading) return [];

  const collection = historyStore.history.reduce<IHistoryVideo[]>(
    (result, { id, date }) => {
      const item = data.find((v) => {
        return (
          v.id === id &&
          (searchLine
            ? v.snippet.title
                .toLowerCase()
                .includes(searchLine.toLowerCase()) ||
              v.snippet.channelTitle
                .toLowerCase()
                .includes(searchLine.toLowerCase())
            : true)
        );
      });

      if (item) {
        result.push({
          ...item,
          date,
        });
      }

      return result;
    },
    [],
  );

  return collection;
};
