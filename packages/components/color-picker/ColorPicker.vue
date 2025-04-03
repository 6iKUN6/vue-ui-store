<template>
  <div class="color-picker" ref="colorPickerRef">
    <div class="color-trigger" @click.stop="togglePicker">
      <div
        class="color-preview"
        :style="{ backgroundColor: displayColor }"
      ></div>
      <span class="color-value">{{ displayColor }}</span>
    </div>

    <div v-show="showPicker" class="picker-popup" @click.stop>
      <div class="picker-container">
        <!-- 色相选择器 -->
        <div class="hue-slider" ref="hueRef" @mousedown="startHueChange">
          <div class="hue-thumb" :style="{ left: `${huePosition}%` }"></div>
        </div>

        <!-- 饱和度/明度选择面板 -->
        <div
          class="sv-panel"
          ref="svRef"
          :style="{ backgroundColor: `hsl(${hue}, 100%, 50%)` }"
          @mousedown="startSvChange"
        >
          <div class="white-gradient"></div>
          <div class="black-gradient"></div>
          <div
            class="sv-thumb"
            :style="{
              left: `${saturation}%`,
              top: `${100 - value}%`,
              backgroundColor: displayColor
            }"
          ></div>
        </div>

        <!-- 透明度选择器 -->
        <div class="alpha-slider" ref="alphaRef" @mousedown="startAlphaChange">
          <div class="alpha-bg"></div>
          <div
            class="alpha-color"
            :style="{
              background: `linear-gradient(to right, transparent, ${getRgbaColor(1)})`
            }"
          ></div>
          <div class="alpha-thumb" :style="{ left: `${alpha * 100}%` }"></div>
        </div>

        <!-- 颜色格式和输入 -->
        <div class="color-input">
          <div class="format-switch">
            <span
              :class="['format-option', { active: colorFormat === 'hex' }]"
              @click="colorFormat = 'hex'"
              >HEX</span
            >
            <span
              :class="['format-option', { active: colorFormat === 'rgb' }]"
              @click="colorFormat = 'rgb'"
              >RGB</span
            >
          </div>

          <template v-if="colorFormat === 'hex'">
            <div class="hex-input">
              <span class="prefix">#</span>
              <input
                type="text"
                v-model="hexValue"
                maxlength="6"
                @input="updateFromHex"
                @blur="formatHexValue"
              />
            </div>
          </template>

          <template v-else>
            <div class="rgb-inputs">
              <div class="rgb-input">
                <span>R</span>
                <input
                  type="number"
                  v-model.number="rgbValues.r"
                  min="0"
                  max="255"
                  @input="updateFromRgb"
                />
              </div>
              <div class="rgb-input">
                <span>G</span>
                <input
                  type="number"
                  v-model.number="rgbValues.g"
                  min="0"
                  max="255"
                  @input="updateFromRgb"
                />
              </div>
              <div class="rgb-input">
                <span>B</span>
                <input
                  type="number"
                  v-model.number="rgbValues.b"
                  min="0"
                  max="255"
                  @input="updateFromRgb"
                />
              </div>
              <div class="rgb-input">
                <span>A</span>
                <input
                  type="number"
                  v-model.number="rgbValues.a"
                  min="0"
                  max="1"
                  step="0.01"
                  @input="updateFromRgb"
                />
              </div>
            </div>
          </template>
        </div>

        <!-- 预设颜色 -->
        <div class="preset-colors">
          <div
            v-for="(color, index) in presetColors"
            :key="index"
            class="preset-color"
            :style="{ backgroundColor: color }"
            @click="selectPresetColor(color)"
          ></div>
        </div>

        <!-- 底部操作按钮 -->
        <div class="picker-footer">
          <button class="btn cancel" @click="closePicker">取消</button>
          <button class="btn confirm" @click="confirmColor">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// 状态管理
const showPicker = ref(false);
const hue = ref(0);
const saturation = ref(100);
const value = ref(100);
const alpha = ref(1);
const huePosition = computed(() => (hue.value / 360) * 100);

// DOM引用
const hueRef = ref<HTMLElement | null>(null);
const svRef = ref<HTMLElement | null>(null);
const alphaRef = ref<HTMLElement | null>(null);
const colorPickerRef = ref<HTMLElement | null>(null);
const popupPosition = ref({ top: 0, left: 0 });

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

// 添加颜色格式状态
const colorFormat = ref<'hex' | 'rgb'>('hex');
const hexValue = ref('000000');
const rgbValues = ref({ r: 0, g: 0, b: 0, a: 1 });

// 颜色转换函数
const hsvaToRgba = (h: number, s: number, v: number, a: number) => {
  const f = (n: number, k = (n + h / 60) % 6) =>
    v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return {
    r: Math.round(f(5) * 255),
    g: Math.round(f(3) * 255),
    b: Math.round(f(1) * 255),
    a
  };
};

