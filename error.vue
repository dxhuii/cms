<script setup lang="ts">
const props = defineProps({
  error: Object
})

const message = computed(() => String(props.error?.message || ''))
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes('404'))
const isDev = process.dev

function handleError() {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <div flex="~ col" h-screen items-center justify-center gap4 text-center>
      <div text-3xl>
        {{ is404 ? '无法找到此页面' : '发生了一个错误' }}
      </div>
      <div text-xl op50>
        看起来你跟踪了一个错误的链接，或者输入了一个在本网站不存在的URL。
      </div>
      <pre v-if="isDev">{{ error }}</pre>
      <button n-link border rounded px4 py1 @click="handleError">
        返回首页
      </button>
    </div>
  </NuxtLayout>
</template>
