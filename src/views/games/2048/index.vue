<template>
  <container>
    <div class="game-container">
      <div class="grid-container">
        <div class="grid-cell" v-for="item in 16" :key="item"></div>
      </div>
    </div>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import GameManager from './js/GameManager.js'
import { mapActions, mapState } from 'vuex'

let gameManager

export default {
  name: '2048',
  components: { Container },
  data: () => ({
    state: {}
  }),
  computed: {
    ...mapState({
      gameState: state => state.g2048.gameState,
      bestScore: state => state.g2048.bestScore
    })
  },
  mounted () {
    gameManager = new GameManager(4, this)
  },
  methods: {
    actuate (grid, metadata) {

    },
    continueGame () {},
    ...mapActions({
      setBestScore: 'g2048/setBestScore',
      setGameState: 'g2048/setGameState',
      clearGameState: 'g2048/clearGameState'
    })
  }
}
</script>

<style scoped lang="scss">
.game-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: #bbada0;
  border-radius: 6px;
  position: relative;

  &:after {
    padding-bottom: 100%;
    content: '';
    display: block;
  }

  .grid-container {
    position: absolute;
    top: 15px;
    left: 15px;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 15px;
    grid-column-gap: 15px;

    .grid-cell {
      border-radius: 3px;
      background: rgba(238, 228, 218, 0.35);
    }
  }
}
</style>
