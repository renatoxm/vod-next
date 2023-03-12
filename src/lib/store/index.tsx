import { isBrowser, isServer } from '@/lib/utils/isServer';
import { PersistedStore } from '@/types/Store';
import { configure } from 'mobx';
import { configurePersistable } from 'mobx-persist-store';
import { enableStaticRendering } from 'mobx-react-lite';
import { AuthStore } from './auth';
import { CommentsStore } from './comments';
import { HistoryStore } from './history';
import { LikesStore } from './likes';
import { PlaylistStore } from './playlist';
import { SubscriptionsStore } from './subscriptions';

enableStaticRendering(isServer);

configure({
  enforceActions: `always`,
  computedRequiresReaction: isBrowser,
  reactionRequiresObservable: isBrowser,
  observableRequiresReaction: isBrowser,
  disableErrorBoundaries: false,
});

configurePersistable(
  {
    storage: isServer ? undefined : window.localStorage,
    removeOnExpiration: true,
    debugMode: false,
  },
  {
    delay: 200,
    fireImmediately: false,
  },
);

export default class GlobalStore {
  readonly authStore: AuthStore;
  readonly likesStore: LikesStore;
  readonly historyStore: HistoryStore;
  readonly commentsStore: CommentsStore;
  readonly subscriptionsStore: SubscriptionsStore;
  readonly playlistStore: PlaylistStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.likesStore = new LikesStore(this);
    this.historyStore = new HistoryStore(this);
    this.commentsStore = new CommentsStore(this);
    this.subscriptionsStore = new SubscriptionsStore(this);
    this.playlistStore = new PlaylistStore(this);
  }

  initPersist = () => {
    const stores = Object.getOwnPropertyNames(this)
      .filter((property) => property.endsWith(`Store`))
      .filter((store) =>
        Object.getOwnPropertyNames(this[store as keyof typeof this]).includes(
          `initPersist`,
        ),
      );
    stores.forEach((store) =>
      (this[store as keyof typeof this] as PersistedStore).initPersist(),
    );
  };
}
