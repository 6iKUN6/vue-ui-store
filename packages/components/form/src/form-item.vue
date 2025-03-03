<template>
  <div
    :class="[
      bem.b(),
      bem.is('success', validateState === 'success'),
      bem.is('error', validateState === 'error'),
      bem.is('warning', validateState === 'warning')
    ]"
  >
    <label :class="bem.e('label')">
      <slot name="label" v-if="slots.label"></slot>
      <span v-else>{{ label }}</span>
    </label>
    <div :class="bem.e('content')">
      <slot></slot>
      <div :class="bem.e('error')">
        <slot name="error" v-if="validateState === 'error'">
          {{ validateMessage }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  inject,
  onMounted,
  provide,
  reactive,
  ref,
  useSlots
} from 'vue';
import AsyncValidator, { Values } from 'async-validator';
import { createNamespace } from '@sp-ui/utils/create';

import {
  Arrayable,
  FormItemContext,
  formItemContextKey,
  formItemProps,
  FormItemRule,
  FormItemValidateState
} from './form-item';
import { formContextKey } from './form';

const bem = createNamespace('form-item');
defineOptions({
  name: 'sp-form-item'
});
const props = defineProps(formItemProps);
const slots = useSlots();

const formContext = inject(formContextKey);

//主要校验逻辑
const validateState = ref<FormItemValidateState>('');
const validateMessage = ref<string>('validate failed');

const converArray = (rules: Arrayable<FormItemRule> | undefined) => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : [];
};

const _rules = computed(() => {
  const MyRules: FormItemRule[] = converArray(props.rules);
  const formRules = formContext?.rules;
  if (formRules && props.prop) {
    const _temp = formRules[props.prop];
    //合并item和form的规则
    if (_temp) {
      MyRules.push(...converArray(_temp));
    }
  }

  return MyRules;
});

const getRuleFiltered = (trigger: string) => {
  //filter trigger：change、blur
  const rules = _rules.value;

  return rules.filter(rule => {
    if (!rule.trigger || !trigger) return true; //这种情况无论如何都要校验,没写trigger就是全部校验
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger);
    } else {
      return rule.trigger === trigger;
    }
  });
};

const onValidationSuccessed = () => {
  validateState.value = 'success';
  validateMessage.value = '';
};

const onValidationFailed = (err: Values) => {
  // debugger;
  validateState.value = 'error';
  const { errors } = err;
  validateMessage.value = errors[0].message || '';
  console.log('error', validateMessage.value);
};

const validate: FormItemContext['validate'] = async (trigger, cb?) => {
  //拿到触发时机，校验是否通过可以调用callback 或者调用promise.then方法
  const rules = getRuleFiltered(trigger);
  //触发事件时，找到对应的规则
  // console.log('trigger', trigger, rules, formContext?.model, props.prop); // 某trigger对应的规则
  const modelName = props.prop!;
  //校验器
  const validator = new AsyncValidator({
    [modelName]: rules
  });
  const model = formContext?.model || {};
  return validator
    .validate({ [modelName]: model[modelName] })
    .then(() => {
      onValidationSuccessed();
    })
    .catch(error => {
      onValidationFailed(error);
      return Promise.reject(error);
    })
    .finally(() => {
      if (cb) cb(true);
    });
};

const context: FormItemContext = reactive({
  // ...toRefs(props)
  ...props, //好像不需要响应式？？
  validate
});
provide(formItemContextKey, context);
onMounted(() => {
  formContext?.addField(context); //item传递自己的context
});
</script>

<style scoped></style>
