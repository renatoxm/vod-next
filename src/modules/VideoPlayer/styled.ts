import { device } from '@/const/cssMedia';
import styled from 'styled-components';
import { StyledVideoControls } from './VideoControls/styled';

export const StyledVideoPlayer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: var(--content-full-height);

  @media all and (display-mode: fullscreen) {
    max-height: unset;
    border-radius: 0;
  }

  &:hover {
    & > ${StyledVideoControls} {
      bottom: var(--controls-position, 0);
    }
  }

  @media ${device.laptop} {
    border-radius: 28px;
  }
`;
