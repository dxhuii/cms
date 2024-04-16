<script setup lang="ts">
import { appName } from '~/constants'
</script>

<template>
  <main class="px10 py20">
    <slot />
    <Footer />
    <div class="mx-auto mt5 text-center text-sm opacity-35">
      {{ appName }} [<a href="https://cms.im">CMS.IM</a>] @ {{ new Date().getFullYear() }}
    </div>
  </main>
</template>
