<template>
  <div class="py-6">
    <h1 class="head-link">
      {{ $route.name }}
    </h1>
    <form-one />
    <form-two />
    <form-three />
    <form-four />
  </div>
</template>

<script setup>
import FormOne from "../components/forms/FormOne.vue";
import FormTwo from "../components/forms/FormTwo.vue";
import FormThree from "../components/forms/FormThree.vue";
import FormFour from "../components/forms/FormFour.vue";
</script>

<style lang="scss" scoped></style>
