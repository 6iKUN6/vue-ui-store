import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
  build: {
    //minify: false,
    rollupOptions: {
      external: ['vue', 'async-validator', 'dayjs'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          // preserveModules: true,
          exports: 'named',
          dir: './dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          // preserveModules: true,
          exports: 'named',
          dir: './dist/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'sp-ui'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      outDir: ['./dist/es/src', './dist/lib/src'],
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
