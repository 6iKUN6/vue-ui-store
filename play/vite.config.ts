import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Defineoptions from 'unplugin-vue-define-options/vite';
import jsx from '@vitejs/plugin-vue-jsx';
// import { gitRevisionInfoPlugin } from '@sp-ui/plugins/src/checkVersionPlugin/gitRevision';
// import eslintPlugin from 'vite-plugin-eslint';
import { viteGitRevisionInfoPlugin } from 'sp-ui-store/plugins';

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      Defineoptions(),
      jsx(),
      viteGitRevisionInfoPlugin('serve')
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components')
        // 'sp-ui-store': path.resolve(__dirname, '../dist')
        // 'sp-ui-store': path.resolve(__dirname, '../')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue']
    }
  };
});
