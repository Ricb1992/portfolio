<template>
  <div class="contact-me bg-bianco" id="contatti">
    <div class="text-center md:py-[200px] py-[100px]">
      <h2 class="lg:text-9xl text-5xl text-blu">Parliamone</h2>
    </div>
    <div class="lg:px-3vw px-6vw pb-24">
      <div class="flex items-start flex-wrap md:-mx-4">
        <div class="md:w-1/2 md:px-4">
          <ul class="text-xl">
            <li>
              <nuxt-link
                to="mailto:riccardo.basso2106@gmail.com"
                class="hover:underline"
                >Email</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="https://www.linkedin.com/in/riccardo-basso-a6172a141/"
                target="_blank"
                class="hover:underline"
                >LinkedIn</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="https://github.com/Ricb1992/portfoliov2"
                target="_blank"
                class="hover:underline"
                >Github</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="https://www.riccardobasso.com//wp-content/uploads/2025/01/cv-Riccardo-Basso.pdf"
                class="hover:underline"
                >Download CV</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="md:w-1/2 md:px-4 w-full md:mt-0 mt-16">
          <p class="md:text-4xl text-2xl">
            Qualche domanda? Saresti interessato ad approfondire con un
            incontro?<br />
            Non esitare a contattarmi!
          </p>
          <nuxt-link
            to="https://www.riccardobasso.com//wp-content/uploads/2025/01/cv-Riccardo-Basso.pdf"
            class="px-8 py-3 rounded-xl mt-4 inline-block bg-blu border-2 border-blu text-bianco hover:bg-transparent hover:text-blu transition-all duration-300"
            target="_blank"
            >Download CV</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="lg:px-3vw px-6vw pb-10 md:flex items-start">
      <div class="md:mt-0 mt-10">
        <p class="text-sm">
          Design & sviluppo <br />
          Riccardo Basso
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
