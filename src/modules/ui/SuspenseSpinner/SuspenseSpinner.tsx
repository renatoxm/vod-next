import React from 'react';
import { StyledSuspenseContainer, StyledSuspenseSpinner } from './styled';

interface ISuspenseSpinnerProps {
  children?: React.ReactNode;
}

const SuspenseSpinner: React.FC<ISuspenseSpinnerProps> = (props) => {
  return (
    <StyledSuspenseContainer>
      <StyledSuspenseSpinner>Loading!!!...</StyledSuspenseSpinner>
    </StyledSuspenseContainer>
  );
};

export default SuspenseSpinner;
