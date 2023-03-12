import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Text from '../../ui/Text';
import { StyledTitle } from '../../ui/Title/styled';
import { StyledVideoDuration } from '../VideoDuration/styled';

export const StyledVideoCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledVideoCard = styled.div`
  & > header {
    width: 100%;
    position: relative;
    aspect-ratio: 302 / 175;
    border-radius: 10px;
    overflow: hidden;
  }

  & ${StyledVideoDuration} {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  & ${StyledTitle} {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const StyledChannelName = styled(Text)`
  max-width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledThumb = styled(Image)`
  width: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`;
