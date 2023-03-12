import Container from '@/modules/ui/Container';
import EmptyScreen from '@/modules/ui/EmptyScreen';
import SignInButton from '@/modules/ui/SignInButton';
import Subscriptions from '@/modules/Subscriptions';
import Head from 'next/head';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';

export default observer(function SubscriptionsPage() {
  const { authStore } = useStore();

  if (!authStore.user)
    return (
      <Container>
        <Head>
          <title>Subscriptions - vod.io</title>
        </Head>
        <EmptyScreen
          emojiCode="1F62D"
          title="Don't Miss New Videos"
          text="Sign in to see updates from your favorite vod.io channels"
        >
          <SignInButton fontSize={16} />
        </EmptyScreen>
      </Container>
    );

  return (
    <>
      <Head>
        <title>Subscriptions - vod.io</title>
      </Head>
      <Subscriptions />
    </>
  );
});
