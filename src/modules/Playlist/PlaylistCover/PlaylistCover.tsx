import React from 'react';
import { IThumbnail } from '@/types/Video';
import {
  StyledCoverLink,
  StyledCoverWrap,
  StyledMobilePlayButton,
  StyledPlaylistCover,
} from './styled';
import IconWrapper from '@/modules/ui/IconWrapper';
import Link from 'next/link';

interface IPlaylistCoverProps {
  children?: React.ReactNode;
  cover: IThumbnail;
  alt: string;
  href: string;
}

const PlaylistCover: React.FC<IPlaylistCoverProps> = ({ cover, alt, href }) => {
  return (
    <Link href={href}>
      <StyledCoverWrap>
        <StyledPlaylistCover
          src={cover.url}
          fill
          // height={cover.height}
          // width={cover.width}
          alt={alt}
        />
        <StyledCoverLink>
          <IconWrapper size={38} icon="PlayArrow" />
          Play All
        </StyledCoverLink>
        <StyledMobilePlayButton icon="PlayCircle" size={72} fontColor="red" />
      </StyledCoverWrap>
    </Link>
  );
};

export default PlaylistCover;
