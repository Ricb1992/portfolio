<template>
  <div
    id="copertina"
    class="min-h-screen pb-10 w-full bg-slate-100 flex items-center py-10"
  >
    <div class="md:w-1/2 mx-auto md:px-0 px-6vw">
      <div class="relative">
        <h1
          id="title"
          class="text-5xl lg:text-9xl !leading-[0.75] uppercase mb-10 font-extrabold overflow-hidden py-1"
        >
          <span class="block titolo">Riccardo</span>
          <span class="block text-right titolo">Basso</span>
        </h1>
        <p class="absolute right-[60%] bottom-0 -translate-x-4 web">
          Web developer
        </p>
      </div>

      <div class="md:flex items-start md:-mx-4">
        <div
          class="md:w-1/2 w-[60%] relative img-apertura md:px-4 img-apertura md:pl-0 pl-[10%]"
        >
          <img
            src="https://www.riccardobasso.com//wp-content/uploads/2025/01/instaRisorsa-2-100.jpg"
            alt="Riccardo Basso"
          />
        </div>
        <div
          class="md:w-1/2 md:px-4 textline md:mt-0 mt-8 md:pl-0 pl-[20%] md:pr-0 pr-3vw"
        >
          <p ref="textLine" class="textline">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad
          </p>
          <span
            class="px-8 py-3 rounded-xl mt-4 inline-block border-2 border-black an-button"
            >Contattami</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
