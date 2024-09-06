<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { createNamespace } from '@vue-ui-store/utils/create';

import { iconProps } from './icon';

defineOptions({
  name: 'sp-icon'
});
const bem = createNamespace('icon');

//使用computed计算样式
const props = defineProps(iconProps);
const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {})
  };
});
</script>

<style scoped></style>
