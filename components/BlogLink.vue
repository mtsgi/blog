<script lang="ts" setup>
import type { BlogCollectionItem } from '@nuxt/content';

const props = defineProps<{
  post: BlogCollectionItem;
}>();
</script>

<template>
  <NuxtLink
    :to="props.post.path"
    class="blog-link"
  >
    <strong>
      {{ props.post.title }}
    </strong>
    <span>
      {{ new Date(props.post.date).toLocaleDateString('ja-JP') }}
    </span>
    <span>
      {{ props.post.description }}
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.blog-link {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  text-decoration: none;

  strong {
    color: var(--color-primary);
    font-weight: bold;
  }

  span {
    display: block;
    font-size: var(--font-size-small);
    color: var(--color-text-secondary);
  }
}
</style>
