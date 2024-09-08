import type { Plugin, App } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(comp: T): SFCWithInstall<T> {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp as any);
  };

  return comp as SFCWithInstall<T>;
}
