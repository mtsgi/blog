<script setup lang="ts">
useHead({
  title: 'ブログ記事一覧'
});

const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <div>
    <h1 class="text-3xl mb-4 px-4">
      ブログ記事一覧
    </h1>

    <p class="text-gray-500 mb-4 px-4">
      {{ posts?.length }}件の記事
    </p>

    <div class="flex flex-col gap-4 px-4">
      <UButton
        v-for="post in posts"
        :key="post.id"
        variant="soft"
        :to="post.path"
        class="text-xl flex-col gap-1 items-start"
      >
        {{ post.title }}
        <span class="text-sm text-gray-500">
          {{ new Date(post.date).toLocaleDateString('ja-JP') }}
        </span>
        <span class="text-sm text-gray-500">
          {{ post.description }}
        </span>
      </UButton>
    </div>
  </div>
</template>
