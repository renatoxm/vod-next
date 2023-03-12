import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect } from 'react';
import { useVideoId } from '@/lib/hooks/useVideoId';
import { homeQuery, watchQuery } from '@/const/queries';
import Watch from '@/modules/Watch';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';

export interface UrlParams extends ParsedUrlQuery {
  video_id?: string;
}

const VideoPage: NextPage = () => {
  const { historyStore } = useStore();
  const id = useVideoId();

  const { isWatching, addToHistory } = historyStore;

  useEffect(() => {
    if (isWatching) addToHistory?.(id);
  }, [isWatching, addToHistory, id]);

  return <Watch />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const videos = await homeQuery.queryFn();

  return {
    paths: videos.map((video) => ({
      params: { video_id: video.id },
    })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params?: UrlParams;
}) => {
  if (!params?.video_id)
    return {
      redirect: {
        statusCode: 404,
        destination: `/`,
        permanent: false,
      },
    };

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(watchQuery(params.video_id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default observer(VideoPage);
