import React, { useState } from 'react';

import { StyledVolumeProgress, StyleProgressWrapper } from './styled';
import {
  usePlayerAPI,
  usePlayerMuted,
  usePlayerRefs,
  usePlayerVolume,
} from '@/lib/providers/player-api';
import Row from '../../ui/Row';
import useAccordion from '@/lib/hooks/useAccordion';
import { animated } from 'react-spring';
import IconWrapper from '../../ui/IconWrapper';
import Button from '../../ui/Button';

interface IVolumeControlProps {
  children?: React.ReactNode;
}

const AnimatedRow = animated(Row);

const VolumeControl: React.FC<IVolumeControlProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleMute, updateVolume } = usePlayerAPI();
  const isMuted = usePlayerMuted();
  const volume = usePlayerVolume();

  const { ref, style } = useAccordion({
    isOpen,
    dimensionType: `width`,
  });

  const diplayingValue = isMuted ? 0 : volume;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    updateVolume(Number(e.target.value));
  };

  return (
    <Row
      align="stretch"
      gap={5}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button
        data-testid="mute-button"
        theme="text"
        onClick={toggleMute}
        title={isMuted ? `Unmute` : `Mute`}
      >
        {isMuted ? (
          <IconWrapper icon="VolumeOffOutlined" />
        ) : (
          <IconWrapper icon="VolumeUpOutlined" />
        )}
      </Button>
      <AnimatedRow style={style}>
        <StyleProgressWrapper ref={ref}>
          <StyledVolumeProgress
            value={diplayingValue}
            onChange={handleChange}
            type={`range`}
            min={0}
            max={100}
            style={{
              [`--progress-gradient` as string]: `
                linear-gradient(to right, var(--color-light) 0%, var(--color-light) ${diplayingValue}%, var(--color-gray) ${diplayingValue}%, var(--color-gray) 100%)
              `,
            }}
          />
        </StyleProgressWrapper>
      </AnimatedRow>
    </Row>
  );
};

export default VolumeControl;
