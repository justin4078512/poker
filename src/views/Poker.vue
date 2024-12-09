<template>
  <div>
    <h1>48张跑得快记牌工具</h1>
    <div>
      <h2>剩余牌</h2>
      <div class="card-grid">
        <Card v-for="card in unplayedCards" :key="card.id" :card="card" @click="playCard(card)" />
      </div>
    </div>
    <div>
      <h2>已打出牌</h2>
      <div class="card-grid">
        <Card v-for="card in playedCards" :key="card.id" :card="card" />
      </div>
    </div>
    <button @click="resetGame">重置游戏</button>
  </div>
</template>

<script>
import { useCardStore } from '../stores/game'
import Card from './Card.vue'

export default {
  components: { Card },
  setup() {
    const cardStore = useCardStore()
    return {
      ...cardStore,
      playCard: cardStore.playCard,
      resetGame: cardStore.resetGame
    }
  }
}
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
}
</style>
