import React, { VideoHTMLAttributes } from 'react';
import {
  usePlayerAPI,
  usePlayerRefs,
  usePlayerMuted,
} from '@/lib/providers/player-api';
import { usePlaylistAPI } from '@/lib/providers/playlist-api';
import { StyledVideoElement } from './styled';

interface IVideoElementProps extends VideoHTMLAttributes<HTMLVideoElement> {
  children?: React.ReactNode;
}

const VideoElement: React.FC<IVideoElementProps> = (props) => {
  const { video } = usePlayerRefs();
  const { togglePlaying } = usePlayerAPI();
  const isMuted = usePlayerMuted();

  const { playNext } = usePlaylistAPI();

  const handleEnded = () => {
    video.current?.pause();
    playNext();
  };

  return (
    <StyledVideoElement
      data-testid="video-element"
      playsInline
      muted={isMuted}
      ref={video}
      onEnded={handleEnded}
      onClick={togglePlaying}
      preload={`auto`}
      {...props}
      controls={false}
    >
      <source src={props.src} type="video/mp4" />
    </StyledVideoElement>
  );
};

export default VideoElement;
