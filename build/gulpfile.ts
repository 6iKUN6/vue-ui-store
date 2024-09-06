//串行打包和并行打包
import { series } from 'gulp';

import { delpathTask, buildAllPackageTask } from './utils';
// type TaskFunction = () => Promise<void>;

//使用gulp进行流程控制，不加打包，做代码转换
/* 
  1.打包样式
  2.打包工具方法
  2.打包所有组件
  3.打包每个组件
  4.生成一个组件库
  5.发布组件
*/
export default series(delpathTask, buildAllPackageTask);
