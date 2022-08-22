<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <Header></Header>
  <main class="sm:mt-[150px] mt-[70px]">
    <div class="w-[95%] md:w-[90%] lg:w-[80%] m-auto">
      <h1 class="font-semibold text-5xl w-full text-center sm:hidden block">4eSport</h1>
      <main class="flex sm:flex-row flex-col m-auto mt-10 justify-between">
        <div class="w-full flex flex-wrap flex-col sm:h-[400px]">
          <div class="sm:w-1/2 sm:pr-5">
            <h1 class="text-2xl md:text-3xl font-semibold">
              L'association 100% en ligne.
            </h1>
            <h1 class="text-2xl md:text-3xl font-semibold text-[#15c584]">
              Pour tous, par tous.
            </h1>
            <p class="mt-5 text-base md:text-lg text-white/70 text-justify md:text-left">
              4eSport est l’association de jeux vidéo de l'Efrei. Elle regroupe en son
              sein une multitude de pôles regroupant l’ensemble des jeux esportifs du
              moment. Elle est ouverte à tous sans condition.
            </p>
          </div>
          <div class="items-center sm:w-1/2 flex sm:pl-5 mt-5 sm:mt-0 sm:order-1 max-w-[600px]">
            <div>
              <img src="../assets/ESL.jpg" alt="" />
            </div>
          </div>
          <div class="w-full flex justify-center mt-5 sm:w-1/2 sm:pr-5">
            <a
              class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#2c15c5]/70 hover:bg-[#2c15c5] shadow-sm shadow-black/40"
              href="https://discord.gg/qEHEMyadrr"
              target="_blank"
            >
              <p class="text-lg font-semibold">Rejoins nous !</p>
            </a>
          </div>
        </div>
      </main>
      <div>
        <h2 class="font-semibold text-2xl mt-10 mb-5">Nos forces</h2>
        <div class="sm:flex sm:justify-between grid grid-cols-2 gap-2">
          <div class="flex flex-col sm:mr-8">
            <h3 class="font-semibold">Communauté</h3>
            <p class="text-white/70 text-sm mt-2">
              4eSport possède une commaunuté inégalée.
            </p>
          </div>
          <div class="flex flex-col sm:mr-8">
            <h3 class="font-semibold">Online</h3>
            <p class="text-white/70 text-sm mt-2">
              De part sa nature, l'association est ouverte 24h/24h, 7j/7.
            </p>
          </div>
          <div class="flex flex-col sm:mr-8">
            <h3 class="font-semibold">Projets</h3>
            <p class="text-white/70 text-sm mt-2">
              4eSport c'est également des projets tech au service de ses membres.
            </p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold">Compétitions</h3>
            <p class="text-white/70 text-sm mt-2">
              L'association permet à ses joueurs de participer à de grands tournois.
            </p>
          </div>
        </div>
        <div class="h-[1000px]"></div>
      </div>
    </div>
  </main>
</template>
