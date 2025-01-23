<template>
  <div class="lg:px-3vw px-6vw" id="esperienze">
    <div class="md:-mx-2 flex flex-wrap items-start">
      <div class="px-2 mb-4 md:w-1/3 w-full opacity-0 an-exp">
        <div
          class="bg-blu text-white h-[50vh] rounded-lg p-4 px-[10%] flex items-end exp-title"
        >
          <h2 class="text-4xl font-extrabold">
            Esperienze & <br />
            Formazione
          </h2>
        </div>
      </div>

      <EsperienzeCard
        v-for="exp in esperienze"
        :key="exp.id"
        :exps="[exp]"
        class="opacity-0 an-exp"
      ></EsperienzeCard>
      <div class="px-2 mb-4 md:w-1/3 w-full opacity-0 an-exp">
        <div
          class="bg-blu h-[50vh] rounded-lg p-4 flex items-end exp-end"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const esperienze = ref([]);
const error = ref(null);

//fetch data
const fetchExps = async (retries = 3) => {
  const apiEndpoint = "https://www.riccardobasso.com/wp-json/wp/v2/pages/2";

  try {
    const response = await axios.get(apiEndpoint);

    const ExpData = response.data.acf ? response.data.acf.esperienze : [];
    esperienze.value = ExpData.map((exp, index) => ({
      ...exp,
      id: index,
    }));
  } catch (err) {
    if (retries > 0) {
      console.warn(`Retrying... (${3 - retries + 1})`);
      setTimeout(() => fetchExps(retries - 1), 1000);
    } else {
      console.error("Error fetching Experiences:", err);
      error.value = "Failed to load experiences. Please try again later.";
    }
  }
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  fetchExps().then(() => {
    //animazione esperienze
    const exps = document.querySelectorAll(".an-exp");
    exps.forEach((exp, index) => {
      gsap.fromTo(
        exp,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: exp,
            start: "top 80%",
            toggleActions: "play none none none",
            delay: index * 0.2,
          },
        }
      );
    });
  });
});
</script>

<style scoped>
.exp-title {
  border-top-left-radius: 100%;
}
.exp-end {
  border-bottom-right-radius: 100%;
}
</style>
