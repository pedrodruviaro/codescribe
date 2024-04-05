<script setup lang="ts">
const props = defineProps<{
  markdownDescription: string | Promise<string>
  isPreviewOpen: boolean
}>()

const emits = defineEmits<{
  (e: "toggle-preview"): void
}>()

const description = defineModel<string>("description", { required: true })

const preview = defineModel<boolean>("preview", { required: true })

function handlePreventTabKey(event: KeyboardEvent) {
  event.key === "Tab" && event.preventDefault()
}

const gridCols = computed(() => {
  return props.isPreviewOpen ? "md:grid-cols-2" : "md:grid-cols-1"
})
</script>

<template>
  <UCard>
    <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
      <UTooltip
        text="Visualize no botão ao lado"
        :popper="{ placement: 'top' }"
      >
        <UBadge color="white" variant="solid" class="mb-2"
          >Editor em markdown</UBadge
        >
      </UTooltip>

      <UButton size="2xs" variant="outline" @click="preview = !preview"
        >Visualize em tempo real</UButton
      >
    </div>

    <div class="grid gap-4" :class="[gridCols]">
      <div>
        <UTextarea
          color="primary"
          variant="outline"
          v-model="description"
          class="h-[400px]"
          textareaClass="markdown-editor-textarea"
          @keydown="handlePreventTabKey"
        />
      </div>

      <div
        class="grid grid-rows-[max-content_1fr] col-span-1"
        v-if="isPreviewOpen"
      >
        <div
          class="h-[400px] overflow-auto border border-zinc-500 dark:border-zinc-800 px-2.5 py-1.5 rounded-md"
        >
          <div
            class="prose prose-sm lg:prose-base dark:prose-invert"
            v-html="props.markdownDescription"
          ></div>
        </div>
      </div>
    </div>
  </UCard>
</template>

<style>
.markdown-editor-textarea {
  height: 100%;
}
</style>
