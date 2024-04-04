<script setup lang="ts">
import { marked } from "marked"

const description = ref("")

const markdownDescription = computed(() => {
  return marked(description.value)
})

function handlePreventTabKey(event: KeyboardEvent) {
  event.key === "Tab" && event.preventDefault()
}
</script>

<template>
  <BaseViewWrapper>
    <UCard>
      <div
        class="flex flex-col gap-4 items-start md:flex-row md:items-center md:justify-between"
      >
        <UInput
          color="primary"
          variant="outline"
          placeholder="Minha ideia genial é..."
          class="flex-1 w-full"
        />

        <UButton variant="outline">Salvar</UButton>
      </div>
    </UCard>

    <UCard class="mt-4">
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <UBadge color="white" variant="solid" class="mb-2"
            >Editor em markdown</UBadge
          >
          <UTextarea
            color="primary"
            variant="outline"
            v-model="description"
            :rows="20"
            @keydown="handlePreventTabKey"
          />
        </div>

        <div class="grid grid-rows-[max-content_1fr]">
          <UBadge color="white" variant="solid" class="mb-2 max-w-max"
            >Visualize em tempo real</UBadge
          >
          <UCard>
            <div
              class="prose prose-sm lg:prose-base dark:prose-invert"
              v-html="markdownDescription"
            ></div>
          </UCard>
        </div>
      </div>
    </UCard>
  </BaseViewWrapper>
</template>
