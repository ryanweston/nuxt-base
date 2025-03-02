<script lang="ts" setup>
const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

defineOgImageComponent('Content', {
  title: data.value?.title,
  description: data.value?.description,
})

useSeoMeta({
  title: () => data.value?.title || 'nuxt-base',
  ogTitle: () => data.value?.title || 'nuxt-base',
  description: () => data.value?.description || 'nuxt-base',
  ogDescription: () => data.value?.description || 'nuxt-base',
})
</script>

<template>
  <div>
    <ContentRenderer
      v-if="data"
      :value="data"
    />
    <template v-else>
      <h1>Page Not Found</h1>
    </template>
  </div>
</template>
