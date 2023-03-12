import { usePlayerRefs } from '@/lib/providers/player-api';
import _ from 'lodash';
import React, { useEffect, useRef, VideoHTMLAttributes } from 'react';
import { StyledVideoPlayer } from './styled';
import VideoControls from './VideoControls';
import VideoElement from './VideoElement';

export interface IVideoPlayerProps
  extends VideoHTMLAttributes<HTMLVideoElement> {
  children?: React.ReactNode;
}

type ExitFullscreen = typeof document.exitFullscreen;
type RequestFullscreen = typeof document.documentElement.requestFullscreen;

declare global {
  interface Document {
    webkitExitFullscreen: ExitFullscreen;
    mozCancelFullScreen: ExitFullscreen;
    msExitFullscreen: ExitFullscreen;
    mozFullScreenElement: any;
    webkitFullscreenElement: any;
    msFullscreenElement: any;
  }

  interface HTMLElement {
    webkitRequestFullscreen: RequestFullscreen;
    mozRequestFullScreen: RequestFullscreen;
    msRequestFullscreen: RequestFullscreen;
  }
}

const VideoPlayer: React.FC<IVideoPlayerProps> = (props) => {
  const { container, video } = usePlayerRefs();
  const mouseMoveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!video.current || !container.current) return;
    const videoEl = video.current;

    const mouseMoveHandle = () => {
      if (mouseMoveTimeout.current) {
        clearTimeout(mouseMoveTimeout.current);
      }

      mouseMoveTimeout.current = setTimeout(() => {
        videoEl.style.setProperty(`--cursor-type`, `none`);
        container.current?.style.setProperty(
          `--controls-position`,
          `calc(100% * -1)`,
        );
      }, 3000);

      videoEl.style.setProperty(`--cursor-type`, `inherit`);
      container.current?.style.setProperty(`--controls-position`, `0`);
    };

    videoEl.addEventListener(`mousemove`, mouseMoveHandle);

    return () => {
      videoEl.removeEventListener(`mousemove`, mouseMoveHandle);
    };
  }, []);

  return (
    <StyledVideoPlayer ref={container}>
      <VideoElement {...props} />
      <VideoControls />
    </StyledVideoPlayer>
  );
};

export default VideoPlayer;
