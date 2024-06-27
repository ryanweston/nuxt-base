<script lang="ts" setup>
useSeoMeta({
  title: 'nuxt-base',
  description: 'A Nuxt 3 template.',
})

defineOgImageComponent('Default')
</script>

<template>
  <div>
    <p>Example content</p>
    <NuxtLink to="/example/example">
      See example content
    </NuxtLink>
  </div>
</template>
