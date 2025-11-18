<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const router = useRouter()

router.options.scrollBehavior = () => {
  return { top: 0, left: 0, behavior: 'smooth' }
}
</script>
