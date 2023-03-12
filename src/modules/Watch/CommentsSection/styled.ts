import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledCommentsSection = styled.section`
  grid-area: comments;
  padding: 0 var(--container-padding);

  @media ${device.laptop} {
    padding: 0;
  }
`;

export const StyledCommentBlock = styled.div`
  @media ${device.laptop} {
    padding: 0 3em;
  }
`;
