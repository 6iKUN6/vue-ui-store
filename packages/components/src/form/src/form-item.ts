import { ExtractPropTypes, InjectionKey, PropType } from 'vue';
import type { RuleItem } from 'async-validator';

/* 
form-item 这里用来定义 form-item 的属性
prop 校验输入框的属性
label 标签
rules 校验规则
error 提示错误信息
show-message 是否显示校验错误
inline-message 是否内联显示错误信息
*/

export type Arrayable<T> = T | T[];
// 拓展
export interface FormItemRule extends RuleItem {
  trigger?: string | string[];
  validator?: (rule: any, value: any, callback: any) => any; //自定义校验函数
}

// 校验状态
export const formItemValidateState = [
  'error',
  'success',
  'warning',
  ''
] as const;
//number会按位取
export type FormItemValidateState = (typeof formItemValidateState)[number];

export const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array] as PropType<Arrayable<FormItemRule>>,
  showMessage: {
    type: Boolean,
    default: true
  }
} as const;

/* 事件 change blur */
export const formItemEmits = ['change', 'blur'];
// {
//   change: (value: any) => true,
//   blur: (value: any) => true
// };

export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>;
export type FormItemEmits = typeof formItemEmits;

export interface FormItemContext extends FormItemProps {
  validate: (
    _trigger: string,
    _cb?: (_isValid: boolean) => void
  ) => Promise<void>;
}

export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('form-item-context');
