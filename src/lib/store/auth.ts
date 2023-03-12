import { DEFAULT_USER_DATA } from '@/const/data';
import { User } from '@/types/User';
import { makeAutoObservable } from 'mobx';
import { clearPersistedStore, makePersistable } from 'mobx-persist-store';
import ms from 'milliseconds';
import GlobalStore from './index';
import { PersistedStore } from '@/types/Store';

export class AuthStore implements PersistedStore {
  user: User | null = null;

  constructor(readonly globalStore: GlobalStore) {
    makeAutoObservable(this);
  }

  get isAuthenticated(): boolean {
    return this.user !== null;
  }

  get userName(): string {
    return this.user?.authorDisplayName ?? ``;
  }

  initPersist = () => {
    makePersistable(this, {
      name: `AuthStore`,
      properties: [`user`],
      expireIn: ms.days(3),
      removeOnExpiration: true,
    });
  };

  signIn = () => {
    this.user = DEFAULT_USER_DATA;
  };

  signOut = () => {
    this.user = null;
    clearPersistedStore(this);
  };
}
