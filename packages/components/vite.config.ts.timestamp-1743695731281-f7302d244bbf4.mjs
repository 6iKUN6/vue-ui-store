// vite.config.ts
import { defineConfig } from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/vite@5.3.5_@types+node@22.5.1_sass@1.77.8/node_modules/vite/dist/node/index.js";
import vue from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.3.5_@types+node@22.5.1_sass@1.77.8__vue@3.4.35_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import jsx from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.3.5_@types+node@22.5.1_sass@1.77.8__vue@3.4.35_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/vite-plugin-dts@4.1.0_@types+node@22.5.1_rollup@4.35.0_typescript@5.5.4_vite@5.3.5_@types+node@22.5.1_sass@1.77.8_/node_modules/vite-plugin-dts/dist/index.mjs";
import DefineOptions from "file:///H:/Project/vue-ui-store/node_modules/.pnpm/unplugin-vue-define-options@1.4.9_rollup@4.35.0_vue@3.4.35_typescript@5.5.4_/node_modules/unplugin-vue-define-options/dist/vite.mjs";
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      external: [
        "vue",
        "async-validator",
        "dayjs",
        "@sp-ui/utils",
        "@sp-ui/theme-chalk"
      ],
      input: ["index.ts"],
      output: [
        {
          format: "esm",
          exports: "named",
          dir: "./dist/es",
          preserveModules: true,
          inlineDynamicImports: false,
          preserveModulesRoot: ".",
          entryFileNames: "[name].mjs"
          // chunkFileNames: '[name]/[name]-[hash].mjs',
          // assetFileNames: '[name]/[name][extname]'
        },
        {
          format: "cjs",
          exports: "named",
          dir: "./dist/cjs",
          entryFileNames: "[name].cjs",
          preserveModules: true,
          preserveModulesRoot: ".",
          inlineDynamicImports: false
        }
      ]
    },
    lib: {
      entry: ["../plugins/index.ts", "../utils/index.ts"],
      name: "sp-ui",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`
      // 指定库文件名
    }
  },
  plugins: [
    vue(),
    jsx(),
    dts({
      entryRoot: "./",
      outDir: ["./dist/es"],
      tsconfigPath: "../../tsconfig.json",
      exclude: ["node_modules", "dist", "gulpfile.ts", "vite.config.ts"]
    }),
    DefineOptions(),
    {
      name: "style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler = bundle[key];
          this.emitFile({
            type: "asset",
            fileName: key,
            //文件名名不变
            source: bundler.code.replace(/\.sass/g, ".css")
          });
        }
      }
    }
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxQcm9qZWN0XFxcXHZ1ZS11aS1zdG9yZVxcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJIOlxcXFxQcm9qZWN0XFxcXHZ1ZS11aS1zdG9yZVxcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9IOi9Qcm9qZWN0L3Z1ZS11aS1zdG9yZS9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQganN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IERlZmluZU9wdGlvbnMgZnJvbSAndW5wbHVnaW4tdnVlLWRlZmluZS1vcHRpb25zL3ZpdGUnO1xuXG4vLyAvLyBcdTgxRUFcdTUyQThcdTgzQjdcdTUzRDZcdTYyNDBcdTY3MDlcdTdFQzRcdTRFRjZcdTUxNjVcdTUzRTNcbi8vIGNvbnN0IGNvbXBvbmVudEVudHJpZXMgPSBnbG9iXG4vLyAgIC5zeW5jKCcqKi9pbmRleC50cycsIHtcbi8vICAgICBpZ25vcmU6IFsnbm9kZV9tb2R1bGVzLyoqJywgJ2Rpc3QvKionLCAnZ3VscGZpbGUudHMnLCAndml0ZS5jb25maWcudHMnXVxuLy8gICB9KVxuLy8gICAubWFwKGZpbGUgPT4gcmVzb2x2ZShfX2Rpcm5hbWUsIGZpbGUpKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ2FzeW5jLXZhbGlkYXRvcicsXG4gICAgICAgICdkYXlqcycsXG4gICAgICAgICdAc3AtdWkvdXRpbHMnLFxuICAgICAgICAnQHNwLXVpL3RoZW1lLWNoYWxrJ1xuICAgICAgXSxcbiAgICAgIGlucHV0OiBbJ2luZGV4LnRzJ10sXG4gICAgICBvdXRwdXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZvcm1hdDogJ2VzbScsXG4gICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcbiAgICAgICAgICBkaXI6ICcuL2Rpc3QvZXMnLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICBpbmxpbmVEeW5hbWljSW1wb3J0czogZmFsc2UsXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogJy4nLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLm1qcydcbiAgICAgICAgICAvLyBjaHVua0ZpbGVOYW1lczogJ1tuYW1lXS9bbmFtZV0tW2hhc2hdLm1qcycsXG4gICAgICAgICAgLy8gYXNzZXRGaWxlTmFtZXM6ICdbbmFtZV0vW25hbWVdW2V4dG5hbWVdJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZm9ybWF0OiAnY2pzJyxcbiAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxuICAgICAgICAgIGRpcjogJy4vZGlzdC9janMnLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmNqcycsXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICcuJyxcbiAgICAgICAgICBpbmxpbmVEeW5hbWljSW1wb3J0czogZmFsc2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogWycuLi9wbHVnaW5zL2luZGV4LnRzJywgJy4uL3V0aWxzL2luZGV4LnRzJ10sXG4gICAgICBuYW1lOiAnc3AtdWknLFxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICAgIGZpbGVOYW1lOiBmb3JtYXQgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AgLy8gXHU2MzA3XHU1QjlBXHU1RTkzXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAganN4KCksXG4gICAgZHRzKHtcbiAgICAgIGVudHJ5Um9vdDogJy4vJyxcbiAgICAgIG91dERpcjogWycuL2Rpc3QvZXMnXSxcbiAgICAgIHRzY29uZmlnUGF0aDogJy4uLy4uL3RzY29uZmlnLmpzb24nLFxuICAgICAgZXhjbHVkZTogWydub2RlX21vZHVsZXMnLCAnZGlzdCcsICdndWxwZmlsZS50cycsICd2aXRlLmNvbmZpZy50cyddXG4gICAgfSksXG4gICAgRGVmaW5lT3B0aW9ucygpLFxuICAgIHtcbiAgICAgIG5hbWU6ICdzdHlsZScsXG4gICAgICBnZW5lcmF0ZUJ1bmRsZShjb25maWcsIGJ1bmRsZSkge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYnVuZGxlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIGNvbnN0IGJ1bmRsZXI6IGFueSA9IGJ1bmRsZVtrZXkgYXMgYW55XTtcbiAgICAgICAgICAvL3JvbGx1cFx1NTE4NVx1N0Y2RVx1NjVCOVx1NkNENSxcdTVDMDZcdTYyNDBcdTY3MDlcdThGOTNcdTUxRkFcdTY1ODdcdTRFRjZjb2RlXHU0RTJEXHU3Njg0LnNhc3NcdTYzNjJcdTYyMTAuY3NzXG4gICAgICAgICAgdGhpcy5lbWl0RmlsZSh7XG4gICAgICAgICAgICB0eXBlOiAnYXNzZXQnLFxuICAgICAgICAgICAgZmlsZU5hbWU6IGtleSwgLy9cdTY1ODdcdTRFRjZcdTU0MERcdTU0MERcdTRFMERcdTUzRDhcbiAgICAgICAgICAgIHNvdXJjZTogYnVuZGxlci5jb2RlLnJlcGxhY2UoL1xcLnNhc3MvZywgJy5jc3MnKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBdXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlQsU0FBUyxvQkFBb0I7QUFDMVYsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxtQkFBbUI7QUFTMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBTyxDQUFDLFVBQVU7QUFBQSxNQUNsQixRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsU0FBUztBQUFBLFVBQ1QsS0FBSztBQUFBLFVBQ0wsaUJBQWlCO0FBQUEsVUFDakIsc0JBQXNCO0FBQUEsVUFDdEIscUJBQXFCO0FBQUEsVUFDckIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLFFBR2xCO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsU0FBUztBQUFBLFVBQ1QsS0FBSztBQUFBLFVBQ0wsZ0JBQWdCO0FBQUEsVUFDaEIsaUJBQWlCO0FBQUEsVUFDakIscUJBQXFCO0FBQUEsVUFDckIsc0JBQXNCO0FBQUEsUUFDeEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsT0FBTyxDQUFDLHVCQUF1QixtQkFBbUI7QUFBQSxNQUNsRCxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxZQUFVLFNBQVMsTUFBTTtBQUFBO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixXQUFXO0FBQUEsTUFDWCxRQUFRLENBQUMsV0FBVztBQUFBLE1BQ3BCLGNBQWM7QUFBQSxNQUNkLFNBQVMsQ0FBQyxnQkFBZ0IsUUFBUSxlQUFlLGdCQUFnQjtBQUFBLElBQ25FLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxJQUNkO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixlQUFlLFFBQVEsUUFBUTtBQUM3QixjQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU07QUFDL0IsbUJBQVcsT0FBTyxNQUFNO0FBQ3RCLGdCQUFNLFVBQWUsT0FBTyxHQUFVO0FBRXRDLGVBQUssU0FBUztBQUFBLFlBQ1osTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBO0FBQUEsWUFDVixRQUFRLFFBQVEsS0FBSyxRQUFRLFdBQVcsTUFBTTtBQUFBLFVBQ2hELENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
