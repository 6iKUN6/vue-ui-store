// vite.config.ts
import { defineConfig } from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/vite@5.3.5_@types+node@22.5.1_sass@1.77.8/node_modules/vite/dist/node/index.js";
import path from "path";
import vue from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.3.5_@types+node@22.5.1_sass@1.77.8__vue@3.4.35_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Defineoptions from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/unplugin-vue-define-options@1.4.9_rollup@4.35.0_vue@3.4.35_typescript@5.5.4_/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import jsx from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.3.5_@types+node@22.5.1_sass@1.77.8__vue@3.4.35_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { viteGitRevisionInfoPlugin } from "file:///H:/Project/vue-ui-store/dist/plugins/es/index.mjs";
var __vite_injected_original_dirname = "H:\\Project\\vue-ui-store\\play";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [
      vue(),
      Defineoptions(),
      jsx(),
      viteGitRevisionInfoPlugin("serve")
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        components: path.resolve(__vite_injected_original_dirname, "./src/components")
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
      extensions: [".js", ".ts", ".jsx", ".tsx", ".vue"]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxQcm9qZWN0XFxcXHZ1ZS11aS1zdG9yZVxcXFxwbGF5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJIOlxcXFxQcm9qZWN0XFxcXHZ1ZS11aS1zdG9yZVxcXFxwbGF5XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9IOi9Qcm9qZWN0L3Z1ZS11aS1zdG9yZS9wbGF5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCBEZWZpbmVvcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJztcclxuaW1wb3J0IGpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcclxuLy8gaW1wb3J0IHsgZ2l0UmV2aXNpb25JbmZvUGx1Z2luIH0gZnJvbSAnQHNwLXVpL3BsdWdpbnMvc3JjL2NoZWNrVmVyc2lvblBsdWdpbi9naXRSZXZpc2lvbic7XHJcbi8vIGltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcclxuaW1wb3J0IHsgdml0ZUdpdFJldmlzaW9uSW5mb1BsdWdpbiB9IGZyb20gJ3NwLXVpLXN0b3JlL3BsdWdpbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgRGVmaW5lb3B0aW9ucygpLFxyXG4gICAgICBqc3goKSxcclxuICAgICAgdml0ZUdpdFJldmlzaW9uSW5mb1BsdWdpbignc2VydmUnKVxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzJylcclxuICAgICAgICAvLyBcdTYzMDdcdTU0MTFcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODRcdTRFQTdcdTcyNjlcclxuICAgICAgICAvLyAnQHNwLXVpL2NvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoXHJcbiAgICAgICAgLy8gICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgLy8gICAnLi4vcGFja2FnZXMvY29tcG9uZW50cy9kaXN0J1xyXG4gICAgICAgIC8vICksXHJcbiAgICAgICAgLy8gJ0BzcC11aS90aGVtZS1jaGFsayc6IHBhdGgucmVzb2x2ZShcclxuICAgICAgICAvLyAgIF9fZGlybmFtZSxcclxuICAgICAgICAvLyAgICcuLi9wYWNrYWdlcy90aGVtZS1jaGFsay9kaXN0J1xyXG4gICAgICAgIC8vIClcclxuICAgICAgfSxcclxuICAgICAgZXh0ZW5zaW9uczogWycuanMnLCAnLnRzJywgJy5qc3gnLCAnLnRzeCcsICcudnVlJ11cclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4USxTQUFTLG9CQUFvQjtBQUMzUyxPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUdoQixTQUFTLGlDQUFpQztBQVAxQyxJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUNoQyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixjQUFjO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSiwwQkFBMEIsT0FBTztBQUFBLElBQ25DO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsUUFDcEMsWUFBWSxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVeEQ7QUFBQSxNQUNBLFlBQVksQ0FBQyxPQUFPLE9BQU8sUUFBUSxRQUFRLE1BQU07QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
