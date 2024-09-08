//串行打包和并行打包
import { series } from 'gulp';

import { delpathTask, buildAllPackageTask } from './utils';
// type TaskFunction = () => Promise<void>;

export default series(delpathTask, buildAllPackageTask);
