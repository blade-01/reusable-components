<template>
  <label
    :for="id"
    class="cursor-pointer w-[35px] h-[18px] bg-gray-200 dark:bg-[#2F2F2F] rounded-full shadow-inner border border-[#c2c2c2] dark:border-[#474747] relative"
  >
    <input
      :id="id"
      ref="checkbox"
      type="checkbox"
      class="hidden"
      @change="switchTheme"
    />
    <div
      class="toggle absolute top-0 left-0 right-0 bottom-0 cursor-pointer rounded-full before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:-left-1 before:top-0 before:bottom-0 before:bg-[url('https://i.ibb.co/FxzBYR9/night.png')] before:bg-no-repeat before:bg-center before:my-auto before:mx-auto before:shadow-md before:rounded-[50%] before:bg-[#2F2F2F] before:transition-all before:ease-in-out before:duration-500"
    ></div>
  </label>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useColorMode } from "@vueuse/core";

defineProps(["id"]);

const colorMode = useColorMode();
// Toggle theme (this auto-saves thanks to VueUse)
const switchTheme = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
};
const checkbox = ref(null);
onMounted(() => {
  // Saves toggle
  colorMode.value === "light"
    ? (checkbox.value.checked = true)
    : (checkbox.value.checked = false);
});
</script>

<style scoped>
input:checked + .toggle:before {
  transform: translateX(20px) rotate(360deg);
  background: white url("https://i.ibb.co/7JfqXxB/sunny.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
