<template>
  <nav
    class="flex items-center flex-wrap p-6 w-full lg:px-3vw px-6vw bg-bianco"
  >
    <ul class="w-full text-center">
      <li>
        <nuxt-link to="#portfolio">Progetti</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#esperienze">Esperienze</nuxt-link>
      </li>
      <li>
        <nuxt-link to="#contatti">Contatti</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
li {
  @apply inline-block;
}
li:not(:last-child) {
  @apply mr-6;
}
</style>
