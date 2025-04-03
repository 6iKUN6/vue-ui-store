import type { ExtractPropTypes } from 'vue';

export const colorPickerProps = {
  modelValue: {
    type: String,
    default: '#000000'
  },
  showAlpha: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    values: ['large', 'default', 'small'],
    default: 'default'
  },
  presets: {
    type: Array as () => string[],
    default: () => []
  },
  format: {
    type: String,
    values: ['hex', 'rgb'],
    default: 'hex'
  },
  showValue: {
    type: Boolean,
    default: true
  }
} as const;

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;
