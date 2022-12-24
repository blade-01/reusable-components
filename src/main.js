import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import "@mdi/font/css/materialdesignicons.css";
import "vue-skeletor/dist/vue-skeletor.css";
// Lazy Loaders
import vilt from "vue-img-lazy-tiny";
import lazyPlugin from "vue3-lazy";
// Vue Select
import "vue-select/dist/vue-select.css";
// Vue Dynamic Form
import { createDynamicForms } from "@asigloo/vue-dynamic-forms";

const VueDynamicForms = createDynamicForms();

const app = createApp(App);

app.use(router).use(store).use(vilt).use(lazyPlugin, {
  loading:
    "https://res.cloudinary.com/bladencove/image/upload/v1655997367/RC/ezgif.com-gif-maker_1_vptsnn.gif",
  error: "https://c.tenor.com/hwe3vkln0_UAAAAC/error-x-error.gif",
});

app.use(VueDynamicForms);

app.mount("#app");
