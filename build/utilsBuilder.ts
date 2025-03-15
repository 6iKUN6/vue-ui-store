//专门打包utils
import { series, parallel, src, dest } from 'gulp';
import ts from 'gulp-typescript';
import path from 'path';
// import rename from 'gulp-rename';

import { buildConfig } from './utils/config';
import { outDir, projectRoot } from './utils/paths';
import { withTaskName } from './utils/withTaskName';
// import { run } from './utils/run';

/**
 * 打包utils
 * @param dirname utils目录
 * @param name utils目录名称
 * @returns
 */
// export const buildUtils = (pkgDir: string, pkgName: string) => {
//   const output = path.resolve(pkgDir, 'dist');
//   return parallel(
//     series(
//       withTaskName(`build-${pkgName}`, async () => {
//         await run(`tsup`, pkgDir);
//       }),
//       withTaskName(`copy:${pkgName}`, () => {
//         return src(`${output}/**`).pipe(dest(path.resolve(outDir, pkgName)));
//       })
//     )
//   );
// };

export const buildUtils = (pkgDir: string, pkgName: string) => {
  //打包格式需要什么类型的？模块规范cjs es模块规范
  //umd实在浏览器中用的
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(pkgDir, 'dist', config.output.name);
    return series(
      withTaskName(`build-${module}:${pkgDir}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json'); //读取根目录下的tsconfig
        const inputs = [
          './*.ts',
          '!gulpfile.ts',
          '!node_modules',
          'src/**/*.ts'
        ];
        return (
          src(inputs)
            .pipe(
              ts.createProject(tsConfig, {
                declaration: true, //生成配置文件
                strict: false,
                module: config.module,
                noEmit: false,
                target: 'ESNext',
                allowImportingTsExtensions: false
              })()
            )
            // .pipe(
            //   rename(filePath => {
            //     if (!filePath.basename.endsWith('.d')) {
            //       filePath.extname = `.${config.ext}`;
            //     }

            //     // 保持目录结构
            //     filePath.dirname = filePath.dirname.replace(/^src[\\/]?/, '');
            //     return filePath;
            //   })
            // ) // 修改文件后缀
            .pipe(dest(output))
        );
      }),

      // 拷贝文件，输出到dist目录
      withTaskName(`copy:${pkgDir}`, () => {
        return src(`${output}/**`).pipe(
          dest(path.resolve(outDir, pkgName, config.output.name))
        );
      })
    );
  });
  return parallel(...tasks);
};
