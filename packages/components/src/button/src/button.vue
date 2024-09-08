<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.m(iconPlacement),
      bem.is('loading', loading),
      bem.is('disabled', disabled),
      bem.is('round', round)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="emitClick"
    @mousedown="emitMousedown"
  >
    <template :class="[bem.e(`${iconPlacement}-icon`)]">
      <sp-icon>
        <LoadingComp v-if="loading" />
        <template v-else-if="slots.icon">
          <component :is="slots.icon"></component>
        </template>
      </sp-icon>
    </template>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { createNamespace } from '@vue-ui-store/utils/create';
import LoadingComp from '@vue-ui-store/components/src/internal-icon/Loading';
import SpIcon from '@vue-ui-store/components/src/icon';

import { buttonEmits, buttonProps } from './button';

const bem = createNamespace('button');
defineOptions({
  name: 'sp-button',
  inheritAttrs: false //默认不继承外部传入的自定义属性
});
defineProps(buttonProps);
const emits = defineEmits(buttonEmits);

// const slots = defineSlots<ButtonSlots>();//defineSlots要3.3才支持
const slots = useSlots();

const emitClick = (e: MouseEvent) => {
  emits('click', e);
};

const emitMousedown = (e: MouseEvent) => {
  emits('mousedown', e);
};
</script>

<style scoped></style>
