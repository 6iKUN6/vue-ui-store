import { ExtractPropTypes, PropType } from 'vue';

/*
size 组件大小
type 按钮类型
round 是否为圆角按钮
loading 是否为加载状态
plain 是否为朴素按钮
disable 是否禁用
circle 是否为原形按钮
native-type 原始类型
icon-placement 图标位置
插槽
*/
export type Size = 'small' | 'medium' | 'large';
export type Type =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | 'default'
  | '';
export type NativeType = 'button' | 'submit' | 'reset';
export type Placement = 'left' | 'right';

export const buttonProps = {
  size: {
    type: String as PropType<Size>,
    default: 'medium'
  },
  type: {
    type: String as PropType<Type>,
    validator: (value: string) => {
      return [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'text',
        'default',
        ''
      ].includes(value);
    },
    default: ''
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: Boolean,
  circle: Boolean,
  disabled: Boolean,
  loading: Boolean,
  icon: {
    type: String,
    default: ''
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  iconPlacement: {
    type: String as PropType<Placement>,
    default: 'left'
  }
} as const;

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent
};

export const buttonSlots = {
  default: () => {},
  icon: () => void 0
};

export type ButtonProps = Partial<ExtractPropTypes<typeof buttonProps>>;
export type ButtonEmits = typeof buttonEmits;
export type ButtonSlots = typeof buttonSlots;
