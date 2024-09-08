import { withInstall } from '@vue-ui-store/utils/with-install';

import _Checkbox from './src/checkbox.vue';

const Checkbox = withInstall(_Checkbox);

export default Checkbox;
declare module 'vue' {
  export interface GlobalComponents {
    SpCheckbox: typeof _Checkbox;
  }
}

export * from './src/checkbox';
