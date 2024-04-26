<script setup lang="ts">
import { useMouse } from '@vueuse/core'
console.log("hello world")
const {x,y} = useMouse()

</script>

<template>
  {{ x }}
  {{ y }}
  <div class="" c-yellow py-2 p-c border>
    123
  </div>

  <n-button
    class="
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-yellow
      bg-green-500
      hover:bg-green-700
      border-none
      cursor-pointer
    "
  >
    Click me
  </n-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
