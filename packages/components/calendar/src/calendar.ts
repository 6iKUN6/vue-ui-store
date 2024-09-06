import { ExtractPropTypes, PropType } from 'vue';

export const calendarProps = {
  modelValue: {
    type: Date
  },
  range: {
    type: Array as any as PropType<[Date, Date]>,
    default: () => []
  }
} as const;

export const calendarEmits = {
  'update:modelValue': (_value: Date) => _value instanceof Date,
  'update:range': (_value: Date) => _value instanceof Date,
  select: (_value: Date) => _value instanceof Date,
  'select-range': (_value: [Date, Date]) => _value instanceof Date,
  'select-month': (_value: Date) => _value instanceof Date,
  'select-year': (_value: Date) => _value instanceof Date
};

export type CalendarProps = ExtractPropTypes<typeof calendarProps>;
export type CalendarEmits = typeof calendarEmits;

export type CalenderDateCellType = 'prev' | 'current' | 'next';
export type CalenderDateCell = {
  text: number;
  type: CalenderDateCellType;
};

export type CalendarDateType =
  | 'prev-month'
  | 'prev-year'
  | 'next-month'
  | 'next-year'
  | 'today';
