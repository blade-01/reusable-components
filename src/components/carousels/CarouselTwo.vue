<template>
  <div class="my-12">
    <div class="flex justify-center items-center">
      <a href="https://swiperjs.com/vue" target="_blank" class="rc-link">
        Swiper <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      navigation
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        '1024': {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide v-for="slide in 10" :key="slide">{{ slide }}</swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ref } from "@vue/reactivity";

const modules = ref([Navigation, Pagination, A11y, Autoplay]);
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  min-height: 200px;
  width: 100%;
  background-image: linear-gradient(
    30deg,
    rgba(85, 211, 146, 1) 34%,
    rgba(86, 162, 210, 1) 100%,
    rgba(85, 211, 146, 1) 34%
  );
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next,
.swiper-button-prev {
  color: red;
  background-color: green;
}

.swiper-pagination-bullet {
  background: rgba(85, 211, 146, 1);
  border-radius: 100%;
  height: 8px;
  width: 8px;
}
.swiper-pagination-bullet-active {
  background: rgba(86, 162, 210, 1);
}
</style>
