import { device } from '@/const/cssMedia';
import IconButton from '@/modules/ui/IconButton';
import Image from 'next/image';
import styled from 'styled-components';

export const StyledCoverWrap = styled.div`
  aspect-ratio: 16 / 9;
  position: relative;
  border-radius: 12px;

  @media ${device.laptop} {
    border-radius: 36px;
    overflow: hidden;
  }
`;

export const StyledPlaylistCover = styled(Image)`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const StyledMobilePlayButton = styled(IconButton)`
  display: inline-block;
  position: absolute;
  bottom: -0.5em;
  right: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0.25em;
    left: 0.25em;
    background-color: #fff;
    height: 0.5em;
    width: 0.5em;
    z-index: 0;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export const StyledCoverLink = styled.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 70px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  font-weight: 500;

  @media ${device.laptop} {
    display: flex;
  }
`;
