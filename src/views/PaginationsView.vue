<template>
  <div class="py-6">
    <h1 class="head-link">
      {{ $route.name }}
    </h1>
    <!-- Works when data has total pages and per page -->
    <pagination-one />
    <!-- Works when we get the whole data and slice it with a limit (stat, end) -->
    <pagination-two />
    <!-- Works when data get the whole data and slice it with a limit (end)-->
    <pagination-three />
    <!-- Works when data has page or limit -->
    <pagination-four />
  </div>
</template>

<script setup>
import PaginationOne from "../components/paginations/PaginationOne.vue";
import PaginationTwo from "../components/paginations/PaginationTwo.vue";
import PaginationThree from "../components/paginations/PaginationThree.vue";
import PaginationFour from "../components/paginations/PaginationFour.vue";
</script>

<style lang="scss" scoped></style>
