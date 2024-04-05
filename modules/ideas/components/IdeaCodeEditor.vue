<script setup lang="ts">
const props = defineProps<{
  languageOptions: string[]
  editorOptions: object
}>()

const code = defineModel<string>("code", { required: true })

const selectedLang = defineModel<string>("selectedLang", { required: true })
</script>

<template>
  <UCard class="overflow-auto">
    <USelect v-model="selectedLang" :options="props.languageOptions" />

    <div class="grid gap-4 lg:grid-cols-2 mt-4">
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
      >
        Carregando...
      </MonacoDiffEditor>
    </div>
  </UCard>
</template>
