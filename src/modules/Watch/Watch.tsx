import React from 'react';
import Container from '@/modules/ui/Container';
import VideoPlaylist from '@/modules/Watch/VideoPlaylist';
import CommentsSection from '@/modules/Watch/CommentsSection';
import { PlaylistDataProvider } from '@/lib/providers/playlist-api';

import { StyledWatchPageGrid } from './styled';
import WatchVideoSection from './WatchVideoSection';

interface IWatchProps {
  children?: React.ReactNode;
}

const Watch: React.FC<IWatchProps> = (props) => {
  return (
    <PlaylistDataProvider>
      <StyledWatchPageGrid>
        <Container style={{ display: `contents` }}>
          <WatchVideoSection />
          <CommentsSection />
        </Container>
        <VideoPlaylist />
      </StyledWatchPageGrid>
    </PlaylistDataProvider>
  );
};

export default Watch;
