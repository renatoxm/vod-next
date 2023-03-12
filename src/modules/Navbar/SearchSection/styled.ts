import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledSearchSection = styled.div`
  display: none;
  align-items: center;
  gap: 2.5em;

  @media ${device.laptop} {
    display: flex;
    flex: 0 1 520px;
  }

  @media ${device.laptopL} {
    flex: 0 1 720px;
  }
`;
