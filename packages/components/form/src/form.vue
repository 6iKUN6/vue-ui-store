<template>
  <form :class="bem.b()">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import type { Values } from 'async-validator';
import { createNamespace } from '@sp-ui/utils/create';

import { FormContext, formContextKey, formProps } from './form';
import { FormItemContext } from './form-item';
// import { FormItemContext } from './form-item';

const bem = createNamespace('form');
defineOptions({
  name: 'sp-form'
});
const props = defineProps(formProps);

//在form调用所有的form-item调用validate
const validate = async (cb?: (valid: boolean, fields?: Values) => void) => {
  let errors: Values = {};
  for (const field of fields) {
    try {
      await field.validate('');
    } catch (error) {
      errors = {
        ...errors,
        ...(error as Values).fields
      };
    }
  }

  //返回cb的执行结构
  if (Object.keys(errors).length === 0) {
    return cb && cb(true);
  } else {
    if (cb) {
      cb(false, errors);
    } else {
      return Promise.reject(errors);
    }
  }
};

const fields: FormItemContext[] = [];
const addField: FormContext['addField'] = context => {
  //收集所有的form-item的context
  fields.push(context);
};

const context = { ...props, addField };
provide(formContextKey, context);

defineExpose({
  validate
});
</script>

<style scoped></style>
