<script setup lang="ts">
import { teams, type Member } from "~/data/equipe";

const selected = ref<Member | null>(null);

useSeoMeta({
  title: "Notre équipe - 4eSport",
  description:
    "Le conseil d'administration et le bureau étendu de 4eSport, l'association de jeux vidéo de l'Efrei.",
});
</script>

<template>
  <main class="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] m-auto sm:mt-[70px]">
    <div v-reveal class="flex flex-col text-center">
      <h1 class="text-2xl md:text-5xl font-semibold">Notre équipe</h1>
      <h2 class="text-base md:text-2xl font-semibold text-[#15c584]">
        Celles et ceux qui font tourner l'asso
      </h2>
    </div>

    <section v-for="team in teams" :key="team.slug" class="mt-12 md:mt-20">
      <div v-reveal class="flex items-center gap-4">
        <div>
          <h3 class="text-xl md:text-3xl font-semibold">{{ team.title }}</h3>
          <p class="text-sm md:text-base font-semibold text-[#15c584]">
            {{ team.subtitle }}
          </p>
        </div>
        <div class="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>

      <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <MemberCard
          v-for="(member, i) in team.members"
          :key="member.pseudo ?? member.name"
          v-reveal="i * 60"
          :member="member"
          @open="selected = member"
        />
      </div>
    </section>

    <p v-reveal class="mt-16 text-center text-sm text-white/50">
      Envie de nous rejoindre ?
      <a
        href="https://discord.gg/4eSport"
        target="_blank"
        rel="noopener"
        class="text-[#15c584] underline hover:text-[#15c584]/80"
        >Passe sur le Discord</a
      >.
    </p>

    <MemberDetail :member="selected" @close="selected = null" />
  </main>
</template>
