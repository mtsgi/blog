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

<style src="./index.scss" lang="scss" scoped />
