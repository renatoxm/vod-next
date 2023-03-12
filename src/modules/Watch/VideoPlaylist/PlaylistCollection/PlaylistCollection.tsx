import {
  usePlaylistCollection,
  usePlaylistIndex,
} from '@/lib/providers/playlist-api';
import Scrollbar from '@/modules/ui/Scrollbar';
import _ from 'lodash';
import React, { useEffect, useRef } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import PlaylistItem from '../PlaylistItem';
import { StyledPlaylistCollection, StyledPlaylistWindow } from './styled';

interface IPlaylistCollectionProps {
  children?: React.ReactNode;
}

const PlaylistCollection: React.FC<IPlaylistCollectionProps> = () => {
  const collection = usePlaylistCollection();
  const activeIndex = usePlaylistIndex();
  const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    scrollbarRef.current?.scrollTop((84 + 14) * (activeIndex - 1));
  }, [activeIndex]);

  return (
    <StyledPlaylistWindow>
      <Scrollbar
        ref={scrollbarRef}
        autoHide
        style={{
          height: `calc(var(--item-height) * 4 + var(--collection-gap) * 3)`,
        }}
      >
        <StyledPlaylistCollection>
          {collection.map((item, i) => (
            <PlaylistItem
              key={item.id}
              isActive={activeIndex === i}
              index={i}
              item={item}
            />
          ))}
        </StyledPlaylistCollection>
      </Scrollbar>
    </StyledPlaylistWindow>
  );
};

export default PlaylistCollection;
