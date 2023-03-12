import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useSignIn = () => {
  const router = useRouter();

  return useMemo(() => {
    const signInPath = `/sign?referer=${router.asPath}`;

    return {
      path: signInPath,
      push: () => router.push(signInPath),
    };
  }, [router]);
};
