<template>
  <div :class="bem.b()">
    <!-- 模板有自带的优化，如果自定义的比较强的话，我们采用tsx写 -->
    <sp-virtual-list :items="flattenTree" :remain="8" :size="35">
      <template #default="{ node }">
        <sp-tree-node
          :key="node.key"
          :node="node"
          :expanded="isExpanded(node)"
          :loading-keys="loadingKeysRef"
          :selectedKeys="selectedKeysRef"
          :show-checkbox="true"
          :checked="isChecked(node)"
          :disabled="isDisabled(node)"
          :indeterminate="isIndeterminate(node)"
          @toggle="toggleExpand"
          @select="handleSelect"
          @check="toggleCheck"
        >
        </sp-tree-node
      ></template>
    </sp-virtual-list>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, useSlots, watch } from 'vue';
import SpVirtualList from '@vue-ui-store/components/virtual-list';
import { createNamespace } from '@vue-ui-store/utils/create';

import {
  Key,
  treeEmits,
  treeInjectKey,
  TreeNode,
  TreeOption,
  treeProps
} from './tree';
import SpTreeNode from './treeNode.vue';

const bem = createNamespace('tree');

defineOptions({
  name: 'sp-tree'
});

const props = defineProps(treeProps);
//有了props要对用户的数据进行格式化，格式化一个固定的结果
//label、key，children
const tree = ref<TreeNode[]>([]);

//1.用来获取对应的字段
function createOptions(key: string, label: string, children: string) {
  return {
    getKey(node: TreeOption) {
      return node[key] as string; //用户传递的key
    },
    getLabel(node: TreeOption) {
      return node[label] as string; //用户传递的label
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeOption[]; //用户传递的children
    }
  };
}

const treeOptions = createOptions(
  props.keyField,
  props.labelField,
  props.childrenField
);

//2.将传入的数据进行格式化操作
function createTree(data: TreeOption[], parent: TreeNode | null = null) {
  function tarversal(data: TreeOption[], parent: TreeNode | null = null) {
    //递归树，将用户传入的键名格式化为treeNode
    return data.map(node => {
      const children = treeOptions.getChildren(node) || [];
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children: [], //默认空数组
        rawNode: node,
        level: parent ? parent.level + 1 : 0, //树层级
        disabled: !!node.disabled,
        isLeaf: node.isLeaf ?? children.length == 0,
        parentKey: parent?.key || null
      };
      if (children.length > 0) {
        //递归子数字
        treeNode.children = tarversal(children, treeNode);
      }

      return treeNode;
    });
  }

  const result: TreeNode[] = tarversal(data, parent);
  return result;
}

//监控数据变化，调用格式化方法
watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data);
    // console.log(tree.value)
  },
  {
    immediate: true
  }
);
//将树拍平，点击展开，用于虚拟滚动
//默认

//需要展开的key有哪些
const expandedKeysSet = ref(new Set(props.defaultExpandedKeys));

//拍平树，这里需要依赖，当前展开的节点，动态的计算
const flattenTree = computed(() => {
  const expandedKeys = expandedKeysSet.value;
  const flattenNodes: TreeNode[] = []; //这个就是拍平后的结果
  const nodes = tree.value || []; //格式化后的数据
  const stack: TreeNode[] = []; //用于遍历的树 [40,30,31,32,41]

  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i]); //倒序放入栈中
  }

  //深度遍历
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    flattenNodes.push(node);
    if (expandedKeys.has(node.key)) {
      const children = node.children; //[30,31,32]
      if (children) {
        for (let i = node.children.length - 1; i >= 0; --i) {
          stack.push(node.children[i]);
        }
      }
    }
  }

  // console.log('nodes', nodes);
  // console.log('flattenNodes', flattenNodes);

  return flattenNodes;
});

function isExpanded(node: TreeNode): boolean {
  return expandedKeysSet.value.has(node.key);
}

//折叠功能
function collpase(node: TreeNode) {
  expandedKeysSet.value.delete(node.key);
}

const loadingKeysRef = ref(new Set<Key>());

