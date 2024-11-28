<script lang="ts" setup>
const props = defineProps({
  date: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  tag: {
    type: String,
  },
});
</script>
<template>
  <div class="mb-12 border-b border-white/20">
    <div class="md:mt-12 flex flex-col text-white/70">
      <p class="font-semibold text-lg">
        <span class="text-green-500"> {{ props.tag }}</span> |
        {{ $dayjs(props.date, "DD/MM/YYYY").format("D MMMM YYYY") }}
      </p>
      <h1 class="text-6xl font-bold text-white mt-2">{{ props.title }}</h1>
      <h2 class="text-white/70 text-2xl custom mt-2">{{ props.description }}</h2>
      <div class="flex gap-2 -ml-4 my-6">
        <NuxtLink
          v-if="props.author"
          v-for="(author, index) in props.author.split(',').map((item: string) => item.trim())"
          class="flex gap-2 rounded-lg hover:bg-white/20 px-4 py-2 items-center cursor-pointer"
        >
          <div><img :src="`/content/author/${author}.png`" alt="" class="size-[48px] rounded-full" /></div>
          <div class="flex flex-col">
            <p class="text-white font-semibold text-lg custom leading-none -mt-2">{{ author }}</p>
            <p class="text-sm text-white/50 custom">@{{ author.toLocaleLowerCase() }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
