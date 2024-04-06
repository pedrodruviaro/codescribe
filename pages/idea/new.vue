<script setup lang="ts">
import CreateNewView from "~/modules/ideas/views/CreateNew.vue"

definePageMeta({
  layout: "admin",
})

useSeoMeta({
  title: "Nova ideia",
  description: "Criar uma nova ideia",
})
</script>

<template>
  <CreateNewView />
</template>
