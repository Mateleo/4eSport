<script setup lang="ts"></script>
<template>
  <div class="fixed top-0 left-0 right-0 z-10">
    <header
      class="w-full border-b-[1px] border-white/20 backdrop-blur-[2px] text-white bg-[#1C1C1C]/70"
    >
      <div
        class="md:w-[90%] lg:w-[80%] max-w-[2000px] m-auto w-full flex justify-between items-center px-4 py-3 md:px-0"
      >
        <div class="flex items-center w-full">
          <div>
            <router-link to="/" class="text-2xl md:text-3xl mr-3 hidden sm:block"
              >4eSport</router-link
            >
          </div>
          <nav class="text-sm sm:text-base flex justify-between w-full sm:w-auto">
            <router-link
              to="/create"
              class="md:mr-2 mr-1 link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
            >
              Evènements</router-link
            >
            <router-link
              to="/"
              class="md:mx-2 mx-1 link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
              >Projets</router-link
            >
            <router-link
              to="/"
              class="md:ml-2 mx-1 link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
              >Palmarès</router-link
            >
            <router-link
              to="/boutique"
              class="md:ml-2 mx-1 hidden md:block link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
              >Boutique</router-link
            >
            <router-link
              to="/cotisation"
              class="md:ml-2 ml-1 link-underline hover:text-[#15c584] transition-all ease-in-out delay-75 flex"
              >Cotisation
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"
              >
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
                ></span
              ></span>
            </router-link>
          </nav>
        </div>
        <div class="sm:flex sm:items-center hidden">
          <a
            class="flex items-center px-2 py-1 rounded-lg border-[1px] border-white/5 bg-white/[0.03] hover:bg-white/10 mr-2"
            href="https://github.com/Mateleo/4eSport"
            target="_blank"
          >
            <div class="h-[16px] aspect-square mr-1">
              <img src="../assets/GitHub-Mark-Light-32px.png" />
            </div>
            <p class="text-sm">GitHub</p>
          </a>
          <router-link
            to="/mypanel"
            class="px-2 py-1 rounded-lg border-[1px] border-white/5 bg-[#15c584]/80 hover:bg-[#15c584] text-sm font-semibold"
            >Login</router-link
          >
        </div>
      </div>
    </header>
  </div>
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
