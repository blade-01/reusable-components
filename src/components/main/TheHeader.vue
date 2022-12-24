<template>
  <div
    class="border-b border-b-[#c2c2c2] dark:border-b-[#363636] fixed top-0 left-0 w-full h-[55px] flex justify-between items-center z-50 main-bg"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <router-link
          :to="{ name: 'home' }"
          class="text-gradient text-4xl font-monoton font-medium tracking-widest"
        >
          RC
        </router-link>
        <div
          class="hamburger md:hidden"
          :class="{ 'is-active': isActive }"
          @click="openNav"
        >
          <span
            v-for="i in 3"
            :key="i"
            class="bg-[#213547] dark:bg-[#ecf0f1]"
          ></span>
        </div>
        <!-- Mobile Nav -->
        <nav
          class="md:hidden fixed h-full w-full top-[55px] -left-full bg-white dark:bg-primary p-8 pb-12 transition-all duration-500 overflow-y-scroll"
          :class="{ 'is-active': isActive }"
        >
          <ul class="block text-center">
            <li
              class="border-b border-b-[#c2c2c2] dark:border-b-[#363636]"
              v-for="route in routes"
              :key="route"
            >
              <div
                class="my-4 regular-text flex justify-between items-center"
                @click="unroll(route.title)"
              >
                <p class="capitalize">
                  {{ route.title }}
                </p>
                <span
                  class="mdi mdi-plus transition-all ease-in-out duration-500"
                  :class="[
                    dropdown === route.title ? 'rotate-45' : 'rotate-90',
                  ]"
                ></span>
              </div>
              <div
                class="transition-[max-height] ease-in-out duration-500 text-left"
                :class="[
                  dropdown === route.title
                    ? ' max-h-[500px] mb-2'
                    : ' max-h-0 overflow-hidden',
                ]"
              >
                <router-link
                  :to="{ name: list.routePath }"
                  v-for="list in route.lists"
                  :key="list"
                  class="block px-4 py-1 text-[12px] capitalize transition-colors duration-200 transform hover:text-greenText"
                >
                  {{ list.routeName }}
                </router-link>
              </div>
            </li>
            <li
              class="flex justify-between items-center bg-[#F9F9F9] dark:bg-[#242424] p-4 rounded-md mt-4"
            >
              <span class="text-xs text-priText">Appearance</span>
              <theme-toggler id="switchbox" />
            </li>
            <li class="flex justify-center items-center space-x-4 mt-4">
              <a
                target="_blank"
                :href="link.link"
                v-for="link in links"
                :key="link"
                class="text-[#4F6C87] dark:text-priText text-2xl cursor-pointer transition duration-500 ease-in-out hover:scale-75"
                :class="link.icon"
              >
              </a>
            </li>
          </ul>
        </nav>
        <!-- Desktop Nav -->
        <nav
          class="hidden relative md:left-auto md:top-auto md:w-auto md:h-auto md:flex flex-row items-center md:justify-center md:space-x-6 main-bg"
        >
          <div
            class="relative inline-block head"
            v-for="route in routes"
            :key="route.title"
          >
            <div class="flex items-center space-x-4">
              <button
                class="bg-none flex justify-between md:justify-start space-x-1 transition-all ease-in-out duration-200 hover:text-priText text-sm capitalize"
              >
                <span>{{ route.title }}</span>
                <span class="mdi mdi-chevron-down"></span>
              </button>
              <div
                class="absolute top-[30px] right-0 z-20 w-40 py-2 mt-2 main-bg rounded-md shadow-xl border border-[#c2c2c2] dark:border-[#474747] opacity-0 invisible transition-all ease-in-out -translate-y-1 duration-500 body"
              >
                <router-link
                  :to="{ name: list.routePath }"
                  v-for="list in route.lists"
                  :key="list"
                  class="block px-4 py-1 text-[12px] capitalize transition-colors duration-200 transform hover:text-greenText"
                >
                  {{ list.routeName }}
                </router-link>
              </div>
            </div>
          </div>
          <theme-toggler id="checkbox" />
          <div class="flex justify-center items-center space-x-4">
            <a
              target="_blank"
              :href="link.link"
              v-for="link in links"
              :key="link"
              class="text-[#4F6C87] dark:text-priText text-2xl cursor-pointer transition duration-500 ease-in-out hover:scale-75"
              :class="link.icon"
            >
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import ThemeToggler from "@/components/btn/ThemeToggler.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const dropdown = ref("");
const isActive = ref(false);
const openNav = () => {
  isActive.value = !isActive.value;
};
const unroll = (value) => {
  dropdown.value = value;
};
const routes = ref([
  {
    title: "components",
    lists: [
      {
        routeName: "paginations",
        routePath: "paginations",
      },
      {
        routeName: "carousels",
        routePath: "carousels",
      },
      {
        routeName: "loaders",
        routePath: "loaders",
      },
      {
        routeName: "forms",
        routePath: "forms",
      },
    ],
  },
  {
    title: "Animations",
    lists: [
      {
        routeName: "GSAP",
        routePath: "gsap",
      },
      {
        routeName: "WebGL",
        routePath: "forms",
      },
      {
        routeName: "ThreeJS",
        routePath: "loaders",
      },
    ],
  },
]);
const links = ref([
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
const router = useRouter();
onMounted(() => {
  router.beforeEach(() => {
    isActive.value = false;
  });
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity ease-in-out 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.head:hover .body {
  visibility: visible;
  opacity: 1;
  transform: translateY(-6px);
}
</style>
