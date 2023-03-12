import React from 'react';
import BoringAvatar from 'boring-avatars';
import { StyledAvatarWrap } from './styled';
import { baseRem } from '@/styles/globalStyles';

interface IAvatarProps {
  children?: React.ReactNode;
  name: string;
  size?: number;
}

const Avatar: React.FC<IAvatarProps> = ({ name, size = 26 }) => {
  return (
    <StyledAvatarWrap
      style={{
        [`--avatar-size` as string]: `${size / baseRem}rem`,
      }}
    >
      <BoringAvatar
        size={size}
        name={name}
        variant="bauhaus"
        colors={[`#92A1C6`, `#146A7C`, `#F0AB3D`, `#C271B4`, `#C20D90`]}
        square
      />
    </StyledAvatarWrap>
  );
};

export default Avatar;
