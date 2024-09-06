import { withInstall } from '@vue-ui-store/utils/with-install.js';

import _Form from './src/form.vue';
import _FormItem from './src/form-item.vue';

const Form = withInstall(_Form);
const FormItem = withInstall(_FormItem);

export { FormItem, Form };

declare module 'vue' {
  export interface GlobalComponents {
    SpForm: typeof Form;
    SpFormItem: typeof FormItem;
  }
}

export type FormInstance = InstanceType<typeof Form>;
export type FormItemInstance = InstanceType<typeof FormItem>;

export * from './src/form';
export * from './src/form-item';
