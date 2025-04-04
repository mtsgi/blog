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
    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer
      :value="post"
      class="px-4 post"
    />

    <div class="flex flex-col m-4">
      <UButton
        variant="link"
        icon="i-lucide-arrow-left"
        :to="{ name: 'index' }"
      >
        もどる
      </UButton>
    </div>
  </main>
</template>
