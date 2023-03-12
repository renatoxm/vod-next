import { ICommentThread } from '@/types/Comment';
import React from 'react';
import Comment from '../Comment';

import { sortCommentsByDate } from '@/lib/utils/sortCommentsByDate';
import CommentReplies from '../CommentReplies';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';

interface ICommentsThreadProps {
  children?: React.ReactNode;
  thread: ICommentThread;
}

export const CommentMargin = 40;

const CommentsThread: React.FC<ICommentsThreadProps> = ({ thread }) => {
  const {
    snippet: { totalReplyCount, canReply, isPublic, topLevelComment },
    id,
    replies,
  } = thread;
  const { commentsStore } = useStore();

  if (!isPublic) return null;

  const localReplies = commentsStore.comments.filter(
    (comm) => comm.snippet.parentId === id,
  );
  const repliesList = sortCommentsByDate([
    ...(!!replies ? replies.comments : []),
    ...localReplies,
  ]);

  return (
    <Comment
      isParent
      comment={topLevelComment}
      canReply={canReply}
      margin={CommentMargin}
    >
      {repliesList.length > 0 && (
        <CommentReplies totalReplies={totalReplyCount} replies={repliesList} />
      )}
    </Comment>
  );
};

export default observer(CommentsThread);
