<script setup lang="ts">
</script>

<template>
  <main class="flex items-center flex-col justify-center w-screen h-screen p-14 gap-8">
    <div class="flex flex-col items-center gap-1">
      <NuxtLink
        to="/"
        class="font-mono text-xl"
      >
        nuxt-base
      </NuxtLink>
      <p class="text-sm dark:text-zinc-400 text-zinc-500">
        a nuxt 3 base template
      </p>
    </div>
    <slot />
    <ThemeToggle />
  </main>
</template>
