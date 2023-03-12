import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { useVideoCollection } from './useVideoCollection';

export const useSubsCollection = () => {
  const { data, isLoading } = useVideoCollection();
  const { subscriptionsStore } = useStore();

  if (!data || isLoading) return [];

  return data.filter((v) =>
    subscriptionsStore.subscriptions.includes(v.snippet.channelId),
  );
};
