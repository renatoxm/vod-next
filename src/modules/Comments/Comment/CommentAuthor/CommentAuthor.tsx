import { getRelativeDate } from '@/lib/utils/getRelativeDate';
import Row from '@/modules/ui/Row';
import Spacer from '@/modules/ui/Spacer';
import Text from '@/modules/ui/Text';
import React from 'react';
import { CommentAuthorArea } from '../styled';

interface ICommentAuthorProps {
  children?: React.ReactNode;
  authorName: string;
  publishedAt: string;
}

const CommentAuthor: React.FC<ICommentAuthorProps> = ({
  authorName,
  publishedAt,
}) => {
  return (
    <CommentAuthorArea>
      <Spacer vertical={5} />

      <Row gap={16}>
        <Text size={13} color={`var(--color-light)`} weight="bold">
          {authorName}
        </Text>
        <Text size={11} weight="regular">
          {getRelativeDate(publishedAt)}
        </Text>
      </Row>
    </CommentAuthorArea>
  );
};

export default CommentAuthor;
