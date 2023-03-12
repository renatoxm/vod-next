import { useSignIn } from '@/lib/hooks/useSignInPush';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { intToString } from '@/lib/utils/intToString';
import Button from '@/modules/ui/Button';
import IconWrapper from '@/modules/ui/IconWrapper';
import Row from '@/modules/ui/Row';
import { observer } from 'mobx-react-lite';
import React from 'react';

export interface ICommentActionsProps {
  children?: React.ReactNode;
  id: string;
  likeCount: number;
  canRate: boolean;
  canReply: boolean;
  showForm: boolean;
  toggleShowForm: VoidFunction;
}

const CommentActions: React.FC<ICommentActionsProps> = ({
  id,
  likeCount,
  canRate,
  canReply,
  showForm,
  toggleShowForm,
}) => {
  const { authStore, commentsStore } = useStore();
  const like = commentsStore.isCommentLiked(id);
  const signIn = useSignIn();

  const likedInfo = (() => {
    if (!like)
      return {
        isLiked: false,
        isDisliked: false,
      };

    const isLiked = like.liked === true;
    const isDisliked = like.liked === false;

    return {
      isLiked,
      isDisliked,
    };
  })();

  return (
    <Row gap={22}>
      <Button
        theme="text"
        disabled={!canRate}
        data-testid="like-button"
        onClick={() => commentsStore.toggleLike(id, true)}
        title={likedInfo.isLiked ? `Remove Like` : `Like`}
        fontColor={likedInfo.isLiked ? `red` : `inherit`}
      >
        <Row gap={8}>
          <IconWrapper size={15} icon="ThumbUpOutlined" />
          {intToString(likeCount + (likedInfo.isLiked ? 1 : 0))}
        </Row>
      </Button>
      <Row gap={10}>
        <Button
          theme="text"
          data-testid="dislike-button"
          disabled={!canRate}
          onClick={() => commentsStore.toggleLike(id, false)}
          title={likedInfo.isDisliked ? `Remove Dislike` : `Dislike`}
          fontColor={likedInfo.isDisliked ? `red` : `inherit`}
        >
          <IconWrapper size={15} icon="ThumbDownOutlined" />
        </Button>
        {canReply && (
          <Button
            theme="text"
            onClick={!!authStore.user ? toggleShowForm : signIn.push}
          >
            {showForm ? `Cancel` : `Reply`}
          </Button>
        )}
      </Row>
    </Row>
  );
};

export default observer(CommentActions);
