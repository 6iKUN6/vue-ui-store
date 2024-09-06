import { series } from 'gulp';

import { withTaskName } from './utils/withTaskName';
import { run } from './utils/run';
import { componentsPath } from './utils/paths';

// import { componentsPath } from './utils/paths';

export function buildComponent(dirname: string, name: string) {
  return series(
    withTaskName('build:component', () => {
      console.log(`打包组件:${dirname}---${name}`);
      run(`pnpm run build`, componentsPath);
    })
  );
}
