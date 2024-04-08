<script setup lang="ts">
const router = useRouter()

async function navigateToPanel() {
  await new Promise((resolve) => setTimeout(resolve, 2_000))
  router.push("/dashboard")
}

onMounted(() => {
  navigateToPanel()
})
</script>

<template>
  <h2>Redirecionando...</h2>
</template>
