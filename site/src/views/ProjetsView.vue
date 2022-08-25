<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Header></Header>
  <main class="w-[95%] md:w-[90%] lg:w-[80%] m-auto mt-[100px]">
    <div class="flex flex-col">
      <h1 class="text-lg md:text-3xl font-semibold">Nos projets</h1>
      <h2 class="text-base md:text-lg font-semibold text-[#15c584]">Ajoute le tiens</h2>
    </div>
    <div>
      <div class="grid sm:gap-8 sm:grid-cols-3 gap-4 grid-cols-1 mt-5">
        <a class="p-4 bg-white/5 rounded-sm flex">
          <div class="rounded-full bg-black/70 my-auto p-2 sm:mt-0 mr-4">
            <img src="../assets/NEC_logo.png" alt="" class="aspect-square w-[65px]" />
          </div>
          <div class="flex flex-col">
            <h4>NEC</h4>
            <p class="text-xs text-white/50">
              NotEnoughCards est un jeu de cartes à collectioner en ligne.
            </p>
          </div>
        </a>
        <a
          class="p-4 bg-white/5 rounded-sm flex"
          target="_blank"
          href="https://lolbets.herokuapp.com/"
        >
          <div class="rounded-full bg-black/70 my-auto p-2 sm:mt-0 mr-4">
            <img src="../assets/gem.png" alt="" class="aspect-square w-[70px]" />
          </div>
          <div class="flex flex-col">
            <h4>LoLbets</h4>
            <p class="text-xs text-white/50">
              LoLbets est un site de paris fictif consacré à League of Legends
            </p>
          </div>
        </a>
        <a class="p-4 bg-white/5 rounded-sm flex" target="_blank" href="">
          <div class="rounded-full bg-black/70 my-auto p-2 sm:mt-0 mr-4">
            <img src="../assets/lolpros.svg" alt="" class="aspect-square w-[90px]" />
          </div>
          <div class="flex flex-col">
            <h4>LoL4Pros</h4>
            <p class="text-xs text-white/50">
              LoL4Pros est une version détournée de LoLPros pour les joueurs LoL de
              4eSport
            </p>
          </div>
        </a>
      </div>
      <div class="flex flex-col mt-20">
        <h1 class="text-lg md:text-3xl font-semibold">Nos programmes</h1>
        <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
          Surtout en interne
        </h2>
      </div>
      <div class="grid sm:gap-12 grid-cols-2 gap-4 mt-5">
        <a href="">
          <img
            src="../assets/Programmes_4eSport/Diapositive1.jpg"
            alt=""
            class="rounded-sm"
          />
        </a>
        <a href="">
          <img
            src="../assets/Programmes_4eSport/Diapositive2.jpg"
            alt=""
            class="rounded-sm"
          />
        </a>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>
