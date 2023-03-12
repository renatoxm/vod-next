import { IComment } from '@/types/Comment';
import React from 'react';
import Avatar from '../../ui/Avatar';
import {
  CommentAvatarArea,
  CommentContentArea,
  StyledComment,
  StyledCommentText,
} from './styled';

import Spacer from '../../ui/Spacer';
import { isNumber } from 'lodash';
import CommentAuthor from './CommentAuthor';
import CommentInteractive from './CommentInteractive';

interface ICommentProps {
  children?: React.ReactNode;
  comment: IComment;
  canReply?: boolean;
  isParent?: boolean;
  margin?: number | string;
}

const Comment: React.FC<ICommentProps> = ({
  comment,
  canReply = true,
  margin = 0,
  children,
}) => {
  const {
    id,
    snippet: {
      authorDisplayName,
      publishedAt,
      likeCount,
      canRate,
      parentId,
      textDisplay,
    },
  } = comment;

  return (
    <StyledComment
      style={{
        [`--comment-margin` as string]: isNumber(margin)
          ? `${margin}px`
          : margin,
      }}
    >
      <CommentAvatarArea>
        <Avatar size={33} name={authorDisplayName} />
      </CommentAvatarArea>

      <CommentAuthor authorName={authorDisplayName} publishedAt={publishedAt} />

      <CommentContentArea>
        <Spacer vertical={11} />

        <StyledCommentText
          size={13}
          color={`var(--color-light)`}
          weight="thin"
          dangerouslySetInnerHTML={{
            __html: textDisplay,
          }}
        />

        <Spacer vertical={16} />
        <CommentInteractive
          id={id}
          likeCount={likeCount}
          canRate={canRate}
          canReply={canReply}
          parentId={parentId}
        />
        {children}
      </CommentContentArea>
    </StyledComment>
  );
};

export default Comment;
