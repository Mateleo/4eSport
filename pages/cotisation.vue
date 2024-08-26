<script setup lang="ts">

let display = ref(true);
</script>
<template>
    <main class="w-[95%] md:w-[90%] lg:w-[80%] m-auto sm:mt-[70px] max-w-[1000px]">
        <div class="flex flex-col text-center">
            <h1 class="text-2xl md:text-5xl font-semibold">La cotisation</h1>
            <h2 class="text-base md:text-2xl font-semibold text-[#15c584]">
                Le meilleur moyen de s'intégrer
            </h2>
            <p class="mt-4 italic text-white/70 text-xs md:text-sm">
                Nous avons fait le choix d'avoir une cotisation abordable pour tout le monde et
                qui ne discrimine pas ceux qui ne souhaite pas cotiser. Ainsi la cotisation permet
                de débloquer la LXP mais avant tout de soutenir l'association.
            </p>
        </div>
        <table class="mt-10 m-auto">
            <thead class="bg-[#353535] text-lg sticky top-[42px] sm:top-[52px] md:top-[62px]">
                <tr>
                    <th>Solutions</th>
                    <th>Etudiant</th>
                    <th>Cotisant</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        <div class="">Prix</div>
                    </th>
                    <td>
                        <div class="flex flex-col">
                            <h3 class="font-semibold  text-2xl md:text-4xl text-center">0€</h3>
                            <p class="text-white/60 text-xs md:text-sm text-center">Ouvert à tous</p>
                            <div class="w-full flex justify-center mt-4">
                                <a class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#2c15c5]/70 hover:bg-[#2c15c5] shadow-sm shadow-black/40 truncate"
                                    href="https://discord.gg/4eSport" target="_blank">
                                    <p class="md:text-lg font-semibold text-xs">Nous rejoindre</p>
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="py-4 flex flex-col">
                            <h3 class="font-semibold text-2xl md:text-4xl text-center">10€</h3>
                            <p class="text-white/60 text-xs md:text-sm text-center">Pour devenir un membre de 4eSport,
                                un vrai.</p>
                            <div class="w-full flex justify-center mt-4">
                                <a class="flex px-2 py-1 rounded-lg border-[1px] border-[white]/5 bg-[#8215c5]/70 hover:bg-[#8215c5] shadow-sm shadow-black/40 truncate"
                                    href="https://www.helloasso.com/associations/4esport/adhesions/cotisation-4esport-2024-2025"
                                    target="_blank">
                                    <p class="md:text-lg font-semibold text-xs">Cotiser</p>
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="bg-white/5">
                    <th class="title">Avantages</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th class="font-normal">Accès au Discord</th>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <th>Accès à tous les tournois</th>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                <tr>
                    <th>Events IRL</th>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                </tr>
                <tr>
                    <th>Learning XP</th>
                    <td>
                        <svg class="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <th>NEC Saison 2</th>
                    <td class="italic text-white/50">Limité</td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <th>Déplacement en LAN</th>
                    <td>
                        <svg class="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <th>Tarif préférentiel</th>
                    <td>
                        <svg class="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <th>Prêts de matériel</th>
                    <td>
                        <svg class="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <th>Giveaways</th>
                    <td>
                        <svg class="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
                <tr>
                    <th>LoL Tracker</th>
                    <td>
                        <svg class="text-gray-400 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                    <td>
                        <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>

</template>
<style scoped>
td,
th {
    padding: 5px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: 400;
    font-size: 0.8rem;
    text-align: center;
}

td:nth-child(2) {
    border: 1px solid rgba(255, 255, 255, 0.1);
}

td:nth-child(3) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

th {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

table {
    table-layout: fixed;
    width: 100%;
}

.title {
    font-weight: 700;
}

svg {
    margin: auto;
}

@media (min-width: 768px) {

    td,
    th {
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 400;
        font-size: 1rem;
    }
}
</style>
