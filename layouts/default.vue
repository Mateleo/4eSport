<script lang="ts" setup></script>
<template>
  <div class="flex min-h-screen flex-col">
    <Header></Header>
    <div class="flex-1">
      <slot />
    </div>
    <Footer></Footer>
  </div>
</template>
