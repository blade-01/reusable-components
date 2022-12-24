<template>
  <div class="my-6">
    <div class="flex justify-center items-center">
      <a
        href="https://ismail9k.github.io/vue3-carousel/"
        target="_blank"
        class="rc-link"
      >
        Vue3 Carousel <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <carousel :settings="settings" :breakpoints="breakpoints" :autoplay="3000">
      <slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "@vue/reactivity";
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
  wrapAround: true,
});
const breakpoints = ref({
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
});
</script>

<style>
.carousel__item {
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

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: content-box;
  border: 4px solid white;
  background-image: linear-gradient(
    -90deg,
    rgba(85, 211, 146, 1) 34%,
    rgba(86, 162, 210, 1) 100%
  );
}

.carousel__prev {
  left: -10px;
}

.carousel__next {
  right: -10px;
}

.carousel__pagination-button {
  background: rgba(85, 211, 146, 1);
  border-radius: 100%;
  height: 8px;
  width: 8px;
}
.carousel__pagination-button--active {
  background: rgba(86, 162, 210, 1);
}

/* Active Class: For more animation */

/* .carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
} */
</style>
