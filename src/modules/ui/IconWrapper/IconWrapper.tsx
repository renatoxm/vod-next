import React, { ComponentPropsWithoutRef } from 'react';
import { StyledIconWrapper } from './styled';
import * as MaterialIcons from '@mui/icons-material';
import { baseRem } from '@/styles/globalStyles';
import { isNumber } from 'lodash';

export type IconName = keyof typeof MaterialIcons;

interface IIconWrapperProps extends ComponentPropsWithoutRef<'span'> {
  children?: React.ReactNode;
  icon: IconName;
  size?: number;
  color?: string;
}

const IconWrapper: React.FC<IIconWrapperProps> = ({
  icon,
  size = `inherit`,
  color = `inherit`,
  style,
  ...props
}) => {
  const Icon = MaterialIcons[icon];
  return (
    <StyledIconWrapper
      style={{
        ...style,
        [`--icon-f-size` as string]: isNumber(size)
          ? `${size / baseRem}rem`
          : size,
        [`--icon-color` as string]: color,
      }}
      {...props}
    >
      <Icon fontSize="inherit" color="inherit" />
    </StyledIconWrapper>
  );
};

export default IconWrapper;
