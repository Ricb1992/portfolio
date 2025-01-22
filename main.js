import { createApp } from "vue";
import App from "./app.vue";
import axiosInstance from "./plugins/axios";

const app = createApp(App);

// Make axios available globally
app.config.globalProperties.$axios = axiosInstance;

app.mount("#app");
