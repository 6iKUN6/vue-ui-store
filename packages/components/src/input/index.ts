import { withInstall } from '@vue-ui-store/utils/with-install.js';

import _Input from './src/input.tsx';

const Input = withInstall(_Input);

export default Input;

declare module 'vue' {
  export interface GlobalComponents {
    SpInput: typeof Input;
  }
}

export * from './src/input';