function triggerLoading(node: TreeNode) {
  //这个节点需要异步加载
  if (!node.children.length && !node.isLeaf) {
    //如果没有加载过这个节点，就加载
    const loadingKeys = loadingKeysRef.value;
    if (!loadingKeys.has(node.key)) {
      loadingKeys.add(node.key);
      const onLoad = props.onLoad;
      if (onLoad) {
        onLoad(node.rawNode).then(children => {
          //修改原来的节点
          node.rawNode.children = children;
          //更新自定义的node
          node.children = createTree(children, node);
          loadingKeys.delete(node.key); //加载完成后删除等待集合的子节点
        });
      }
    }
  }
}

//展开功能
function expand(node: TreeNode) {
  expandedKeysSet.value.add(node.key);

  //展示时异步加载子节点，加载逻辑
  triggerLoading(node);
}

//切换
function toggleExpand(node: TreeNode) {
  const expandedKeys = expandedKeysSet.value;
  if (expandedKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
    //不收齐正在加载的节点
    collpase(node);
  } else {
    expand(node);
  }
}

//实现选中
const emit = defineEmits(treeEmits);
const selectedKeysRef = ref<Key[]>([]);
watch(
  () => props.selectedKeys,
  value => {
    if (value) {
      selectedKeysRef.value = value;
    }
  },
  {
    immediate: true
  }
);

//处理选中的节点
function handleSelect(node: TreeNode) {
  if (!props.selectable) return;
  let keys = Array.from(selectedKeysRef.value);
  if (props.multiple) {
    //多选
    const index = keys.findIndex(key => key === node.key);
    if (index > -1) {
      keys.splice(index, 1);
    } else {
      keys.push(node.key);
    }
  } else {
    //单选
    if (keys.includes(node.key)) {
      keys = [];
    } else {
      keys = [node.key];
    }
  }

  emit('update:selectedKeys', keys);
}

provide(treeInjectKey, {
  slots: useSlots()
});

//checkbox模块
const checkedKeysRefs = ref(new Set(props.defaultCheckedKeys));

function isChecked(node: TreeNode) {
  return checkedKeysRefs.value.has(node.key);
}

function isDisabled(node: TreeOption) {
  return !!node.disabled;
}

//半选集合
const indeterminateRefs = ref<Set<Key>>(new Set());

function isIndeterminate(node: TreeNode) {
  return indeterminateRefs.value.has(node.key);
}

//从外往里选择
function toggle(node: TreeNode, checked: boolean) {
  if (!node) return;
  const checkedKeys = checkedKeysRefs.value;
  if (checked) {
    //选中时去掉半选
    indeterminateRefs.value.delete(node.key);
  }

  //维护当前的key集合
  checkedKeys[checked ? 'add' : 'delete'](node.key);
  const children = node.children;
  if (children) {
    children.forEach(childNode => {
      if (!childNode.disabled) {
        toggle(childNode, checked);
      }
    });
  }

  // console.log('checkedKeys', checkedKeys);
}

function fineNode(key: Key) {
  return flattenTree.value.find(node => node.key === key);
}

function updateCheckedKeys(node: TreeNode) {
  //里到外
  if (node.parentKey) {
    const parentNode = fineNode(node.parentKey);
    if (parentNode) {
      let allChecked = true; //默认子项应该全选
      let hasChecked = false; //子项有没有被选中

      const nodes = parentNode.children; //通过父项一个个检查子项
      for (const node of nodes) {
        if (checkedKeysRefs.value.has(node.key)) {
          hasChecked = true; //子节点被选中了
        } else if (indeterminateRefs.value.has(node.key)) {
          allChecked = false;
          hasChecked = true;
        } else {
          allChecked = false;
          hasChecked = false;
        }
      }

      if (allChecked) {
        checkedKeysRefs.value.add(parentNode.key);
        indeterminateRefs.value.delete(parentNode.key);
      } else if (hasChecked) {
        checkedKeysRefs.value.delete(parentNode.key);
        indeterminateRefs.value.add(parentNode.key);
      } else {
        //子项全空，父项空
        checkedKeysRefs.value.delete(parentNode.key);
        indeterminateRefs.value.delete(parentNode.key);
      }

      //递归继续往上
      updateCheckedKeys(parentNode);
    }
  }
}

function toggleCheck(node: TreeNode, checked: boolean | number | string) {
  toggle(node, !!checked);
  updateCheckedKeys(node);
}

onMounted(() => {
  checkedKeysRefs.value.forEach((key: Key) => {
    const targetKey = fineNode(key);
    if (targetKey) toggleCheck(targetKey, true);
  });
});
</script>

<style scoped></style>
