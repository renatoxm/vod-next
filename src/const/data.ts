import { User } from '@/types/User';

export const DEFAULT_USER_AVATAR = `/assets/avatar_default.jpg`;
export const DEFAULT_USER_DATA: User = {
  authorChannelId: {
    value: `johndoeunofficial`,
  },
  authorChannelUrl: `/channel/johndoeunofficial`,
  authorDisplayName: `John Doe`,
  authorProfileImageUrl: DEFAULT_USER_AVATAR,
};
