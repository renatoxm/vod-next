import { useToggle } from '@/lib/hooks/useToggle';
import Button from '@/modules/ui/Button';
import IconWrapper from '@/modules/ui/IconWrapper';
import Row from '@/modules/ui/Row';
import Spacer from '@/modules/ui/Spacer';
import { IComment } from '@/types/Comment';
import React from 'react';
import RepliesAccordion from '../RepliesAccordion';

interface ICommentRepliesProps {
  children?: React.ReactNode;
  totalReplies: number;
  replies: IComment[];
}

const CommentReplies: React.FC<ICommentRepliesProps> = ({
  totalReplies,
  replies,
}) => {
  const [showReplies, toggleReplies] = useToggle();

  return (
    <div>
      <Spacer vertical={8} />
      <Button theme="text" onClick={toggleReplies}>
        <Row gap={7}>
          <span>{showReplies ? `Hide` : `View`}</span>
          <span>{totalReplies || replies.length}</span>
          <span>repl{replies.length === 1 ? `y` : `ies`}</span>
          {showReplies ? (
            <IconWrapper icon="ExpandLessOutlined" size={19} />
          ) : (
            <IconWrapper icon="ExpandMoreOutlined" size={19} />
          )}
        </Row>
      </Button>
      <RepliesAccordion isOpen={showReplies} comments={replies} />
    </div>
  );
};

export default CommentReplies;
