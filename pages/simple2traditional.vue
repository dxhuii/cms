<script setup>
import { toSimplified, toTraditional } from 'chinese-simple2traditional'
import { setupEnhance } from 'chinese-simple2traditional/enhance' // 注入短语库
import { appName } from '~/constants'

const { textarea, input } = useTextareaAutosize()

setupEnhance()

useHead({
  title: `在线繁体字转换工具 - ${appName}`
})

const type = ref('s2t')
const isEnhance = ref(false)
const output = ref('')
const time = ref(0)

function toggleType() {
  type.value = type.value === 's2t' ? 't2s' : 's2t'
  convert()
}

function toggleEnhance() {
  convert()
}

function convert() {
  const text = input.value
  const begin = performance.now()
  const result = type.value === 't2s' ? toTraditional(text, isEnhance.value) : toSimplified(text, isEnhance.value)

  output.value = result.replace(/\n/g, '<br>')

  time.value = Number.parseFloat((performance.now() - begin).toFixed(2))
}

async function paste() {
  const text = await navigator.clipboard.readText()
  input.value = text
  convert()
}
</script>

<template>
  <main flex="~ col" mx-auto mt16 max-w-7xl w-full items-center justify-center>
    <h1 mb16 text-4xl font-bold>
      在线繁体字转换工具
    </h1>
    <header flex items-center gap12 text-base>
      <p flex items-center gap4 class="langs" :class="{ reverse: type === 's2t' }">
        <span>简体</span>
        <button id="toggle" type="button" h12 flex cursor-pointer items-center border-none bg-transparent text-5xl text-gray-900 outline-0 dark:text-gray-200 @click="toggleType">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16.5 17.5h-9a5.5 5.5 0 1 1 0-11h9a5.5 5.5 0 1 1 0 11" opacity="0.5" />
            <circle cx="7.5" cy="12" r="2.5" fill="currentColor" />
          </svg>
        </button>
        <span>繁体</span>
      </p>
      <label flex items-center for="enhance"><span mr1>启用短语库增强</span>
        <input id="enhance" v-model="isEnhance" type="checkbox" hidden @change="toggleEnhance">
        <div v-if="!isEnhance" i-ri:checkbox-blank-line />
        <div v-else i-ri:checkbox-line />
      </label>
      <button type="button" @click="copy(output.replace(/<br>/g, '\n'))">
        {{ isCopy ? '已复制' : '复制' }}
      </button>
      <button type="button" @click="paste">
        粘贴
      </button>
      <button type="button" @click="input = '';output = ''; time = 0">
        清空
      </button>
    </header>
    <div class="box border-2 border-[#e6eeff] border-solid" relative w-full flex of-hidden rounded-lg>
      <textarea id="input" ref="textarea" v-model="input" resize-none dark:text-black @input="convert" />
      <p id="output" dark:text-black v-html="output" />
    </div>
    <p pb16 pl3 pt4 text-sm>
      共 {{ input?.length || 0 }} 字，耗时 {{ time }}ms
    </p>
  </main>
</template>

<style>
.langs #toggle svg circle {
  transition: all 0.3s ease;
}

.langs.reverse #toggle svg circle {
  cx: 16.5;
}

.box {
  background: linear-gradient(0deg, #f4f7ff, #f4f7ff),
    linear-gradient(94.84deg, #fff 3.78%, #fcfdff 9.75%, #e6eeff 102.09%),
    linear-gradient(126.58deg, #fff -18.12%, hsla(0, 0%, 100%, 0) 26.77%);
}

.box::before {
  content: '';
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 50%;
  width: 0px;
  border-left: dashed 3px #e6eeff;
}

#input {
  display: block;
  flex: 1;
  height: 100%;
  min-height: 300px;
  border: none;
  background-color: transparent;
  padding: 20px;
  outline: 0;
  font-size: 20px;
  line-height: 32px;
}

#output {
  flex: 1;
  min-height: 300px;
  padding: 20px;
  font-size: 20px;
  line-height: 32px;
  word-break: break-all;
}
</style>
