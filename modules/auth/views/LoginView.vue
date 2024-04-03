<script setup lang="ts">
import Hero from "~/modules/auth/components/Hero.vue"

const router = useRouter()
const loading = ref(false)

async function handleLoginWithGithub() {
  console.log("login with github")
  router.push("/dashboard")
}
</script>

<template>
  <BaseViewWrapper class="grid place-items-center">
    <Hero
      :loading="loading"
      @wants-to-login-with-github="handleLoginWithGithub"
    />
  </BaseViewWrapper>
</template>
