import { defineConfig, type Options } from 'tsup';

export const baseConfig: Options = {
  entry: ['index.ts'], // 入口文件，根据实际情况调整
  sourcemap: false, // 生成 sourcemap 文件（可选）
  dts: true,
  minify: false, // 根据需要开启或关闭代码压缩
  clean: true,
  shims: true, //注入cjs和esm shims
  outExtension: ({ format }) => ({
    dts: '.d.ts',
    js: format === 'esm' ? '.mjs' : '.js'
  })
};

const esmConfig: Options = {
  ...baseConfig,
  format: 'esm',
  outDir: 'dist/es'
};

const cjsConfig: Options = {
  ...baseConfig,
  format: 'cjs',
  outDir: 'dist/lib'
};

export const iifeConfig: Options = {
  ...baseConfig,
  format: 'iife',
  outDir: 'dist/iife'
};

export default defineConfig([esmConfig, cjsConfig, iifeConfig]);
