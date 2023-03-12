import { device } from '@/const/cssMedia';
import styled from 'styled-components';

export const StyledWatchPageGrid = styled.div`
  display: grid;
  grid-template-areas:
    'video'
    'playlist'
    'comments';
  gap: 30px;

  @media ${device.laptop} {
    grid-template-areas:
      'video video'
      'comments playlist';
    grid-auto-columns: 1fr 1fr;
  }

  @media ${device.laptopL} {
    grid-template-areas:
      'video playlist'
      'comments playlist';
    grid-auto-columns: 1fr 445px;
  }
`;
