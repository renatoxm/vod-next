import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { intersectionBy } from 'lodash';
import { useVideoCollection } from './useVideoCollection';

export const usePlaylistCollection = () => {
  const { data, isLoading } = useVideoCollection();
  const { playlistStore } = useStore();

  if (!data || isLoading) return [];

  return intersectionBy(data, playlistStore.collectionAsObjects, `id`);
};
