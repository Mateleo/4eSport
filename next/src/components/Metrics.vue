<script lang="ts" setup>
import { ref } from "vue";

let toggle = ref(false);
</script>
<template>
  <main class="grid grid-cols-2 text-black">
    <div
      @mouseenter.self="toggle = true"
      @mouseleave.self="toggle = false"
      class="relative"
    >
      <div v-if="toggle">
        <img src="../assets/ESL_1.jpg" />
      </div>
      <div v-else>
        <img src="../assets/ESL_2.jpg" class="opacity-40" />
      </div>
    </div>
    <div class="bg-white">
      <div class="w-[60%] m-auto my-10">
        <h1 class="font-orbitron text-3xl">
          QUI SOMMES- <span class="text-blue-700">NOUS</span> ?
        </h1>
        <p class="text-justify">
          4eSport est présente au côté de ses membres depuis 2019. Elle a rapidement
          évoluée pour devenir la deuxième plsu grande association de l'école en 2022.
        </p>
        <div class="mt-10 flex flex-col gap-3">
          <p>
            <span class="font-orbitron text-2xl">+200</span>
            <span class="text-blue-700"> membres</span> <span>en 2022</span>
          </p>
          <p>
            <span class="font-orbitron text-2xl">+200</span>
            <span class="text-blue-700"> membres</span> <span>en 2022</span>
          </p>
          <p>
            <span class="font-orbitron text-2xl">+200</span>
            <span class="text-blue-700"> membres</span> <span>en 2022</span>
          </p>
          <p>
            <span class="font-orbitron text-2xl">+200</span>
            <span class="text-blue-700"> membres</span> <span>en 2022</span>
          </p>
        </div>
        <button class="border-2 border-black py-1 px-3 h-[32px] mt-5">REJOIGNEZ-NOUS</button>
      </div>
    </div>
  </main>
</template>
