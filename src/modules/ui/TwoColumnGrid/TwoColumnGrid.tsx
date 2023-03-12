import React from 'react';
import { StyledTwoColumnGrid } from './styled';

interface ITwoColumnGridProps {
  children?: React.ReactNode;
  firstCol?: string;
  secondCol?: string;
}

const TwoColumnGrid: React.FC<ITwoColumnGridProps> = ({
  firstCol = `1fr`,
  secondCol = `1fr`,
  children,
}) => {
  return (
    <StyledTwoColumnGrid
      style={{
        [`--first-col-width` as string]: firstCol,
        [`--second-col-width` as string]: secondCol,
      }}
    >
      {children}
    </StyledTwoColumnGrid>
  );
};

export default TwoColumnGrid;
