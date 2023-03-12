import { useStore } from '@/lib/providers/GlobalStoreProvider';
import History from '@/modules/History';
import EmptyScreen from '@/modules/ui/EmptyScreen';
import SignInButton from '@/modules/ui/SignInButton';
import { observer } from 'mobx-react-lite';
import Head from 'next/head';

export default observer(function HistoryPage() {
  const { authStore } = useStore();

  if (!authStore.user)
    return (
      <>
        <Head>
          <title>Watch History - vod.io</title>
        </Head>
        <EmptyScreen
          emojiCode="1F627"
          title="Keep Track Of What You Watch"
          text={`Watch history isn't viewable when signed out`}
        >
          <SignInButton fontSize={16} />
        </EmptyScreen>
      </>
    );

  return (
    <>
      <Head>
        <title>Watch History - vod.io</title>
      </Head>
      <History />
    </>
  );
});
