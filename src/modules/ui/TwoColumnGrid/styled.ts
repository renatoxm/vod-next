import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledTwoColumnGrid = styled.div`
  position: relative;

  @media ${device.laptop} {
    display: grid;
    gap: 30px;
    grid-template-columns: var(--first-col-width) var(--second-col-width);
  }
`;
