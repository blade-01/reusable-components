<template>
  <div class="my-6">
    <div class="flex justify-center items-center">
      <a
        href="https://github.com/HENNGE/vue3-pagination"
        target="_blank"
        class="rc-link"
      >
        Numbered <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <div
      class="mt-6 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <pagination-list v-for="list in lists.data" :key="list.id" :list="list" />
    </div>
    <div class="flex justify-center items-center flex-col w-full">
      <v-pagination
        v-model="page"
        :pages="lists.total_pages"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="updateHandler"
      />
    </div>
  </div>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { useStore } from "vuex";
import PaginationList from "./PaginationListOne.vue";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const page = ref(1);
const store = useStore();
const lists = computed(() => store.getters.lists);
const getList = () => store.dispatch("getList", page.value);
getList();
const updateHandler = () => {
  getList(page.value);
  scrollTo({
    top: 0,
  });
};
</script>

<style scoped>
:deep(.Control) {
  fill: #ffffff;
}

:deep(.Control-active) {
  fill: #979797;
}

:deep(.Page) {
  height: 30px;
  width: 30px;
}
:deep(.Page-active) {
  color: #1d1d1d;
  border: none;
  background: #ffffff;
}
</style>