const getRgbaColor = (a = alpha.value) => {
  const { r, g, b } = hsvaToRgba(
    hue.value,
    saturation.value / 100,
    value.value / 100,
    a
  );
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// 更新十六进制值的计算属性
const updateHexValue = () => {
  const { r, g, b } = hsvaToRgba(
    hue.value,
    saturation.value / 100,
    value.value / 100,
    1
  );
  hexValue.value = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

// 更新 RGB 值的计算属性
const updateRgbValues = () => {
  const { r, g, b, a } = hsvaToRgba(
    hue.value,
    saturation.value / 100,
    value.value / 100,
    alpha.value
  );
  rgbValues.value = { r, g, b, a };
};

// 从十六进制更新颜色
const updateFromHex = () => {
  const hex = hexValue.value.replace('#', '');
  if (hex.length === 6) {
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;

    let h = 0;
    if (d === 0) h = 0;
    else if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else if (max === b) h = (r - g) / d + 4;

    hue.value = Math.round(h * 60 + (h < 0 ? 360 : 0));
    saturation.value = Math.round(max === 0 ? 0 : (d / max) * 100);
    value.value = Math.round(max * 100);
  }
};

// 从 RGB 更新颜色
const updateFromRgb = () => {
  const { r, g, b, a } = rgbValues.value;
  const max = Math.max(r, g, b) / 255;
  const min = Math.min(r, g, b) / 255;
  const d = max - min;

  let h = 0;
  if (d === 0) h = 0;
  else if (max === r / 255) h = ((g - b) / d) % 6;
  else if (max === g / 255) h = (b - r) / d + 2;
  else if (max === b / 255) h = (r - g) / d + 4;

  hue.value = Math.round(h * 60 + (h < 0 ? 360 : 0));
  saturation.value = Math.round(max === 0 ? 0 : (d / max) * 100);
  value.value = Math.round(max * 100);
  alpha.value = a;
};

// 格式化十六进制值
const formatHexValue = () => {
  hexValue.value = hexValue.value.padStart(6, '0');
};

// 监听颜色变化，更新输入值
watch([hue, saturation, value, alpha], () => {
  updateHexValue();
  updateRgbValues();
});

// 修改 displayColor 计算属性
const displayColor = computed(() => {
  if (colorFormat.value === 'hex') {
    return `#${hexValue.value}`;
  } else {
    const { r, g, b, a } = rgbValues.value;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
});

const selectPresetColor = (color: string) => {
  // 将十六进制转换为HSVA
  const r = parseInt(color.slice(1, 3), 16) / 255;
  const g = parseInt(color.slice(3, 5), 16) / 255;
  const b = parseInt(color.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  if (d === 0) h = 0;
  else if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else if (max === b) h = (r - g) / d + 4;

  hue.value = Math.round(h * 60 + (h < 0 ? 360 : 0));
  saturation.value = Math.round(max === 0 ? 0 : (d / max) * 100);
  value.value = Math.round(max * 100);
  alpha.value = 1;
};

// 初始化颜色值
const initColor = (color: string) => {
  if (!color) return;

  try {
    if (color.startsWith('#')) {
      selectPresetColor(color);
    } else if (color.startsWith('rgba')) {
      const values = color.match(/[\d.]+/g);
      if (values && values.length === 4) {
        const [r, g, b, a] = values.map(Number);
        const max = Math.max(r, g, b) / 255;
        const min = Math.min(r, g, b) / 255;
        const d = max - min;

        let h = 0;
        if (d === 0) h = 0;
        else if (max === r / 255) h = ((g / 255 - b / 255) / d) % 6;
        else if (max === g / 255) h = (b / 255 - r / 255) / d + 2;
        else if (max === b / 255) h = (r / 255 - g / 255) / d + 4;

        hue.value = Math.round(h * 60 + (h < 0 ? 360 : 0));
        saturation.value = Math.round(max === 0 ? 0 : (d / max) * 100);
        value.value = Math.round(max * 100);
        alpha.value = a;
      }
    }
  } catch (error) {
    console.error('Color parse error:', error);
  }
};

// 监听输入颜色变化
watch(
  () => props.modelValue,
  newColor => {
    initColor(newColor);
  },
  { immediate: true }
);

// 计算弹出层位置
const updatePopupPosition = () => {
  if (!colorPickerRef.value) return;
  const rect = colorPickerRef.value.getBoundingClientRect();
  popupPosition.value = {
    top: rect.bottom + 8,
    left: rect.left
  };
};

const togglePicker = (e: MouseEvent) => {
  e.stopPropagation();
  showPicker.value = !showPicker.value;
  if (showPicker.value) {
    nextTick(() => {
      updatePopupPosition();
    });
  }
};

// 事件处理
const startHueChange = (e: MouseEvent) => {
  const handleMove = (e: MouseEvent) => {
    if (!hueRef.value) return;
    const rect = hueRef.value.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, left / rect.width));
    hue.value = Math.round(percent * 360);
  };

  const handleUp = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleUp);
  };

  handleMove(e);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleUp);
};

