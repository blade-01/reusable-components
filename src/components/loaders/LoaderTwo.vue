<template>
  <div class="my-12">
    <div class="flex justify-center items-center">
      <a
        href="https://github.com/DarkC0der11/vue-skeletor"
        target="_blank"
        class="rc-link"
      >
        Vue Skeletor <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <div
      class="mt-6 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      v-if="list_two.length"
    >
      <pagination-list v-for="list in list_two" :key="list.id" :list="list" />
    </div>
    <div
      class="mt-6 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      v-else
    >
      <div
        class="w-full rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        v-for="i in 20"
        :key="i"
      >
        <Skeletor height="250px" />
        <div class="mt-4 flex justify-between">
          <div>
            <Skeletor height="20px" width="150" pill />
            <Skeletor height="20px" width="220" class="mt-1" pill />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { Skeletor } from "vue-skeletor";
import { useStore } from "vuex";
import PaginationList from "../paginations/PaginationListTwo.vue";
const store = useStore();
const list_two = computed(() => store.getters.list_two);
const getListTwo = () => store.dispatch("getListTwo");
getListTwo();
</script>

<style scoped>
:deep(.spinner) {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
  border-radius: none;
  border: none;
  background-image: linear-gradient(
    -90deg,
    rgba(85, 211, 146, 1) 34%,
    rgba(86, 162, 210, 1) 100%
  );
}
:deep(.spinner::before) {
  display: none;
}
:deep(.spinner::after) {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: hourglass 1.2s infinite;
}
@keyframes hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
