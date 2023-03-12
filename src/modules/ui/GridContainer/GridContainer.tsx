import React from 'react';
import { StyledGrid } from './styled';

interface IGridContainerProps {
  children?: React.ReactNode;
}

const GridContainer: React.FC<IGridContainerProps> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default GridContainer;
