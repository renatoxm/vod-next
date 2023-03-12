import Comment, { CommentArgs } from '@/lib/api/comment';
import CommentThread, { CommentThreadArgs } from '@/lib/api/commentThread';
import { IComment, ICommentThread } from '@/types/Comment';
import { PersistedStore } from '@/types/Store';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import GlobalStore from './index';

export interface ILike {
  id: string;
  liked: boolean;
}

const toggleLike = (likes: ILike[], id: string, liked: boolean) => {
  const likeObj = likes.find((l) => l.id === id);
  if (!likeObj) {
    return [
      ...likes,
      {
        id,
        liked,
      },
    ];
  }
  if (likeObj && likeObj.liked !== liked) {
    return likes.map((l) => {
      if (l.id === id) {
        return {
          ...l,
          liked,
        };
      } else {
        return l;
      }
    });
  }
  return likes.filter((l) => l.id !== id);
};

export class CommentsStore implements PersistedStore {
  threads: ICommentThread[] = [];
  comments: IComment[] = [];
  likes: ILike[] = [];

  constructor(readonly globalStore: GlobalStore) {
    makeAutoObservable(this);
  }

  initPersist = () => {
    makePersistable(this, {
      name: `CommentsStore`,
      properties: [`threads`, `comments`, `likes`],
    });
  };

  addCommentThread = (...args: CommentThreadArgs) => {
    const { ...newCommentThread } = new CommentThread(...args);
    this.threads = [...this.threads, newCommentThread];
  };

  addComment = (...args: CommentArgs) => {
    const { ...newComment } = new Comment(...args);
    this.comments = [...this.comments, newComment];
  };

  toggleLike = (id: string, liked: boolean) => {
    this.likes = toggleLike(this.likes, id, liked);
  };

  isCommentLiked = (id: string) => {
    return this.likes.find((l) => l.id === id) || null;
  };
}
