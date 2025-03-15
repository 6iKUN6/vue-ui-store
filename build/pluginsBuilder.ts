//打包插件
import { series, parallel, src, dest } from 'gulp';
// import ts from 'gulp-typescript';
import path from 'path';
// import rename from 'gulp-rename';

// import { buildConfig } from './utils/config';
import { outDir } from './utils/paths';
import { withTaskName } from './utils/withTaskName';
import { run } from './utils/run';

/**
 * 打包插件
 * @param dirname 插件目录
 * @param name 插件名称
 * @returns
 */
export const buildPlugins = (pkgDir: string, pkgName: string) => {
  const output = path.resolve(pkgDir, 'dist');
  return parallel(
    series(
      withTaskName(`build-${pkgName}`, async () => {
        await run(`tsup`, pkgDir);
      }),
      withTaskName(`copy:${pkgDir}`, () => {
        return src(`${output}/**`).pipe(dest(path.resolve(outDir, pkgName)));
      })
    )
  );
};

// export const buildPlugins = (dirname: string, name: string) => {
//   //打包格式需要什么类型的？模块规范cjs es模块规范
//   //umd实在浏览器中用的
//   const tasks = Object.entries(buildConfig).map(([module, config]) => {
//     const output = path.resolve(dirname, 'dist', config.output.name);
//     return series(
//       withTaskName(`build-${module}:${dirname}`, () => {
//         const tsConfig = path.resolve(projectRoot, 'tsconfig.json'); //读取根目录下的tsconfig
//         const inputs = [
//           './*.ts',
//           '!gulpfile.ts',
//           '!node_modules',
//           'src/**/*.ts'
//         ];
//         return src(inputs)
//           .pipe(
//             ts.createProject(tsConfig, {
//               declaration: true, //生成配置文件
//               strict: false,
//               module: config.module,
//               noEmit: false,
//               allowImportingTsExtensions: false
//             })()
//           )
//           .pipe(dest(output));
//       }),
//       //拷贝到dist
//       withTaskName(`copy:${dirname}`, () => {
//         return src(`${output}/**`).pipe(
//           dest(path.resolve(outDir, name, config.output.name))
//         );
//       })
//     );
//   });
//   return parallel(...tasks);
// };
