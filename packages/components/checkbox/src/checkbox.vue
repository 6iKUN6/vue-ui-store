<template>
  <div>
    <label :class="bem.b()">
      <span :class="bem.e('input')">
        <input
          type="checkbox"
          v-model="model"
          ref="inputRef"
          :disabled="disabaled"
          :value="label"
          @change="handleChange"
        />
      </span>
      <span v-if="$slots.default || label" :class="bem.e('label')">
        <!-- 优先插槽、没有就显示label -->
        <slot></slot>
        <template v-if="!$slots.default">{{ label }}</template>
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@sp-ui/utils/create';
import { computed, onMounted, ref, watch } from 'vue';

import { checkboxEmits, checkboxProps } from './checkbox';

const bem = createNamespace('checkbox');
defineOptions({
  name: 'sp-checkbox'
});

const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);

//双绑
const model = computed({
  get() {
    return props.modelValue as boolean | number | number;
  },
  set(val: boolean | number | number) {
    return emit('update:modelValue', val);
  }
});
const inputRef = ref<HTMLInputElement>();

//处理半选
function indeterminate(val: boolean) {
  if (inputRef.value) {
    inputRef.value.indeterminate = val;
  }
}

watch(() => props.indeterminate, indeterminate);
onMounted(() => {
  indeterminate(props.indeterminate);
});

function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.checked ? true : false;
  emit('change', value);
}
</script>

<style scoped></style>
