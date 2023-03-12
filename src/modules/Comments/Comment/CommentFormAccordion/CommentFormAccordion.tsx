import useAccordion from '@/lib/hooks/useAccordion';
import Spacer from '@/modules/ui/Spacer';
import React from 'react';
import { animated as a } from 'react-spring';
import CommentAddForm from '../CommentAddForm';

interface ICommentFormAccordionProps {
  children?: React.ReactNode;
  isOpen: boolean;
  id: string;
  onSubmit: VoidFunction;
}

const CommentFormAccordion: React.FC<ICommentFormAccordionProps> = ({
  isOpen,
  id,
  onSubmit,
}) => {
  const { style, ref } = useAccordion({
    isOpen,
    duration: 100,
  });

  return (
    <a.div style={style}>
      <div ref={ref}>
        <Spacer vertical={16} />
        <CommentAddForm parentId={id} onSubmit={onSubmit} />
      </div>
    </a.div>
  );
};

export default CommentFormAccordion;
