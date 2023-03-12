import Button from '@/modules/ui/Button';
import IconWrapper from '@/modules/ui/IconWrapper';
import Row from '@/modules/ui/Row';
import React from 'react';
import { StyledTabsScroller } from './styled';

interface ITabsScrollerProps {
  children?: React.ReactNode;
  parentRef: React.RefObject<HTMLDivElement>;
}

const TabsScroller: React.FC<ITabsScrollerProps> = ({ parentRef }) => {
  const scrollLeft = () => {
    parentRef.current!.scrollLeft -= 150;
  };

  const scrollRight = () => {
    parentRef.current!.scrollLeft += 150;
  };

  return (
    <StyledTabsScroller>
      <Row justify="flex-end" gap={2}>
        <Button
          title="Scroll to left"
          theme="text"
          onClick={scrollLeft}
          fontSize={15}
        >
          <IconWrapper icon="ArrowBackIosNewOutlined" />
        </Button>
        <Button
          title="Scroll to right"
          theme="text"
          onClick={scrollRight}
          fontSize={15}
        >
          <IconWrapper icon="ArrowForwardIosOutlined" />
        </Button>
      </Row>
    </StyledTabsScroller>
  );
};

export default React.memo(TabsScroller);
