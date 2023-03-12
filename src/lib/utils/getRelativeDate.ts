import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getRelativeDate = (date: string) => {
  return dayjs().to(dayjs(date));
};