const startSvChange = (e: MouseEvent) => {
  const handleMove = (e: MouseEvent) => {
    if (!svRef.value) return;
    const rect = svRef.value.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;

    saturation.value = Math.max(0, Math.min(100, (left / rect.width) * 100));
    value.value = Math.max(0, Math.min(100, 100 - (top / rect.height) * 100));
  };

  const handleUp = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleUp);
  };

  handleMove(e);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleUp);
};

const startAlphaChange = (e: MouseEvent) => {
  const handleMove = (e: MouseEvent) => {
    if (!alphaRef.value) return;
    const rect = alphaRef.value.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, left / rect.width));
    alpha.value = Math.round(percent * 100) / 100;
  };

  const handleUp = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleUp);
  };

  handleMove(e);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleUp);
};

const closePicker = () => {
  showPicker.value = false;
};

const confirmColor = () => {
  emit('update:modelValue', displayColor.value);
  closePicker();
};

// 处理点击外部关闭
const handleClickOutside = (event: MouseEvent) => {
  if (
    colorPickerRef.value &&
    !colorPickerRef.value.contains(event.target as Node) &&
    showPicker.value
  ) {
    closePicker();
  }
};

// 监听窗口大小变化
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', updatePopupPosition);
  window.addEventListener('scroll', updatePopupPosition);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', updatePopupPosition);
  window.removeEventListener('scroll', updatePopupPosition);
});
</script>

<style scoped lang="less">
.color-picker {
  display: inline-block;
  position: relative;

  .color-trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
    border: 1px solid #e5e6eb;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: #165dff;
    }

    .color-preview {
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border: 1px solid #e5e6eb;
    }

    .color-value {
      font-size: 12px;
      color: #4e5969;
    }
  }

  .picker-popup {
    position: fixed;
    top: v-bind('popupPosition.top + "px"');
    left: v-bind('popupPosition.left + "px"');
    margin-top: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .picker-container {
    width: 240px;
    padding: 16px;

    .hue-slider {
      position: relative;
      width: 100%;
      height: 12px;
      margin: 8px 0;
      background: linear-gradient(
        to right,
        #f00 0%,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        #f00 100%
      );
      border-radius: 6px;
      cursor: pointer;

      .hue-thumb {
        position: absolute;
        width: 12px;
        height: 12px;
        background: white;
        border: 2px solid white;
        border-radius: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
      }
    }

    .sv-panel {
      position: relative;
      width: 100%;
      height: 150px;
      margin: 8px 0;
      border-radius: 4px;
      cursor: pointer;

      .white-gradient {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to right, white, transparent);
      }

      .black-gradient {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent, black);
      }

      .sv-thumb {
        position: absolute;
        width: 12px;
        height: 12px;
        background: white;
        border: 2px solid white;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
      }
    }

    .alpha-slider {
      position: relative;
      width: 100%;
      height: 12px;
      margin: 8px 0;
      border-radius: 6px;
      cursor: pointer;
      overflow: hidden;

      .alpha-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            45deg,
            #ccc 25%,
            transparent 25%,
            transparent 75%,
            #ccc 75%,
            #ccc
          ),
          linear-gradient(
            45deg,
            #ccc 25%,
            transparent 25%,
            transparent 75%,
            #ccc 75%,
            #ccc
          );
        background-size: 8px 8px;
        background-position:
          0 0,
          4px 4px;
      }

      .alpha-color {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .alpha-thumb {
        position: absolute;
        width: 12px;
        height: 12px;
        background: white;
        border: 2px solid white;
        border-radius: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
      }
    }

    .color-input {
      margin: 16px 0;

      .format-switch {
        display: flex;
        margin-bottom: 8px;

        .format-option {
          padding: 4px 8px;
          font-size: 12px;
          cursor: pointer;
          color: #666;

          &.active {
            color: #165dff;
            font-weight: 500;
          }
        }
      }

      .hex-input {
        display: flex;
        align-items: center;

        .prefix {
          color: #666;
          margin-right: 4px;
        }

        input {
          width: 100%;
          padding: 4px 8px;
          border: 1px solid #e5e6eb;
          border-radius: 4px;
          font-family: monospace;

          &:focus {
            border-color: #165dff;
            outline: none;
          }
        }
      }

      .rgb-inputs {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;

        .rgb-input {
          display: flex;
          flex-direction: column;
          gap: 4px;

          span {
            font-size: 12px;
            color: #666;
          }

          input {
            width: 100%;
            padding: 4px;
            border: 1px solid #e5e6eb;
            border-radius: 4px;
            text-align: center;

            &:focus {
              border-color: #165dff;
              outline: none;
            }

            &::-webkit-inner-spin-button {
              opacity: 1;
            }
          }
        }
      }
    }

    .preset-colors {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 16px 0;

      .preset-color {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid #e5e6eb;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .picker-footer {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 16px;

      .btn {
        padding: 4px 12px;
        border-radius: 4px;
        border: 1px solid #e5e6eb;
        background: white;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.2s;

        &:hover {
          border-color: #165dff;
          color: #165dff;
        }

        &.confirm {
          background: #165dff;
          color: white;
          border-color: #165dff;

          &:hover {
            background: #4080ff;
          }
        }
      }
    }
  }
}
</style>
