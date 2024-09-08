import { withInstall } from '@sp-ui/utils';

import _Calendar from './src/calendar.vue';

const Calendar = withInstall(_Calendar);

export default Calendar;

declare module 'vue' {
  export interface GlobalComponents {
    SpCalendar: typeof Calendar;
  }
}

export type { CalendarEmits, CalendarProps } from './src/calendar';
