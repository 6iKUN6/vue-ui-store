import { createApp } from 'vue';
import Icon from '@vue-ui-store/components/icon';
import Tree from '@vue-ui-store/components/tree';
import Checkbox from '@vue-ui-store/components/checkbox';
import Button from '@vue-ui-store/components/button';
import Input from '@vue-ui-store/components/input';
import { FormItem, Form } from '@vue-ui-store/components/form';
import Upload from '@vue-ui-store/components/upload';
import Calendar from '@vue-ui-store/components/calendar';
import VirtualScrollList from '@vue-ui-store/components/virtual-scroll-list';

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
