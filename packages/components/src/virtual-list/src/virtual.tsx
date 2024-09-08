import {
  computed,
  defineComponent,
  ExtractPropTypes,
  onMounted,
  reactive,
  ref,
  watch
} from 'vue';
import { createNamespace } from '@vue-ui-store/utils/create';

export const virtualProps = {
  size: {
    type: Number,
    default: 35
  },
  //可看到的元素个数
  remain: {
    type: Number,
    default: 8
  },
  items: {
    type: Array,
    default: () => []
  }
} as const;

export type VirtualProps = Partial<ExtractPropTypes<typeof virtualProps>>;

export default defineComponent({
  name: 'SpVirtualList',
  props: virtualProps,
  setup(props, { slots }) {
    const bem = createNamespace('vl');
    const wrapperRef = ref<HTMLElement>();
    const barRef = ref<HTMLElement>();
    const state = reactive({
      //计算显示的区域
      start: 0,
      end: props.remain
    });

    const prev = computed(() => Math.min(state.start, props.remain)); //上补0-8
    const next = computed(() =>
      Math.min(props.remain, props.items.length - state.end)
    ); //下补0-8

    //这里应该多展示 上八条和下八条 保证用户在快速滚动时候 不会白屏
    const visibleData = computed(() => {
      //裁剪显示的数据,上下补
      return props.items.slice(
        state.start - prev.value,
        state.end + next.value
      );
    });

    const offset = ref<number>(0);
    const handleScroll = () => {
      //根据滚动距离来算，过去了几个数据
      const scrollTop = wrapperRef.value!.scrollTop;
      state.start = Math.floor(scrollTop / props.size); //划过去了多少个

      state.end = state.start + props.remain;
      offset.value = state.start * props.size - props.size * prev.value; //滚过去了多少个
    };

    //计算列表高度
    const initWrapper = () => {
      wrapperRef.value!.style.height = props.remain * props.size + 'px';
      barRef.value!.style.height = props.items.length * props.size + 'px';
    };

    watch(() => props.items, initWrapper);
    onMounted(() => {
      initWrapper();
    });
    return () => (
      <div class={bem.b()} ref={wrapperRef} onScroll={handleScroll}>
        <div class={bem.e('scroll-bar')} ref={barRef}></div>
        {/* 更新列表 */}
        <div
          class={bem.e('scroll-list')}
          style={{ transform: `translate3d(0,${offset.value}px,0)` }}
        >
          {visibleData.value.map(node => slots.default!({ node }))}
        </div>
      </div>
    );
  }
});
