import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Defineoptions from 'unplugin-vue-define-options/vite';
import jsx from '@vitejs/plugin-vue-jsx';
// import { gitRevisionInfoPlugin } from '@sp-ui/plugins/src/checkVersionPlugin/gitRevision';
// import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(() => {
  return {
    plugins: [vue(), Defineoptions(), jsx()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components')
        // 指向打包后的产物
        // '@sp-ui/components': path.resolve(
        //   __dirname,
        //   '../packages/components/dist'
        // ),
        // '@sp-ui/theme-chalk': path.resolve(
        //   __dirname,
        //   '../packages/theme-chalk/dist'
        // )
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue']
    }
  };
});
