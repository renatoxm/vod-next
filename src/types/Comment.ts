export interface IComment {
  kind: 'youtube#comment';
  id: string;
  snippet: {
    videoId: string;
    textDisplay: string;
    textOriginal: string;
    parentId?: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelUrl: string;
    authorChannelId: {
      value: string;
    };
    canRate: boolean;
    likeCount: number;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface ICommentThread {
  kind: 'youtube#commentThread';
  id: string;
  snippet: {
    topLevelComment: IComment;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
  replies?: {
    comments: IComment[];
  };
}
