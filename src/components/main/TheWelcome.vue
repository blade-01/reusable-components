<template>
  <div
    class="flex justify-center items-center w-full h-[calc(100vh-55px)] overflow-y-hidden"
  >
    <div class="text-center">
      <h1 class="main-text">Reuseable Components</h1>
      <div class="md:w-[550px] m-auto">
        <p class="md:text-xl text-[#8F8F8F] dark:text-priText font-medium my-8">
          This project contains the collation of reuseable components to
          ease/fasten development processes.
        </p>
        <the-links />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheLinks from "./TheLinks.vue";
</script>

<style lang="scss" scoped></style>
