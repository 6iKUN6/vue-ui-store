import { ExtractPropTypes, InjectionKey, PropType } from 'vue';
// import type { Values } from 'async-validator';

import { Arrayable, FormItemContext, FormItemRule } from './form-item';

/* 
form表单属性
model 数据源
rules 规则集
inline 行内式
label-position 标签位置
label-width 标签长度
label-suffix 标签后缀
disabled 禁用
show-message 显示错误
*/

export type LabelPosition = 'left' | 'right' | 'top';

export const formProps = {
  model: Object,
  rules: {
    type: Object as PropType<Record<string, Arrayable<FormItemRule>>>,
    default: () => {}
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  inline: Boolean,
  labelPosition: {
    type: String as PropType<LabelPosition>,
    default: 'right' as const
  },
  labelSuffix: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 80
  },
  disabled: Boolean
} as const;

export type FormProps = Partial<ExtractPropTypes<typeof formProps>>;

export interface FormContext extends FormProps {
  addField: (_filed: FormItemContext) => void;
  // validate?: (
  //   _trigger: string,
  //   _cb?: (_isValid: boolean) => void
  // ) => Promise<void>;
}

export const formContextKey: InjectionKey<FormContext> = Symbol('form-context');
