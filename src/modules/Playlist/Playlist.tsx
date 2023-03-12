import { getHighResThumb } from '@/lib/utils/getHighResThumb';
import { LaptopOnly } from '@/modules/ui/MediaQuery';
import Container from '@/modules/ui/Container';
import Spacer from '@/modules/ui/Spacer';
import TwoColumnGrid from '@/modules/ui/TwoColumnGrid';
import { IVideoPreview } from '@/types/Video';
import React from 'react';
import PlaylistCollection from './PlaylistCollection';
import PlaylistCover from './PlaylistCover';
import PlaylistMeta from './PlaylistMeta';

interface IPlaylistProps {
  children?: React.ReactNode;
  collection: IVideoPreview[];
  name: string;
  isPrivate?: boolean;
  lastUpdate: string;
}

const Playlist: React.FC<IPlaylistProps> = ({
  collection,
  name,
  isPrivate = true,
  lastUpdate,
}) => {
  return (
    <>
      <TwoColumnGrid firstCol="1fr" secondCol="350px">
        <Container>
          <PlaylistCover
            alt={name}
            href={`/watch/${collection[0].id}`}
            cover={getHighResThumb(collection[0].snippet.thumbnails)}
          />
        </Container>
        <Container>
          <PlaylistMeta
            name={name}
            totalVideos={collection.length}
            totalViews={0}
            lastUpdate={lastUpdate}
            isPrivate={isPrivate}
            href={`/watch/${collection[0].id}`}
          />
        </Container>
      </TwoColumnGrid>
      <LaptopOnly>
        <Spacer vertical={30} />
      </LaptopOnly>
      <Container>
        <PlaylistCollection collection={collection} />
      </Container>
    </>
  );
};

export default Playlist;
