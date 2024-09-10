//专门打包utils
import { series, parallel, src, dest } from 'gulp';
import ts from 'gulp-typescript';
import path from 'path';

import { buildConfig } from './utils/config';
import { outDir, projectRoot } from './utils/paths';
import { withTaskName } from './utils/withTaskName';

export const buildPackages = (dirname: string, name: string) => {
  //打包格式需要什么类型的？模块规范cjs es模块规范
  //umd实在浏览器中用的
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirname, config.output.name);
    return series(
      withTaskName(`build-${module}:${dirname}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json');
        const inputs = ['./*.ts', '!gulpfile.ts', '!node_modules'];
        return src(inputs)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true, //生成配置文件
              strict: false,
              module: config.module,
              noEmit: false,
              allowImportingTsExtensions: false
            })()
          )
          .pipe(dest(output));
      }),
      withTaskName(`copy:${dirname}`, () => {
        return src(`${output}/**`).pipe(
          dest(path.resolve(outDir, config.output.name, name))
        );
      })
    );
  });
  return parallel(...tasks);
};
