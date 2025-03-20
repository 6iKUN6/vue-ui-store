import { defineConfig, type Options } from 'tsup';

export const baseConfig: Options = {
  entry: ['index.ts'], // 入口文件，根据实际情况调整
  sourcemap: false, // 生成 sourcemap 文件（可选）
  dts: true,
  minify: false, // 根据需要开启或关闭代码压缩
  clean: true,
  splitting: true, // 代码分割，保持子模块独立
  legacyOutput: true, // 保留传统目录结构
  // shims: true //注入cjs和esm shims
  outExtension: ({ format }) => {
    let jsExtension = '.js';
    if (format === 'esm') {
      jsExtension = '.mjs';
    } else if (format === 'iife') {
      jsExtension = '.global.js';
    }

    return {
      dts: '.d.ts',
      js: jsExtension
    };
  },
  external: ['axios']
};

const esmConfig: Options = {
  ...baseConfig,
  format: ['esm'],
  outDir: 'dist/es'
};

const cjsConfig: Options = {
  ...baseConfig,
  format: ['cjs'],
  outDir: 'dist/lib'
};

export const iifeConfig: Options = {
  ...baseConfig,
  format: 'iife',
  outDir: 'dist/iife'
};

export default defineConfig([esmConfig, cjsConfig, iifeConfig]);
