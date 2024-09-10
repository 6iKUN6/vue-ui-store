import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['vue', 'async-validator', 'dayjs'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          exports: 'named',
          dir: './dist/es',
          entryFileNames: '[name].es.js' // 指定入口文件名模板
        },
        {
          format: 'umd',
          name: 'SpUI',
          exports: 'named',
          dir: './dist/umd',
          globals: {
            vue: 'Vue'
          },
          entryFileNames: '[name].umd.js' // 指定入口文件名模板
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'sp-ui',
      fileName: format => `sp-ui.${format}.js` // 指定库文件名
    }
  },
  plugins: [
    vue(),
    jsx(),
    dts({
      entryRoot: 'src',
      outDir: ['./dist/es/src', './dist/umd/src'],
      tsconfigPath: '../../tsconfig.json'
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
