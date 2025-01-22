<template>
  <div class="flex items-center">
    <img
      v-if="skills && skills.length > 0"
      :src="skills[0].img_competenza"
      alt=""
      class="md:max-w-[200px] md:max-h-[100px] max-w-[100px] max-h-[75px] inline-block mb-6"
    />
    <h3
      v-if="skills && skills.length > 0"
      class="desc-skill inline-block bg-blu text-white p-2 opacity-0 transition-opacity text-base duration-300 relative ml-8"
    >
      {{ skills[0].nome_competenza }}
    </h3>
    <p v-else>No skills available</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  skills: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.desc-skill:before {
  content: "";
  position: absolute;
  top: 0;
  right: 100%;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #0d4ce8;
}
.logo:hover .desc-skill {
  opacity: 1;
}
</style>
