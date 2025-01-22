<template>
  <div class="overflow-y-visible">
    <transition
      :name="transitionName"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div>
        <component
          v-if="skills.length > 0"
          :is="currentComponent"
          :key="currentStage"
          :skills="skills"
          :pageContent="pageContent"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ref, markRaw, onMounted } from "vue";
import axios from "axios";
import Cookies from "js-cookie";
import Lenis from "lenis";
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

const skills = ref([]);

const pageContent = ref(""); // Add a ref to store the page content

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
    if (currentStage.value === 0) {
      tl.to(`.container .fade-enter-active`, { opacity: 0, duration: 2 });
    }

    tl.call(() => {
      currentStage.value++;
      currentComponent.value = components[currentStage.value];
    });

    tl.to(`.container .fade-enter-active`, { opacity: 1, duration: 2 });
  }
};

const skipToFinalSite = () => {
  currentStage.value = components.length - 1;
  currentComponent.value = components[currentStage.value];
};

const checkCookie = () => {
  const animationCookie = Cookies.get("animationShown");
  if (animationCookie) {
    skipToFinalSite();
  } else {
    Cookies.set("animationShown", "true", { expires: 1 / 24 }); // Set cookie to expire in 1 hour
    setTimeout(() => nextStage(), 5000);
    setTimeout(() => nextStage(), 11000);
  }
};

const fetchPageData = async (retries = 3) => {
  const apiEndpoint = "https://www.riccardobasso.com//wp-json/wp/v2/pages/2";

  try {
    const response = await axios.get(apiEndpoint);
    const data = response.data;

    // Check if the competenze field and the first item exist
    if (data.acf && data.acf.competenze) {
      skills.value = data.acf.competenze.map((skill, index) => ({
        ...skill,
        id: index, // Add a unique id to each skill
      }));
    } else {
      console.error("Competenze data is not available in the API response.");
    }

    // Set the page content
    pageContent.value = data.content.rendered;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying... (${3 - retries + 1})`);
      setTimeout(() => fetchPageData(retries - 1), 1000); // Retry after 1 second
    } else {
      console.error("Error fetching data from WordPress API:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  }
};

onMounted(() => {
  fetchPageData();
  checkCookie();

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {});
});

useHead({
  title: "Riccardo Basso - Web developer",
  htmlAttrs: {
    lang: "it",
  },
  meta: [
    {
      charset: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "description",
      content:
        "Front-end developer specializzato in Php, JavaScript e Wordpress",
    },
    {
      name: "author",
      content: "Riccardo Basso",
    },
    {
      name: "keywords",
      content:
        "web developer, sviluppatore web, Front-end developer, web design, web development",
    },
    {
      property: "og:title",
      content: "Riccardo Basso - Web developer",
    },
    {
      property: "og:description",
      content:
        "Front-end developer specializzato in Php, JavaScript e Wordpress",
    },
    {
      property: "og:image",
      content:
        "https://www.riccardobasso.com//wp-content/uploads/2025/01/riccardo-basso-portfolio.jpg",
    },
    {
      property: "og:url",
      content: "https://riccardobasso.com/",
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

<style>
body {
  font-family: "Inter";
  color: #0d2d54;
  background-color: #f3f3f3;
}

.container {
  position: relative;
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
