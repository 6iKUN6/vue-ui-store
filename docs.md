### monorepo大仓

### sass+bem样式方案

### vue模块拓展，方便在vue中搭配volar使用

```js
declare module 'vue' {
    export interface GlobalComponents {//接口自动合并

    }
}
```

#### form表单校验基于async-validator拓展

#### 国内镜像

```bash
npm config set registry https://registry.npmmirror.com
```

#### 发布前将自己的npm镜像源改为npm的https://registry.npmjs.org

```bash
npm config set registry https://registry.npmjs.org
```
