<template>
  <div class="my-6">
    <div class="flex justify-center items-center sm:space-x-4 flex-wrap">
      <a
        href="https://github.com/peterroe/vue-img-lazy-tiny"
        target="_blank"
        class="rc-link"
      >
        Lazy load image <span class="mdi mdi-open-in-new"></span>
      </a>
      <a
        href="https://github.com/liangyuanchai/vue3-plugin-lazy"
        target="_blank"
        class="rc-link"
      >
        Lazy load plugin <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <div
      class="mt-6 mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <img
        v-for="it in 20"
        :key="it"
        v-lazy="'https://unsplash.it/1600/900?random=' + Math.random()"
        alt="img"
        class="mb-2"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
