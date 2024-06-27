<script lang="ts" setup>
const slug = useRoute().params.slug

const { data } = await useAsyncData(`${slug[0]}`, () => queryContent().where({ _path: { $eq: `/${slug[0]}` as string } }).findOne(),
)

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
  <ContentRenderer
    v-if="data"
    :value="data"
  >
    <ContentRendererMarkdown :value="data" />
  </ContentRenderer>
</template>
