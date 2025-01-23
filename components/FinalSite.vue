<template>
  <div>
    <FinalWebsiteNavbar></FinalWebsiteNavbar>
    <div class="main">
      <FinalWebsiteCopertina></FinalWebsiteCopertina>
      <div class="content">
        <div
          class="pt-16 pb-20 lg:px-3vw px-6vw md:flex items-start"
          id="about"
        >
          <div
            class="md:w-3/4 text-4xl page-content"
            v-html="pageContent"
          ></div>
        </div>
      </div>
      <skills :skills="skills"></skills>
      <div class="mission lg:px-[15%] px-6vw bg-bianco py-24 relative z-10">
        <div class="lg:flex items-start lg:gap-[8vw]">
          <div class="lg:w-1/6 up-text">
            <h2 class="text-blu">Mission</h2>
          </div>
          <div class="lg:w-5/6">
            <p class="md:text-6xl text-4xl up-text">
              Il mio obiettivo è creare soluzioni digitali di qualità, unendo
              creatività
            </p>
          </div>
        </div>
        <p class="md:text-6xl text-4xl up-text">
          e competenze tecniche per dare vita a progetti unici e performanti.
        </p>
      </div>
      <div class="relative z-10 bg-bianco"><portfolios></portfolios></div>

      <div class="pt-[200px] bg-bianco relative z-10">
        <esperienze></esperienze>
      </div>
      <ContactMe></ContactMe>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import Skills from "./skills.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const props = defineProps({
  pageContent: String,
  skills: Array,
});

onMounted(() => {
  try {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".page-content", {
      y: "50%",
      opacity: 0,
      duration: 0.5,
      delay: 0.9,
      ease: "power1.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".page-content",
        start: "top 120%",
      },
    });

    gsap.from(".up-text", {
      y: "70%",
      opacity: 0,
      stagger: {
        amount: 0.5,
        each: 0.2,
        grid: "auto",
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: ".up-text",
        start: "top 120%",
      },
    });
  } catch (error) {
    console.error("Error during animation setup:", error);
  }
});
</script>
