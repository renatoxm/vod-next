import React from 'react';

import { StyledLikeButton } from './styled';
import Text from '@/modules/ui/Text';
import { intToString } from '@/lib/utils/intToString';
import { useRouter } from 'next/router';
import IconWrapper from '@/modules/ui/IconWrapper';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';

interface IVideoLikeProps {
  children?: React.ReactNode;
  likesCount: number;
}

const VideoLike: React.FC<IVideoLikeProps> = ({ likesCount }) => {
  const router = useRouter();
  const { likesStore } = useStore();
  const { likedIds, toggleLike } = likesStore;

  const videoId = router.query.video_id as string;

  const isVideoLiked = likedIds.includes(videoId as string);

  return (
    <StyledLikeButton
      style={{
        [`--like-button-color` as string]: isVideoLiked
          ? `red`
          : `var(--color-light)`,
      }}
      onClick={() => toggleLike(videoId as string)}
    >
      <IconWrapper icon="ThumbUpOutlined" />
      <Text size={16}>{intToString(likesCount + (isVideoLiked ? 1 : 0))}</Text>
    </StyledLikeButton>
  );
};

export default observer(VideoLike);
