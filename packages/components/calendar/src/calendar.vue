<template>
  <div :class="bem.b()">
    <div :class="bem.e('header')">
      <div :class="bem.e('title')">{{ currentDate }}</div>
      <div :class="bem.e('button-group')">
        <sp-button @click="selectDate('prev-year')">前一年</sp-button>
        <sp-button @click="selectDate('prev-month')">上个月</sp-button>
        <sp-button @click="selectDate('today')">今天</sp-button>
        <sp-button @click="selectDate('next-month')">下个月</sp-button>
        <sp-button @click="selectDate('next-year')">下一年</sp-button>
      </div>
    </div>
    <div :class="bem.e('body')">
      <table :class="bemTable.b()" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th v-for="(day, index) in weekDays" :key="index">
              {{ day }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rid) in rows" :key="rid">
            <td
              v-for="(cell, cid) in row"
              :key="cid"
              :class="[bemDay.b(), getCellClass(cell)]"
              @click="handlePick(cell)"
            >
              <slot name="date-cell" :data="getSlotData(cell)">
                {{ cell.text }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
// import 'dayjs/locale/zh-cn';
import { createNamespace } from '@vue-ui-store/utils';

import {
  CalendarDateType,
  calendarProps,
  CalenderDateCell,
  CalenderDateCellType
} from './calendar';

defineOptions({
  name: 'sp-calendar'
});

const bem = createNamespace('calendar');
const bemTable = createNamespace('calendar-table');
const bemDay = createNamespace('calendar-day');

const props = defineProps(calendarProps);
const emit = defineEmits(['update:modelValue']);

const now = dayjs();
const date = computed(() => {
  if (props.modelValue) {
    return dayjs(props.modelValue);
  } else {
    return now;
  }
});

// dayjs.locale('zh-cn');
//header
const firstDayOfWeek = dayjs().startOf('week').day(); //defautl: 0
const weekMaping = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const weekDays = computed(() => {
  return [
    ...weekMaping.slice(firstDayOfWeek),
    ...weekMaping.slice(0, firstDayOfWeek)
  ];
});

//body
const rows = computed(() => {
  let list: CalenderDateCell[] = [];
  const firstDay = date.value.startOf('month').day(); //本月第一天是周几
  const lastDay = date.value.subtract(1, 'month').endOf('month').date(); //本月最后一天是几号

  const count = firstDay - firstDayOfWeek;
  const prevMonthDays: CalenderDateCell[] = Array.from({ length: count })
    .map((_, idx) => lastDay - (count - idx - 1))
    .map(_ => ({
      text: _,
      type: 'prev'
    }));
  const days = date.value.daysInMonth();
  const currentMountDays: CalenderDateCell[] = Array.from({ length: days }).map(
    (_, idx) => ({
      text: idx + 1,
      type: 'current'
    })
  );
  list = [...prevMonthDays, ...currentMountDays];
  const ramaning = 6 * 7 - list.length;
  const nextMonthDays: CalenderDateCell[] = Array.from({
    length: ramaning
  }).map((_, idx) => ({
    text: idx + 1,
    type: 'next'
  }));
  list.push(...nextMonthDays);
  return Array.from({ length: 6 }).map((_, idx) => {
    const start = idx * 7;
    return list.slice(start, start + 7);
  });
});

const prevMonthDay = computed(() => date.value.subtract(1, 'month').date(1));
const nextMonthDay = computed(() => date.value.add(1, 'month').date(1));
const prevYearDay = computed(() => date.value.subtract(1, 'year').date(1));
const nextYearDay = computed(() => date.value.add(1, 'year').date(1));

function pickDay(day: Dayjs) {
  selectedDay.value = day; //save selectedDay
  emit('update:modelValue', day.toDate());
}

const selectDate = (type: CalendarDateType) => {
  //策略优化
  const dateMap: Record<CalendarDateType, Dayjs> = {
    'prev-month': prevMonthDay.value,
    'next-month': nextMonthDay.value,
    'prev-year': prevYearDay.value,
    'next-year': nextYearDay.value,
    today: now
  };
  const day = dateMap[type];
  pickDay(day);
};

const formatter = (text: number, type: CalenderDateCellType): Dayjs => {
  switch (type) {
    case 'prev':
      return date.value.startOf('month').subtract(1, 'month').date(text);
    case 'current':
      return date.value.date(text);
    case 'next':
      return date.value.endOf('month').add(1, 'month').date(text);
  }
};

const selectedDay = ref<Dayjs>();
const handlePick = ({ text, type }: CalenderDateCell) => {
  const day = formatter(text, type);
  pickDay(day);
};

function getCellClass({ text, type }: CalenderDateCell) {
  const clazz: string[] = [type];
  const date = formatter(text, type);
  if (date.isSame(selectedDay.value, 'day')) {
    clazz.push(bemDay.is('selected', true));
  }

  if (date.isSame(now, 'day')) {
    clazz.push(bemDay.is('today', true));
  }

  return clazz;
}

const currentDate = computed(() => {
  return `${date.value.year()}年${date.value.month() + 1}月${date.value.date()}日`;
});

function getSlotData({ type, text }: CalenderDateCell) {
  const day = formatter(text, type);
  return {
    isSelected: day.isSame(selectedDay.value),
    day: day.format('YYYY-MM-DD'),
    date: day.toDate(),
    type
  };
}
</script>

<style scoped></style>
