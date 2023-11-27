import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/Global';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
    </Layout>
  );
}
