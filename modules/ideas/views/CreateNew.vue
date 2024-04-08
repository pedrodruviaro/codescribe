<script setup lang="ts">
import { marked } from "marked"
import IdeaCodeEditor from "~/modules/ideas/components/IdeaCodeEditor.vue"
import IdeaMarkdownEditor from "~/modules/ideas/components/IdeaMarkdownEditor.vue"
import IdeaHeadlineEditor from "~/modules/ideas/components/IdeaHeadlineEditor.vue"

// headline
const title = ref("")
const isPublic = ref(false)

async function handleSaveIdea() {
  const newIdea = {
    title: title.value,
    description: description.value,
    is_public: isPublic.value,
    new_code: code.value,
    old_code: code.value,
    lang: selectedLang.value,
  }

  console.log(newIdea)
}

// markdown
const description = ref("")
const isMarkdownPreviewOpen = ref(false)

const markdownDescription = computed(() => {
  return marked(description.value)
})

// code editor
const langs = ["plaintext", "html", "css", "javascript", "typescript", "python"]
const code = ref("")
const selectedLang = ref("")
const isCodeEditorDiffOpen = ref(false)

const EDITOR_OPTIONS = {
  automaticLayout: true,
  theme: "vs-dark",
}
</script>

<template>
  <div class="grid gap-4">
    <IdeaHeadlineEditor
      v-model:isPublic="isPublic"
      v-model:title="title"
      @wants-to-save-idea="handleSaveIdea"
    />

    <IdeaMarkdownEditor
      v-model:description="description"
      v-model:preview="isMarkdownPreviewOpen"
      :markdownDescription="markdownDescription"
    />

    <IdeaCodeEditor
      v-model:selectedLang="selectedLang"
      v-model:code="code"
      v-model:editorDiffOpen="isCodeEditorDiffOpen"
      :editor-options="EDITOR_OPTIONS"
      :language-options="langs"
    />
  </div>
</template>
