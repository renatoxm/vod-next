import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledCategoryButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  /* width: 152px;
  height: 140px; */
  aspect-ratio: 1 / 1;
  background: var(--color-background-blue);
  color: var(--color-light);
  cursor: pointer;
  transition: all 0.2s;

  @media ${device.laptop} {
    gap: 18px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
