import { defineComponent } from 'vue';
import { createNamespace } from '@sp-ui/utils/create';

const RichTextEditor = defineComponent({
  name: 'sp-rich-text-editor',
  setup() {
    const bem = createNamespace('rich-text-editor');

    return <div class={bem.b()}>RichTextEditor</div>;
  }
});

export default RichTextEditor;
