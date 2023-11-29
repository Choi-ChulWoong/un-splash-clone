import HomeHeader from '@/components/home/homeHeader/HomeHeader';
import HomeSection from '@/containers/home/homeSection/HomeSection';
import HomeFooter from '@/components/home/homeFooter/HomeFooter';
import NetworkErrorBoundary from '@/components/error/networkErrorBoundary/NetworkErrorBoundary';
import LoadingBox from '@/components/common/loadingBox/LoadingBox';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <NetworkErrorBoundary>
        <Suspense fallback={<LoadingBox />}>
          <HomeSection />
        </Suspense>
      </NetworkErrorBoundary>
      <HomeFooter />
    </>
  );
}
