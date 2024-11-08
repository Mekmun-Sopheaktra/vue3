<script setup>
import { useMetaTag } from '@/composables/useMetaTag';

// Set meta tags for SEO
useMetaTag({
  title: 'Coming Soon',
  name: 'ITE | Coming Soon',
  description: 'Coming Soon.',
  url: 'https://ite-alumni-dev.decapsoul.one/',
  image: 'https://mekmunsopheaktra.com/assets/images/logo.png',
  type: 'article',
  siteName: 'Coming Soon',
  locale: 'en_US',
});

const prefix = import.meta.env.VITE_PREFIX;
const prefixClass = {
  [`${prefix}-wrapper`]: true,
};
</script>

<template>
  <div :class="prefixClass">
    <h1>coming soon<span :class="`${prefix}-dot`">.</span></h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/layouts/_home.scss';
</style>
