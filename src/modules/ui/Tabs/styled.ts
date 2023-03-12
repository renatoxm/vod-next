import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
  z-index: 0;
  padding: 0 2rem;

  @media ${device.laptop} {
    padding: 0;
  }
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  /* flex-shrink: 0; */
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 15;
  padding: 0.5rem 0 0.4rem 0;
  gap: 5rem;
  overflow: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  @media ${device.laptop} {
    overflow: hidden;
    padding: 0.5rem var(--tabs-pad-right) 0.4rem 0;
  }
`;

export const StyledUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  height: 2px;
  width: 100%;
  background-color: var(--color-grayDark);
`;

export const StyledUnderlineThumb = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  background-color: red;
`;
