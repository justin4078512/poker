import { defineStore } from 'pinia'
import { generateDeck } from './deck-utils'

export const useCardStore = defineStore('cards', {
  state: () => ({
    deck: generateDeck(), // 初始化所有牌
    playedCards: [], // 已经打出的牌
    unplayedCards: generateDeck() // 为打出牌
  }),
  getters: {
    remainingCards: (state) => {
      return state.deck.filter((card) => !state.playedCards.some((played) => played.id === card.id))
    }
  },
  actions: {
    playCard(card) {
      this.playedCards.push(card)
      //   console.log('card', card)
      const index = this.unplayedCards.findIndex((item) => item.id === card.id)
      this.unplayedCards.splice(index, 1)
    },
    resetGame() {
      this.playedCards = []
    }
  }
})
