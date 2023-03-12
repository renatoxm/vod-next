import { useRouter } from 'next/router';

export const useVideoId = () => {
  const router = useRouter();
  const id = router.query.video_id as string;

  return id;
};
