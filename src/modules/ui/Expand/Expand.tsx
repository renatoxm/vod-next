import React, { ComponentPropsWithoutRef } from 'react';
import { StyledExpand } from './styled';

interface IExpandProps extends ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  flex?: number | string;
}

const Expand: React.FC<IExpandProps> = ({
  children,
  flex = 1,
  style,
  ...props
}) => {
  return (
    <StyledExpand
      style={{
        [`--expand-flex` as string]: flex.toString(),
        ...style,
      }}
      {...props}
    >
      {children}
    </StyledExpand>
  );
};

export default Expand;
