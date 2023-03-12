import Spacer from '@/modules/ui/Spacer';
import { IComment } from '@/types/Comment';
import React from 'react';
import Comment from '../Comment/Comment';
import { CommentMargin } from '../CommentsThread/CommentsThread';

interface ICommentsListProps {
  children?: React.ReactNode;
  comments: IComment[];
}

const CommentsList: React.FC<ICommentsListProps> = ({ comments }) => {
  return (
    <>
      <Spacer vertical={12} />
      {comments.map((c) => (
        <Comment key={c.id} margin={CommentMargin / 2} comment={c} />
      ))}
    </>
  );
};

export default React.memo(CommentsList);
