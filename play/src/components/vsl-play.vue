<template>
  <div style="margin-top: 50px">
    <sp-virtual-scroll-list
      class="virtual-list"
      :data-sources="items"
      data-key="id"
      :keeps="30"
      :estimateSize="80"
      :dataComponent="item"
    >
    </sp-virtual-scroll-list>
  </div>
</template>

<script setup lang="ts">
import { Random } from 'mockjs';
import { ref } from 'vue';

import item from './list-item.vue';

const totalCount = 100;
interface DataType {
  id: number | string;
  name: string;
  desc: string;
  index: number;
}
const data: Array<DataType> = [];
for (let i = 0; i < totalCount; i++) {
  data.push({
    id: i,
    name: Random.name(),
    desc: Random.csentence(2, 120),
    index: i
  });
}

const items = ref(data);
</script>

<style scoped lang="scss">
.virtual-list {
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  border: 1px solid #ccc;
}
</style>
