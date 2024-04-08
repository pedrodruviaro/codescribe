<script setup lang="ts">
import Hero from "~/modules/auth/components/Hero.vue"

const loading = ref(false)

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const config = useRuntimeConfig()

async function handleLoginWithGithub() {
  try {
    loading.value = true

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${config.public.siteUrl}/auth/github`,
      },
    })
  } catch (e) {
    console.log("e", e)
  } finally {
    loading.value = false
  }
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
