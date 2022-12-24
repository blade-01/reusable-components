<template>
  <div class="flex justify-center items-center space-x-2">
    <a
      target="_blank"
      :href="route.link"
      v-for="route in routes"
      :key="route"
      class="text-[#4F6C87] dark:text-priText text-lg bg-[#F1F1F1] dark:bg-secondary rounded-full py-0.5 px-2 cursor-pointer border border-solid border-[#c2c2c2] dark:border-primary transition duration-500 ease-in-out hover:scale-90"
      :class="route.icon"
    >
    </a>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
const routes = ref([
  {
    link: "https://github.com/blade-01",
    icon: "mdi mdi-github",
  },
  {
    link: "https://twitter.com/blade_vue",
    icon: "mdi mdi-twitter",
  },
  {
    link: "https://linkedin.com/in/animashaun-taofiq",
    icon: "mdi mdi-linkedin",
  },
]);
</script>

<style lang="scss" scoped></style>
