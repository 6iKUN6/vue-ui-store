import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import Button from '../src/button.vue';

describe('Button 组件', () => {
  // 测试基本渲染
  it('正确渲染默认按钮', () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain('sp-button');
  });

  // 测试props
  it('根据type属性应用正确的类名', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' }
    });
    expect(wrapper.classes()).toContain('sp-button--primary');
  });

  // 测试尺寸
  it('根据size属性应用正确的类名', () => {
    const wrapper = mount(Button, {
      props: { size: 'small' }
    });
    expect(wrapper.classes()).toContain('sp-button--small');
  });

  // 测试禁用状态
  it('禁用状态下按钮不可点击', async () => {
    const onClick = vi.fn();
    const wrapper = mount(Button, {
      props: {
        disabled: true,
        onClick
      }
    });

    expect(wrapper.attributes('disabled')).toBeDefined();

    await wrapper.trigger('click');
    expect(onClick).not.toHaveBeenCalled();
  });

  // 测试loading状态
  it('loading状态下显示加载图标', () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    });

    expect(wrapper.classes()).toContain('is-loading');
    expect(wrapper.findComponent({ name: 'loading-icon' }).exists()).toBe(true);
  });

  // 测试点击事件
  it('点击按钮触发click事件', async () => {
    const wrapper = mount(Button);

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('click')![0]).toBeTruthy();
  });
});
