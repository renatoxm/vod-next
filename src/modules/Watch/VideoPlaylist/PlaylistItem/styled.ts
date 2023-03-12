import { device } from '@/const/cssMedia';
import Text from '@/modules/ui/Text';
import styled from 'styled-components';

export const StyledPlaylistItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: var(--item-height);
  padding: 0 2.8em;
  border-radius: 6px;
  background-color: var(--playlist-item-bg);
`;

export const StyledIndex = styled(Text)`
  width: 18px;
  text-align: left;
  padding-top: 2.1em;
`;

export const StyledTitle = styled(Text)`
  padding-top: 0.8em;
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media ${device.tablet} {
    max-width: 200px;
  }
`;

export const StyledThumb = styled.div`
  position: relative;
`;

export const StyledThumbDuration = styled(Text)`
  position: absolute;
  bottom: 1px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  padding: 0.4em 1em;
  letter-spacing: 0.1px;
  backdrop-filter: blur(3px);
  border-top-left-radius: 7px;
`;
