import GlobalStore from '@/lib/store';
import { isServer } from '@/lib/utils/isServer';
import { Context, createContext, useContext, useEffect } from 'react';

let _globalStore: GlobalStore;

export const getGlobalStore = (): GlobalStore => _globalStore;

export const setupGlobalStore = (): GlobalStore => {
  if (!_globalStore || isServer) {
    _globalStore = new GlobalStore();
  }

  return _globalStore;
};

export const GlobalStoreContext: Context<GlobalStore> = createContext(
  setupGlobalStore(),
);

export const useStore = (): GlobalStore => useContext(GlobalStoreContext);

interface IProps extends React.PropsWithChildren {
  hydrationData?: Partial<GlobalStore>;
}

export const GlobalStoreProvider: React.FC<IProps> = (props) => {
  _globalStore = setupGlobalStore();
  const isStorybook = !!process.env.STORYBOOK;

  useEffect(() => {
    if (isStorybook) return;
    _globalStore.initPersist();
  }, []);

  return (
    <GlobalStoreContext.Provider
      value={isStorybook ? new GlobalStore() : _globalStore}
    >
      {props.children}
    </GlobalStoreContext.Provider>
  );
};

GlobalStoreProvider.displayName = `GlobalStoreProvider`;
