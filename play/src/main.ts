import { createApp } from 'vue';
import Icon from '@sp-ui/components/icon';
import Tree from '@sp-ui/components/tree';
import Checkbox from '@sp-ui/components/checkbox';
import Button from '@sp-ui/components/button';
import Input from '@sp-ui/components/input';
import { FormItem, Form } from '@sp-ui/components/form';
import Upload from '@sp-ui/components/upload';
import Calendar from '@sp-ui/components/calendar';
import VirtualScrollList from '@sp-ui/components/virtual-scroll-list';
// import SPUI from '@sp-ui/components';

import App from './App.vue';
import router from './router';

import '@sp-ui/theme-chalk/src/index.scss';
// import '../../dist/theme-chalk/index.css';

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
app.use(router);
plugins.forEach(plugin => app.use(plugin)); //global install
// app.use(SPUI);
app.mount('#app');
