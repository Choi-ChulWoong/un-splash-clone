import type { AppProps } from 'next/app';
import GlobalStyle from '@/styles/Global';
import Layout from '@/components/layout/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalErrorBoundary from '@/components/error/globalErrorBoundary/GlobalErrorBoundary';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: 1000 * 20,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <GlobalStyle />
        <GlobalErrorBoundary>
          <Component {...pageProps} />
        </GlobalErrorBoundary>
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
