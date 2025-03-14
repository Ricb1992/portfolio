// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "v-gsap-nuxt"],
  runtimeConfig: {
    public: {
      baseUrl: "https://riccardobasso.com",
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
