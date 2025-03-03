// 样式打包
import path from 'path';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import { series, src, dest } from 'gulp';

/**
 * 编译sass
 * @returns
 */
function compile() {
  // 创建sass编译器实例，使用dart-sass作为编译引擎
  const sass = gulpSass(dartSass);
  return src(path.resolve(__dirname, './src/*.scss')) // 读取src目录下所有scss文件
    .pipe(sass.sync()) // 将scss文件编译为css
    .pipe(autoprefixer()) // 添加浏览器前缀，增强兼容性
    .pipe(cleanCss()) // 压缩CSS代码，减小文件体积
    .pipe(dest('./dist/css')); // 输出编译后的css文件到dist/css目录
}

/**
 * 复制全量样式
 * @returns
 */
function copyfullStyle() {
  return src(path.resolve(__dirname, './dist/**')).pipe(
    dest(path.resolve(__dirname, '../../dist/theme-chalk'))
  );
}

export default series(compile, copyfullStyle);
