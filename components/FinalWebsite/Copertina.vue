<template>
  <div
    id="copertina"
    class="min-h-screen pb-10 w-full flex items-center py-10 bg-bianco"
  >
    <div class="md:w-1/2 mx-auto md:px-0 px-6vw">
      <div class="relative">
        <h1
          id="title"
          class="text-5xl lg:text-9xl !leading-[0.75] uppercase mb-10 font-extrabold overflow-hidden py-1"
        >
          <span class="block titolo text-blu">Riccardo</span>
          <span class="block text-right titolo text-blu">Basso</span>
        </h1>
        <p class="absolute right-[60%] bottom-0 -translate-x-4 web !text-blu">
          Web developer
        </p>
      </div>

      <div class="md:flex items-start md:-mx-4">
        <div
          class="md:w-1/2 w-[60%] relative img-apertura md:px-4 img-apertura md:pl-0 pl-[10%]"
        >
          <img
            src="https://www.riccardobasso.com//wp-content/uploads/2025/01/riccardo-2.jpg"
            alt="Riccardo Basso"
          />
        </div>
        <div
          class="md:w-1/2 md:px-4 textline md:mt-0 mt-8 md:pl-0 pl-[20%] md:pr-0 pr-3vw"
        >
          <p ref="textLine">
            Mi chiamo Riccardo Basso e sono uno sviluppatore web specializzato
            nella realizzazione di siti personalizzati. Mi occupo di trasformare
            file di prototipazione, come quelli creati in Figma, in siti
            funzionali e curati in ogni dettaglio, garantendo una consegna
            puntuale e un prodotto che rispecchi le esigenze del cliente.
          </p>
          <nuxt-link
            to="#contatti"
            class="px-8 py-3 rounded-xl mt-4 inline-block bg-blu border-2 border-blu text-bianco hover:bg-transparent hover:text-blu transition-all duration-300"
            >Contattami</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  setup() {
    onMounted(() => {
      try {
        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);

        var tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.from(".titolo", {
          y: "150%",
          opacity: 0,
          rotationZ: "10",
          duration: 0.5,
          delay: 0.9,
          ease: "power1.out",
          stagger: 0.1,
        });
        tl.from(".web", {
          x: "-150%",
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
        tl.from(".img-apertura", {
          y: "50%",
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
        tl.from(".textline", {
          y: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      } catch (error) {
        console.error("Error during animation setup:", error);
      }
    });
  },
};
</script>

<style scoped>
h1,
p {
  color: #0d2d54;
}
</style>
