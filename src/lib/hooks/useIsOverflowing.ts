import { useEffect, useState } from 'react';

const useIsOverflowing = <T extends HTMLElement | null>(
  ref: React.MutableRefObject<T>,
  callback?: (isOverflowing: boolean) => void,
) => {
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const { current } = ref;
    const { clientWidth, scrollWidth } = current;

    const trigger = () => {
      const hasOverflow = scrollWidth > clientWidth;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};

export default useIsOverflowing;
