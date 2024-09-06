import type { DefineComponent, Plugin, App } from 'vue';

export type SFCWithInstall<
  T extends DefineComponent<{ 0: any }, { 0: any }, any>
> = T & Plugin;

export function withInstall<
  T extends DefineComponent<{ 0: any }, { 0: any }, any>
>(comp: T): SFCWithInstall<T> {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp);
  };

  return comp as SFCWithInstall<T>;
}
