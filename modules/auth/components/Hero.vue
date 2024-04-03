<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()

const emits = defineEmits<{
  (e: "wants-to-login-with-github"): void
}>()
</script>

<template>
  <section>
    <UCard>
      <div class="grid gap-4 text-center">
        <h1 class="font-bold text-lg md:text-xl lg:text-2xl">
          Entre e aproveite a facilidade
        </h1>
        <p class="text-base md:text-lg">
          O Aplicativo de Gerenciamento de Ideias para Desenvolvedores
        </p>
      </div>

      <UDivider icon="i-heroicons-chevron-double-down" class="py-8" />

      <div class="flex justify-center">
        <UButton
          icon="i-heroicons-arrow-right-on-rectangle"
          trailing
          size="lg"
          :loading="props.loading"
          @click="emits('wants-to-login-with-github')"
          >Entrar com Github</UButton
        >
      </div>
    </UCard>
  </section>
</template>
