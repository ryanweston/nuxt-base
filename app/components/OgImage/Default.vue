<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="flex items-center w-full h-full justify-between relative p-20 bg-white">
    <div class="flex items-center gap-2 flex-col grow justify-center">
      <h1
        v-if="title"
        style="font-family:'IBM+Plex+Mono'"
        class="text-5xl"
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
  </div>
</template>
