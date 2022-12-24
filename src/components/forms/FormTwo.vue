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
        href="https://vee-validate.logaretm.com/v4/"
        target="_blank"
        class="rc-link"
      >
        Vee Validate <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <div
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-primary"
    >
      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <base-input
            v-model="username"
            label="Code Name"
            type="text"
            :error="errors.username"
          />
          <base-input
            v-model="email"
            label="Mail"
            type="email"
            @blur="handleChange"
            :error="errors.email"
          />
          <base-input
            v-model="password"
            label="Passcode"
            type="password"
            :error="errors.password"
          />
          <base-input
            v-model="confirm_password"
            label="Confirm Passcode"
            type="password"
            :error="errors.confirm_password"
          />
          <base-select
            :options="options"
            label="Gender"
            v-model="gender"
            :error="errors.gender"
          />
        </div>
        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            @click="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import { string, object, ref } from "yup";
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
const options = ["Male", "Female"];
const validationSchema = object({
  username: string().required(),
  email: string().required().email(),
  password: string().required().min(8),
  confirm_password: string()
    .oneOf([ref("password")], "Passwords must match")
    .required(),
  gender: string().required(),
});
const { handleSubmit, errors, setFieldValue } = useForm({ validationSchema });
const { value: username } = useField("username");
const { value: email } = useField("email");
const { value: password } = useField("password");
const { value: confirm_password } = useField("confirm_password");
const { value: gender } = useField("gender");

const submit = handleSubmit((values, { resetForm }) => {
  console.log(values);
  resetForm();
});

const handleChange = (event) => {
  setFieldValue("email", event.target.value);
};
</script>

<style lang="scss" scoped></style>
