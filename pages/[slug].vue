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
    <h1 class="text-3xl mb-4 px-4">
      {{ post.title }}
    </h1>

    <p v-if="post.date">
      {{ new Date(post.date).toLocaleDateString('ja-JP') }}
    </p>

    <div class="flex gap-2 mb-4 px-4">
      <span
        v-for="tag in post.tags"
        :key="`tag-${tag}`"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer
      :value="post"
      class="markdown-body"
    />

    <div>
      <NuxtLink :to="{ name: 'index' }">
        もどる
      </NuxtLink>
    </div>
  </main>
</template>
