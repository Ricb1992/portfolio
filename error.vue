<template>
  <section class="error-container mt-24">
    <div class="h-[60vh] flex items-center justify-center">
      <img
        src="https://www.riccardobasso.com/wp-content/uploads/2025/01/404-Error-bro.svg"
        alt=" page not found"
        class="block h-full w-auto"
      />
    </div>
    <div class="mt-10 text-center">
      <nuxt-link
        to="/"
        class="px-8 py-3 rounded-xl mt-4 inline-block bg-blu border-2 border-blu text-bianco hover:bg-transparent hover:text-blu transition-all duration-300"
        >Homepage</nuxt-link
      >
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "404 - Page not found",
  meta: [
    {
      name: "description",
      content: "404 - Page not found",
    },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style scoped>
body {
  font-family: "Inter";
  color: #0d2d54;
  background-color: #f3f3f3;
}
</style>
