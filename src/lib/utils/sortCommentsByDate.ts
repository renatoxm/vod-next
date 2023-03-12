import { IComment, ICommentThread } from '@/types/Comment';
import { sortByDate } from './sortByDate';

type CommentOrThread = IComment | ICommentThread;

function objectIsThread(obj: CommentOrThread): obj is ICommentThread {
  if (obj.kind === `youtube#commentThread`) return true;
  return false;
}

export const sortCommentsByDate = <T extends CommentOrThread>(
  arr: T[],
): T[] => {
  return arr.sort((a, b) => {
    const aDate = objectIsThread(a)
      ? a.snippet.topLevelComment.snippet.publishedAt
      : a.snippet.publishedAt;
    const bDate = objectIsThread(b)
      ? b.snippet.topLevelComment.snippet.publishedAt
      : b.snippet.publishedAt;

    return sortByDate(aDate, bDate);
  });
};
