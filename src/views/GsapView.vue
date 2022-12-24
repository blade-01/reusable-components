<template>
  <div class="py-6">
    <h1 class="head-link">
      {{ $route.name }}
    </h1>
    <gsapOne />
    <gsap-two />
  </div>
</template>

<script setup>
import gsapOne from "../components/gsap/gsapOne.vue";
import gsapTwo from "../components/gsap/gsapTwo.vue";
</script>

<style lang="scss" scoped></style>
