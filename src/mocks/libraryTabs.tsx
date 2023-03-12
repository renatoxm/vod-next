import { IVideoPreview } from '@/types/Video';
import VideoCard from '@/modules/Video/VideoCard';

import Playlist from '@/modules/Playlist';
import GridContainer from '@/modules/ui/GridContainer';
import { MockedVideoCollection } from './apiResponses';
import { MockedPlaylistData } from './playlist';
import { Tab, useTabs } from '@/lib/hooks/useTabs';
import { MockedHistoryCollection } from './history';

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useMockedLibraryTabs = () => {
  const mockedCollection = MockedVideoCollection.result;
  const historyCollection = MockedHistoryCollection;

  const playlistCollection = MockedPlaylistData;
  const lastPlaylistUpdate = new Date().toISOString();

  const likedCollection = mockedCollection.slice(3, 5);
  const lastLikedUpdate = new Date().toISOString();

  const tabs: Tab[] = [
    {
      id: `history`,
      label: `History`,
      children: (
        <GridContainer>{historyCollection.map(renderVideoCard)}</GridContainer>
      ),
    },
    {
      id: `playlists`,
      label: `Playlists`,
      children: (
        <Playlist
          collection={playlistCollection}
          name="Demo Playlist"
          lastUpdate={lastPlaylistUpdate}
        />
      ),
    },
    {
      id: `liked`,
      label: `Liked Videos`,
      children: (
        <Playlist
          collection={likedCollection}
          name="Liked Videos"
          lastUpdate={lastLikedUpdate}
        />
      ),
    },
  ];

  return useTabs({ tabs, initialTabId: `history` });
};
