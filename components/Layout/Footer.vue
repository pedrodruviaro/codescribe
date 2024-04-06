<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer
    class="grid place-items-center py-8 bg-zinc-200 dark:bg-zinc-950 border-t border-zinc-300 dark:border-zinc-700"
  >
    <p class="text-zinc-700 dark:text-zinc-500">
      &copy; Copyright {{ currentYear }} - CodeScribe
    </p>
  </footer>
</template>
