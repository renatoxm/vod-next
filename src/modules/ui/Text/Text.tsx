import React, { ComponentPropsWithoutRef } from 'react';
import { baseRem } from '@/styles/globalStyles';
import { StyledText } from './styled';

interface ITextProps extends ComponentPropsWithoutRef<'p'> {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  weight?: keyof typeof TextWeight;
}

const TextWeight = {
  thin: 400,
  regular: 500,
  bold: 600,
  extraBold: 700,
};

// trunk-ignore(eslint/react/display-name)
const Text = React.forwardRef<HTMLParagraphElement, ITextProps>(
  (
    {
      size = 10,
      weight = `thin`,
      color = `var(--color-grayLight)`,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledText
        style={{
          [`--text-f-size` as string]: `${size / baseRem}rem`,
          [`--text-f-weight` as string]: TextWeight[weight],
          [`--text-color` as string]: color,
          ...style,
        }}
        {...props}
        ref={ref}
      >
        {children}
      </StyledText>
    );
  },
);

Text.displayName = `Text`;
export default Text;
