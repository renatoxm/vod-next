import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledVideoSection = styled.section`
  grid-area: video;

  @media ${device.tablet} {
    padding-top: var(--container-padding);
  }
`;
