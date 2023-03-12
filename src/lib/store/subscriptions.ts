import { PersistedStore } from '@/types/Store';
import { makeAutoObservable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';
import GlobalStore from './index';

const toggleSubscription = (ids: string[], id: string) => {
  return ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id];
};

export class SubscriptionsStore implements PersistedStore {
  subscriptions: string[] = [];

  constructor(readonly globalStore: GlobalStore) {
    makeAutoObservable(this);
  }

  initPersist = () => {
    makePersistable(this, {
      name: `SubscriptionsStore`,
      properties: [`subscriptions`],
    });
  };

  toggleSubscription = (id: string) => {
    this.subscriptions = toggleSubscription(this.subscriptions, id);
  };
}
