import useAccordion from '@/lib/hooks/useAccordion';
import { IComment } from '@/types/Comment';
import React from 'react';

import { animated as a } from 'react-spring';
import CommentsList from '../CommentsList';

interface IRepliesAccordionProps {
  children?: React.ReactNode;
  isOpen: boolean;
  comments: IComment[];
}

const RepliesAccordion: React.FC<IRepliesAccordionProps> = ({
  isOpen,
  comments,
}) => {
  const { ref, style } = useAccordion({
    isOpen,
    duration: 150,
  });

  return (
    <a.div style={style}>
      <div ref={ref}>
        <CommentsList comments={comments} />
      </div>
    </a.div>
  );
};

export default React.memo(RepliesAccordion);
