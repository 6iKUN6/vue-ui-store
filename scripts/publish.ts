import { series } from 'gulp';
import fs from 'fs';
import path from 'path';

import { distPath, rootPath } from '../build/utils/paths';
import { run } from '../build/utils/run';
import { createPkg } from './createPkgJson';
import { buildChecker } from './builtChecker';

export const publish = async () => {
  await run('release-it', distPath).then(() => {
    //更新根目录下的package.json的版本号
    const distPkg = JSON.parse(
      fs.readFileSync(path.resolve(distPath, 'package.json'), 'utf-8')
    );
    const rootPkg = JSON.parse(
      fs.readFileSync(path.resolve(rootPath, 'package.json'), 'utf-8')
    );
    rootPkg.version = distPkg.version;
    fs.writeFileSync(
      path.resolve(rootPath, 'package.json'),
      JSON.stringify(rootPkg, null, 2)
    );
  });
};

export default series(buildChecker, createPkg, publish);
