<template>
  <div class="color-picker-demo">
    <h3>颜色选择器示例</h3>
    <div class="demo-item">
      <h4>基础用法</h4>
      <sp-color-picker v-model="color1" />
      <span class="value">当前值：{{ color1 }}</span>
    </div>

    <div class="demo-item">
      <h4>不同尺寸</h4>
      <sp-color-picker v-model="color2" size="small" />
      <sp-color-picker v-model="color2" />
      <sp-color-picker v-model="color2" size="large" />
      <span class="value">当前值：{{ color2 }}</span>
    </div>

    <div class="demo-item">
      <h4>支持透明度</h4>
      <sp-color-picker v-model="color3" show-alpha />
      <span class="value">当前值：{{ color3 }}</span>
    </div>

    <div class="demo-item">
      <h4>禁用状态</h4>
      <sp-color-picker v-model="color4" disabled />
    </div>

    <div class="demo-item">
      <h4>只显示色块</h4>
      <sp-color-picker v-model="color5" :show-value="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SpColorPicker from '@sp-ui/components/color-picker';
// import '@sp-ui/theme-chalk/src/color-picker.scss';

const color1 = ref('#409EFF');
const color2 = ref('#67C23A');
const color3 = ref('#E6A23C80');
const color4 = ref('#F56C6C');
const color5 = ref('#000');
</script>

<style lang="scss" scoped>
.color-picker-demo {
  padding: 20px;
}

.demo-item {
  margin-bottom: 24px;
}

.demo-item h4 {
  margin: 8px 0;
  font-size: 14px;
  color: #666;
}

.value {
  margin-left: 16px;
  font-size: 14px;
  color: #666;
  vertical-align: middle;
}

:deep(.sp-color-picker) {
  vertical-align: middle;
}

:deep(.sp-color-picker + .sp-color-picker) {
  margin-left: 16px;
}
</style>
