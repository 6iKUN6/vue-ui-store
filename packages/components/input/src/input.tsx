import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  ref,
  watch
} from 'vue';
import { createNamespace } from '@vue-ui-store/utils/create';

import { inputEmits, inputProps } from './input';
import { formItemContextKey } from '../../form';

export default defineComponent({
  name: 'sp-input',
  inheritAttrs: false,
  props: inputProps,
  emits: inputEmits,
  setup: (props, { slots, attrs, emit }) => {
    const bem = createNamespace('input');

    const formItemContext = inject(formItemContextKey);
    // console.log('formItemContext', formItemContext);
    const inpRef = ref<HTMLInputElement>();

    watch(
      () => props.modelValue,
      newV => {
        formItemContext?.validate('change');
        setNativeInputValue(newV);
      }
    );
    onMounted(() => {
      setNativeInputValue(props.modelValue);
    });
    const setNativeInputValue = (value: string | number) => {
      const inpEle = inpRef.value;
      if (!inpEle) {
        return;
      }

      inpEle.value = value + '';
    };

    const handleInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      emit('input', value);
      emit('update:modelValue', value);
    };

    const handleChange = (e: Event) => {
      emit('change', (e.target as HTMLInputElement).value);
    };

    const handleBlur = (e: FocusEvent) => {
      formItemContext?.validate('blur').catch(() => {});
      emit('blur', e);
    };

    const handleFocus = (e: FocusEvent) => {
      emit('focus', e);
    };

    const focus = async () => {
      await nextTick();
      inpRef.value?.focus();
    };

    const clear = async () => {
      emit('input', '');
      emit('update:modelValue', '');
      focus();
    };

    const passwordVisible = ref<boolean>(false);

    const showPwdVisible = computed(
      () =>
        props.modelValue &&
        props.showPassword &&
        !props.disabled &&
        !props.readonly
    );
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };

    const showClear = computed(() => {
      return (
        props.clearable &&
        props.modelValue &&
        !props.disabled &&
        !props.readonly
      );
    });

    const render = () => {
      return (
        <div class={[bem.b()]}>
          <div class={bem.e('group')}>
            {/* prepend */}
            {slots.prepend ? (
              <div class={bem.be('group', 'prepend')}>{slots.prepend()}</div>
            ) : null}
            {/* input */}
            <div
              class={[
                bem.e('wrapper'),
                bem.is('prepend', !!slots.prepend),
                bem.is('append', !!slots.append)
              ]}
            >
              {slots.prefix ? (
                <span class={bem.e('prefix')}>{slots.prefix()}</span>
              ) : null}
              <input
                class={bem.e('inner')}
                ref={inpRef}
                {...attrs}
                type={
                  props.showPassword
                    ? passwordVisible.value
                      ? 'text'
                      : 'password'
                    : props.type
                }
                disabled={props.disabled}
                readonly={props.readonly}
                placeholder={props.placeholder}
                onInput={handleInput}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              {slots.suffix ? (
                <span class={bem.e('suffix')}>
                  {showPwdVisible.value ? (
                    <sp-icon
                      class={bem.e('eye-icon')}
                      onClick={handlePasswordVisible}
                    >
                      ??
                    </sp-icon>
                  ) : (
                    slots.suffix()
                  )}
                  {showClear.value && (
                    <sp-icon class={bem.e('clear-icon')} onClick={clear}>
                      c
                    </sp-icon>
                  )}
                </span>
              ) : null}
            </div>
            {/* append */}
            {slots.append ? (
              <div class={bem.be('group', 'append')}>{slots.append()}</div>
            ) : null}
          </div>
        </div>
      );
    };

    return render;
  }
});
