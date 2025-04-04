<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>

<template>
  <header class="flex gap-4 p-4">
    <UButton
      class="flex-shrink-0"
      icon="i-lucide-home"
      variant="link"
      :to="{ name: 'index' }"
    >
      mtsgi blog
    </UButton>
    <USeparator />
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      @click="isDark = !isDark"
    />
  </header>
</template>
