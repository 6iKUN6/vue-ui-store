import { App } from 'vue';
// import packageJson from 'package.json';

import SPButton from './button';
import SPInput from './input';
import SPVirtualList from './virtual-list';
import SPVirtualScrollList from './virtual-scroll-list';
import SPCheckbox from './checkbox';
import SPTree from './tree';
import { Form as SPForm, FormItem as SPFormItem } from './form';
import SPIcon from './icon';
import SPCalendar from './calendar';
import SPUpload from './upload';
import SPColorPicker from './color-picker';

export interface SPUIComponents {
  install: (app: App) => void;
  version: string;
  // Button: typeof Button;
  // Input: typeof Input;
  // VirtualScrollList: typeof VirtualScrollList;
  // Checkbox: typeof Checkbox;
  // Tree: typeof Tree;
  // Form: typeof Form;
  // FormItem: typeof FormItem;
  // Icon: typeof Icon;
  // Calendar: typeof Calendar;
  // Upload: typeof Upload;
}

export {
  SPButton,
  SPInput,
  SPVirtualScrollList,
  SPVirtualList,
  SPCheckbox,
  SPTree,
  SPForm,
  SPFormItem,
  SPIcon,
  SPCalendar,
  SPUpload,
  SPColorPicker
};

const components = [
  SPButton,
  SPInput,
  SPVirtualScrollList,
  SPVirtualList,
  SPCheckbox,
  SPTree,
  SPForm,
  SPFormItem,
  SPIcon,
  SPCalendar,
  SPUpload,
  SPColorPicker
];

const install = (app: App) => {
  components.forEach(component => {
    component.install?.(app);
  });
};

const SPUI: SPUIComponents = {
  install,
  version: '你干嘛~哎呦'
  // Button,
  // Input,
  // VirtualScrollList,
  // Checkbox,
  // Tree,
  // Form,
  // FormItem,
  // Icon,
  // Calendar,
  // Upload
};

export default SPUI;

export * from './button';
export * from './input';
export * from './virtual-list';
export * from './checkbox';
export * from './tree';
export * from './form';
export * from './icon';
export * from './calendar';
export * from './upload';
export * from './color-picker';
