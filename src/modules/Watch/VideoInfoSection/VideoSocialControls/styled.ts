import { device } from '@/const/cssMedia';
import styled from 'styled-components';
import Row from '../../../ui/Row';

export const StyledSocialControls = styled(Row)`
  justify-content: space-between;

  @media ${device.laptop} {
    justify-content: flex-start;
  }

  & > button {
    padding: 0;
    background: none;
    border: none;
    color: var(--color-light);
    font-size: 2.6rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    cursor: pointer;

    &:first-of-type {
      font-size: 2rem;

      & > p {
        font-weight: 600;
      }
    }
  }
`;
