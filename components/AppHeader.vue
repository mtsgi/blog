<template>
  <header>
    <NuxtLink :to="{ name: 'index' }">
      mtsgi blog
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--color-border);

  a {
    padding: 1rem;
    text-decoration: none;
    font-size: var(--font-size-large);
    font-weight: bold;
  }
}
</style>
