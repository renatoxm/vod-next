import { useToggle } from '@/lib/hooks/useToggle';
import { useVideoCollection } from '@/lib/hooks/useVideoCollection';
import { useVideoId } from '@/lib/hooks/useVideoId';
import { IVideoPreview } from '@/types/Video';
import _ from 'lodash';
import { useRouter } from 'next/router';
import React, {
  createContext,
  ReactNode,
  useMemo,
  useContext,
  useState,
  useEffect,
} from 'react';

type State = {
  collection: IVideoPreview[];
  collectionLength: number;
  currentIndex: number;
  canPlayNext: boolean;
  isShuffled: boolean;
  isRepeatable: boolean;
};

type API = {
  playNext: VoidFunction;
  playPrev: VoidFunction;
  shuffle: VoidFunction;
  toggleRepeat: VoidFunction;
};

const PlaylistCollectionContext = createContext<State['collection']>(
  {} as State['collection'],
);
const PlaylistLengthContext = createContext<State['collectionLength']>(
  {} as State['collectionLength'],
);
const PlaylistIndexContext = createContext<State['currentIndex']>(
  {} as State['currentIndex'],
);
const PlaylistCanPlayNextContext = createContext<State['canPlayNext']>(
  {} as State['canPlayNext'],
);
const PlaylistIsShuffledContext = createContext<State['isShuffled']>(
  {} as State['isShuffled'],
);
const PlaylistIsRepeatableContext = createContext<State['isRepeatable']>(
  {} as State['isRepeatable'],
);
const PlaylistAPIContext = createContext<API>({} as API);

export const PlaylistDataProvider = ({ children }: { children: ReactNode }) => {
  const { data } = useVideoCollection();
  const videoId = useVideoId();
  const router = useRouter();

  const [isRepeatable, toggleRepeat] = useToggle();
  const [isShuffled, shuffle] = useToggle();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canPlayNext, setCanPlayNext] = useState(true);

  const collection = useMemo(() => {
    const coll = data ?? [];
    return isShuffled ? _.shuffle(coll) : coll;
  }, [data, isShuffled]);

  const collectionLength = collection.length;

  useEffect(() => {
    setCurrentIndex(collection.findIndex((item) => item.id === videoId));
  }, [videoId, collection]);

  useEffect(() => {
    setCanPlayNext(currentIndex !== collection.length - 1);
  }, [collection, currentIndex]);

  const state: State = {
    collection,
    collectionLength,
    currentIndex,
    canPlayNext,
    isShuffled,
    isRepeatable,
  };

  const api = useMemo<API>(() => {
    const playNext = async () => {
      if (currentIndex === collectionLength - 1) {
        if (isRepeatable) {
          const firstVideoId = collection[0].id;
          router.push(`/watch/${firstVideoId}`);
        } else {
          return;
        }
      } else {
        const nextVideoId = collection[currentIndex + 1].id;
        await router.push(`/watch/${nextVideoId}`);
      }
    };

    const playPrev = async () => {
      if (currentIndex === 0) {
        if (isRepeatable) {
          return;
        }
      } else {
        const preveVideoId = collection[currentIndex - 1].id;
        await router.push(`/watch/${preveVideoId}`);
      }
    };

    return {
      playNext,
      playPrev,
      shuffle,
      toggleRepeat,
    };
  }, [
    collectionLength,
    isRepeatable,
    currentIndex,
    collection,
    router,
    shuffle,
    toggleRepeat,
  ]);

  return (
    <PlaylistAPIContext.Provider value={api}>
      <PlaylistCollectionContext.Provider value={state.collection}>
        <PlaylistIndexContext.Provider value={state.currentIndex}>
          <PlaylistLengthContext.Provider value={state.collectionLength}>
            <PlaylistCanPlayNextContext.Provider value={state.canPlayNext}>
              <PlaylistIsShuffledContext.Provider value={state.isShuffled}>
                <PlaylistIsRepeatableContext.Provider
                  value={state.isRepeatable}
                >
                  {children}
                </PlaylistIsRepeatableContext.Provider>
              </PlaylistIsShuffledContext.Provider>
            </PlaylistCanPlayNextContext.Provider>
          </PlaylistLengthContext.Provider>
        </PlaylistIndexContext.Provider>
      </PlaylistCollectionContext.Provider>
    </PlaylistAPIContext.Provider>
  );
};

export const usePlaylistAPI = () => useContext(PlaylistAPIContext);
export const usePlaylistCollection = () =>
  useContext(PlaylistCollectionContext);
export const usePlaylistIndex = () => useContext(PlaylistIndexContext);
export const usePlaylistLength = () => useContext(PlaylistLengthContext);
export const useCanPlayNext = () => useContext(PlaylistCanPlayNextContext);
export const useIsShuffled = () => useContext(PlaylistIsShuffledContext);
export const useIsRepeatable = () => useContext(PlaylistIsRepeatableContext);
