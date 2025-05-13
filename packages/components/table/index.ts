import { withInstall } from '@sp-ui/utils/with-install';

import _Table from './src/index.tsx';

export const Table = withInstall(_Table);

declare module 'vue' {
  export interface GlobalComponents {
    SpTable: typeof Table;
  }
}

export default Table;
export * from './src/props';
