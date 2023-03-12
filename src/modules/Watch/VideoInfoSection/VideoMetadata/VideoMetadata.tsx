import React from 'react';
import dayjs from 'dayjs';

import Row from '@/modules/ui/Row';
import Text from '@/modules/ui/Text';
import { thousandsSeparator } from '@/lib/utils/thousandsSeparator';
import VideoSocialControls from '../VideoSocialControls';
import { LaptopOnly } from '@/modules/ui/MediaQuery';

interface IVideoMetadataProps {
  children?: React.ReactNode;
  views: number;
  likes: number;
  published: string;
}

const VideoMetadata: React.FC<IVideoMetadataProps> = ({
  views,
  likes,
  published,
}) => {
  return (
    <Row justify="space-between">
      <Row gap={10}>
        <Text size={15}>{thousandsSeparator(views)} views</Text>
        <Text size={18}>{`|`}</Text>
        <Text size={15}>{dayjs(published).format(`MMM DD, YYYY`)}</Text>
      </Row>
      <LaptopOnly>
        <VideoSocialControls likes={likes} />
      </LaptopOnly>
    </Row>
  );
};

export default VideoMetadata;
