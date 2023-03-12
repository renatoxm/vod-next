import React from 'react';
import { Scrollbars, ScrollbarProps } from 'react-custom-scrollbars-2';

interface IScrollbarProps extends ScrollbarProps {
  children?: React.ReactNode;
  thumbColor?: string;
}

// trunk-ignore(eslint/react/display-name)
const Scrollbar = React.forwardRef<Scrollbars, IScrollbarProps>(
  ({ thumbColor = `var(--color-grayDark)`, ...props }, ref) => {
    const renderThumb = ({ style, ...props }: any) => {
      const thumbStyle = {
        backgroundColor: thumbColor,
        borderRadius: 6,
        zIndex: 999,
      };
      return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    return (
      <Scrollbars
        ref={ref}
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        universal
        {...props}
      />
    );
  },
);

Scrollbar.displayName = `Scrollbar`;

export default Scrollbar;
