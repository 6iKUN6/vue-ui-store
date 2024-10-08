<script setup lang="ts">
import { computed } from 'vue';
import { createNamespace } from '@sp-ui/utils/create';
import SpIcon from '@sp-ui/components/src/icon';
import SpCheckbox from '@sp-ui/components/src/checkbox';
import Switcher from '@sp-ui/components/src/internal-icon/Switcher';
import Loading from '@sp-ui/components/src/internal-icon/Loading';

import SpTreeNodeContent from './tree-node-content';
import { treeNodeEmits, treeNodeProps } from './tree';

const bem = createNamespace('tree-node');
const props = defineProps(treeNodeProps);
const emits = defineEmits(treeNodeEmits);

function handleExpand() {
  emits('toggle', props.node);
}

const isLoading = computed(() => {
  return props.loadingKeys?.has(props.node.key) ?? false;
});
const isSelected = computed(() => {
  return props.selectedKeys.includes(props.node.key);
});

function handleSelected() {
  if (props.node.disabled) return;
  emits('select', props.node);
}

function handleCheckChange(val: boolean | number | string) {
  emits('check', props.node, val);
}
</script>

<template>
  <div
    :class="[
      bem.b(),
      bem.is('selected', isSelected),
      bem.is('disabled', node.disabled)
    ]"
  >
    <div
      :class="[bem.e('content')]"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        :class="[
          bem.e('expand-icon'),
          { expanded: expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf)
        ]"
        @click="handleExpand"
      >
        <sp-icon size="25" color="pink">
          <Loading v-if="isLoading" />
          <Switcher v-else />
        </sp-icon>
      </span>
      <sp-checkbox
        v-if="showCheckbox"
        :model-value="checked"
        :disabaled="disabled"
        :indeterminate="indeterminate"
        @change="handleCheckChange"
      ></sp-checkbox>
      <span @click="handleSelected" :class="[bem.e('label')]">
        <SpTreeNodeContent :node="node!"></SpTreeNodeContent>
      </span>
    </div>
  </div>
</template>

<style scoped></style>
