import { DefineComponent, ExtractPropTypes, PropType } from 'vue';

export const dataSourcesType = {
  type: Array
};

export const virtualScrollProps = {
  dataSources: {
    //渲染数据源
    type: Array,
    required: true,
    default: () => []
  },
  dataKey: {
    //每项数据表示
    type: String,
    require: true
  },
  keeps: {
    type: Number,
    default: 30
  },
  estimateSize: {
    //定高是每个个体的高度
    type: Number,
    default: 80
  },
  dataComponent: {
    type: [Object, Function] as PropType<
      DefineComponent<{ 0: any }, { 0: any }, any>
    >,
    require: true
  }
} as const;

export type VirtualScrollProps = Partial<
  ExtractPropTypes<typeof virtualScrollProps>
>;

export type RangeOptions = {
  start: number;
  end: number;
  padFront: number;
  padBehind: number;
};

export type VirtualOptions = {
  keeps: number;
  buffer: number;
  estimateSize: number;
  uniqueIds: string[];
};

export type updateType = (_range: RangeOptions) => void;

export const virtualItemProps = {
  uniqueKey: {
    type: [String, Number] as PropType<string | number>
  },
  source: {
    type: Object,
    require: true
  },
  component: {
    type: [Object, Function] as PropType<
      DefineComponent<{ 0: any }, { 0: any }, any>
    >,
    require: true
  },
  onItemResize: {
    type: Function
  }
};

export type VirtualItemProps = Partial<
  ExtractPropTypes<typeof virtualItemProps>
>;
