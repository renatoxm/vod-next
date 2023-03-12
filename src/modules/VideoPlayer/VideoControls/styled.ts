import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const PlayControlsArea = styled.div`
  grid-area: play-controls;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimingsArea = styled.div`
  padding-left: 2.5rem;
  grid-area: timings;

  @media ${device.tablet} {
    padding-left: 0;
  }
`;

export const RightControlsArea = styled.div`
  grid-area: right-controls;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2.5rem;

  @media ${device.tablet} {
    padding-right: 0;
  }
`;

export const VideoProgressArea = styled.div`
  grid-area: video-progress;
`;

export const StyledVideoControls = styled.div`
  --player-controls-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: var(--controls-position, calc(var(--player-controls-height) * -1));
  height: var(--player-controls-height);
  display: grid;
  grid-template-areas:
    'play-controls play-controls'
    'timings right-controls'
    'video-progress video-progress';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto auto;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);

  @media ${device.tablet} {
    --player-controls-height: 7.6rem;
    padding: 0 2.5rem;
    gap: 20px;
    align-items: center;
    grid-template-areas: 'play-controls video-progress timings right-controls';
    grid-template-columns: auto 1fr auto auto;
    grid-template-rows: unset;
  }

  & button {
    background: none;
    border: none;
    color: var(--color-light);
    padding: 0;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const VideoControlsStoryWrapper = styled.div`
  position: relative;
  height: 100vh;

  & ${StyledVideoControls} {
    bottom: 0;
  }
`;
