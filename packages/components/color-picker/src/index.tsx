import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onUnmounted,
  Transition,
  nextTick,
  watch
} from 'vue';
import { createNamespace } from '@sp-ui/utils/create';

import { colorPickerProps } from './props';
import {
  hsvaToRgba,
  rgbaToHsva,
  parseColor,
  formatColor,
  RgbaColor
} from './utils';

const bem = createNamespace('color-picker');

export default defineComponent({
  name: 'SpColorPicker',
  props: colorPickerProps,
  emits: ['update:modelValue', 'change', 'update:format'],
  setup(props, { emit }) {
    // 状态管理
    const showPicker = ref(false);
    const hue = ref(0);
    const saturation = ref(100);
    const value = ref(100);
    const alpha = ref(1);
    const hexValue = ref('000000');
    const rgbValues = ref<RgbaColor>({ r: 0, g: 0, b: 0, a: 1 });
    const currentFormat = ref(props.format);

    // 监听外部 format 变化
    watch(
      () => props.format,
      newFormat => {
        currentFormat.value = newFormat;
      }
    );

    // DOM引用
    const colorPickerRef = ref<HTMLElement>();
    const hueRef = ref<HTMLElement>();
    const svRef = ref<HTMLElement>();
    const alphaRef = ref<HTMLElement>();
    const popupRef = ref<HTMLElement>();

    // 计算属性
    const huePosition = computed(() => (hue.value / 360) * 100);

    const getRgbaColor = (a = alpha.value) => {
      const { r, g, b } = hsvaToRgba(
        hue.value,
        saturation.value,
        value.value,
        a
      );
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    };

    const displayColor = computed(() => getRgbaColor());

    const displayValue = computed(() => {
      return formatColor(rgbValues.value, currentFormat.value as 'hex' | 'rgb');
    });

    // 预设颜色
    const presetColors = [
      '#000000',
      '#FFFFFF',
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FFFF00',
      '#FF00FF',
      '#00FFFF',
      '#FFA500',
      '#800080'
    ];

    // 事件处理
    const togglePicker = () => {
      if (props.disabled) return;
      showPicker.value = !showPicker.value;
      if (showPicker.value) {
        nextTick(() => {
          updatePopupPosition();
          document.addEventListener('mousedown', handleClickOutside);
        });
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };

    const updatePopupPosition = () => {
      if (!colorPickerRef.value || !popupRef.value) return;

      const triggerRect = colorPickerRef.value.getBoundingClientRect();
      const popupRect = popupRef.value.getBoundingClientRect();
      const { innerHeight } = window;

      // 计算弹窗位置
      let top = triggerRect.height + 8; // 相对于组件的偏移
      const left = 0; // 默认左对齐

      // 检查是否超出视口底部
      if (triggerRect.bottom + 8 + popupRect.height > innerHeight) {
        top = -popupRect.height - 8; // 显示在组件上方
      }

      // 设置弹窗位置
      popupRef.value.style.position = 'absolute';
      popupRef.value.style.top = `${top}px`;
      popupRef.value.style.left = `${left}px`;
    };

    const updateColor = () => {
      const rgba = hsvaToRgba(
        hue.value,
        saturation.value,
        value.value,
        alpha.value
      );
      rgbValues.value = rgba;
      const newColor = formatColor(rgba, currentFormat.value as 'hex' | 'rgb');
      emit('update:modelValue', newColor);
      emit('change', newColor);
    };

    const startHueChange = (event: MouseEvent) => {
      if (!hueRef.value) return;
      const rect = hueRef.value.getBoundingClientRect();
      const handleMove = (e: MouseEvent) => {
        let left = e.clientX - rect.left;
        left = Math.max(0, Math.min(left, rect.width));
        hue.value = Math.round((left / rect.width) * 360);
        updateColor();
      };

      const handleUp = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
      };

      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
      handleMove(event);
    };

    const startSvChange = (event: MouseEvent) => {
      if (!svRef.value) return;
      const rect = svRef.value.getBoundingClientRect();
      const handleMove = (e: MouseEvent) => {
        let left = e.clientX - rect.left;
        let top = e.clientY - rect.top;
        left = Math.max(0, Math.min(left, rect.width));
        top = Math.max(0, Math.min(top, rect.height));
        saturation.value = Math.round((left / rect.width) * 100);
        value.value = Math.round(100 - (top / rect.height) * 100);
        updateColor();
      };

      const handleUp = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
      };

      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
      handleMove(event);
    };

    const startAlphaChange = (event: MouseEvent) => {
      if (!alphaRef.value) return;
      const rect = alphaRef.value.getBoundingClientRect();
      const handleMove = (e: MouseEvent) => {
        let left = e.clientX - rect.left;
        left = Math.max(0, Math.min(left, rect.width));
        alpha.value = Number((left / rect.width).toFixed(2));
        updateColor();
      };

      const handleUp = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
      };

      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
      handleMove(event);
    };

    const updateFromHex = (hex: string) => {
      // 支持 6 位和 8 位 HEX
      if (!/^[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(hex)) return;

      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      const a =
        hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : alpha.value;

      rgbValues.value = { r, g, b, a };
      const newColor = props.modelValue.startsWith('#')
        ? `#${hex.toUpperCase()}`
        : `rgba(${r}, ${g}, ${b}, ${a})`;

      emit('update:modelValue', newColor);
      emit('change', newColor);
    };

    const updateFromRgb = () => {
      const { r, g, b, a } = rgbValues.value;
      if (
        r < 0 ||
        r > 255 ||
        g < 0 ||
        g > 255 ||
        b < 0 ||
        b > 255 ||
        a < 0 ||
        a > 1
      )
        return;

      const alphaHex = Math.round(a * 255)
        .toString(16)
        .padStart(2, '0')
        .toUpperCase();
      const hex = ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase();
      hexValue.value = hex + (a < 1 ? alphaHex : '');

      const newColor = props.modelValue.startsWith('#')
        ? `#${hex}${a < 1 ? alphaHex : ''}`
        : a === 1
          ? `rgb(${r}, ${g}, ${b})`
          : `rgba(${r}, ${g}, ${b}, ${a})`;

      emit('update:modelValue', newColor);
      emit('change', newColor);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !colorPickerRef.value?.contains(target) &&
        !popupRef.value?.contains(target)
      ) {
        showPicker.value = false;
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };

    // 更新 HSV 值
    const updateHsva = (r: number, g: number, b: number, a: number) => {
      const { h, s, v } = rgbaToHsva(r, g, b, a);
      hue.value = h;
      saturation.value = s;
      value.value = v;
      alpha.value = a;
    };

    // 初始化颜色值
    const initColor = (colorStr: string) => {
      const color = parseColor(colorStr);
      if (color) {
        rgbValues.value = color;
        updateHsva(color.r, color.g, color.b, color.a);
      }
    };

    onMounted(() => {
      window.addEventListener('resize', updatePopupPosition);
      window.addEventListener('scroll', updatePopupPosition);
      if (props.modelValue) {
        initColor(props.modelValue);
      }
    });

    // 监听外部颜色值变化
    watch(
      () => props.modelValue,
      newValue => {
        if (newValue) {
          initColor(newValue);
        }
      }
    );

    onUnmounted(() => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', updatePopupPosition);
      window.removeEventListener('scroll', updatePopupPosition);
    });

    return () => (
      <div
        class={[
          bem.b(),
          bem.m(props.size),
          { [bem.is('disabled', true)]: props.disabled }
        ]}
        ref={colorPickerRef}
      >
        <div
          class={[
            bem.e('trigger'),
            { [`${bem.e('trigger')}--no-value`]: !props.showValue }
          ]}
          onClick={togglePicker}
        >
          <div
            class={bem.e('preview')}
            style={{ backgroundColor: props.modelValue }}
          ></div>
          {props.showValue && (
            <span class={bem.e('value')}>{displayValue.value}</span>
          )}
        </div>

        <Transition name="zoom">
          {showPicker.value && (
            <div
              class={bem.e('popup')}
              ref={popupRef}
              onClick={e => e.stopPropagation()}
            >
              <div class={bem.e('container')}>
                {/* 色相选择器 */}
                <div
                  class={bem.e('hue')}
                  ref={hueRef}
                  onMousedown={startHueChange}
                >
                  <div
                    class={bem.e('hue-thumb')}
                    style={{ left: `${huePosition.value}%` }}
                  ></div>
                </div>

                {/* 饱和度/明度选择面板 */}
                <div
                  class={bem.e('sv-panel')}
                  ref={svRef}
                  style={{ backgroundColor: `hsl(${hue.value}, 100%, 50%)` }}
                  onMousedown={startSvChange}
                >
                  <div class={bem.e('white-gradient')}></div>
                  <div class={bem.e('black-gradient')}></div>
                  <div
                    class={bem.e('sv-thumb')}
                    style={{
                      left: `${saturation.value}%`,
                      top: `${100 - value.value}%`,
                      backgroundColor: displayColor.value
                    }}
                  ></div>
                </div>

                {/* 透明度选择器 */}
                <div
                  class={bem.e('alpha')}
                  ref={alphaRef}
                  onMousedown={startAlphaChange}
                >
                  <div class={bem.e('alpha-bg')}></div>
                  <div
                    class={bem.e('alpha-color')}
                    style={{
                      background: `linear-gradient(to right, transparent, ${getRgbaColor(1)})`
                    }}
                  ></div>
                  <div
                    class={bem.e('alpha-thumb')}
                    style={{ left: `${alpha.value * 100}%` }}
                  ></div>
                </div>

                {/* 颜色格式和输入 */}
                <div class={bem.e('input')}>
                  <div class={bem.e('format-switch')}>
                    <span
                      class={[
                        bem.e('format-option'),
                        {
                          [bem.is('active', true)]:
                            currentFormat.value === 'hex'
                        }
                      ]}
                      onClick={() => {
                        currentFormat.value = 'hex';
                        emit('update:format', 'hex');
                      }}
                    >
                      HEX
                    </span>
                    <span
                      class={[
                        bem.e('format-option'),
                        {
                          [bem.is('active', true)]:
                            currentFormat.value === 'rgb'
                        }
                      ]}
                      onClick={() => {
                        currentFormat.value = 'rgb';
                        emit('update:format', 'rgb');
                      }}
                    >
                      RGB
                    </span>
                  </div>

                  {currentFormat.value === 'hex' ? (
                    <div class={bem.e('hex-input')}>
                      <span class={bem.e('prefix')}>#</span>
                      <input
                        type="text"
                        value={hexValue.value}
                        maxlength={6}
                        onInput={e => {
                          const value = (e.target as HTMLInputElement).value;
                          hexValue.value = value;
                          updateFromHex(value);
                        }}
                      />
                    </div>
                  ) : (
                    <div class={bem.e('rgb-inputs')}>
                      {['r', 'g', 'b', 'a'].map(channel => (
                        <div class={bem.e('rgb-input')} key={channel}>
                          <span>{channel.toUpperCase()}</span>
                          <input
                            type="number"
                            value={
                              rgbValues.value[
                                channel as keyof typeof rgbValues.value
                              ]
                            }
                            min={channel === 'a' ? 0 : 0}
                            max={channel === 'a' ? 1 : 255}
                            step={channel === 'a' ? 0.01 : 1}
                            onInput={e => {
                              const value = parseFloat(
                                (e.target as HTMLInputElement).value
                              );
                              rgbValues.value[
                                channel as keyof typeof rgbValues.value
                              ] = value;
                              updateFromRgb();
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 预设颜色 */}
                <div class={bem.e('presets')}>
                  {presetColors.map((color, index) => (
                    <div
                      key={index}
                      class={bem.e('preset-color')}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        // 更新显示的颜色
                        const newColor = color;
                        emit('update:modelValue', newColor);
                        emit('change', newColor);

                        // 如果是十六进制颜色
                        if (color.startsWith('#')) {
                          const hex = color.replace('#', '');
                          hexValue.value = hex;
                          const r = parseInt(hex.slice(0, 2), 16);
                          const g = parseInt(hex.slice(2, 4), 16);
                          const b = parseInt(hex.slice(4, 6), 16);
                          rgbValues.value = { r, g, b, a: 1 };
                        }
                        // 如果是 rgb/rgba 颜色
                        else {
                          const rgbaMatch = color.match(
                            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/
                          );
                          if (rgbaMatch) {
                            rgbValues.value = {
                              r: parseInt(rgbaMatch[1]),
                              g: parseInt(rgbaMatch[2]),
                              b: parseInt(rgbaMatch[3]),
                              a: rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1
                            };
                            const hex = (
                              (1 << 24) +
                              (rgbValues.value.r << 16) +
                              (rgbValues.value.g << 8) +
                              rgbValues.value.b
                            )
                              .toString(16)
                              .slice(1);
                            hexValue.value = hex;
                          }
                        }

                        // 关闭弹窗
                        showPicker.value = false;
                      }}
                    ></div>
                  ))}
                </div>

                {/* 底部操作按钮 */}
                <div class={bem.e('footer')}>
                  <button
                    class={[bem.e('btn'), bem.e('btn-cancel')]}
                    onClick={() => (showPicker.value = false)}
                  >
                    取消
                  </button>
                  <button
                    class={[bem.e('btn'), bem.e('btn-confirm')]}
                    onClick={() => {
                      updateColor();
                      showPicker.value = false;
                    }}
                  >
                    确定
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </div>
    );
  }
});
