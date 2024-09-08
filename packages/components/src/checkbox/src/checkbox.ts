import { ExtractPropTypes, PropType } from 'vue';

export const checkboxProps = {
  modelValue: {
    type: [Boolean, String, Number] as PropType<boolean | number | string>
  },
  disabaled: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  label: {
    type: [String] as PropType<string>
  }
} as const;

export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>;

export const checkboxEmits = {
  'update:modelValue': (value: boolean | number | string) =>
    typeof value === 'boolean',
  change: (value: boolean | number | string) => typeof value === 'boolean'
};
export type CheckboxEmits = typeof checkboxEmits;
