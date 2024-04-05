<script setup lang="ts">
const title = defineModel("title", { required: true })

const emits = defineEmits<{
  (e: "wants-to-save-idea"): void
}>()
</script>

<template>
  <UCard>
    <div
      class="flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between"
    >
      <UInput
        color="primary"
        variant="outline"
        placeholder="Minha ideia genial é..."
        class="flex-1 w-full"
        v-model="title"
      />

      <UButton variant="outline" @click="emits('wants-to-save-idea')"
        >Salvar</UButton
      >
    </div>
  </UCard>
</template>
