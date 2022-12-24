<template>
  <div class="my-12">
    <div class="flex justify-center items-center">
      <a
        href="https://vue-dynamic-forms.alvarosaburido.dev/"
        target="_blank"
        class="rc-link"
      >
        Vue Dynamic Form <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <div
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-primary"
    >
      <dynamic-form :form="form" @submitted="submit" />
      <div class="flex justify-end mt-6">
        <button
          submit="true"
          :form="form.id"
          type="submit"
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          @click="submit"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  TextField,
  EmailField,
  SelectField,
  PasswordField,
  Validator,
  required,
  email,
  min,
  pattern,
} from "@asigloo/vue-dynamic-forms";

const form = computed(() => ({
  id: "my-awesome-form",
  fields: {
    name: TextField({
      label: "Name",
      validations: [
        Validator({ validator: required, text: "Required" }),
        Validator({
          validator: min(18),
          text: "You must be older than 18",
        }),
      ],
    }),
    email: EmailField({
      label: "Email",
      validations: [
        Validator({ validator: required, text: "Required" }),
        Validator({
          validator: email,
          text: "Provide a valid email",
        }),
      ],
    }),
    password: PasswordField({
      label: "Password",
      validations: [
        Validator({ validator: required, text: "Required" }),
        Validator({
          validator: pattern("^(?=.{8,8}$)[a-zA-Z0-9._-]*$"),
          text: "Password must be 8 chars",
        }),
      ],
    }),
    confirm_password: PasswordField({
      label: "Confirm Password",
      validations: [
        Validator({ validator: required, text: "Required" }),
        Validator({
          validator: pattern("^(?=.{8,8}$)[a-zA-Z0-9._-]*$"),
          text: "Password must be 8 chars",
        }),
      ],
    }),
    gender: SelectField({
      label: "Gender",
      optionValue: "options",
      options: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ],
      validations: [Validator({ validator: required, text: "Required" })],
    }),
  },
}));

const submit = (values) => {
  const result = {
    name: values.name,
    email: values.email,
    password: values.password,
    confirm_password: values.confirm_password,
    gender: values.gender,
  };
  console.log(result);
};
</script>

<style lang="scss" scoped></style>
