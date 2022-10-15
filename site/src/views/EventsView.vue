<script lang="ts" setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header></Header>
  <main
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 w-[95%] md:w-[90%] lg:w-[80%] m-auto sm:mt-[70px] max-w-[2000px]"
  >
    <div>
      <h2 class="w-full text-white/70 text-center h-6"></h2>
      <a
        class="aspect-[3/4] flex-col flex"
        href="https://discord.gg/ParvSjpJ8u"
        target="_blank"
      >
        <div>
          <img src="../assets/Tournoi_CSGO.jpg" alt="" class="rounded-t-xl" />
        </div>
        <div
          class="p-2 rounded-b-xl shadow-lg shadow-blak/30 bg-white/5 grow flex flex-col"
        >
          <h1 class="font-semibold text-center text-xl">CS:GO Student Tournament</h1>
          <h2 class="text-center text-white/80">Samedi 22 et 23 octobre | 10h</h2>
          <p class="text-xs text-white/50 italic text-center mt-auto">
            250€ de cashprize | Tout niveau
          </p>
        </div>
      </a>
    </div>
    <div>
      <h2 class="w-full text-white/70 text-center h-6"></h2>
      <a
        class="aspect-[3/4] flex-col flex"
        href="https://discord.gg/ParvSjpJ8u"
        target="_blank"
      >
        <div>
          <img src="../assets/GL.jpg" alt="" class="rounded-t-xl" />
        </div>
        <div
          class="p-2 rounded-b-xl shadow-lg shadow-blak/30 bg-white/5 grow flex flex-col"
        >
          <h1 class="font-semibold text-center text-xl">La Grosse Ligue</h1>
          <h2 class="text-center text-white/80">Novembre</h2>
          <p class="text-xs text-white/50 italic text-center mt-auto">
            LXP, RPs et Goodies | Tout niveau
          </p>
        </div>
      </a>
    </div>
    <div>
      <h2 class="w-full text-white/70 text-center">TERMINE !</h2>
      <div
        class="aspect-[3/4] flex-col flex blur-sm"
        href="https://play.toornament.com/fr/tournaments/5985389412986535936/"
        target="_blank"
      >
        <div>
          <img src="../assets/Tournoi_LoL.jpg" alt="" class="rounded-t-xl" />
        </div>
        <div
          class="p-2 rounded-b-xl shadow-lg shadow-blak/30 bg-white/5 grow flex flex-col"
        >
          <h1 class="font-semibold text-center text-xl">Grand Tournoi LoL de Rentrée</h1>
          <h2 class="text-center text-white/80">Mardi 13 septembre | 21h</h2>
          <p class="text-xs text-white/50 italic text-center mt-auto">
            13500 RP à gagner | Tout niveau
          </p>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>
