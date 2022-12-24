<template>
  <the-header />
  <div class="container">
    <div class="mt-[55px]">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import TheHeader from "./components/main/TheHeader.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
