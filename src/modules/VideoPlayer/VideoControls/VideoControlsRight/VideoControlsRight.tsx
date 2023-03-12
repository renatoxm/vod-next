import React from 'react';

import { StyledVideoControlsRight } from './styled';
import VolumeControl from '@/modules/VideoPlayer/VolumeControl';
import { usePlayerAPI, usePlayerFullscreen } from '@/lib/providers/player-api';
import IconWrapper from '@/modules/ui/IconWrapper';
import Button from '@/modules/ui/Button';
import { LaptopOnly } from '@/modules/ui/MediaQuery';

interface IVideoControlsRightProps {
  children?: React.ReactNode;
}

const VideoControlsRight: React.FC<IVideoControlsRightProps> = () => {
  const { toggleFullscreen } = usePlayerAPI();
  const isFullscreen = usePlayerFullscreen();

  return (
    <StyledVideoControlsRight gap={`2.2em`}>
      <LaptopOnly>
        <VolumeControl />
      </LaptopOnly>
      <LaptopOnly>
        <Button theme="text" title="Not Implemented">
          <IconWrapper icon="SettingsOutlined" />
        </Button>
      </LaptopOnly>
      <Button
        theme="text"
        data-testid="fullscreen-button"
        onClick={toggleFullscreen}
        title={isFullscreen ? `Exit Fullscreen` : `Fullscreen`}
      >
        {isFullscreen ? (
          <IconWrapper icon="FullscreenExit" />
        ) : (
          <IconWrapper icon="FullscreenOutlined" />
        )}
      </Button>
    </StyledVideoControlsRight>
  );
};

export default VideoControlsRight;
