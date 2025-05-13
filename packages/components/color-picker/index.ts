import { withInstall } from '@sp-ui/utils/with-install.js';

import _ColorPicker from './src/index.tsx';

export const ColorPicker = withInstall(_ColorPicker);
export default ColorPicker;

declare module 'vue' {
  export interface GlobalComponents {
    SpColorPicker: typeof ColorPicker;
  }
}

export * from './src/props';
export type ColorPickerInstance = InstanceType<typeof ColorPicker>;
