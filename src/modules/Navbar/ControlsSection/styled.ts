import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledControlsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;
  color: var(--color-gray);
  font-size: 2.4rem;

  @media ${device.laptop} {
    gap: 1em;
  }
`;
