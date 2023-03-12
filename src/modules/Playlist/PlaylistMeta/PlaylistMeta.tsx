import { usePlaylistAPI } from '@/lib/providers/playlist-api';
import { getCalendarDate } from '@/lib/utils/getCalendarDate';
import { LaptopOnly, TabletOnly } from '@/modules/ui/MediaQuery';
import Button from '@/modules/ui/Button';
import IconButton from '@/modules/ui/IconButton';
import IconWrapper from '@/modules/ui/IconWrapper';
import Row from '@/modules/ui/Row';
import Spacer from '@/modules/ui/Spacer';
import Text from '@/modules/ui/Text';
import Title from '@/modules/ui/Title';
import { useRouter } from 'next/router';
import React from 'react';

interface IPlaylistMetaProps {
  children?: React.ReactNode;
  name: string;
  totalVideos: number;
  totalViews: number;
  lastUpdate: string;
  isPrivate: boolean;
  href: string;
}

const PlaylistMeta: React.FC<IPlaylistMetaProps> = ({
  name,
  totalVideos,
  totalViews,
  lastUpdate,
  isPrivate,
  href,
}) => {
  const playlistAPI = usePlaylistAPI();
  const router = useRouter();

  const onShuffleClick = () => {
    playlistAPI.shuffle();
    router.push(href);
  };

  return (
    <>
      <TabletOnly>
        <Row gap={6}>
          <IconWrapper size={24} icon="LockOutlined" />
          <Title size={24}>{name}</Title>
        </Row>
        <Spacer vertical={16} />
        <IconButton
          color="var(--color-grayLight)"
          size={42}
          icon="Shuffle"
          onClick={onShuffleClick}
        />
      </TabletOnly>
      <LaptopOnly>
        <Title size={30}>{name}</Title>
        <Spacer vertical={24} />
        <Text size={14}>
          {totalVideos} {totalVideos > 1 ? `videos` : `video`}
          {` | `}
          {totalViews === 0 ? `No views` : `${totalViews} views`}
          {` | `}
          Updated {getCalendarDate(lastUpdate)}
        </Text>
        <Spacer vertical={27} />
        <Row gap={6}>
          <IconWrapper
            color="var(--color-grayLight)"
            size={23}
            icon="LockOutlined"
          />
          <Text size={14}>{isPrivate ? `Private` : `Public`}</Text>
        </Row>
        <Spacer vertical={22} />
        <Button title="Shuffle" theme="text" hoverable onClick={onShuffleClick}>
          <Row gap={6}>
            <IconWrapper
              color="var(--color-grayLight)"
              size={25}
              icon="Shuffle"
            />
            <Text size={14}>Shuffle</Text>
          </Row>
        </Button>
      </LaptopOnly>
    </>
  );
};

export default PlaylistMeta;
