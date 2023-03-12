import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps, NextPage } from 'next';
import { homeQuery } from '@/const/queries';
import Head from 'next/head';
import Home from '@/modules/Home';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>vod.io</title>
      </Head>
      <Home />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(homeQuery);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
