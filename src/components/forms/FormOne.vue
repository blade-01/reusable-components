<template>
  <div class="my-12">
    <div class="flex justify-center items-center sm:space-x-4 flex-wrap">
      <a
        href="https://www.youtube.com/watch?v=TlDy9cZQpC0"
        target="_blank"
        class="rc-link"
      >
        Base Input <span class="mdi mdi-open-in-new"></span>
      </a>
      <a
        href="https://vuelidate-next.netlify.app/"
        target="_blank"
        class="rc-link"
      >
        Vuelidate <span class="mdi mdi-open-in-new"></span>
      </a>
      <a href="https://vue-select.org/" target="_blank" class="rc-link">
        Vue Select <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>

    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-primary"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Form Title
      </h2>
      <form @submit.prevent autocomplete="off" ref="form">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <base-input
            v-model="state.username"
            label="Username"
            type="text"
            :error="v$.username.$error"
            @blur="v$.username.$touch()"
            @focus="v$.username.$reset()"
          />
          <base-input
            v-model="state.email"
            label="Email"
            type="email"
            :error="v$.email.$error"
            @blur="v$.email.$touch()"
            @focus="v$.email.$reset()"
          />
          <base-input
            v-model="state.password"
            label="Password"
            :type="type"
            :error="v$.password.$error"
            @blur="v$.password.$touch()"
            @focus="v$.password.$reset()"
            @change-type="showPassword"
            password
          />
          <base-input
            v-model="state.confirm_password"
            label="Confirm Password"
            type="password"
            :error="v$.confirm_password.$error"
            errorMessage="Please confirm your password"
            @blur="v$.confirm_password.$touch()"
            @focus="v$.confirm_password.$reset()"
          />
          <base-select
            :options="options"
            label="Gender"
            v-model="state.gender"
            :error="v$.gender.$error"
            @blur="v$.gender.$touch()"
            @focus="v$.gender.$reset()"
          />
        </div>
        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            @click="signIn"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { computed } from "vue-demi";
const type = ref("password");
const showPassword = () => {
  type.value === "password" ? (type.value = "text") : (type.value = "password");
};
const state = reactive({
  username: "",
  email: "",
  password: "",
  confirm_password: "",
  gender: "",
});
const passwordRef = computed(() => state.password);
const rules = {
  username: { required },
  email: { required, email },
  password: { required, minLength: minLength(8) },
  confirm_password: {
    required,
    minLength: minLength(8),
    sameAs: sameAs(passwordRef),
  },
  gender: { required },
};
const options = ["Male", "Female"];
const v$ = useVuelidate(rules, state);
const form = ref(null);
const signIn = () => {
  if (v$.value.$invalid) {
    v$.value.$validate();
  } else {
    console.log(state);
    form.value.reset();
  }
};
</script>

<style lang="scss" scoped></style>
