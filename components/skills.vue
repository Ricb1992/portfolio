<template>
  <div
    class="mt-10 lg:px-3vw px-6vw h-[200vh] overflow-hidden pt-24 relative skill-container"
  >
    <h2
      class="lg:text-9xl text-4xl text-center sticky top-8 font-bold competenze text-blu"
    >
      Competenze
    </h2>
    <div>
      <SkillCard
        v-for="skill in skills"
        :key="skill.id"
        :skills="[skill]"
        class="logo absolute opacity-0 top-0 left-0 scale-150"
      ></SkillCard>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = ref([]);
const error = ref(null);

// fetch data
const fetchSkills = async (retries = 3) => {
  const apiEndpoint = "https://www.riccardobasso.com//wp-json/wp/v2/pages/2";

  try {
    const response = await axios.get(apiEndpoint);
    const skillsData = response.data.acf.competenze || [];
    skills.value = skillsData.map((skill, index) => ({
      ...skill,
      id: index,
    }));
  } catch (err) {
    if (retries > 0) {
      console.warn(`Retrying... (${3 - retries + 1})`);
      setTimeout(() => fetchSkills(retries - 1), 1000);
    } else {
      console.error("Error fetching skills:", err);
      error.value = "Failed to load skills. Please try again later.";
    }
  }
};

onMounted(() => {
  fetchSkills().then(() => {
    // fissare titolo sezione in alto
    gsap.to(".competenze", {
      scrollTrigger: {
        trigger: ".skill-container",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    });

    // Animazione per i loghi
    const logos = document.querySelectorAll(".logo");

    logos.forEach((logo, index) => {
      gsap.set(logo, {
        x: () => gsap.utils.random(-50, 50) + "vw",
        y: -100,
        scale: () => gsap.utils.random(0.8, 1.2),
        opacity: 0,
      });

      gsap.to(logo, {
        scrollTrigger: {
          trigger: ".skill-container",
          start: "top center",
          end: "bottom top",
          scrub: 1,
          stagger: 0.2,
          onEnter: () => {
            gsap.to(logo, {
              y: () => gsap.utils.random(0, 70) + "vh",
              x: () => gsap.utils.random(0, 90) + "vw",
              opacity: 1,
              scale: 1,
              rotation: () => gsap.utils.random(-30, 30),
              duration: 1,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(logo, {
              y: () => gsap.utils.random(0, 70) + "vh",
              opacity: 0,
              duration: 1,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(logo, {
              y: () => gsap.utils.random(0, 70) + "vh",
              opacity: 0,
              duration: 1,
              ease: "power2.out",
            });
          },
          onEnterBack: () => {
            gsap.to(logo, {
              y: () => gsap.utils.random(0, 70) + "vh",
              x: () => gsap.utils.random(0, 90) + "vw",
              opacity: 1,
              scale: 1,
              rotation: () => gsap.utils.random(-30, 30),
              duration: 1,
              ease: "power2.out",
            });
          },
        },
      });
    });
  });
});
</script>
<style scoped>
.desc-skill:after {
  content: "";
  position: absolute;
  top: 0;
  left: 100%;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #cbd5e1;
}
</style>
