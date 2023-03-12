import { IVideoPreview } from '@/types/Video';
import VideoCard from '@/modules/Video/VideoCard';
import { Tab, useTabs } from './useTabs';
import { useHistoryCollection } from './useHistoryCollection';
import { usePlaylistCollection } from './usePlaylistCollection';
import { useLikedCollection } from './useLikedCollection';
import Playlist from '@/modules/Playlist';
import GridContainer from '@/modules/ui/GridContainer';
import { useStore } from '@/lib/providers/GlobalStoreProvider';
import EmptyScreen from '@/modules/ui/EmptyScreen';
// import SignInButton from '@/modules/ui/SignInButton';

const renderVideoCard = (v: IVideoPreview) => (
  <VideoCard key={v.id} video={v} />
);

export const useLibraryTabs = () => {
  const historyCollection = useHistoryCollection();
  const playlistCollection = usePlaylistCollection();

  const likedCollection = useLikedCollection();
  const { likesStore, playlistStore } = useStore();

  const tabs: Tab[] = [
    {
      id: `history`,
      label: `History`,
      children:
        historyCollection.length > 0 ? (
          <GridContainer>
            {historyCollection.map(renderVideoCard)}
          </GridContainer>
        ) : (
          <EmptyScreen
            emojiCode="1F627"
            title="Keep Track Of What You Watch"
            text={`Your watch history is empty`}
          />
        ),
    },
    {
      id: `playlists`,
      label: `Playlists`,
      children:
        playlistCollection.length > 0 ? (
          <Playlist
            collection={playlistCollection}
            name="Demo Playlist"
            lastUpdate={playlistStore.lastUpdate}
          />
        ) : (
          <EmptyScreen
            emojiCode="270C"
            title="Watch What You Want"
            text="There no videos in your playlist"
          />
        ),
    },
    {
      id: `liked`,
      label: `Liked Videos`,
      children:
        likedCollection.length > 0 ? (
          <Playlist
            collection={likedCollection}
            name="Liked Videos"
            lastUpdate={likesStore.lastUpdate}
          />
        ) : (
          <EmptyScreen
            emojiCode="1F44D"
            title="Want To Rewatch?"
            text="There no videos you've liked"
          />
        ),
    },
  ];

  return useTabs({ tabs, initialTabId: `history` });
};
