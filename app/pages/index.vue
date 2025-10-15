<script lang="ts" setup>
useSeoMeta({
  title: 'nuxt-base',
  description: 'A Nuxt 3 template.',
})

defineOgImageComponent('Default')
</script>

<template>
  <div>
    <NuxtLink
      to="/example"
      class="border flex items-center gap-1 text-sm px-2 hover:bg-zinc-100 py-1 rounded dark:border-zinc-600 border-zinc-300 dark:hover-bg-zinc-800"
    >
      View markdown route <Icon name="carbon:arrow-right" />
    </NuxtLink>
  </div>
</template>
