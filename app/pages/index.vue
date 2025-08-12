<script setup lang="ts">
useHead({
  title: 'ブログ記事一覧'
});

const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all());
</script>

<template>
  <main>
    <h1>
      ブログ記事一覧
    </h1>

    <p>
      {{ posts?.length }}件の記事
    </p>

    <div class="blog-list">
      <BlogLink
        v-for="post in posts"
        :key="`post-${post.id}`"
        :post="post"
      />
    </div>
  </main>
</template>

<style src="./index.scss" lang="scss" scoped />
