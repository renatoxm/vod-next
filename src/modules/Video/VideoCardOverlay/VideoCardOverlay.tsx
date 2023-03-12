import Link from 'next/link';
import React from 'react';
import Blur from '@/modules/ui/Blur';
import Spacer from '@/modules/ui/Spacer';
import Text from '@/modules/ui/Text';
import {
  StyledControlsRow,
  StyledHoverContainer,
  StyledVideoCardOverlay,
} from './styled';

import { intToString } from '@/lib/utils/intToString';
import Row from '@/modules/ui/Row';
import IconWrapper from '@/modules/ui/IconWrapper';
import CardHoverActions from './CardHoverActions';

interface IVideoCardOverlayProps {
  children?: React.ReactNode;
  likeCount: number;
  id: string;
}

const VideoCardOverlay: React.FC<IVideoCardOverlayProps> = ({
  likeCount,
  id,
}) => {
  return (
    <StyledVideoCardOverlay data-testid="video-card-overlay">
      <Blur />
      <Link href={`/watch/${id}`} color="#FFF">
        <StyledHoverContainer>
          <Spacer vertical={20} />
          <Row align="center" gap={4}>
            <IconWrapper
              size={40}
              icon="PlayArrowOutlined"
              style={{ marginLeft: `-.2em` }}
            />
            <Text size={18} weight="extraBold" color="#FFF">
              Play
            </Text>
          </Row>
          <Row align="center" gap={8}>
            <IconWrapper size={20} icon="ThumbUpOffAltOutlined" />
            <Text size={13} weight={`regular`} color="#FFF">
              {intToString(likeCount)}
            </Text>
          </Row>
        </StyledHoverContainer>
      </Link>
      <StyledControlsRow direction="column" align="flex-end" gap={8}>
        <CardHoverActions id={id} />
      </StyledControlsRow>
    </StyledVideoCardOverlay>
  );
};

export default VideoCardOverlay;
