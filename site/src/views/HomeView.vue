<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header></Header>
  <main class="mt-[70px] sm:mt-[100px]">
    <div class="w-[95%] md:w-[90%] lg:w-[80%] m-auto">
      <h1 class="font-semibold text-5xl w-full text-center sm:hidden block">4eSport</h1>
      <main class="flex sm:flex-row flex-col m-auto mt-10 justify-between">
        <div class="w-full flex flex-wrap flex-col sm:h-[400px]">
          <div class="sm:w-1/2 sm:pr-5">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold">
              L'association 100% en ligne.
            </h1>
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#15c584]">
              Pour tous, par tous.
            </h1>
            <p
              class="mt-5 text-base md:text-lg lg:text-xl text-white/70 text-justify md:text-left"
            >
              4eSport est l’association de jeux vidéo de l'Efrei. Elle regroupe en son
              sein une multitude de pôles regroupant l’ensemble des jeux esportifs du
              moment. Elle est ouverte à tous sans condition.
            </p>
          </div>
          <div
            class="items-center sm:w-1/2 flex sm:pl-5 mt-5 sm:mt-0 sm:order-1 max-w-[600px]"
          >
            <div>
              <img src="../assets/ESL.jpg" alt="" />
            </div>
          </div>
          <div class="flex items-center justify-center md:justify-start mt-5">
            <a
              class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#2c15c5]/70 hover:bg-[#2c15c5] shadow-sm shadow-black/40 mr-4"
              href="https://discord.gg/qEHEMyadrr"
              target="_blank"
            >
              <p class="text-lg font-semibold">Rejoins nous !</p>
            </a>
            <router-link
              class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#8215c5]/70 hover:bg-[#8215c5] shadow-sm shadow-black/40 ml-4"
              to="/cotisation"
            >
              <p class="text-lg font-semibold">Cotiser</p>
            </router-link>
          </div>
        </div>
      </main>
      <div>
        <h2 class="font-semibold text-3xl mt-10 mb-5">Nos forces</h2>
        <div
          class="sm:flex sm:justify-between grid grid-cols-2 gap-2 md:gap-6 lg:gap-20 gap-y-6"
        >
          <div class="flex flex-col sm:mr-8">
            <h3 class="font-semibold sm:text-xl text-lg">Communauté</h3>
            <p class="text-white/70 mt-2">4eSport possède une commaunuté inégalée.</p>
          </div>
          <div class="flex flex-col sm:mr-8">
            <h3 class="font-semibold sm:text-xl text-lg">Online</h3>
            <p class="text-white/70 mt-2">
              De par sa nature, l'association est ouverte 24h/24h, 7j/7.
            </p>
          </div>
          <div class="flex flex-col sm:mr-8">
            <h3 class="font-semibold sm:text-xl text-lg">Projets</h3>
            <p class="text-white/70 mt-2">
              4eSport c'est également des projets tech au service de ses membres.
            </p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold sm:text-xl text-lg">Compétitions</h3>
            <p class="text-white/70 mt-2">
              L'association permet à ses joueurs de participer à de grands tournois.
            </p>
          </div>
        </div>
      </div>
      <article class="mt-20">
        <div class="flex flex-col text-center">
          <h1 class="text-lg md:text-3xl font-semibold">Une association en 6 pôles</h1>
          <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
            Quel que soit le niveau
          </h2>
        </div>
        <div>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 sm:gap-10 gap-6 mt-10"
          >
            <div class="aspect-square">
              <img
                src="../assets/lol.jpg"
                class="rounded-xl shadow-md shadow-black/50"
                alt=""
              />
              <h3 class="text-center text-white/60 mt-3">League of Legends</h3>
            </div>
            <div class="aspect-square">
              <img
                src="../assets/R6.jpg"
                class="rounded-xl shadow-md shadow-black/50"
                alt=""
              />
              <h3 class="text-center text-white/60 mt-3">Rainbow Six</h3>
            </div>
            <div class="aspect-square">
              <img
                src="../assets/csgo.jpg"
                class="rounded-xl shadow-md shadow-black/50"
                alt=""
              />
              <h3 class="text-center text-white/60 mt-3">CSGO</h3>
            </div>
            <div class="aspect-square">
              <img
                src="../assets/overwatch.jpg"
                class="rounded-xl shadow-md shadow-black/50"
                alt=""
              />
              <h3 class="text-center text-white/60 mt-3">Overwatch</h3>
            </div>
            <div class="aspect-square">
              <img
                src="../assets/rocket_league.jpg"
                class="rounded-xl shadow-md shadow-black/50"
                alt=""
              />
              <h3 class="text-center text-white/60 mt-3">Rocket League</h3>
            </div>
            <div class="aspect-square">
              <img
                src="../assets/valorant.jpg"
                class="rounded-xl shadow-md shadow-black/50"
                alt=""
              />
              <h3 class="text-center text-white/60 mt-3">Valorant</h3>
            </div>
          </div>
        </div>
      </article>
      <article class="mt-20">
        <div class="flex md:justify-between flex-col md:flex-row">
          <div class="grid grid-cols-2 gap-12 order-1 m-auto">
            <div class="flex flex-col text-center">
              <p class="text-2xl">🚀</p>
              <h4 class="font-semibold text-4xl">200+</h4>
              <p class="text-xs text-white/50">membres en 2022</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="text-2xl">🤗</p>
              <h4 class="font-semibold text-4xl">1300+</h4>
              <p class="text-xs text-white/50">utilisateurs sur notre Discord</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="text-2xl">🌟</p>
              <h4 class="font-semibold text-4xl">1800+</h4>
              <p class="text-xs text-white/50">points PAVE distribués</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="text-2xl">🤝</p>
              <h4 class="font-semibold text-4xl">20+</h4>
              <p class="text-xs text-white/50">équipes par an</p>
            </div>
          </div>
          <div class="md:w-1/2 w-full mb-10 md:mb-0">
            <h1 class="text-lg md:text-3xl font-semibold">Quelques chiffres</h1>
            <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
              pour faire rêver
            </h2>
            <p class="text-white/70 text-justify md:text-left mt-2">
              4eSport est présente depuis 2019 au côté de ses membres. Elle a rapidement
              évoluée pour devenir la deuxième plus grande association de l'école en 2022.
            </p>
          </div>
        </div>
      </article>
      <!-- <article class="mt-20">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <iframe
              src="https://discord.com/widget?id=252550911187091457&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
          <div>
            <h1 class="text-lg md:text-3xl font-semibold">Quelques chiffres</h1>
            <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
              pour faire rêver
            </h2>
            <p class="text-white/70 text-justify md:text-left mt-2">
              4eSport est présente depuis 2019 au côté de ses membres. Elle a rapidement
              évoluée pour devenir la deuxième plus grande association de l'école en 2022.
            </p>
          </div>
        </div>
      </article> -->
    </div>
  </main>
  <Footer></Footer>
</template>
