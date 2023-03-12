import React from 'react';
import { StyledBlur } from './styled';

interface IBlurProps {
  children?: React.ReactNode;
  color?: string;
}

const Blur: React.FC<IBlurProps> = (props) => {
  return <StyledBlur>{props.children}</StyledBlur>;
};

export default Blur;
