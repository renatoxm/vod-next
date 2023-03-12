import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledContainer = styled.section`
  padding: var(--container-padding);
  border-radius: 1rem;

  @media ${device.laptop} {
    background-color: var(--color-background-blue);
  }
`;
