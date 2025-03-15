import { series } from 'gulp';
// import fs from 'fs';
// import path from 'path';

import { distPath } from '../build/utils/paths';
import { run } from '../build/utils/run';
import { createPkg } from './createPkgJson';
import { buildChecker } from './builtChecker';

export const publish = async () => {
  await run('release-it', distPath).then(() => {});
};

export default series(buildChecker, createPkg, publish);
