<script setup lang="ts">
import { ref } from 'vue';
import { AddCircle } from '@vicons/ionicons5';
import { Key, TreeOption } from '@vue-ui-store/components/src/tree/src/tree';

import formPlay from '@/components/form-play.vue';
import uploadPlay from '@/components/upload-play.vue';
// import calendarPlay from '@/components/calendar-play.vue';
import vslPlay from '@/components/vsl-play.vue';

function createData(level = 4, parenKey = ''): any {
  if (!level) return [];
  const arr = new Array(6 - level).fill(0);
  return arr.map((_, idx: number) => {
    const key = parenKey + level + idx;
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    };
  });
}

function createLabel(level: number): string {
  if (level === 4) return '道生一';
  if (level === 3) return '一生二';
  if (level === 2) return '二生三';
  if (level === 1) return '三生万物';
  return '';
}

// function createData() {
//   return [
//     {
//       label: nextLabel(),
//       key: 1,
//       isLeaf: false //这里false表示点击的时候动态加载子节点
//     },
//     {
//       label: nextLabel(),
//       key: 2,
//       isLeaf: false
//     }
//   ];
// }

function nextLabel(currentLabel?: string | number): string {
  if (!currentLabel) return 'Out of Tao , One is born';
  if (currentLabel === 'Out of Tao , One is born') return 'Out of One, Two';
  if (currentLabel === 'Out of One, Two') return 'Out of Two, Three';
  if (currentLabel === 'Out of Two, Three')
    return 'Out of Three, Three the created universe';
  if (currentLabel === 'Out of Three, Three the created universe')
    return 'Out of Tao , One is born';
  return '';
}

const data = ref(createData());
// const data = ref<TreeOption[]>([
//   {
//     key: '0',
//     label: '0',
//     children: [
//       {
//         key: '0-0',
//         label: '0-0',
//         children: [
//           {
//             label: '0-1-0',
//             key: '0-1-0',
//             disabled: true
//           },
//           {
//             label: '0-1-1',
//             key: '0-1-1'
//           }
//         ]
//       }
//     ]
//   }
// ]);

const handleLoad = (node: TreeOption) => {
  //内部肯定需要将展开的节点传递给我
  return new Promise<TreeOption[]>(resolve => {
    setTimeout(() => {
      resolve([
        //这个数据会作为当期你展开的node属性的children1属性
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ]);
    }, 1000);
  });
};

const value = ref<Key[]>([]);

const inpV = ref<string>('');
</script>

<template>
  <div>{{ value }}</div>
  <sp-icon :color="'red'" :size="20">
    <AddCircle />
  </sp-icon>
  <sp-tree
    :data="data"
    label-field="label"
    :on-load="handleLoad"
    v-model:selected-keys="value"
    multiple
    :selectable="true"
    show-checkbox
    :default-checkedKeys="['40', '41']"
  >
    <template #default="{ node }">
      {{ `${node.key}-${node.label}` }}
    </template>
  </sp-tree>
  <sp-button size="medium" type="primary" round icon-placement="left">
    按钮
    <template #icon>
      <sp-icon>
        <AddCircle></AddCircle>
      </sp-icon>
    </template>
  </sp-button>

  <!-- 输入框 -->
  <div>{{ `input-value:${inpV}` }}</div>
  <sp-input v-model="inpV" :show-password="true" :clearable="true">
    <template #prepend>cxk</template>
    <template #prefix>
      <sp-icon>
        <AddCircle />
      </sp-icon>
    </template>
    <template #suffix>
      <sp-icon>
        <AddCircle />
      </sp-icon>
    </template>
    <template #append>鸡哥</template>
  </sp-input>
  <form-play style="margin-top: 20px"></form-play>
  <upload-play style="margin-top: 20px"></upload-play>
  <!-- <div style="width: 600px">
    <calendar-play style="margin-top: 20px"></calendar-play>
  </div> -->

  <div>
    <vsl-play></vsl-play>
  </div>
</template>

<style scoped></style>
