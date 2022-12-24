<template>
  <div class="absolute top-[70px]" @click="$router.go(-1)">
    <button class="flex items-center space-x-2 btn">
      <span class="mdi mdi-chevron-left"></span>
      <span class="mx-1">Back</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
