import { isNumber } from 'lodash';
import React from 'react';
import { StyledRow } from './styled';

export type RowDirection = 'row' | 'column';
export type RowAlign =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
export type RowJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

interface IRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  align?: RowAlign;
  justify?: RowJustify;
  direction?: RowDirection;
  gap?: number | string;
}

const Row: React.FC<IRowProps> = ({
  children,
  align = `center`,
  justify = `flex-start`,
  direction = `row`,
  gap = 0,
  style,
  ...props
}) => {
  return (
    <StyledRow
      style={{
        ...style,
        [`--row-align` as string]: align,
        [`--row-justify` as string]: justify,
        [`--row-direction` as string]: direction,
        [`--row-gap` as string]: isNumber(gap) ? `${gap}px` : gap,
      }}
      {...props}
    >
      {children}
    </StyledRow>
  );
};

export default Row;
