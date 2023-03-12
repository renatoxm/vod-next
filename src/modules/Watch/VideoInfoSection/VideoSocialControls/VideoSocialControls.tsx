import IconButton from '@/modules/ui/IconButton';
import React from 'react';
import VideoLike from '../VideoLike';
import VideoPlaylistButton from '../VideoPlaylistButton';
import { StyledSocialControls } from './styled';

interface IVideoSocialControlsProps {
  children?: React.ReactNode;
  likes: number;
}

const VideoSocialControls: React.FC<IVideoSocialControlsProps> = ({
  likes,
}) => {
  return (
    <StyledSocialControls gap={`3.6em`}>
      <VideoLike likesCount={likes} />
      <VideoPlaylistButton />
      <IconButton
        title="Not Implemented"
        theme="text"
        icon="ShareOutlined"
        size={26}
      />
      <IconButton
        title="Not Implemented"
        theme="text"
        icon="MoreHorizOutlined"
        size={26}
      />
    </StyledSocialControls>
  );
};

export default VideoSocialControls;
