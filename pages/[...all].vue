<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center gray-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button text-sm action-button m="3 t8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
