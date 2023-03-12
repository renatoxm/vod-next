import { PersistedStore } from '@/types/Store';
import { makeAutoObservable } from 'mobx';
import { clearPersistedStore, makePersistable } from 'mobx-persist-store';
import GlobalStore from './index';

export class PlaylistStore implements PersistedStore {
  name = `Demo Playlist`;
  collection: string[] = [];
  lastUpdate: string = new Date().toISOString();

  constructor(readonly globalStore: GlobalStore) {
    makeAutoObservable(this);
  }

  initPersist = () => {
    makePersistable(this, {
      name: `PlaylistStore`,
      properties: [`name`, `collection`, `lastUpdate`],
    });
  };

  get collectionAsObjects() {
    return this.collection.map((id) => ({ id }));
  }

  addVideo = (id: string) => {
    this.collection = Array.from(new Set([...this.collection, id]));
    this.lastUpdate = new Date().toISOString();
  };

  removeVideo = (id: string) => {
    this.collection = this.collection.filter((v) => v !== id);
    this.lastUpdate = new Date().toISOString();
  };

  clear = () => {
    this.collection = [];
    this.lastUpdate = new Date().toISOString();
    clearPersistedStore(this);
  };
}
