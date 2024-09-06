# Icon图标

sp-ui推荐使用xicons作为图标库

```powershell
# 安装xicons
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<script setup lang="ts">
import {CashOutline} from '@vicons/ionicons5'
</script>

<sp-icon color="red" size="40">
  <CashOutline />
</sp-icon>
<sp-icon color="green" size="40">
  <CashOutline />
</sp-icon>
<sp-icon color="blue" size="40">
  <CashOutline />
</sp-icon>

<div>
  <sp-icon color="red" size="60">
    <CashOutline />
  </sp-icon>
  <sp-icon color="green" size="60">
    <CashOutline />
  </sp-icon>
  <sp-icon color="blue" size="60">
    <CashOutline />
  </sp-icon>
</div>

```vue
<script setup lang="ts">
import { Cashoutline } from '@vicons/ionicons5';
</script>
<template>
  <sp-icon color="red" size="40">
    <Cashoutline />
  </sp-icon>
</template>
```

## API

### Icon Props

| 名称  | 类型           | 默认值    | 说明     |
| ----- | -------------- | --------- | -------- |
| color | string         | undefined | 图标颜色 |
| size  | number\|string | undefined | 图标大小 |
