import React from 'react';
import { animated as a } from 'react-spring';

import useAccordion from '@/lib/hooks/useAccordion';
import { useToggle } from '@/lib/hooks/useToggle';

import {
  StyledDescWrapper,
  StyledMoreButton,
  StyledVideoDescription,
} from './styled';
import Spacer from '@/modules/ui/Spacer';
import IconWrapper from '@/modules/ui/IconWrapper';
import { LaptopOnly, TabletOnly } from '@/modules/ui/MediaQuery';

interface IVideoDescriptionProps {
  children?: React.ReactNode;
  desc: string;
}

const VideoDescription: React.FC<IVideoDescriptionProps> = ({ desc }) => {
  const [isOpen, setIsOpen] = useToggle();
  const { ref, style } = useAccordion({ isOpen });

  const [previewFirstLine, previewSecondLine, ...restDesc] = desc
    .split(/\r?\n/)
    .filter((element) => element);

  const renderMoreButton = () => (
    <StyledMoreButton onClick={setIsOpen}>
      Show {isOpen ? `Less` : `More`}
      {isOpen ? (
        <IconWrapper icon="ExpandLessOutlined" size={19} />
      ) : (
        <IconWrapper icon="ExpandMoreOutlined" size={19} />
      )}
    </StyledMoreButton>
  );

  return (
    <StyledDescWrapper>
      <LaptopOnly>
        <StyledVideoDescription size={13}>
          {[previewFirstLine, previewSecondLine].join(`\n`)}
        </StyledVideoDescription>
      </LaptopOnly>
      <>
        <a.div style={style}>
          <StyledVideoDescription size={13} ref={ref}>
            <TabletOnly as={`span`}>{desc}</TabletOnly>
            <LaptopOnly as={`span`}>{restDesc.join(`\n`)}</LaptopOnly>
          </StyledVideoDescription>
        </a.div>
      </>
      <Spacer vertical={13} />
      {renderMoreButton()}
    </StyledDescWrapper>
  );
};

export default VideoDescription;
