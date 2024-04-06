<script setup lang="ts">
import UserConfigView from "~/modules/user/views/Config.vue"

definePageMeta({
  layout: "admin",
})

useSeoMeta({
  title: "Configurações",
  description: "Edite seu perfil",
})
</script>

<template>
  <UserConfigView />
</template>
