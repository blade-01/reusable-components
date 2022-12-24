<template>
  <div class="my-12">
    <div class="flex justify-center items-center">
      <a
        href="https://stackoverflow.com/questions/66841494/how-get-a-load-more-button-for-a-li-list-vue-js"
        target="_blank"
        class="rc-link"
      >
        Load More <span class="mdi mdi-open-in-new"></span>
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
    <div class="flex justify-center space-x-3">
      <button
        :disabled="limit >= list_two.length"
        class="btn flex items-center -mx-1 disabled:bg-black disabled:cursor-not-allowed cursor-pointer"
        @click="limit += limit"
      >
        <span class="mx-1"> Show More </span>
        <span class="mdi mdi-arrow-down"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import PaginationList from "./PaginationListTwo.vue";
const limit = ref(4);
const store = useStore();
const list_two = computed(() => store.getters.list_two);
const filteredList = computed(() => list_two.value.slice(0, limit.value));
const getListTwo = () => store.dispatch("getListTwo");
getListTwo();
</script>

<style lang="scss" scoped></style>
