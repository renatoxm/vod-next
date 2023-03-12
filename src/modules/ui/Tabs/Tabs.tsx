import { Tab } from '@/lib/hooks/useTabs';
import useIsOverflowing from '@/lib/hooks/useIsOverflowing';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { easings, useSpring, a } from 'react-spring';
import {
  StyledNav,
  StyledNavWrapper,
  StyledUnderline,
  StyledUnderlineThumb,
} from './styled';
import TabComponent from './Tab';
import TabsScroller from './TabsScroller';

interface ITabsProps {
  children?: React.ReactNode;
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: number) => void;
}

const AnimatedUnderlineThumb = a(StyledUnderlineThumb);

const Tabs: React.FC<ITabsProps> = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}) => {
  const [selectedRect, setSelectedRect] = useState<DOMRect | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();
  const isOverflowing = useIsOverflowing(navRef);

  useEffect(() => {
    if (!navRef.current) return;

    const rect = navRef.current
      .querySelector(`button[data-tabindex="${selectedTabIndex}"]`)
      ?.getBoundingClientRect();
    setSelectedRect(rect ?? null);
  }, [selectedTabIndex]);

  // const onSelectTab = (i: number) => {
  //   setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
  // };

  const onSelectTab: React.MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    const element = e.target as HTMLElement;
    if (element.getAttribute(`data-role`) !== `tab`) return;

    const index = Number(element.getAttribute(`data-tabindex`));
    setSelectedTab(index);
  };

  const underlineStyles = useSpring({
    to:
      selectedRect && navRect
        ? {
            width: selectedRect.width * 0.8,
            transform: `translateX(calc(${
              selectedRect.left -
              navRect.left +
              (navRef.current?.scrollLeft ?? 0)
            }px + 10%))`,
            opacity: 1,
          }
        : { opacity: 0 },
    config: {
      duration: 150,
      easing: easings.easeOutCubic,
    },
  });

  return (
    <StyledNavWrapper>
      <StyledNav
        ref={navRef}
        onClick={onSelectTab}
        style={{
          [`--tabs-pad-right` as string]: isOverflowing ? `6rem` : 0,
        }}
      >
        {tabs.map((item, i) => {
          return (
            <TabComponent
              key={i}
              index={i}
              label={item.label}
              isActive={selectedTabIndex === i}
            />
          );
        })}
        <AnimatedUnderlineThumb style={underlineStyles} />
      </StyledNav>
      <StyledUnderline />
      {isOverflowing && <TabsScroller parentRef={navRef} />}
    </StyledNavWrapper>
  );
};

export default Tabs;
