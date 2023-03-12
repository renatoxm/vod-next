import Container from '@/modules/ui/Container';
import Spacer from '@/modules/ui/Spacer';
import React, { useState } from 'react';
import Categories from './Categories';
import ExploreCollection from './ExploreCollection';
import { StyledExploreTitle } from './styled';

interface IExploreProps {
  children?: React.ReactNode;
}

const Explore: React.FC<IExploreProps> = (props) => {
  const [activeCategory, setActiveCategory] = useState(`Trending`);

  return (
    <>
      <Categories setActiveCategory={setActiveCategory} />
      <Spacer vertical={30} />
      <Container>
        <StyledExploreTitle>{activeCategory} Videos</StyledExploreTitle>
        <Spacer vertical={30} />
        <ExploreCollection />
      </Container>
    </>
  );
};

export default Explore;
