<script lang="ts" setup></script>
<template>
  <div class="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1300px] m-auto">
    <h1 class="mt-12 text-4xl font-bold">Le Blog de 4eSport</h1>
    <h2 class="text-white/70 text-xl mt-1">Lisez les dernières nouvelles concernant l'association.</h2>
    <main class="mt-8">
      <ContentList path="/" v-slot="{ list }">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="article in list.sort(
              (a, b) => $dayjs(b.date, 'DD/MM/YYYY').unix() - $dayjs(a.date, 'DD/MM/YYYY').unix()
            )"
            :key="article._path"
          >
            <NuxtLink
              :to="`${article._path}`"
              class="bg-white/5 aspect-[8/10] border border-white/10 hover:bg-white/[1%] hover:outline hover:outline-4 hover:outline-green-500 shadow-black shadow-lg flex flex-col rounded-xl"
            >
              <div
                class="h-[45%] w-full rounded-t-xl"
                :style="{
                  backgroundImage: `url(/content/thumbnail/${article.thumbnail})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                }"
              ></div>
              <div class="flex flex-col p-4 h-[55%]">
                <div class="font-semibold text-xs text-green-400 border border-green-800 rounded-lg px-2 py-[3px] mb-2 lg:mb-4 m-auto ml-0 bg-green-950/40">
                  {{ article.tag }}
                </div>
                <h3 class="text-xl lg:text-2xl font-semibold">{{ article.title }}</h3>
                <p class="text-white/60 text-md overflow-hidden h-[40px] mt leading-5">{{ article.description }}</p>
                <div class="grow"></div>
                <div class="grid grids-cols-2">
                  <p class="text-white/60 text-md lg:text-lg">{{ $dayjs(article.date, "DD/MM/YYYY").format("D MMMM YYYY") }}</p>
                  <div class="flex relative w-full">
                    <div
                      v-for="(author, index) in article.author.split(',').map((item: string) => item.trim()).reverse()"
                      class="absolute bottom-0"
                      :style="{
                        right: `${index * 22}px`,
                      }"
                    >
                      <img :src="`/content/author/${author}.png`" alt="" class="size-[32px] shadow-sm shadow-black rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </ContentList>
    </main>
  </div>
</template>
