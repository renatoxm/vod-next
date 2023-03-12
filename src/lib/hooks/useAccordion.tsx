import { useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ResizeObserver } from '@juggle/resize-observer';
import React from 'react';

interface IAccordionProps {
  isOpen: boolean;
  offset?: number;
  dimensionType?: 'width' | 'height';
  duration?: number;
}

const useAccordion = ({
  isOpen,
  offset = 0,
  dimensionType = `height`,
  duration = 300,
}: IAccordionProps) => {
  const [ref, rect] = useMeasure({ polyfill: ResizeObserver });
  const style = useSpring({
    [dimensionType]: isOpen ? rect[dimensionType] + offset : 0,
    overflow: `hidden`,
    config: {
      duration,
    },
  } as React.CSSProperties);

  return { ref, style };
};

export default useAccordion;
