import React from 'react';

import { StyledPlayControls } from './styled';
import {
  usePlayerAPI,
  usePlayerPlaying,
  usePlayerRefs,
} from '@/lib/providers/player-api';
import IconWrapper from '@/modules/ui/IconWrapper';
import {
  useCanPlayNext,
  usePlaylistAPI,
  usePlaylistIndex,
} from '@/lib/providers/playlist-api';
import Button from '@/modules/ui/Button';

interface IPlayControlsProps {
  children?: React.ReactNode;
}

const PlayControls: React.FC<IPlayControlsProps> = () => {
  const { togglePlaying } = usePlayerAPI();
  const isPlaying = usePlayerPlaying();

  const { video } = usePlayerRefs();
  const { playNext, playPrev } = usePlaylistAPI();
  const canPlayNext = useCanPlayNext();
  const canPlayPrev = usePlaylistIndex() !== 0;

  const onPlayNext = () => {
    video.current?.pause();
    playNext();
  };

  const onPlayPrev = () => {
    video.current?.pause();
    playPrev();
  };

  return (
    <StyledPlayControls>
      {canPlayPrev && (
        <Button
          data-testid="prev-button"
          title="Play previous"
          theme="text"
          onClick={onPlayPrev}
        >
          <IconWrapper icon="SkipPreviousOutlined" />
        </Button>
      )}
      <Button
        data-testid="play-button"
        title={isPlaying ? `Pause` : `Play`}
        theme="text"
        onClick={togglePlaying}
      >
        {isPlaying ? (
          <IconWrapper icon="PauseOutlined" />
        ) : (
          <IconWrapper icon="PlayArrow" />
        )}
      </Button>
      {canPlayNext && (
        <Button
          data-testid="next-button"
          title="Play next"
          theme="text"
          onClick={onPlayNext}
        >
          <IconWrapper icon="SkipNextOutlined" />
        </Button>
      )}
    </StyledPlayControls>
  );
};

export default PlayControls;
