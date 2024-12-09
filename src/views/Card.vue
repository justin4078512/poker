<template>
  <div class="card">
    <span>{{ card.suit }}{{ card.rank }}</span>
    <!-- <span>{{ card }}</span> -->
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background: white;
  cursor: pointer;
  user-select: none;
}
.card:hover {
  background: #f0f0f0;
}
</style>
