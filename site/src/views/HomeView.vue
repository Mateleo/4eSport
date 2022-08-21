<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <Header></Header>
  <main class="mt-[150px]">
    <div class="w-[90%] md:w-[80%] m-auto">
      <main class="flex m-auto mt-10 justify-between">
        <div class="w-1/2 mr-6">
          <h1 class="text-3xl font-semibold">L'association 100% en ligne.</h1>
          <h1 class="text-3xl font-semibold text-[#15c584]">Pour tous, par tous.</h1>
          <p class="mt-5 text-lg text-white/70">
            4eSport est l’association de jeux vidéo de l'Efrei. Elle regroupe en son sein
            une multitude de pôles regroupant l’ensemble des jeux esportifs du moment.
            Elle est ouverte à tous sans condition
          </p>
        </div>
        <div class="">
          <img src="https://picsum.photos/400" alt="" />
        </div>
      </main>
      <div>
        <h2 class="font-semibold text-2xl mt-10 mb-5">Nos forces</h2>
        <div class="flex justify-between">
          <div class="flex flex-col mr-8">
            <h3 class="font-semibold">Communauté</h3>
            <p class="text-white/70">4eSport possède une commaunuté inégalée.</p>
          </div>
          <div class="flex flex-col mr-8">
            <h3 class="font-semibold">Online</h3>
            <p class="text-white/70">De part sa nature, l'association est ouverte 24h/24h, 7j/7</p>
          </div>
          <div class="flex flex-col mr-8">
            <h3 class="font-semibold">Online</h3>
            <p class="text-white/70">De part sa nature, l'association est ouverte 24h/24h, 7j/7</p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold">Online</h3>
            <p class="text-white/70">De part sa nature, l'association est ouverte 24h/24h, 7j/7</p>
          </div>
        </div>
        <div class="h-[1000px]"></div>
      </div>
    </div>
  </main>
</template>
