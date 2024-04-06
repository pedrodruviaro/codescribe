<script setup lang="ts">
const router = useRouter()

function handleNavigateToDashboard() {
  router.push("/dashboard")
}

function handleNavigateToConfigs() {
  router.push("/user/config")
}

function handleNavigateToCreateIdea() {
  router.push("/idea/new")
}

function handleLogout() {
  console.log("Quero sair")
}
</script>

<template>
  <div>
    <AdminHeader
      :username="'username'"
      :name="'name'"
      :avatar-url="'https://avatars.githubusercontent.com/u/739984?v=4'"
      @wants-navigate-to-configs="handleNavigateToConfigs"
      @wants-navigate-to-dashboard="handleNavigateToDashboard"
      @wants-navigate-to-create-idea="handleNavigateToCreateIdea"
      @wants-sign-out="handleLogout"
    />
    <BaseViewWrapper class="min-h-[93vh]">
      <slot />
    </BaseViewWrapper>
    <LayoutFooter />
  </div>
</template>
