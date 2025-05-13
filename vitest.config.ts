import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    environment: 'happy-dom',
    globals: true,
    deps: {
      inline: ['@sp-ui/utils']
    },
    coverage: {
      provider: 'v8', // 或者使用 'istanbul'
      reporter: ['text', 'json', 'html']
    }
  }
});
