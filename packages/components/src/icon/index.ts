// 整合、导出组件
import { withInstall } from '@sp-ui/utils/with-install';

import _Icon from './src/icon.vue';
const Icon = withInstall(_Icon);
export default Icon; //可以通过app.use使用，也可以单独import使用
export * from './src/icon';

//vue模块拓展，方便在vue中使用
//这里添加的类型 可以再模板中被解析
declare module 'vue' {
  export interface GlobalComponents {
    //接口自动合并
    SpIcon: typeof Icon;
  }
}
