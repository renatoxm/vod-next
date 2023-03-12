import 'regenerator-runtime/runtime';
import { NextPage } from 'next';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';
import Primary from '@/modules/layouts/Primary';
import GlobalStyle from '../styles/globalStyles';
import { REVALIDATE_TIME } from '@/const/index';
import 'react-tooltip/dist/react-tooltip.css';
import { GlobalStoreProvider } from '@/lib/providers/GlobalStoreProvider';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: REVALIDATE_TIME,
            cacheTime: REVALIDATE_TIME,
            suspense: true,
          },
        },
      }),
  );

  const getLayout =
    Component.getLayout || ((page) => <Primary>{page}</Primary>);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStoreProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </GlobalStoreProvider>
      </Hydrate>
    </QueryClientProvider>,
  );
}
