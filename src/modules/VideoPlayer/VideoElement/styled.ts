import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledVideoElement = styled.video`
  max-height: var(--content-full-height);
  height: 100%;
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: var(--cursor-type);

  @media ${device.laptop} {
    border-radius: 30px;
  }

  @media all and (display-mode: fullscreen) {
    max-height: unset;
    border-radius: 10px;
  }
`;
