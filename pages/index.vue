<script setup lang="ts">



let display = ref(true)

</script>

<template>
  <main class="sm:mt-[80px]">
    <div class="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1500px] m-auto">
      <h1 class="font-semibold text-3xl w-full text-center sm:hidden block">4eSport</h1>
      <main class="flex sm:flex-row flex-col m-auto mt-10 justify-between">
        <div class="grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-none lg:gap-20 gap-12">
          <div>
            <div class="">
              <h1 class="text-xl md:text-3xl lg:text-4xl font-semibold">
                L'association 100% en ligne.
              </h1>
              <h1 class="textxl md:text-3xl lg:text-4xl font-semibold text-[#15c584]">
                Pour tous, par tous.
              </h1>
              <p class="mt-3 text-sm md:text-lg lg:text-xl text-white/70 text-justify md:text-left">
                4eSport est l’association de jeux vidéo de l'Efrei. Elle regroupe en son
                sein une multitude de pôles regroupant l’ensemble des jeux esportifs du
                moment. Elle est ouverte à tous sans condition.
              </p>
            </div>
            <div class="flex items-center justify-center md:justify-start mt-3">
              <a class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#2c15c5]/70 hover:bg-[#2c15c5] shadow-sm shadow-black/40 mr-4"
                href="https://discord.gg/qEHEMyadrr" target="_blank">
                <p class="sm:text-lg text-sm font-semibold">Rejoins nous !</p>
              </a>
              <router-link
                class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#8215c5]/70 hover:bg-[#8215c5] shadow-sm shadow-black/40 ml-4"
                to="/cotisation">
                <p class="sm:text-lg text-sm font-semibold">Cotiser</p>
              </router-link>
            </div>
          </div>
          <div class="">
            <img src="../assets/ESL.jpg" alt=""
              class="shadow-black/30 shadow-lg sm:rounded-md rounded-sm sm:max-h-[400px] m-auto h-[200px] sm:h-auto w-full object-cover" />
          </div>
        </div>
      </main>
      <div class="lg:mt-40 mt-10 md:mt-20">
        <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl mb-5">Nos forces</h2>
        <div class="sm:flex sm:justify-between grid grid-cols-2 gap-2 md:gap-6 lg:gap-20 gap-y-6">
          <div class="flex flex-col">
            <h3 class="font-semibold sm:text-xl md:text-2xl text-white/80">Communauté</h3>
            <p class="text-white/70 mt-2 md:text-lg text-xs">4eSport possède une communauté inégalée.</p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold sm:text-xl md:text-2xl text-white/80">Online</h3>
            <p class="text-white/70 mt-2 md:text-lg text-xs">
              De par sa nature, l'association est ouverte 24h/24h, 7j/7.
            </p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold sm:text-xl md:text-2xl text-white/80">Projets</h3>
            <p class="text-white/70 mt-2 md:text-lg text-xs">
              4eSport c'est également des projets tech au service de ses membres.
            </p>
          </div>
          <div class="flex flex-col">
            <h3 class="font-semibold sm:text-xl md:text-2xl text-white/80">Compétitions</h3>
            <p class="text-white/70 mt-2 md:text-lg text-xs">
              L'association permet à ses joueurs de participer à de grands tournois.
            </p>
          </div>
        </div>
      </div>
      <article class="lg:mt-40 mt-10 md:mt-20">
        <div class="flex flex-col text-center">
          <h1 class="text-lg md:text-3xl lg:text-4xl font-semibold">Une association en 7 pôles</h1>
          <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
            Quel que soit le niveau
          </h2>
        </div>
        <div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 sm:gap-10 gap-6 mt-10">
            <div class="aspect-square">
              <img src="../assets/lol.jpg" class="rounded-xl shadow-md shadow-black/50" alt="League of Legends" />
              <h3 class="text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">League of Legends</h3>
            </div>
            <div class="aspect-square">
              <img src="../assets/R6.jpg" class="rounded-xl shadow-md shadow-black/50" alt="Rainbow Six" />
              <h3 class="text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">Rainbow Six</h3>
            </div>
            <div class="aspect-square">
              <img src="../assets/csgo.jpg" class="rounded-xl shadow-md shadow-black/50" alt="Counter Strike 2" />
              <h3 class="text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">CS2</h3>
            </div>
            <div class="aspect-square">
              <img src="../assets/overwatch.jpg" class="rounded-xl shadow-md shadow-black/50" alt="Overwatch 2" />
              <h3 class="text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">Overwatch 2</h3>
            </div>
            <div class="aspect-square">
              <img src="../assets/rocket_league.jpg" class="rounded-xl shadow-md shadow-black/50" alt="Rocket League" />
              <h3 class="text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">Rocket League</h3>
            </div>
            <div class="aspect-square">
              <img src="../assets/valorant.jpg" class="rounded-xl shadow-md shadow-black/50" alt="Valorant" />
              <h3 class="text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">Valorant</h3>
            </div>
            <div class="aspect-square">
              <img src="../assets/TFT.jpg" class="rounded-xl shadow-md shadow-black/50" alt="Teamfight Tactics" />
              <h3 class="text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">Teamfight Tactics</h3>
            </div>
            <div class="aspect-square">
              <img src="../assets/loading.jpg" class="rounded-xl shadow-md shadow-black/50" alt="" />
              <h3 class="text-center text-white/60 mt-3 sm:text-base lg:text-lg text-xs">À venir ...</h3>
            </div>
          </div>
        </div>
      </article>
      <article class="lg:mt-40 mt-10 md:mt-20">
        <div class="flex md:justify-between flex-col md:flex-row">
          <div class="grid grid-cols-2 gap-12 order-1 m-auto">
            <div class="flex flex-col text-center">
              <p class="text-2xl">🚀</p>
              <h4 class="font-semibold sm:text-4xl text-xl">200+</h4>
              <p class="text-xs text-white/50 md:text-sm">membres en 2022 et 2023</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="text-2xl">🤗</p>
              <h4 class="font-semibold sm:text-4xl text-xl">2200+</h4>
              <p class="text-xs text-white/50 md:text-sm">utilisateurs sur notre Discord</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="text-2xl">🌟</p>
              <h4 class="font-semibold sm:text-4xl text-xl">3100+</h4>
              <p class="text-xs text-white/50 md:text-sm">points LXP distribués</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="text-2xl">🤝</p>
              <h4 class="font-semibold sm:text-4xl text-xl">30+</h4>
              <p class="text-xs text-white/50 md:text-sm">équipes par an</p>
            </div>
          </div>
          <div class="md:w-1/2 w-full mb-10 md:mb-0">
            <h1 class="text-lg md:text-3xl lg:text-4xl font-semibold">Quelques chiffres</h1>
            <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
              pour faire rêver
            </h2>
            <p class="text-white/70 text-justify md:text-left lg:text-lg mt-2 sm:text-base text-sm">
              4eSport est présente depuis 2019 au côté de ses membres. Elle a rapidement
              évoluée pour devenir la deuxième plus grande association de l'école en 2022.
            </p>
          </div>
        </div>
      </article>
      <article class="lg:mt-40 mt-10 md:mt-20">
        <div class="flex flex-col text-center mb-5">
          <h1 class="text-lg md:text-3xl lg:text-4xl font-semibold">Notre boutique</h1>
          <h2 class="text-base md:text-lg font-semibold text-[#15c584]">
            Il est temps de Flex
          </h2>
          <p class="text-xs text-white/70 mt-4">Réductions jusqu'à 50% pour les membres de l'association. Dans la limite
            du possible.</p>
        </div>
        <div class="flex sm:justify-center mt-10 justify-between flex-wrap md:flex-nowrap gap-2 sm:gap-0">
          <a class="my-auto" href="https://eliminate.fr/produit/4esport-hoodie-brode-2024/" target="_blank">
              <div
                class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in">
                <img src="../assets/4ESPORT_hoodie_white.png" alt=""
                  class="h-[140px] w-[90px] md:h-[243px] md:w-[225px] object-cover">
              </div>
              <p class="text-white/70 text-center mt-2">Pull v3 (Blanc) | 40€</p>
            </a>
          <a class="my-auto" href="https://eliminate.fr/produit/4esport-hoodie-brode-2022/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in">
              <img src="../assets/unknown.png" alt="" class="h-[140px] w-[90px] md:h-[270px] md:w-[250px] object-cover">
            </div>
            <p class="text-white/70 text-center mt-2">Pull v1 | 40€</p>
          </a>
          <a class="z-10 md:-mx-2" href="https://eliminate.fr/produit/4esport-jersey-2022/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in"
              @mouseenter="display = false" @mouseleave="display = true">
              <img v-if="display" src="../assets/Maillot_ORIGIN_fonce.png" alt=""
                class="h-[140px] w-[90px] sm:h-[220px] sm:w-[150px] md:h-[320px] md:w-[250px] object-cover scale-[1.2]">
              <img v-else src="../assets/Maillot_ORIGIN_MODELISATION_3D.png" alt=""
                class=" h-[140px] w-[90px] sm:h-[220px] sm:w-[150px] md:h-[320px] md:w-[250px] object-cover scale-[1.2]">
              <div />
            </div>
            <p class="text-white/70 text-center mt-2">Maillot | 35€</p>
          </a>
          <a class="my-auto" href="https://eliminate.fr/produit/4esport-hoodie-brode-2023/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in">
              <img src="../assets/4ESPORT_hoodie_navy.png" alt=""
                class="h-[140px] w-[90px] md:h-[270px] md:w-[250px] object-cover">
            </div>
            <p class="text-white/70 text-center mt-2">Pull v2 | 40€</p>
          </a>
          <a class="my-auto" href="https://eliminate.fr/produit/4esport-hoodie-brode-2024/" target="_blank">
            <div
              class="p-2 bg-[#333333] rounded-lg shadow-black/50 shadow-md hover:bg-[#444444] transition-colors ease-in">
              <img src="../assets/4ESPORT_hoodie_pink.png" alt=""
                class="h-[140px] w-[90px] md:h-[243px] md:w-[225px] object-cover">
            </div>
            <p class="text-white/70 text-center mt-2">Pull v3 (Rose) | 40€</p>
          </a>
        </div>
      </article>
    </div>
  </main>
</template>
