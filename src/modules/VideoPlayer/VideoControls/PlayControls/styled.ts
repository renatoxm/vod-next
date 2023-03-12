import { device } from '@/const/cssMedia';
import Row from '@/modules/ui/Row';
import styled from 'styled-components';

export const StyledPlayControls = styled(Row)`
  gap: 15px;

  @media ${device.tablet} {
    gap: 3px;
  }

  & button {
    font-size: 4.2rem;

    @media ${device.tablet} {
      font-size: 2.8rem;
    }
  }
`;
