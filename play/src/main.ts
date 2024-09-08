import { createApp } from 'vue';
import Icon from '@sp-ui/components/src/icon';
import Tree from '@sp-ui/components/src/tree';
import Checkbox from '@sp-ui/components/src/checkbox';
import Button from '@sp-ui/components/src/button';
import Input from '@sp-ui/components/src/input';
import { FormItem, Form } from '@sp-ui/components/src/form';
import Upload from '@sp-ui/components/src/upload';
import Calendar from '@sp-ui/components/src/calendar';
import VirtualScrollList from '@sp-ui/components/src/virtual-scroll-list';

import App from './App.vue';

import '@sp-ui/theme-chalk/src/index.scss';

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
