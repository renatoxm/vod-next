import React from 'react';
import Row from '../../ui/Row';
import Text from '../../ui/Text';
import { StyledCommentBlock, StyledCommentsSection } from './styled';

import { useVideoData } from '@/lib/hooks/useVideoData';
import { thousandsSeparator } from '@/lib/utils/thousandsSeparator';
import CommentsThread from '../../Comments/CommentsThread';
import Spacer from '../../ui/Spacer';
import AddCommentForm from '../../Comments/Comment/CommentAddForm';
import { useVideoId } from '@/lib/hooks/useVideoId';
import { sortCommentsByDate } from '@/lib/utils/sortCommentsByDate';
import SortButton from '../../ui/SortButton';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';

interface ICommentsSectionProps {
  children?: React.ReactNode;
}

const CommentsSection: React.FC<ICommentsSectionProps> = (props) => {
  const data = useVideoData();
  const { commentsStore } = useStore();
  const videoId = useVideoId();

  if (!data) return null;

  if (data.comments.length === 0)
    return (
      <StyledCommentsSection>
        <Text size={17} weight="regular" style={{ textAlign: `center` }}>
          Comments are disabled.
        </Text>
      </StyledCommentsSection>
    );

  const localComments = commentsStore.threads.filter(
    (thread) => thread.snippet.topLevelComment.snippet.videoId === videoId,
  );

  const withLocalComments = sortCommentsByDate([
    ...data.comments,
    ...localComments,
  ]);

  return (
    <StyledCommentsSection>
      <Row gap={85}>
        <Text weight="bold" size={13} color="var(--color-light)">
          {thousandsSeparator(
            data.video.statistics.commentCount + localComments.length,
          )}
          {` `}
          Comments
        </Text>
        <SortButton text="SORT BY" fontSize={13} />
      </Row>
      <Spacer vertical={26} />
      <AddCommentForm />
      <Spacer vertical={43} />
      <StyledCommentBlock>
        {withLocalComments.map((t) => (
          <CommentsThread key={t.id} thread={t} />
        ))}
      </StyledCommentBlock>
    </StyledCommentsSection>
  );
};

export default observer(CommentsSection);
