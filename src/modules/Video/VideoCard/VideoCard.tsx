import React, { useState } from 'react';
import { getRelativeDate } from '@/lib/utils/getRelativeDate';
import { intToString } from '@/lib/utils/intToString';
import { IVideoPreview } from '@/types/Video';
import Row from '@/modules/ui/Row';
import Spacer from '@/modules/ui/Spacer';
import Text from '@/modules/ui/Text';
import Title from '@/modules/ui/Title';
import VideoDuration from '@/modules/Video/VideoDuration';
import { StyledChannelName, StyledThumb, StyledVideoCard } from './styled';
import VideoCardOverlay from '../VideoCardOverlay';
import Link from 'next/link';

interface IVideoCardProps {
  children?: React.ReactNode;
  video: IVideoPreview;
}

const VideoCard: React.FC<IVideoCardProps> = ({
  video: {
    id,
    snippet: { title, channelTitle, thumbnails, publishedAt },
    statistics: { viewCount, likeCount },
    contentDetails: { duration },
  },
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const videoHref = `/watch/${id}`;

  return (
    <StyledVideoCard>
      <header
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
        data-testid="video-card-header"
      >
        <StyledThumb
          alt={title}
          src={thumbnails.medium.url}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          placeholder="blur"
          blurDataURL={
            thumbnails.standart
              ? thumbnails.standart.url
              : thumbnails.default.url
          }
        />
        {showOverlay && <VideoCardOverlay likeCount={likeCount} id={id} />}
        <VideoDuration duration={duration} />
      </header>
      <Spacer vertical={16} />
      <Link href={videoHref}>
        <Title level={3} size={15}>
          {title}
        </Title>
      </Link>
      <Spacer vertical={10} />
      <Row gap={`1.5em`} align="flex-start">
        <StyledChannelName size={12}>
          <strong>{channelTitle}</strong>
        </StyledChannelName>
        <Link href={videoHref}>
          <Text size={12}>
            {intToString(viewCount)} views | {getRelativeDate(publishedAt)}
          </Text>
        </Link>
      </Row>
    </StyledVideoCard>
  );
};

export default VideoCard;
