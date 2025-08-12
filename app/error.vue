<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
});
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <h1>
        {{ props.error?.statusCode || 'Error' }}
      </h1>

      <div>
        {{ props.error?.message }}
      </div>

      <div class="footer">
        <NuxtLink to="/">
          もどる
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;

  .footer {
    padding-top: 1rem;
    border-top: 2px solid var(--color-border);
    margin: 2rem 0;
  }
}
</style>
