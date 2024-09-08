import { withInstall } from '@sp-ui/utils/with-install';

import _Virtual from './src/virtual';

const Virtual = withInstall(_Virtual);

export default Virtual;
declare module 'vue' {
  export interface GlobalComponents {
    SpVirtualList: typeof _Virtual;
  }
}

export * from './src/virtual';
