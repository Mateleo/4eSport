<script setup lang="ts"></script>
<template>
  <div class="fixed top-0 left-0 right-0 z-10">
    <header
      class="w-full border-b-[1px] border-white/20 backdrop-blur-[2px] text-white bg-[#1C1C1C]/70"
    >
      <div class="md:w-[80%] m-auto w-full flex justify-between items-center px-4 py-3 md:px-0">
        <div class="flex items-center">
          <div>
            <h1 class="text-2xl mr-3">4eSport</h1>
          </div>
          <nav>
            <router-link
              to="/create"
              class="md:mr-2 mr-1 link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
            >
              Evènements</router-link
            >
            <router-link
              to="/support"
              class="md:mx-2 mx-1 link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
              >Projets</router-link
            >
            <router-link
              to="/mypanel"
              class="md:ml-2 ml-1 link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
              >Palmarès</router-link
            >
          </nav>
        </div>
        <div>
          <button>Github</button>
          <router-link
            to="/mypanel"
            class="md:ml-2 ml-1 link-underline hover:text-[#15c584] transition-all ease-in-out delay-75"
            >Login</router-link
          >
        </div>
      </div>
    </header>
  </div>
</template>

<style>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(rgb(21, 197, 132), rgb(21, 197, 132));
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
}

.link-underline:hover {
  background-size: 100% 2px;
  background-position: 0 100%;
}
</style>
