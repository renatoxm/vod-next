import dayjs from 'dayjs';

export const sortByDate = (a: string, b: string) => {
  const aDate = dayjs(a);
  const bDate = dayjs(b);

  if (aDate.isAfter(bDate)) return 1;
  if (aDate.isSame(bDate)) return 0;
  return -1;
};
