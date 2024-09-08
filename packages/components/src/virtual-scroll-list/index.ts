import { withInstall } from '@vue-ui-store/utils/with-install';

import _VirtualScrollList from './src/virtual-list.tsx';

const VirtualScrollList = withInstall(_VirtualScrollList);

export default VirtualScrollList;
declare module 'vue' {
  export interface GlobalComponents {
    SpVirtualScrollList: typeof _VirtualScrollList;
  }
}

export * from './src/virtual-props.ts';
