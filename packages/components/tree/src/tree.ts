import { ExtractPropTypes, InjectionKey, PropType, SetupContext } from 'vue';

export type Key = string | number;

export interface TreeNode extends Required<TreeOption> {
  level: number;
  rawNode: TreeOption;
  children: TreeNode[];
  isLeaf: boolean; //是否是叶子节点
  parentKey: Key | null;
}

export interface TreeOption {
  label: Key;
  key: Key;
  children?: TreeOption[];
  isLeaf?: boolean;
  disabled?: boolean;
  [key: string]: unknown; //任意接口
}

export const treeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  onLoad: {
    type: Function as PropType<(_node: TreeOption) => Promise<TreeOption[]>>
  },
  selectedKeys: {
    type: Array as PropType<Key[]>
  },
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  }
} as const;

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  },
  expanded: {
    type: Boolean,
    default: true
  },
  loadingKeys: {
    type: Object as PropType<Set<Key>>
    // requires: true
  },
  selectedKeys: {
    type: Array as PropType<Array<Key>>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  }
} as const;

export const treeEmits = {
  //内部发射的事件用来同步响应式数据
  'update:selectedKeys': (keys: Key[]) => keys
};
export const treeNodeEmits = {
  toggle: (node: TreeNode) => node,
  select: (node: TreeNode) => node,
  check: (_node: TreeNode, val: boolean | number | string) =>
    typeof val === 'boolean'
};

// export type TreeEmits = typeof treeEmits;

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>;
//Partial包装成可选
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;

export interface TreeContext {
  slots: SetupContext['slots'];
  // emit: SetupContext<typeof treeEmits>['emit'];
  // attrs: SetupContext['attrs'];
}

//此变量作为提供出去的属性
export const treeInjectKey: InjectionKey<TreeContext> = Symbol('tree-context');

export const treeNodeContentProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  }
};
