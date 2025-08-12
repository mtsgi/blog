<script setup>
const { slug } = useRoute().params;

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/${slug}`).first();
});

useHead({
  title: post.value?.title,
  meta: [
    {
      name: 'description',
      content: post.value?.description
    }
  ]
});
</script>

<template>
  <main>
    <h1>
      {{ post.title }}
    </h1>

    <p v-if="post.date">
      {{ new Date(post.date).toLocaleDateString('ja-JP') }}
    </p>

    <div
      v-if="post.tags.length > 0"
      class="tags"
    >
      <TagLink
        v-for="tag in post.tags"
        :key="`tag-${tag}`"
        :tag="tag"
      />
    </div>

    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer
      :value="post"
      class="markdown-body"
    />

    <div class="footer">
      <NuxtLink :to="{ name: 'index' }">
        もどる
      </NuxtLink>
    </div>
  </main>
</template>

<style src="./index.scss" lang="scss" scoped />
