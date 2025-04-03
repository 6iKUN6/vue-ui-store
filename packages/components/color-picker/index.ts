import { withInstall } from '@sp-ui/utils/with-install.js';

import _ColorPicker from './src/index.tsx';

export const SPColorPicker = withInstall(_ColorPicker);
export default SPColorPicker;

declare module 'vue' {
  export interface GlobalComponents {
    SpColorPicker: typeof SPColorPicker;
  }
}

export * from './src/props';
export type ColorPickerInstance = InstanceType<typeof SPColorPicker>;
