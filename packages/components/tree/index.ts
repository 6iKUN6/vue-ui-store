import { withInstall } from '@vue-ui-store/utils/with-install';

import _Tree from './src/tree.vue';

const Tree = withInstall(_Tree);

export default Tree;
declare module 'vue' {
  export interface GlobalComponents {
    SpTree: typeof Tree;
  }
}

export * from './src/tree';
