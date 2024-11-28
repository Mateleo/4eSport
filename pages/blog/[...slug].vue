<script setup lang="ts">
const { page } = useContent()

useSeoMeta({
  title: () => `${page.value.title}`,
  titleTemplate: () => `${page.value.title}`,
  twitterTitle: () => `${page.value.title}`,
  ogTitle:() => `${page.value.title}`,
  description:
    `${page.value.description}`,
  ogDescription:
    `${page.value.description}`,
  twitterDescription:
    `${page.value.description}`,
  ogImage:()=>
    `/content/thumbnail/${page.value.thumbnail}`,
  twitterImage:
    `/content/thumbnail/${page.value.thumbnail}`,
  twitterCard: "summary_large_image",
  themeColor: "#0EA5E9",
  ogType: "website",
  ogUrl: "https://4esport.fr/",
  ogLocale: "fr_FR",
  msapplicationTileColor: "#0EA5E9",
  author: "Mateleo",
  ogSiteName: "4eSport",
  twitterSite: "4eSport",
  twitterCreator: "Mateleo",
  mobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "4eSport",
  ogImageHeight: 1200,
  ogImageWidth: 630,
  ogImageType: "image/png",
});


</script>

<template>
  <main class="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1300px] m-auto">
    <Headline :date="page.date" :title="page.title" :description="page.description" :author="page.author" :tag="page.tag"></Headline>
    <div class="grid grid-cols-9">
      <ContentRenderer :key="page._id" :value="page"  class="text-gray-300 text-md col-span-9 md:col-span-7 text-justify md:pr-8" />
      <div class="hidden md:flex flex-col md:col-span-2">
        <div class="sticky top-[100px] right-0">
          <p class="text-sm font-semibold text-white">Table des matières</p>
          <Navigation class="text-sm"></Navigation>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main :where(h1):not(.custom) {
  @apply text-4xl font-bold text-white mb-4;
  scroll-margin-top: 60px;
}
main :where(h2):not(.custom) {
  @apply text-2xl font-bold text-white mt-10 mb-4;
  scroll-margin-top: 60px;
}
main :where(h3):not(.custom) {
  @apply text-xl font-bold text-white mt-8 mb-4;
  scroll-margin-top: 60px;
}
main :where(a) {
  @apply text-[#00DC82] font-medium;
}
main :where(hr) {
  @apply my-8
}
main :where(h2 a, h3 a, h1 a) {
  @apply text-white font-bold;
}
main :where(code:not(pre code)) {
  @apply text-white py-[1px] px-2 border border-white/20 bg-white/[5%] rounded-sm;
}
main :where(pre) {
  @apply bg-white/5 p-4 rounded-md mb-4 text-sm;
}
main :where(pre > code) {
  font-family: "Fira Code";
}
main :where(p):not(.custom) {
  @apply mb-4;
}
main :where(ol li):not(.custom) {
  @apply ml-8 list-decimal mb-6;
}

main :where(ul li):not(.custom) {
  @apply ml-8 list-disc mb-2;
}
</style>
