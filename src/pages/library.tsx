import { useStore } from '@/lib/providers/GlobalStoreProvider';
import Library from '@/modules/Library';
import Container from '@/modules/ui/Container';
import EmptyScreen from '@/modules/ui/EmptyScreen';
import SignInButton from '@/modules/ui/SignInButton';
import { observer } from 'mobx-react-lite';
import Head from 'next/head';

export default observer(function LibraryPage() {
  const { authStore } = useStore();

  if (!authStore.user)
    return (
      <Container>
        <Head>
          <title>Library - vod.io</title>
        </Head>
        <EmptyScreen
          emojiCode="1F631"
          title="Enjoy Your Favorite Videos"
          text="Sign in to access videos thay you've liked or saved"
        >
          <SignInButton fontSize={16} />
        </EmptyScreen>
      </Container>
    );

  return (
    <>
      <Head>
        <title>Library - vod.io</title>
      </Head>
      <Library />
    </>
  );
});
