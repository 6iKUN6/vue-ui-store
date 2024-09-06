import { withInstall } from '@vue-ui-store/utils/with-install';

import _Upload from './src/upload.vue';

const Upload = withInstall(_Upload);

export default Upload;
declare module 'vue' {
  export interface GlobalComponents {
    SpUpload: typeof Upload;
  }
}

export * from './src/upload';
