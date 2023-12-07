<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body,
html,
#__nuxt {
  font-family: "Heebo";
  height: 100%;
  padding: 0;
  margin: 0;
}
:root {
  color: white;
  color-scheme: dark;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}

</style>
