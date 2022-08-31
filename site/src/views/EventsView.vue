<script lang="ts" setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header></Header>
  <main
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 w-[95%] md:w-[90%] lg:w-[80%] m-auto sm:mt-[70px] max-w-[2000px]"
  >
    <a class="aspect-[3/4] flex-col flex" href="https://play.toornament.com/fr/tournaments/5985389412986535936/" target="_blank">
      <div>
        <img src="../assets/Tournoi_LoL.jpg" alt="" class="rounded-t-xl" />
      </div>
      <div class="p-2 rounded-b-xl shadow-lg shadow-blak/30 bg-white/5 grow flex flex-col">
        <h1 class="font-semibold text-center text-xl">Grand Tournoi LoL de Rentrée</h1>
        <h2 class="text-center text-white/80">Mardi 13 septembre | 21h</h2>
        <p class="text-xs text-white/50 italic text-center mt-auto">
          13500 RP à gagner | Tout niveau
        </p>
      </div>
    </a>
  </main>
  <Footer></Footer>
</template>
