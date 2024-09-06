<template>
  <div>
    <sp-calendar v-model="state.time">
      <template #date-cell="{ data }">
        <p>
          {{ data.day.split('-').slice(1).join('-') }}
          {{ data.isSelected ? '✓' : '' }}
        </p>
      </template>
    </sp-calendar>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// const range = ref([new Date(), new Date()]);
const state = reactive({ time: new Date() });
</script>

<style scoped></style>
