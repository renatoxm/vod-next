import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledTabsScroller = styled.div`
  display: none;
  position: absolute;
  bottom: 7px;
  right: 0;
  z-index: 20;
  padding-left: 4em;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-background-gray) 40%,
    var(--color-background-gray)
  );

  @media ${device.laptop} {
    display: block;
  }
`;
