import React, { forwardRef, InputHTMLAttributes } from 'react';
import { baseRem } from '@/styles/globalStyles';
import IconWrapper from '../IconWrapper';
import { IconName } from '../IconWrapper/IconWrapper';
import { StyledIconWrap, StyledInput, StyledInputWrap } from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  iconLeft?: IconName;
  padLeft?: number;
  padRight?: number;
  theme?: 'primary' | 'underline';
}

type Ref = HTMLInputElement;

// trunk-ignore(eslint/react/display-name)
const Input = forwardRef<Ref, IInputProps>(
  (
    { iconLeft, padLeft = 25, padRight = 25, theme = `primary`, ...props },
    ref,
  ) => {
    return (
      <StyledInputWrap
        style={{
          [`--padding-left-default` as string]: `${padLeft / baseRem}rem`,
          [`--padding-right-default` as string]: `${padRight / baseRem}rem`,
          [`--border-radius` as string]: theme === `primary` ? `.6em` : 0,
          [`--border-bottom` as string]:
            theme === `primary` ? `none` : `1px solid var(--color-gray)`,
          [`--padding-left-resulted` as string]: `${
            !!iconLeft
              ? `calc(var(--padding-left-default) + var(--icon-left-size) + var(--icon-left-padding))`
              : `var(--padding-left-default)`
          }`,
        }}
      >
        {iconLeft && (
          <StyledIconWrap>
            <IconWrapper icon={iconLeft} />
          </StyledIconWrap>
        )}
        <StyledInput {...props} ref={ref} />
      </StyledInputWrap>
    );
  },
);

Input.displayName = `Input`;

export default Input;
