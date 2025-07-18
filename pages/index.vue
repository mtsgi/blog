<script setup lang="ts">
useHead({
  title: 'ブログ記事一覧'
});

const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <div>
    <h1>
      ブログ記事一覧
    </h1>

    <p>
      {{ posts?.length }}件の記事
    </p>

    <div>
      <NuxtLink
        v-for="post in posts"
        :key="`post-${post.id}`"
        :to="post.path"
      >
        {{ post.title }}
        <span>
          {{ new Date(post.date).toLocaleDateString('ja-JP') }}
        </span>
        <span>
          {{ post.description }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>
