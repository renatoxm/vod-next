import { watchQuery } from '@/const/queries';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export const useVideoData = () => {
  const router = useRouter();
  const id = router.query.video_id as string;

  const { data } = useQuery(watchQuery(id));

  return data;
};
