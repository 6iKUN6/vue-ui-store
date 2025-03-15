import fs from 'fs';
import path from 'path';
import { series } from 'gulp';

import { withTaskName } from '../build/utils/withTaskName';
import { outDir } from '../build/utils/paths';
import rootPkgJson from '../package.json';

function createPkgJson() {
  const pkgContent = {
    name: rootPkgJson.name,
    version: rootPkgJson.version,
    main: 'lib/index.js',
    module: 'es/index.mjs',
    types: 'es/index.d.ts',
    files: ['components/*', 'utils/*', 'plugins/*', 'theme-chalk/*'],
    exports: {
      '.': {
        types: './es/index.d.ts',
        import: './es/index.mjs',
        require: './lib/index.js'
      },
      './components': {
        types: './es/index.d.ts',
        import: './es/index.mjs',
        require: './lib/index.js'
      },
      './utils': {
        types: './lib/index.d.ts',
        import: './es/index.mjs',
        require: './lib/index.js'
      },
      './plugins': {
        types: './lib/index.d.ts',
        import: './es/index.mjs',
        require: './lib/index.js'
      }
    },
    style: './theme-chalk/css/index.css',
    author: rootPkgJson.author,
    license: rootPkgJson.license,
    repository: rootPkgJson.repository,
    keywords: rootPkgJson.keywords,
    dependencies: Object.entries(rootPkgJson.dependencies)
      .filter(([, version]) => !version.includes('workspace:'))
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
    'release-it': rootPkgJson['release-it'],
    sideEffects: false
  };
  const pkgPath = path.resolve(outDir, 'package.json');
  fs.writeFileSync(pkgPath, JSON.stringify(pkgContent, null, 2));
}

export const createPkg = withTaskName('createPkg', async () => {
  await createPkgJson();
});

export default series(createPkg);
