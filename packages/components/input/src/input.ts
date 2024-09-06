import { ExtractPropTypes, PropType, readonly } from 'vue';
/* 
所需props
type 输入框类型
placeholder 占位符
modelValue v-model
disabled 是否禁用
readonly 是否只读
clearable 是否显示清除按钮
label标签内容
prefixIcon 前图标
suffixIcon 后图标
minLength 最小输入长度
maxLength 最大输入长度
showWordLimit 是否显示输入字数统计
showPassword 是否显示切换密码图标
*/

export type InputType =
  | 'text'
  | 'password'
  | 'number'
  | 'email'
  | 'tel'
  | 'url'
  | 'search';

export type ModelValue = number | string;

export const inputProps = {
  type: {
    type: String as PropType<InputType>,
    default: 'text'
  },
  modelValue: {
    type: [String, Number] as PropType<ModelValue>,
    default: ''
  },
  placeholder: String,
  label: String,
  disabled: Boolean,
  clearable: Boolean,
  readonly: Boolean,
  prefixIcon: String,
  suffixIcon: String,
  minLength: Number,
  maxLength: Number,
  showWordLimit: Boolean,
  showPassword: Boolean
} as const;

export const inputEmits = {
  'update:modelValue': (value: string) => typeof value === 'string',
  input: (value: string) => typeof value === 'string',
  change: (value: string) => typeof value === 'string',
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true
};

export const inputSlots = ['prefix', 'suffix', 'prepend', 'append'];

export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputEmits = typeof inputEmits;
export type InputSlots = typeof inputSlots;
