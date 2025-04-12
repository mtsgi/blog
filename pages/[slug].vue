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

    <p
      v-if="post.date"
      class="text-gray-500 mb-4 px-4"
    >
      {{ new Date(post.date).toLocaleDateString('ja-JP') }}
    </p>

    <div class="flex gap-2 mb-4 px-4">
      <UButton
        v-for="tag in post.tags"
        :key="tag"
        variant="outline"
        icon="i-lucide-tag"
      >
        {{ tag }}
      </UButton>
    </div>

    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer
      :value="post"
      class="px-4 markdown-body"
    />

    <div class="flex flex-col m-4">
      <UButton
        variant="soft"
        icon="i-lucide-arrow-left"
        :to="{ name: 'index' }"
      >
        もどる
      </UButton>
    </div>
  </main>
</template>
