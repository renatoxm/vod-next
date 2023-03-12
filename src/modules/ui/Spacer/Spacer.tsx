import React from 'react';
import { StyledSpacer } from './styled';

interface ISpacerProps {
  children?: React.ReactNode;
  vertical?: number;
  horizontal?: number;
}

const Spacer: React.FC<ISpacerProps> = ({ vertical = 0, horizontal = 0 }) => {
  return (
    <StyledSpacer
      style={{
        [`--spacer-v-size` as string]: `${vertical}px`,
        [`--spacer-h-size` as string]: `${horizontal}px`,
      }}
    />
  );
};

export default Spacer;
