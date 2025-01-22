<template>
  <div class="px-2 mb-4 md:w-1/3 esperienza">
    <div
      class="flex lg:h-[50vh] overflow-auto exp-card rounded-lg border-2 border-blu p-4 relative content-between flex-wrap"
    >
      <div>
        <h3 v-if="exps && exps.length > 0" class="font-bold text-xl">
          {{ exps[0].nome_azienda }} -
          <span class="text-base">{{ exps[0].mansione }}</span>
        </h3>
        <p v-if="exps && exps.length > 0">{{ exps[0].durata }}</p>
        <p v-if="exps && exps.length > 0" class="italic text-sm">
          {{ exps[0].location }}
        </p>
      </div>

      <div
        v-if="exps && exps.length > 0"
        v-html="exps[0].descrizione"
        class="exp-desc lg:opacity-0 lg:text-white mt-8"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  exps: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.exp-card,
.exp-desc {
  transition: all 0.3s ease;
}
.exp-card {
  color: #0d4ce8;
}
.exp-card:hover {
  background: #0d4ce8;
  color: #fff;
}
.exp-card:hover .exp-desc {
  opacity: 1;
}

@media (min-width: 768px) {
  .esperienza:nth-of-type(2) {
    margin-right: 33%;
  }
  .esperienza:nth-of-type(3) {
    margin-left: 33.333%;
  }
  .esperienza:nth-last-of-type(2) {
    margin-right: 33.333%;
  }
}
</style>
