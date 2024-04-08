<script setup lang="ts">
const props = defineProps<{
  languageOptions: string[]
  editorOptions: object
}>()

const code = defineModel<string>("code", { required: true })

const selectedLang = defineModel<string>("selectedLang", { required: true })

const editorDiffOpen = defineModel<boolean>("editorDiffOpen", {
  required: true,
})

const gridClass = computed(() => {
  return editorDiffOpen.value ? "lg:grid-cols-2" : "lg:grid-cols-1"
})
</script>

<template>
  <UCard class="overflow-auto">
    <div class="grid gap-2">
      <p>Selecione a linguagem</p>
      <USelect v-model="selectedLang" :options="props.languageOptions" />
    </div>

    <UButton
      @click="editorDiffOpen = !editorDiffOpen"
      size="2xs"
      variant="outline"
      class="mt-8 mb-2"
      >Compare com a última versão</UButton
    >

    <div class="grid gap-4 mt-4" :class="[gridClass]">
      <MonacoEditor
        v-model="code"
        :lang="selectedLang"
        :options="props.editorOptions"
        class="min-h-[500px]"
        >Carregando...</MonacoEditor
      >

      <!-- v-model="new_code" -->
      <MonacoDiffEditor
        :original="code"
        :options="props.editorOptions"
        class="min-h-[500px]"
        v-if="editorDiffOpen"
      >
        Carregando...
      </MonacoDiffEditor>
    </div>
  </UCard>
</template>
