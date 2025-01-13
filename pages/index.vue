<template>
  <div class="container">
    <transition
      :name="transitionName"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <component :is="currentComponent" :key="currentStage" />
    </transition>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, markRaw } from "vue";

// Importa i componenti
import VSCode from "~/components/VSCode.vue";
import Wireframe from "~/components/Wireframe.vue";
import FinalSite from "~/components/FinalSite.vue";

// Array dei componenti, marcati come non reattivi
const components = [markRaw(VSCode), markRaw(Wireframe), markRaw(FinalSite)];

// Stato attuale del componente
const currentStage = ref(0);
const currentComponent = ref(components[currentStage.value]);

const transitionName = ref("fade");

const beforeEnter = (el) => {
  gsap.set(el, { opacity: 0 });
};

const enter = (el, done) => {
  gsap.to(el, { opacity: 1, duration: 1, onComplete: done });
};

const leave = (el, done) => {
  gsap.to(el, { opacity: 0, duration: 1, onComplete: done });
};

const nextStage = () => {
  if (currentStage.value < components.length - 1) {
    const tl = gsap.timeline({
      onComplete: () => {
        currentStage.value++;
        currentComponent.value = components[currentStage.value];
      },
    });

    tl.to(`.container .fade-enter-active`, { opacity: 0, duration: 1 });
    tl.call(() => {
      currentStage.value++;
      currentComponent.value = components[currentStage.value];
    });
    tl.to(`.container .fade-enter-active`, { opacity: 1, duration: 1 });
  }
};

setTimeout(() => nextStage(), 3000);
setTimeout(() => nextStage(), 6000);
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.container > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
