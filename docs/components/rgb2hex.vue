<script setup>
import { ref, watch } from 'vue'

const r2h = ref({ r: 255, g: 180, b: 0 })
const hex = ref('#ffb400')
const h = ref('#cc00ff')
const rgb = ref([204, 0, 255])
const showColorPicker = ref(false)
const activeColorPicker = ref('') // 'rgb' 或 'hex'

/**
 * rgb转16进制
 */
function rgb2hex() {
  const { r, g, b } = r2h.value
  const rgb = (r << 16) | (g << 8) | b
  hex.value = `#${rgb.toString(16).padStart(6, '0')}`
}

// 16进制转rgb
function hex2rgb() {
  rgb.value = h.value.replace('#', '').match(/../g).map(n => Number.parseInt(n, 16))
}

// 打开颜色选择器
function openColorPicker(type) {
  activeColorPicker.value = type
  showColorPicker.value = true
}

// 处理颜色选择
function handleColorSelect(color) {
  if (activeColorPicker.value === 'rgb') {
    hex.value = color
    const hexValue = color.replace('#', '')
    const r = parseInt(hexValue.substring(0, 2), 16)
    const g = parseInt(hexValue.substring(2, 4), 16)
    const b = parseInt(hexValue.substring(4, 6), 16)
    r2h.value = { r, g, b }
  } else if (activeColorPicker.value === 'hex') {
    h.value = color
    hex2rgb()
  }
  showColorPicker.value = false
}

// 实时更新颜色
watch(() => [r2h.value.r, r2h.value.g, r2h.value.b], () => {
  rgb2hex()
})

watch(() => h.value, () => {
  if (h.value.startsWith('#') && (h.value.length === 4 || h.value.length === 7)) {
    hex2rgb()
  }
})
</script>

<template>
  <main flex="~ col" items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-sm max-w-2xl mx-auto>
    <div text="2xl gray-800 dark:gray-100" font-bold mb-6>RGB/HEX 颜色转换工具</div>

    <!-- RGB to HEX 转换部分 -->
    <div w-full bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm mb-6>
      <div flex items-center justify-between mb-4>
        <h3 text="lg gray-700 dark:gray-200" font-medium>RGB → HEX</h3>
        <div flex items-center gap-2>
          <div
            h-10 w-10 rounded-md shadow-inner cursor-pointer
            :style="{ backgroundColor: hex }"
            @click="openColorPicker('rgb')"
            class="hover:ring-2 hover:ring-blue-300 transition-all"
          />
          <div text-sm text="gray-500 dark:gray-300">{{ hex }}</div>
        </div>
      </div>

      <div flex="~ col sm:row" gap-4>
        <div flex="~ gap-2" items-center>
          <label text="sm gray-600 dark:gray-300" w-6>R:</label>
          <input
            v-model.number="r2h.r"
            type="number"
            min="0"
            max="255"
            class="w-full sm:w-20 h-10 rounded border border-gray-400 bg-gray-50 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 px-2 focus:(ring-2 ring-blue-300 outline-none)"
          >
        </div>
        <div flex="~ gap-2" items-center>
          <label text="sm gray-600 dark:gray-300" w-6>G:</label>
          <input
            v-model.number="r2h.g"
            type="number"
            min="0"
            max="255"
            class="w-full sm:w-20 h-10 rounded border border-gray-400 bg-gray-50 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 px-2 focus:(ring-2 ring-blue-300 outline-none)"
          >
        </div>
        <div flex="~ gap-2" items-center>
          <label text="sm gray-600 dark:gray-300" w-6>B:</label>
          <input
            v-model.number="r2h.b"
            type="number"
            min="0"
            max="255"
            class="w-full sm:w-20 h-10 rounded border border-gray-400 bg-gray-50 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 px-2 focus:(ring-2 ring-blue-300 outline-none)"
          >
        </div>
        <button
          bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors
          flex items-center justify-center
          @click="rgb2hex"
        >
          转换
        </button>
      </div>
    </div>

    <!-- HEX to RGB 转换部分 -->
    <div w-full bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm>
      <div flex items-center justify-between mb-4>
        <h3 text="lg gray-700 dark:gray-200" font-medium>HEX → RGB</h3>
        <div flex items-center gap-2>
          <div
            h-10 w-10 rounded-md shadow-inner cursor-pointer
            :style="{ backgroundColor: `rgb(${rgb})` }"
            @click="openColorPicker('hex')"
            class="hover:ring-2 hover:ring-blue-300 transition-all"
          />
          <div text-sm text="gray-500 dark:gray-300">rgb({{ rgb.join(', ') }})</div>
        </div>
      </div>

      <div flex="~ col sm:row" gap-4>
        <div flex="~ gap-2" items-center flex-1>
          <label text="sm gray-600 dark:gray-300" w-10>HEX:</label>
          <input
            v-model="h"
            type="text"
            placeholder="#000000"
            class="w-full h-10 rounded border border-gray-400 bg-gray-50 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 px-2 focus:(ring-2 ring-blue-300 outline-none)"
          >
        </div>
        <button
          bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors
          flex items-center justify-center
          @click="hex2rgb"
        >
          转换
        </button>
      </div>
    </div>

    <!-- 颜色选择器弹窗 -->
    <div v-if="showColorPicker" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="showColorPicker = false">
      <div class="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg max-w-md w-full">
        <h3 text="lg gray-700 dark:gray-200" font-medium mb-4>选择颜色</h3>
        <div class="grid grid-cols-8 gap-2">
          <div
            v-for="color in ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff', '#8000ff', '#ff00ff', '#ff0080', '#000000', '#808080', '#c0c0c0', '#ffffff', '#800000', '#804000', '#808000', '#408000', '#008000', '#008040', '#008080', '#004080', '#000080', '#400080', '#800080', '#800040', '#4d3319', '#ffcc99', '#009933', '#660066']"
            :key="color"
            class="h-8 w-8 rounded cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all"
            :style="{ backgroundColor: color }"
            @click="handleColorSelect(color)"
          ></div>
        </div>
        <div class="mt-4 flex justify-end">
          <button
            class="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 px-4 py-2 rounded transition-colors"
            @click="showColorPicker = false"
          >
            取消
          </button>
        </div>
      </div>
    </div>

    <div mt-6 text-xs text="gray-500 dark:gray-400">
      提示：RGB转HEX部分支持实时预览，修改RGB值后会自动更新HEX值。点击颜色块可以打开颜色选择器。
    </div>
  </main>
</template>
