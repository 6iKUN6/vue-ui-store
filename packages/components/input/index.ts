import { withInstall } from '@sp-ui/utils/with-install.js';

import _Input from './src/input.tsx';

const Input = withInstall(_Input);

export default Input;
export { Input };
declare module 'vue' {
  export interface GlobalComponents {
    SpInput: typeof Input;
  }
}

export * from './src/input';
