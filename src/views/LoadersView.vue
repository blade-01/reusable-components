<template>
  <div class="py-6">
    <h1 class="head-link">
      {{ $route.name }}
    </h1>
    <loader-one />
    <loader-two />
  </div>
</template>

<script setup>
import LoaderOne from "../components/loaders/LoaderOne.vue";
import LoaderTwo from "../components/loaders/LoaderTwo.vue";
</script>

<style lang="scss" scoped></style>
