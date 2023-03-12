import { PersistedStore } from '@/types/Store';
import { concat } from 'lodash';
import { makeAutoObservable } from 'mobx';
import { clearPersistedStore, makePersistable } from 'mobx-persist-store';
import GlobalStore from './index';

type HistoryRecord = {
  id: string;
  date: string;
};

export class HistoryStore implements PersistedStore {
  history: HistoryRecord[] = [];
  lastUpdate = ``;
  isWatching = true;

  constructor(readonly globalStore: GlobalStore) {
    makeAutoObservable(this);
  }

  initPersist = () => {
    makePersistable(this, {
      name: `HistoryStore`,
      properties: [`history`, `lastUpdate`, `isWatching`],
    });
  };

  addToHistory = (id: string) => {
    const history = this.history;
    const date = new Date().toISOString();

    const filteredHistory = concat(
      {
        id,
        date,
      },
      history,
    ).filter((element, index, arr) => {
      return arr.findIndex((el) => el.id === element.id) === index;
    });

    this.history = filteredHistory;
    this.lastUpdate = date;
  };

  toggleWatching = () => {
    this.isWatching = !this.isWatching;
  };

  clearHistory = () => {
    this.history = [];
    this.lastUpdate = ``;
    clearPersistedStore(this);
  };
}
