<script setup lang="ts">
const title = defineModel<string>("title", { required: true })

const isPublic = defineModel<boolean>("isPublic", { required: true })

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

      <UCheckbox v-model="isPublic" name="notifications" label="Pública" />

      <UButton variant="outline" @click="emits('wants-to-save-idea')"
        >Salvar</UButton
      >
    </div>
  </UCard>
</template>
