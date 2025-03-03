import { defineComponent, onBeforeMount, ref } from 'vue';
import { createNamespace } from '@sp-ui/utils';

import VirtualItem from './virtual-item';
import { RangeOptions, virtualScrollProps } from './virtual-props';
import { initVirtual } from './virtual-helper';

export default defineComponent({
  name: 'sp-virtual-scroll-list',
  props: virtualScrollProps,
  setup: props => {
    //用上下padding撑开
    //需要先定义一下数据的显示范围，还有上下padding的大小
    const bem = createNamespace('virtual-scroll-list');
    const range = ref<RangeOptions | null>(null);

    const update = (newRange: RangeOptions) => {
      range.value = newRange;
    };

    const getUniqueIdFromDataSource = (): string[] => {
      const { dataSources, dataKey } = props;
      return dataSources.map(dataSource => (dataSource as any)[dataKey!]);
    };

    let virtual: ReturnType<typeof initVirtual>;
    const installVirtual = () => {
      virtual = initVirtual(
        {
          keeps: props.keeps,
          buffer: Math.round(props.keeps / 3),
          uniqueIds: getUniqueIdFromDataSource(),
          estimateSize: props.estimateSize
        },
        update
      );
    };

    onBeforeMount(() => {
      //计算start和end
      installVirtual();
    });

    function genRenderComp() {
      const slots = [];
      const { start, end } = range.value!;
      const { dataSources, dataComponent, dataKey } = props;

      for (let index = start; index <= end; index++) {
        const dataSource = dataSources[index];
        const uniqueKey = (dataSource as any)[dataKey!];
        if (dataSource) {
          slots.push(
            <VirtualItem
              uniqueKey={uniqueKey}
              source={dataSource}
              component={dataComponent}
              onItemResize={onVirtualItemResize}
            ></VirtualItem>
          );
        }
      }

      return slots;
    }

    const root = ref<HTMLElement | null>();

    function onVirtualItemResize(id: number | string, size: number) {
      virtual.saveSize(id, size);
    }

    function onScroll() {
      if (root.value) {
        const offset = root.value.scrollTop;
        virtual.handleScroll(offset);
      }
    }

    return () => {
      const { padBehind, padFront } = range.value!;

      //应该考虑是横向的还是纵向的
      const paddingStyle = {
        padding: `${padFront}px 0 ${padBehind}px 0`
      };
      return (
        <div class={[bem.b()]} onScroll={onScroll} ref={root}>
          <div style={paddingStyle}>{genRenderComp()}</div>
        </div>
      );
    };
  }
});
