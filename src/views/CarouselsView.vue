<template>
  <div class="py-6">
    <h1 class="head-link">
      {{ $route.name }}
    </h1>
    <carousel-one />
    <carousel-two />
  </div>
</template>

<script setup>
import CarouselTwo from "../components/carousels/CarouselTwo.vue";
import CarouselOne from "../components/carousels/CarouselOne.vue";
</script>

<style lang="scss" scoped></style>
