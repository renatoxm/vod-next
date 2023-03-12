import { device } from '@/const/cssMedia';
import styled from 'styled-components';
import Text from '../../ui/Text';

export const StyledComment = styled.div`
  display: grid;
  grid-template-areas:
    'avatar author'
    'content content';
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: 16px;
  align-items: flex-start;
  margin-bottom: var(--comment-margin);

  @media ${device.laptop} {
    grid-template-areas:
      'avatar author'
      'avatar content';
  }

  a {
    text-decoration: none;
    color: var(--color-red);
    font-weight: 500;
    font-variant-numeric: tabular-nums;
  }
`;

export const CommentAvatarArea = styled.div`
  grid-area: avatar;
`;

export const CommentAuthorArea = styled.div`
  grid-area: author;
`;

export const CommentContentArea = styled.div`
  grid-area: content;
`;

export const StyledCommentText = styled(Text)`
  overflow: hidden;
  word-wrap: break-word;
`;
