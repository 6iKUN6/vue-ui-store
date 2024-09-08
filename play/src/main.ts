import { createApp } from 'vue';
import Icon from '@vue-ui-store/components/src/icon';
import Tree from '@vue-ui-store/components/src/tree';
import Checkbox from '@vue-ui-store/components/src/checkbox';
import Button from '@vue-ui-store/components/src/button';
import Input from '@vue-ui-store/components/src/input';
import { FormItem, Form } from '@vue-ui-store/components/src/form';
import Upload from '@vue-ui-store/components/src/upload';
import Calendar from '@vue-ui-store/components/src/calendar';
import VirtualScrollList from '@vue-ui-store/components/src/virtual-scroll-list';

import App from './App.vue';

import '@vue-ui-store/theme-chalk/src/index.scss';

const plugins = [
  Icon,
  Tree,
  Checkbox,
  Button,
  Input,
  Form,
  FormItem,
  Upload,
  Calendar,
  VirtualScrollList
];

const app = createApp(App);
plugins.forEach(plugin => app.use(plugin)); //global install
app.mount('#app');
