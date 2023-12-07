<script setup lang="ts"></script>
<template>
  <div class="fixed top-0 left-0 right-0 z-10">
    <header
      class="w-full border-b-[1px] border-white/20 backdrop-blur-[2px] text-white bg-[#1C1C1C]/70"
    >
      <a
        href="https://www.helloasso.com/associations/4esport/boutiques/sweat-4esport-2024"
        target="_blank"
        class="text-center w-full bg-green-600 font-bold text-xl flex justify-center py-1 text-white/90 hover:text-white transition-all ease-in-out"
      >
        Achète ton pull 4eSport 2024. Disponible en rose et en blanc !
      </a>
      <div
        class="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1500px] m-auto flex justify-between items-center py-1 md:py-2"
      >
        <div class="flex items-center hidden md:block">
          <div class="flex items-center">
            <NuxtLink to="/" class="md:text-3xl text-sm font-bold">4eSport</NuxtLink>
          </div>
        </div>
        <nav
          class="text-sm sm:text-base flex justify-between gap-3 sm:gap-8 m-auto md:m-0"
        >
          <NuxtLink
            to="/"
            class="block md:hidden link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
          >
            4eSport
          </NuxtLink>
          <NuxtLink
            to="/projets"
            class="link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
          >
            Projets
          </NuxtLink>
          <NuxtLink
            to="/histoire"
            class="link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
          >
            <span class="hidden md:inline-block">Notre</span> Histoire</NuxtLink
          >
          <NuxtLink
            to="/cotisation"
            class="link-underline hover:text-[#15c584] transition-all ease-in-out delay-75 flex"
            >Cotisation
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
              ></span
            ></span>
          </NuxtLink>
        </nav>
      </div>
    </header>
  </div>
  <div class="h-[70px]"></div>
</template>

<style>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(rgb(21, 197, 132), rgb(21, 197, 132));
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
}

.link-underline:hover {
  background-size: 100% 2px;
  background-position: 0 100%;
}
</style>
