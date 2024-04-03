<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - CodeScribe` : "CodeScribe"
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="3" color="#14B8A6" />
    <NuxtPage />

    <UNotifications />
  </NuxtLayout>
</template>
