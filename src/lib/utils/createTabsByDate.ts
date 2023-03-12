import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { Tab } from '@/lib/hooks/useTabs';

import { sortByDate } from './sortByDate';
import { getCalendarDate } from './getCalendarDate';
import { IVideoPreview } from '@/types/Video';
import { get } from 'lodash';

dayjs.extend(utc);
dayjs.extend(timezone);

export const createTabsByDate = <T extends IVideoPreview>(
  collection: T[],
  dateKey: string,
  renderFunc: (v: T) => JSX.Element,
) => {
  const dates = Array.from(
    new Set(
      collection.map((el) =>
        dayjs(get(el, dateKey) as string)
          .tz(`Europe/Moscow`)
          .format(`YYYY-MM-DD`),
      ),
    ),
  ).sort(sortByDate);

  const tabs: Tab[] = dates
    .map((date) => {
      const calendarDate: string = getCalendarDate(date);

      const elementsForDate = collection.filter((el) => {
        return dayjs(get(el, dateKey) as string).isSame(date, `day`);
      });

      return {
        label: calendarDate,
        id: calendarDate,
        children: elementsForDate.map(renderFunc),
      };
    })
    .reverse();

  return tabs;
};
