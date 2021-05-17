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
import KeyboardInputManager from './js/KeyboardInputManager.js'
import HTMLActuator from './js/HTMLActuator.js'
import LocalStorageManager from './js/LocalStorageManager.js'

export default {
  name: '2048',
  components: { Container },
  data: () => ({
    // 格网大小
    size: 4,
    // 初始数量
    startTiles: 2,

    cells: undefined,

    score: 0,
    best: 0,
    over: false,
    won: false,
    keepPlaying: false
  }),
  mounted () {
    window.requestAnimationFrame(function () {
      new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager)
    })
  },
  methods: {
    setup () {
      this.empty()
      this.addStartTiles()
    },
    addStartTiles () {
      for (const i = 0; i < this.startTiles; i++) {
        this.addRandomTile()
      }
    },
    addRandomTile () {
      if (this.cellsAvailable()) {
        const value = Math.random() < 0.9 ? 2 : 4
      }
    },

    empty () {
      this.cells = []
      for (let x = 0; x < this.size; x++) {
        this.cells.push([])
        const row = this.cells[x]

        for (let y = 0; y < this.size; y++) {
          row.push(null)
        }
      }
    },
    cellsAvailable () {
      let count = 0
      for (const x of this.cells) {
        for (const y of x) {
          if (y) {
            count++
          }
        }
      }
      return !!count
    }
  }
}
</script>

<style scoped lang="scss">
.game-container {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  padding: 15px;
  background: #bbada0;
  border-radius: 6px;

  .grid-container {
    width: 100%;
    height: 100%;
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
