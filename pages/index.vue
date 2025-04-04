<script setup lang="ts">
useHead({
  title: 'ブログ記事一覧'
});

const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <div>
    <h1 class="text-xl mb-4 px-4">
      ブログ記事一覧
    </h1>
    <p class="text-sm mb-4 px-4">
      {{ posts?.length }}件の記事
    </p>

    <div class="flex flex-col gap-4 px-4">
      <UButton
        v-for="post in posts"
        :key="post.id"
        variant="link"
        :to="post.path"
        class="px-0"
      >
        {{ post.title }}
      </UButton>
    </div>
  </div>
</template>
