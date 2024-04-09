<script setup lang="ts">
const props = defineProps<{
  username: string
  name: string
  avatarUrl: string
}>()

const emits = defineEmits<{
  (e: "wants-navigate-to-dashboard"): void
  (e: "wants-navigate-to-my-profile"): void
  (e: "wants-navigate-to-create-idea"): void
  (e: "wants-sign-out"): void
}>()

const dropdownOptions = [
  [
    {
      label: props.username,
      slot: "account",
      disabled: true,
    },
  ],
  [
    {
      label: "Painel",
      icon: "i-heroicons-list-bullet",
      click: () => emits("wants-navigate-to-dashboard"),
    },
    {
      label: "Criar nova ideia",
      icon: "i-heroicons-pencil-square",
      click: () => emits("wants-navigate-to-create-idea"),
    },
    {
      label: "Configurações",
      icon: "i-heroicons-cog-8-tooth",
      click: () => emits("wants-navigate-to-my-profile"),
    },
  ],
  [
    {
      label: "Sign out",
      icon: "i-heroicons-arrow-left-on-rectangle",
      click: () => emits("wants-sign-out"),
    },
  ],
]
</script>

<template>
  <header>
    <UContainer
      class="flex justify-between gap-2 py-2.5 border-b border-zinc-300 dark:border-zinc-700"
    >
      <NuxtLink to="/dashboard">
        <Logo />
      </NuxtLink>

      <div class="flex items-center gap-2">
        <p>Olá, {{ props.name }}</p>
        <UDropdown
          :items="dropdownOptions"
          :ui="{ item: { disabled: 'cursor-text select-text' } }"
        >
          <UAvatar :src="props.avatarUrl" />

          <template #account="{ item }">
            <div class="text-left">
              <p>Signed in as</p>
              <p class="truncate font-medium text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
            </div>
          </template>

          <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>

            <UIcon
              :name="item.icon"
              class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
            />
          </template>
        </UDropdown>
      </div>
    </UContainer>
  </header>
</template>
