import { delPath } from './delpath';
import { projectRoot } from './paths';
import { run } from './run';
import { withTaskName } from './withTaskName';

export const delpathTask = withTaskName('clean', async () => delPath());

export const buildAllPackageTask = withTaskName('buildAllPackages', () =>
  run('pnpm run --filter ./packages/* --parallel build', projectRoot)
);
