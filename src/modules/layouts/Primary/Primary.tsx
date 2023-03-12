import React, { Suspense, useEffect, useRef } from 'react';
import Navbar from '@/modules/Navbar';
import Sidebar from '@/modules/Sidebar';
import { StyledLayout, StyledMain } from './styled';
import Scrollbar from '@/modules/ui/Scrollbar';
import MobileNav from '@/modules/MobileNav';
import Scrollbars from 'react-custom-scrollbars-2';
import { useRouter } from 'next/router';
import SuspenseSpinner from '@/modules/ui/SuspenseSpinner';
import { TabletOnly } from '@/modules/ui/MediaQuery';

interface IPrimaryProps {
  children?: React.ReactNode;
}

const Primary: React.FC<IPrimaryProps> = (props) => {
  const router = useRouter();
  const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      scrollbarRef.current?.scrollToTop();
    };

    router.events.on(`routeChangeComplete`, handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off(`routeChangeComplete`, handleRouteChange);
    };
  }, []);

  return (
    <Scrollbar
      ref={scrollbarRef}
      style={{ height: `100vh` }}
      thumbColor="var(--color-gray)"
    >
      <StyledLayout>
        <Sidebar />
        <Navbar />
        <StyledMain>
          <Suspense fallback={<SuspenseSpinner />}>{props.children}</Suspense>
        </StyledMain>
        <TabletOnly>
          <MobileNav />
        </TabletOnly>
      </StyledLayout>
    </Scrollbar>
  );
};

export default Primary;
