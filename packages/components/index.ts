import { App } from 'vue';

import Button from './button';
import Input from './input';
import VirtualScrollList from './virtual-list';
import Checkbox from './checkbox';
import Tree from './tree';
import { Form, FormItem } from './form';
import Icon from './icon';
import Calendar from './calendar';
import Upload from './upload';

export interface SPUIComponents {
  install: (app: App) => void;
  Button: typeof Button;
  Input: typeof Input;
  VirtualScrollList: typeof VirtualScrollList;
  Checkbox: typeof Checkbox;
  Tree: typeof Tree;
  Form: typeof Form;
  FormItem: typeof FormItem;
  Icon: typeof Icon;
  Calendar: typeof Calendar;
  Upload: typeof Upload;
}

export {
  Button,
  Input,
  VirtualScrollList,
  Checkbox,
  Tree,
  Form,
  FormItem,
  Icon,
  Calendar,
  Upload
};

const components = [
  Button,
  Input,
  VirtualScrollList,
  Checkbox,
  Tree,
  Form,
  FormItem,
  Icon,
  Calendar,
  Upload
];

const install = (app: App) => {
  components.forEach(component => {
    component.install?.(app);
  });
};

const SPUI: SPUIComponents = {
  install,
  Button,
  Input,
  VirtualScrollList,
  Checkbox,
  Tree,
  Form,
  FormItem,
  Icon,
  Calendar,
  Upload
};
export default SPUI;

// export * from './button';
// export * from './input';
// export * from './virtual-list';
// export * from './checkbox';
// export * from './tree';
// export * from './form';
// export * from './icon';
// export * from './calendar';
// export * from './upload';
