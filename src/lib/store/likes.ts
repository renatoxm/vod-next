import { PersistedStore } from '@/types/Store';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import GlobalStore from './index';

type LikesObjIds = { id: string }[];

export class LikesStore implements PersistedStore {
  likedIds: string[] = [];
  lastUpdate: string = new Date().toISOString();

  constructor(readonly globalStore: GlobalStore) {
    makeAutoObservable(this);
  }

  initPersist = () => {
    makePersistable(this, {
      name: `LikesStore`,
      properties: [`likedIds`, `lastUpdate`],
    });
  };

  get idsAsObjects(): LikesObjIds {
    return this.likedIds.map((id) => ({ id }));
  }

  toggleLike = (id: string) => {
    this.likedIds = this.likedIds.includes(id)
      ? this.likedIds.filter((i) => i !== id)
      : [...this.likedIds, id];
    this.lastUpdate = new Date().toISOString();
  };
}
