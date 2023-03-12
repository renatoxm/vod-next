import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

export const getCalendarDate = (date: string) => {
  return dayjs(date).calendar(dayjs(), {
    sameDay: `[Today]`, // The same day ( Today at 2:30 AM )
    nextDay: `[Tomorrow]`, // The next day ( Tomorrow at 2:30 AM )
    nextWeek: `dddd`, // The next week ( Sunday at 2:30 AM )
    lastDay: `[Yesterday]`, // The day before ( Yesterday at 2:30 AM )
    lastWeek: `[Last] dddd`, // Last week ( Last Monday at 2:30 AM )
    sameElse: `DD MMMM YYYY`, // Everything else ( 17/10/2011 )
  });
};
