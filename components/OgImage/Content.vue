<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="w-full h-full flex justify-between relative items-center p-20 bg-white">
    <div class="flex flex-col gap-2 grow items-center justify-center">
      <h1
        v-if="title"
        class="text-5xl font-semibold"
      >
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="text-2xl font-normal"
      >
        {{ description }}
      </p>
    </div>
    <p
      class="text-xl"
      style="font-family:'IBM+Plex+Mono'"
    >
      nuxt-base
    </p>
  </div>
</template>
