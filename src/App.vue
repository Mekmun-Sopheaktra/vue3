<template>
  <div id="app">
    <div>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/pinia">Pinia</RouterLink>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
