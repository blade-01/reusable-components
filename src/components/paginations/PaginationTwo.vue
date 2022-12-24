<template>
  <div class="my-12">
    <div class="flex justify-center items-center">
      <a
        href="https://codepen.io/judyyy/pen/LLgNer?editors=1010"
        target="_blank"
        class="rc-link"
      >
        Prev/Next <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <div
      class="mt-6 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <pagination-list
        v-for="list in filteredList"
        :key="list.id"
        :list="list"
      />
    </div>
    <div class="flex justify-center items-center space-x-3">
      <button
        :disabled="currentPage <= 1"
        class="btn flex items-center -mx-1 disabled:bg-black disabled:cursor-not-allowed cursor-pointer"
        @click="changePage(-1)"
      >
        <span class="mdi mdi-arrow-left"></span>
        <span class="mx-1"> previous </span>
      </button>
      <span class="text-priText"
        >Page {{ currentPage }} of {{ list_two.length / perPage }}</span
      >
      <button
        :disabled="currentPage >= list_two.length / perPage"
        class="btn flex items-center -mx-1 disabled:bg-black disabled:cursor-not-allowed cursor-pointer"
        @click="changePage(1)"
      >
        <span class="mx-1"> next </span>
        <span class="mdi mdi-arrow-right"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import PaginationList from "./PaginationListTwo.vue";
const perPage = ref(4);
const currentPage = ref(1);
const store = useStore();
const list_two = computed(() => store.getters.list_two);
const filteredList = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = currentPage.value * perPage.value;
  return list_two.value.slice(start, end);
});
const getListTwo = () => store.dispatch("getListTwo");
getListTwo();
const changePage = (num) => {
  currentPage.value = currentPage.value + num;
};
</script>

<style lang="scss" scoped></style>
