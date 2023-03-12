import React, { ComponentPropsWithoutRef } from 'react';
import { baseRem } from '@/styles/globalStyles';
import { StyledTitle } from './styled';

interface ITitleProps extends ComponentPropsWithoutRef<'h1'> {
  children?: React.ReactNode;
  size?: number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = React.forwardRef<HTMLTitleElement, ITitleProps>(
  ({ size = 24, level = 2, children, style, ...props }, ref) => {
    const tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <StyledTitle
        as={tag}
        style={{
          [`--title-f-size` as string]: `${size / baseRem}rem`,
          ...style,
        }}
        {...props}
        ref={ref}
      >
        {children}
      </StyledTitle>
    );
  },
);

Title.displayName = `Title`;

export default Title;
