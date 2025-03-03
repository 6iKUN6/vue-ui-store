<template>
  <div
    @dragover.prevent="onDragover"
    @dragleave.prevent="onDragleave"
    @drop.prevent="onDrag"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOver = ref<boolean>(false);
const emit = defineEmits(['file']);

const onDragover = () => {
  isOver.value = true;
};

const onDragleave = () => {};

const onDrag = (e: DragEvent) => {
  e.stopPropagation();
  if (e.dataTransfer) {
    emit('file', e.dataTransfer.files);
  }
};
</script>
