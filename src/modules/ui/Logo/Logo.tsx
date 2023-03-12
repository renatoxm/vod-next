import React from 'react';
import { StyledImage } from './styled';

import LogoSvg from './vod_color.png';

interface ILogoProps {
  children?: React.ReactNode;
}

const Logo: React.FC<ILogoProps> = (props) => {
  return <StyledImage loading="eager" src={LogoSvg} alt="vod.io" />;
};

export default Logo;
