import {
  makePersistable,
  PersistenceStorageOptions,
  ReactionOptions,
} from 'mobx-persist-store';

type Constructor = new (...args: any[]) => object;

export function makePersistableSSR<TBase extends Constructor>(
  Base: TBase,
  storageOptions: PersistenceStorageOptions<TBase, keyof TBase>,
  reactionOptions?: ReactionOptions | undefined,
) {
  return class extends Base {
    initPersist = () => {
      makePersistable(Base, storageOptions, reactionOptions);
    };
  };
}
