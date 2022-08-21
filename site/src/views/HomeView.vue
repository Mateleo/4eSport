<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <Header></Header>
  <main class="mt-[150px]">
    <div class="w-[90%] md:w-[80%] m-auto">
      <main class="flex m-auto mt-10 justify-between">
        <div class="w-1/2 mr-6 flex flex-col">
          <h1 class="text-2xl md:text-3xl font-semibold">L'association 100% en ligne.</h1>
          <h1 class="text-2xl md:text-3xl font-semibold text-[#15c584]">Pour tous, par tous.</h1>
          <p class="mt-5 text-base md:text-lg text-white/70">
            4eSport est l’association de jeux vidéo de l'Efrei. Elle regroupe en son sein
            une multitude de pôles regroupant l’ensemble des jeux esportifs du moment.
            Elle est ouverte à tous sans condition
          </p>
          <div class="w-full flex mt-auto">
            <a
              class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#2c15c5]/70 hover:bg-[#2c15c5] shadow-sm shadow-black/40"
              href="https://github.com/Mateleo/4eSport"
              target="_blank"
            >
              <p class="text-sm font-semibold">Rejoins nous !</p>
            </a>
          </div>
        </div>
        <div class="flex items-end">
          <div>
            <img src="https://picsum.photos/400" alt="" />
          </div>
        </div>
      </main>
      <div>
        <h2 class="font-semibold text-2xl mt-10 mb-5">Nos forces</h2>
        <div class="flex justify-between">
          <div class="flex flex-col mr-8">
            <h3 class="font-semibold">Communauté</h3>
            <p class="text-white/70 text-sm mt-2">
              4eSport possède une commaunuté inégalée.
            </p>
          </div>
          <div class="flex flex-col mr-8">
            <h3 class="font-semibold">Online</h3>
            <p class="text-white/70 text-sm mt-2">
              De part sa nature, l'association est ouverte 24h/24h, 7j/7.
            </p>
          </div>
          <div class="flex flex-col mr-8">
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
