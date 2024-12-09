const suits = ['♠', '♥', '♣', '♦']
const ranks = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2']

export const generateDeck = () => {
  let deck = []
  ranks.forEach((suit) => {
    suits.forEach((rank) => {
      deck.push({ suit, rank, id: `${suit}${rank}` })
    })
  })
  // 去掉某些2或其他规则牌
  return deck.filter(
    (card) =>
      !(
        (card.rank === '♣' && card.suit === '2') ||
        (card.rank === '♥' && card.suit === '2') ||
        (card.rank === '♦' && card.suit === '2') ||
        (card.rank === '♣' && card.suit === 'A')
      )
  )
}
