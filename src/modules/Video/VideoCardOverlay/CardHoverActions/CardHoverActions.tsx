import React from 'react';
import ControlButton from '../ControlButton';

import { useStore } from '@/lib/providers/GlobalStoreProvider';
import { observer } from 'mobx-react-lite';

interface ICardHoverActionsProps {
  children?: React.ReactNode;
  id: string;
}

const CardHoverActions: React.FC<ICardHoverActionsProps> = ({ id }) => {
  const { playlistStore } = useStore();
  const { collection, addVideo, removeVideo } = playlistStore;

  const isInPlaylist = collection.includes(id);

  return (
    <ControlButton
      text={isInPlaylist ? `Remove from playlist` : `Add to playlist`}
      onClick={() => (isInPlaylist ? removeVideo(id) : addVideo(id))}
      icon={isInPlaylist ? `PlaylistRemove` : `PlaylistAdd`}
    />
  );
};

export default observer(CardHoverActions);
