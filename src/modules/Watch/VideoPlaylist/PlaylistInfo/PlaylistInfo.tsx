import {
  usePlaylistIndex,
  usePlaylistLength,
} from '@/lib/providers/playlist-api';
import IconWrapper from '@/modules/ui/IconWrapper';
import Row from '@/modules/ui/Row';
import Spacer from '@/modules/ui/Spacer';
import Text from '@/modules/ui/Text';
import React from 'react';

interface IPlaylistInfoProps {
  children?: React.ReactNode;
}

const PlaylistInfo: React.FC<IPlaylistInfoProps> = (props) => {
  const collectionLength = usePlaylistLength();
  const currentIndex = usePlaylistIndex();

  return (
    <>
      <Text size={15} weight={`bold`} color="var(--color-light)">
        Playlist
      </Text>
      <Spacer vertical={8} />
      <Row gap={3}>
        <IconWrapper
          color="var(--color-grayLight)"
          icon="LockOutlined"
          size={12}
        />
        <Text weight="regular" size={12}>
          Private
        </Text>
        <Text size={12} style={{ marginLeft: 10 }}>
          {currentIndex + 1} / {collectionLength}
        </Text>
      </Row>
    </>
  );
};

export default PlaylistInfo;
