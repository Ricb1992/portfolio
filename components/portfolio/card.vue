<template>
  <div
    class="portfolio-card md:flex mb-4 flex-wrap first:mt-0 mt-16 w-full"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="md:w-[30%]">
      <div
        class="rounded-lg flex items-start flex-col flex-wrap justify-start relative portfolio-item"
      >
        <div class="w-full">
          <nuxt-link :to="data.acf.link_progetto" target="_blank">
            <div class="relative overflow-hidden lg:h-[70vh] h-[88vw] w-full">
              <img
                v-if="data && data.featured_media_url"
                :src="data.featured_media_url"
                alt=""
                class="absolute img-portfolio top-1/2 left-1/2 h-full w-auto max-w-none"
              />
              <video
                v-if="data && data.acf.url_video"
                ref="video"
                class="absolute top-1/2 left-1/2 w-full h-full object-cover opacity-0 transition-opacity -translate-x-1/2 -translate-y-1/2 duration-300 ease-in-out"
                muted
                playsinline
              >
                <source :src="data.acf.url_video" type="video/mp4" />
              </video>
            </div>
          </nuxt-link>
          <h3
            v-if="data && data.title"
            class="mt-4 font-semibold text-2xl transition duration-300 hover:text-blu"
          >
            <nuxt-link :to="data.acf.link_progetto" target="_blank">{{
              data.title.rendered
            }}</nuxt-link>
          </h3>
          <p class="text-[12px]">Progetto realizzato presso Rebula Srl</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  skills: {
    type: Array,
    default: () => [],
  },
});

const video = ref(null);

const onMouseEnter = (event) => {
  if (video.value) {
    video.value.play();
  }
};

const onMouseLeave = (event) => {
  if (video.value) {
    video.value.pause();
    video.value.currentTime = 0;
  }
};

onMounted(() => {
  const pCards = document.querySelectorAll(".img-portfolio");
  pCards.forEach((pCard) => {
    gsap.fromTo(
      pCard,
      {
        opacity: 0,
        y: "50%",
        x: "-50%",
      },
      {
        scrollTrigger: {
          trigger: pCard,
          start: "top 120%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: "-50%",
        x: "-50%",
        duration: 1,
        ease: "power3.Out",
      }
    );
  });
});
</script>

<style>
.portfolio-card > div:hover video {
  opacity: 1;
}

.portfolio-card:nth-of-type(1),
.portfolio-card:nth-of-type(n3 + 1) {
  @apply justify-start;
}
.portfolio-card:nth-of-type(3n + 2) {
  @apply justify-center;
}
.portfolio-card:nth-of-type(3n) {
  @apply justify-end;
}
</style>
