import { series } from 'gulp';

import { distPath } from '../build/utils/paths';
import { run } from '../build/utils/run';
import { createPkg } from './createPkg';
import { buildChecker } from './builtChecker';

export const publish = async () => {
  await run('release-it', distPath);
};

export default series(buildChecker, createPkg, publish);
