import React from 'react';
import { StyledSticky } from './styled';

interface IStickyProps {
  children?: React.ReactNode;
  top: number;
}

const Sticky: React.FC<IStickyProps> = (props) => {
  return (
    <StyledSticky
      style={{
        [`--container-sticky-top` as string]: `${props.top}px`,
      }}
    >
      {props.children}
    </StyledSticky>
  );
};

export default Sticky;
