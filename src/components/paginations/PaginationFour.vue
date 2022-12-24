<template>
  <div class="my-12">
    <div class="flex justify-center items-center">
      <a
        href="https://github.com/timothyokooboh/infinite-loading-vue3"
        target="_blank"
        class="rc-link"
      >
        Infinite scroll <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <infinite-scroll @infinite-scroll="getListThree">
      <div
        class="mt-6 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          class="w-full rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
          v-for="repo in list_three"
          :key="repo.id"
        >
          <div>
            <img
              v-lazy="repo.owner.avatar_url"
              :alt="repo.name"
              class="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-white">
                {{ repo.name }}
              </h3>
              <p class="mt-1 text-sm text-priText">{{ repo.full_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </infinite-scroll>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import InfiniteScroll from "infinite-loading-vue3";
import { useStore } from "vuex";
const store = useStore();
const list_three = computed(() => store.getters.list_three);
const getListThree = () => store.dispatch("getListThree");
getListThree();
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
