<script lang="ts" setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header></Header>
  <main>
    <div class="flex flex-col mt-[70px] w-[95%] md:w-[90%] lg:w-[80%] m-auto">
      <h1 class="text-lg md:text-3xl font-semibold">Une histoire riche.</h1>
      <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
        Avec de nombreuses victoires.
      </h2>
      <p class="mt-4 text-white/60 text-xs italic">Work In Progress, c'est long... Mais bon, dites vous que nous sommes les meilleurs.</p>
    </div>
  </main>
  <Footer></Footer>
</template>
