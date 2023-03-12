import React from 'react';

import VideoCollection from '@/modules/Home/VideoCollection';
import Container from '@/modules/ui/Container';
import Spacer from '@/modules/ui/Spacer';
import HomeTabs from './HomeTabs';

interface IHomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <>
      <HomeTabs />
      <Spacer vertical={25} />
      <Container>
        <VideoCollection />
      </Container>
    </>
  );
};

export default Home;
