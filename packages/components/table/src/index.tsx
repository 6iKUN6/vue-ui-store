import { defineComponent } from 'vue';
import type { DefineComponent } from 'vue';

const Table: DefineComponent = defineComponent({
  setup: () => {
    const render = () => {
      return <div>Table</div>;
    };

    return render;
  }
});

export default Table;
