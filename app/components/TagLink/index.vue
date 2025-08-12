<script lang="ts" setup>
const props = defineProps<{
  tag: string;
}>();
</script>

<template>
  <NuxtLink class="tag-link">
    {{ props.tag }}
  </NuxtLink>
</template>

<style src="./index.scss" lang="scss" scoped />
