import React, { ComponentPropsWithoutRef } from 'react';
import { StyledTab } from './styled';

interface ITabProps extends ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  label: string;
  index: number;
  isActive: boolean;
}

const Tab = React.forwardRef<HTMLButtonElement, ITabProps>(
  ({ label, index, isActive = false }, ref) => {
    return (
      <StyledTab
        style={{
          [`--tab-font-color-active` as string]: `#FFF`,
          [`--tab-font-color` as string]: isActive
            ? `var(--tab-font-color-active)`
            : `var(--color-gray)`,
        }}
        data-role="tab"
        data-tabindex={index}
        ref={ref}
      >
        {label}
      </StyledTab>
    );
  },
);

Tab.displayName = `Tab`;

export default React.memo(Tab);
