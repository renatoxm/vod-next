import SignIn from '@/modules/SignIn';
import Head from 'next/head';
import { ReactElement } from 'react';

export default function SignPage() {
  return (
    <>
      <Head>
        <title>Sign In - vod.io</title>
      </Head>
      <SignIn />
    </>
  );
}

SignPage.getLayout = (page: ReactElement) => page;
