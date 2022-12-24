<template>
  <div>
    <div
      class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
    >
      <img
        v-lazy="list.picture.medium"
        :alt="list.name.first"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-white">
          {{ list.name.first }} {{ list.name.last }}
        </h3>
        <p class="mt-1 text-sm text-priText">{{ list.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: Object,
});
</script>

<style lang="scss" scoped></style>
