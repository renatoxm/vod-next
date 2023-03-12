import { useVideoId } from '@/lib/hooks/useVideoId';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import IconButton from '@/modules/ui/IconButton';
import { observer } from 'mobx-react-lite';
import React from 'react';

interface IVideoPlaylistButtonProps {
  children?: React.ReactNode;
}

const VideoPlaylistButton: React.FC<IVideoPlaylistButtonProps> = (props) => {
  const videoId = useVideoId();
  const { playlistStore } = useStore();
  const { collection, addVideo, removeVideo } = playlistStore;

  const isInPlaylistCollection = collection.includes(videoId);

  const onPlaylistClick = () => {
    if (isInPlaylistCollection) return removeVideo(videoId);
    return addVideo(videoId);
  };

  return (
    <IconButton
      data-testid="add-to-playlist"
      size={26}
      icon={isInPlaylistCollection ? `PlaylistRemove` : `PlaylistAdd`}
      theme="text"
      onClick={onPlaylistClick}
      title={
        isInPlaylistCollection ? `Remove from playlist` : `Add to playlist`
      }
    />
  );
};

export default observer(VideoPlaylistButton);
