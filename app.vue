<script setup>
useHead({
  title: '内容清单 - CMS'
})
</script>

<template>
  <NuxtLoadingIndicator />
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
