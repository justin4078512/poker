<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div ref="target">Hello world</div>
    <div>Outside element</div>
    <div class="colums"></div>
    <div class="flex flex-row">
      <div class="basis-1/4">01</div>
      <div class="basis-1/4">02</div>
      <div class="basis-1/2">03</div>
    </div>
    <div class="h-80 bg-black tracking-wider">aaaa bbb</div>
  </div>
  <div class="flex flex-row">
    <span class="basis-1/4">999</span>
    <span class="basis-1/4">333</span>
    <span class="basis-1/4 w-500 text-red-500 text-30">666</span>
    <span class="w-80">999</span>
  </div>
</template>

<script setup>
import { useNetwork, useStorage, useMouse, onClickOutside } from '@vueuse/core'
// const { isOnline, offlineAt, downlink } = useNetwork()
import { ref } from 'vue'
const { x, y, sourceType } = useMouse({ touch: false })

const state = useStorage('myObj', { hellow: '99998', greeting: '3324242' })
console.log('state', state)
const target = ref(null)

onClickOutside(target, (event) => console.log(event))
// state.value = null
console.log('===', x, y, sourceType)
// console.log(isOnline, offlineAt, downlink)
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
