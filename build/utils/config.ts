import path from 'path';

import { outDir } from './paths';
export const buildConfig = {
  esm: {
    module: 'ESNEXT',
    format: 'esm',
    output: {
      name: 'es',
      path: path.resolve(outDir, 'es')
    },
    bundle: {
      path: 'sp-ui/es'
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(outDir, 'lib')
    },
    bundle: {
      path: 'sp-ui/lib'
    }
  }
};
export type BuildConfig = typeof buildConfig;
