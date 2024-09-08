import { dest, series, src } from 'gulp';
import path from 'path';

import { withTaskName } from './utils/withTaskName';
import { run } from './utils/run';
import { componentsPath, outDir } from './utils/paths';

export function buildComponent(dirname: string, name: string) {
  const output = path.resolve(dirname, './dist/**');
  return series(
    withTaskName('build:component', async () => {
      await run(`vite build`, componentsPath);
    }),
    withTaskName('copy:component', async () => {
      return src(output).pipe(dest(path.resolve(outDir, name)));
    })
  );
}
