import { defineComponent, onMounted, onUpdated, ref } from 'vue';

import { virtualItemProps } from './virtual-props';

export default defineComponent({
  name: 'sp-virtual-item',
  props: virtualItemProps,
  emits: ['itemResize'],
  setup: (props, { emit }) => {
    const itemRoot = ref<HTMLElement | null>();

    function dispatchResize() {
      emit('itemResize', props.uniqueKey, itemRoot.value?.offsetHeight);
    }

    onMounted(dispatchResize);
    onUpdated(dispatchResize);
    return () => {
      const { component: Comp, source, uniqueKey } = props;
      return (
        Comp && (
          <div key={uniqueKey} ref={itemRoot}>
            <Comp source={source}></Comp>
          </div>
        )
      );
    };
  }
});
