declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    any
  >;
  export default component;
}

declare module '../../dist/components/es/index.mjs' {
  import { App } from 'vue';

  export const Button: {
    install(app: App): void;
  };

  const SPUI: {
    install(app: App): void;
  };

  export default SPUI;
}
