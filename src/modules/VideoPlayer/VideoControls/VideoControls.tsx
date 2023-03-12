import React from 'react';

import {
  PlayControlsArea,
  RightControlsArea,
  StyledVideoControls,
} from './styled';
import PlayControls from './PlayControls';
import VideoControlsRight from './VideoControlsRight';
import TimingComponents from './TimingComponents';

interface IVideoControlsProps {
  children?: React.ReactNode;
}

const VideoControls: React.FC<IVideoControlsProps> = () => {
  return (
    <StyledVideoControls>
      <PlayControlsArea>
        <PlayControls />
      </PlayControlsArea>

      <TimingComponents />

      <RightControlsArea>
        <VideoControlsRight />
      </RightControlsArea>
    </StyledVideoControls>
  );
};

export default React.memo(VideoControls);
