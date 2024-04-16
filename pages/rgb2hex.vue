<script setup>
import { appName } from '~/constants'

useHead({
  title: `RGB颜色值与十六进制颜色码转换工具 - ${appName}`
})

const r2h = ref({ r: 255, g: 180, b: 0 })
const hex = ref('#ffb400')
const h = ref('#cc00ff')
const rgb = ref([204, 0, 255])

// ------- //
// rgb2hex //
// ------- //

// one liner to convert rgb color (provided as a string) to hex
// const rgb2hex = rgb => `#${rgb.replace(/[^0-9,]/g, "").split(",").map(n => (n|0).toString(16).padStart(2, '0')).join("")}`;

// straight from array
// const rgb2hexArr = rgb => `#${rgb.map(n => (n|0).toString(16).padStart(2, '0')).join("")}`;

// ------- //
// hex2rgb //
// ------- //

// one liner to convert hex color to rgb (as a string)
// const hex2rgb = hex => `rgb(${hex.replace("#", "").match(/../g).map(n => parseInt(n, 16)).join(", ")})`;

// to array
// const hex2rgbArr = hex => hex.replace("#", "").match(/../g).map(n => parseInt(n, 16));

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
</script>

<template>
  <div flex="~ col" items-center>
    <h1 flex="~">
      RGB颜色值转换成十六进制颜色码：<div mr4 inline-block w-10 px4 :style="{ backgroundColor: hex }" />
      <input v-model="hex" type="text" w-40 border border-base px2>
    </h1>
    <div flex="~ col" mt4>
      <div flex="~ gap4">
        <input v-model="r2h.r" type="number" w-20 border border-base px2>
        <input v-model="r2h.g" type="number" w-20 border border-base px2>
        <input v-model="r2h.b" type="number" w-20 border border-base px2>
        <button flex items-center justify-center rounded-full btn-primary @click="rgb2hex">
          转换
        </button>
      </div>
    </div>
    <h1 flex="~" mt8>
      十六进制颜色码转换成RGB颜色值：<div mr4 inline-block w-10 px4 :style="{ backgroundColor: `rgb(${rgb})` }" />
      <input v-model="rgb" type="text" w-40 border border-base px2>
    </h1>
    <div flex="~ gap4" mt4>
      <input v-model="h" type="text" border border-base px2>
      <button flex items-center justify-center rounded-full btn-primary @click="hex2rgb">
        转换
      </button>
    </div>
  </div>
</template>
