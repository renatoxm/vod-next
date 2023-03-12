import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledLayout = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-areas:
      'sidebar navbar'
      'sidebar content';
    grid-template-rows: var(--navbar-height) 1fr;
    grid-auto-columns: auto minmax(0, 1fr);
    column-gap: var(--layout-col-gap);
    row-gap: var(--layout-row-gap);
    padding-right: 30px;
  }
`;

export const StyledMain = styled.main`
  grid-area: content;
  padding-bottom: var(--content-padding-bottom);
  width: 100%;
  max-width: 1754px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  /* overflow-x: hidden; */
`;
