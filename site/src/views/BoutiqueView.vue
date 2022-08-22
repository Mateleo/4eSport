<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";

let display = ref(true);
</script>
<template>
  <Header></Header>
  <main class="w-[95%] md:w-[90%] lg:w-[80%] m-auto sm:mt-[150px] mt-[70px]">
    <div class="grid md:grid-cols-2 gap-6">
      <div class="flex text-center p-2 rounded-xl bg-white/20 max-w-[500px] m-auto aspect-[5/2.2]">
        <div class="w-1/3" @click="display=!display">
          <img
            v-if="display"
            src="../assets/Maillot_ORIGIN_fonce.png"
            alt=""
            class="scale-[140%] mt-3"
          />
          <img v-else src="../assets/Maillot_ORIGIN_MODELISATION_3D.png" class="scale-[140%] mt-2" alt="" />
        </div>
        <div class="flex flex-col w-2/3">
          <h1 class="text-2xl">Maillot 4eSport</h1>
          <p class="italic text-sm text-white/40">Monte en élo, achète un maillot</p>
          <div class="flex justify-center items-center grow">
            <a
              href="https://eliminate.fr/produit/4esport-jersey-2022/"
              class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#2c15c5]/70 hover:bg-[#2c15c5] shadow-sm shadow-black/40"
            >
              Acheter - 35€*
            </a>
          </div>
        </div>
      </div>
      <div class="flex text-center p-2 rounded-xl bg-white/20 max-w-[500px] m-auto aspect-[5/2.2]">
        <div class="w-1/3">
          <img src="../assets/unknown.png" alt="" class="-mb-4 -mt-1 scale-105" />
          <!-- <img src="../assets/Maillot_ORIGIN_MODELISATION_3D.png" alt="" /> -->
        </div>
        <div class="flex flex-col w-2/3">
          <h1 class="text-2xl">Pull associatif</h1>
          <p class="italic text-[13px] md:text-sm text-white/40">
            Aucun scrupule pour le meilleur pull
          </p>
          <div class="flex justify-center items-center grow">
            <a
              href="https://eliminate.fr/produit/4esport-hoodie/"
              class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#2c15c5]/70 hover:bg-[#2c15c5] shadow-sm shadow-black/40"
            >
              Acheter - 40€*
            </a>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-2xl font-semibold mt-10">Information tarifaire</h1>
    <p class="text-white/70 text-sm">Maillot : Remise de 15% (5€) pour nos membres.</p>
    <p class="text-white/70 text-sm">Pull : Remise de 50% (20€) pour nos membres, dans la limite des stocks disponibles.</p>
  </main>

  <Footer></Footer>
</template>
<script></script>
