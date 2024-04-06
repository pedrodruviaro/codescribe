<script setup lang="ts"></script>

<template>
  <h1 class="font-bold text-2xl lg:text-3xl mb-4">Edite o seu perfil</h1>
  <UCard>
    <template #header>
      <div class="flex items-center flex-wrap gap-2.5 justify-between">
        <div class="flex items-center gap-2">
          <UAvatar
            size="2xl"
            src="https://avatars.githubusercontent.com/u/23360933?s=200&v=4"
          />
          <p class="font-bold text-xl">codescribe</p>
        </div>

        <UButton size="sm" variant="outline" label="Ver perfil público" />
      </div>
    </template>

    <div class="grid gap-2">
      <h2 class="text-base lg:text-xl">Informações básicas</h2>
      <form class="space-y-2">
        <div class="grid md:grid-cols-2 gap-2">
          <UInput class="w-full" placeholder="Nome" />
          <UInput class="w-full" placeholder="Cargo" />
        </div>
        <UTextarea placeholder="Bio" :rows="8" />
        <UButton type="submit" label="Salvar alterações" />
      </form>
    </div>
  </UCard>
</template>
