import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { intersectionBy } from 'lodash';
import { useVideoCollection } from './useVideoCollection';

export const useLikedCollection = () => {
  const { data, isLoading } = useVideoCollection();
  const { likesStore } = useStore();

  if (!data || isLoading) return [];

  return intersectionBy(data, likesStore.idsAsObjects, `id`);
};
