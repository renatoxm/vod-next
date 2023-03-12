import { youtubeDurationFormat } from '@/lib/utils/youtubeDuration';
import IconWrapper from '@/modules/ui/IconWrapper';
import Row from '@/modules/ui/Row';
import Spacer from '@/modules/ui/Spacer';
import Text from '@/modules/ui/Text';
import { IVideoPreview } from '@/types/Video';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  StyledThumbDuration,
  StyledIndex,
  StyledPlaylistItem,
  StyledTitle,
  StyledThumb,
} from './styled';

interface IPlaylistItemProps {
  children?: React.ReactNode;
  item: IVideoPreview;
  index: number;
  isActive: boolean;
}

const PlaylistItem: React.FC<IPlaylistItemProps> = ({
  item: {
    id,
    snippet: { title, channelTitle, thumbnails },
    contentDetails: { duration },
  },
  index,
  isActive,
}) => {
  return (
    <Link href={`/watch/${id}`}>
      <StyledPlaylistItem
        style={{
          [`--playlist-item-bg` as string]: isActive ? `black` : `transparent`,
        }}
      >
        <Row justify="center" align="flex-start" gap={20}>
          <StyledIndex size={13} weight="regular">
            {isActive ? (
              <IconWrapper
                size={24}
                icon="PlayArrow"
                color="red"
                style={{
                  marginLeft: -10,
                  marginTop: -5,
                }}
              />
            ) : (
              index + 1
            )}
          </StyledIndex>
          <StyledThumb>
            <Image
              alt={title}
              src={thumbnails.medium.url}
              width={118}
              height={70}
              style={{
                borderRadius: 7,
              }}
            />
            <StyledThumbDuration
              color="var(--color-light)"
              weight="regular"
              size={8}
            >
              {youtubeDurationFormat(duration)}
            </StyledThumbDuration>
          </StyledThumb>
          <div>
            <StyledTitle weight="bold" color="var(--color-light)" size={13}>
              {title}
            </StyledTitle>
            <Spacer vertical={7} />
            <Text size={11} weight="regular">
              {channelTitle}
            </Text>
          </div>
        </Row>
      </StyledPlaylistItem>
    </Link>
  );
};

export default PlaylistItem;
