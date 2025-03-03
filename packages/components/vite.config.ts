import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite';

// // 自动获取所有组件入口
// const componentEntries = glob
//   .sync('**/index.ts', {
//     ignore: ['node_modules/**', 'dist/**', 'gulpfile.ts', 'vite.config.ts']
//   })
//   .map(file => resolve(__dirname, file));

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'vue',
        'async-validator',
        'dayjs',
        '@sp-ui/utils',
        '@sp-ui/theme-chalk'
      ],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          exports: 'named',
          dir: './dist/es',
          preserveModules: true,
          inlineDynamicImports: false,
          preserveModulesRoot: '.',
          entryFileNames: '[name].mjs'
          // chunkFileNames: '[name]/[name]-[hash].mjs',
          // assetFileNames: '[name]/[name][extname]'
        },
        {
          format: 'cjs',
          exports: 'named',
          dir: './dist/cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: '.',
          inlineDynamicImports: false
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'sp-ui',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js` // 指定库文件名
    }
  },
  plugins: [
    vue(),
    jsx(),
    dts({
      entryRoot: './',
      outDir: ['./dist/es'],
      tsconfigPath: '../../tsconfig.json',
      exclude: ['node_modules', 'dist', 'gulpfile.ts', 'vite.config.ts']
    }),
    DefineOptions(),
    {
      name: 'style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.sass换成.css
          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.sass/g, '.css')
          });
        }
      }
    }
  ]
});
