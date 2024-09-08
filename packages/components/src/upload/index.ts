import { withInstall } from '@sp-ui/utils/with-install';

import _Upload from './src/upload.vue';

const Upload = withInstall(_Upload);

export default Upload;
declare module 'vue' {
  export interface GlobalComponents {
    SpUpload: typeof Upload;
  }
}

export * from './src/upload';
