<script setup lang="ts">
const colorMode = useColorMode()

const color = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    colorMode.preference = value ? 'dark' : 'light'
  },
})
</script>

<template>
  <div class="flex items-center gap-2">
    <label for="theme-input">Dark mode</label>
    <input
      id="theme-input"
      v-model="color"
      value="dark"
      type="checkbox"
    >
  </div>
</template>
