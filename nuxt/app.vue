<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(0.2rem);
}
#__nuxt{
  font-family: "Heebo";
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  color: #EDEDED;
}
body{
  margin: 0;
  padding: 0;
  background-color: #1C1C1C;
}
:root {
  color-scheme: dark;
}
</style>