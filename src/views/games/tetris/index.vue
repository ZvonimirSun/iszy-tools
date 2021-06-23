<template>
  <container>
    <div class="gamePanel">
      <div class="tetrisPanel">
        <div v-for="item in (gridCells.col*2+gridCells.row*2+4)" :class="['tetrisCell','tetrisCellGrid']"
             :key="'tetrisFrameGrid'+item"></div>
        <div class="tetrisMainPanel">
          <template v-if="inited">
            <template v-for="x in gridCells.row" :key="x">
              <template v-for="y in gridCells.col" :key="y">
                <div :class="['tetrisCell', 'tetrisCellColor-'+currentMatrix[x-1][y-1]]"
                     v-if="currentMatrix[x-1][y-1]"></div>
                <div class="tetrisCell" v-else></div>
              </template>
            </template>
          </template>
        </div>
      </div>
      <div class="infoPanel">
        <div class="nextTetrimino">
          <template v-if="inited">
            <template v-for="x in 2" :key="x">
              <template v-for="y in 4" :key="y">
                <div :class="['tetrisCell', 'tetrisCellColor-'+nextTetrimino]"
                     v-if="nextTetriminoMatrix[x-1][y-1]"></div>
                <div class="tetrisCell" v-else></div>
              </template>
            </template>
          </template>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import { range, random, cloneDeep } from 'lodash'
import Container from '@/components/container.vue'
import TetriminosMatrix from './js/TetriminosMatrix.js'

export default {
  name: 'tetris',
  components: { Container },
  data: () => ({
    inited: false,
    gridCells: {
      col: 10,
      row: 20
    },
    tetriminos: ['i', 'j', 'l', 'o', 's', 't', 'z'],

    matrix: null,
    nextTetrimino: null,
    currentTetrimino: null,

    position: null,
    rotate: 0,
    score: 0
  }),
  mounted () {
    this.position = [0, Math.ceil(this.gridCells.col / 2)]
    this.matrix = Array(this.gridCells.row)
    for (const x of range(this.gridCells.row)) {
      this.matrix[x] = Array(this.gridCells.col).fill('')
    }
    this.getNextTetrimino()
    this.inited = true
    this.start()
  },
  methods: {
    getNextTetrimino () {
      this.currentTetrimino = this.nextTetrimino
      this.nextTetrimino = this.tetriminos[random(0, 6)]
    },
    start () {
      this.getNextTetrimino()
    }
  },
  computed: {
    currentTetriminoMatrix: function () {
      if (this.currentTetrimino) {
        return TetriminosMatrix[this.currentTetrimino][this.rotate % TetriminosMatrix[this.currentTetrimino].length]
      } else {
        return null
      }
    },
    nextTetriminoMatrix: function () {
      if (this.nextTetrimino) {
        return TetriminosMatrix[this.nextTetrimino + 'Legend']
      } else {
        return null
      }
    },
    currentMatrix: function () {
      if (this.currentTetrimino) {
        const tmp = cloneDeep(this.matrix)
        if (this.currentTetriminoMatrix.length === 4) {
          for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
              if (this.position[0] - 2 + x >= 0 && this.position[1] - 2 + y >= 0) {
                tmp[this.position[0] - 2 + x][this.position[1] - 2 + y] = this.currentTetriminoMatrix[x][y] === 1 ? this.currentTetrimino : ''
              }
            }
          }
        } else if (this.currentTetriminoMatrix.length === 3) {
          for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
              if (this.position[0] - 1 + x >= 0 && this.position[1] - 1 + y >= 0) {
                tmp[this.position[0] - 1 + x][this.position[1] - 1 + y] = this.currentTetriminoMatrix[x][y] === 1 ? this.currentTetrimino : ''
              }
            }
          }
        }
        return tmp
      } else {
        return this.matrix
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./style/variables";

.gamePanel {
  height: $height;
  width: $width;
  max-height: $max-height;
  max-width: $max-width;
  margin: 0 auto;
  border: 1rem solid $gray-bottom;
  border-right-color: $gray-left;
  border-bottom-color: $gray-top;
  border-left-color: $gray-right;
  background: #000;
  box-sizing: border-box;
  padding: .8rem;
  display: flex;

  .tetrisPanel {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(($grid-col-cells + 2), 1fr);
    grid-template-rows: repeat(($grid-row-cells + 2), 1fr);

    .tetrisMainPanel {
      grid-column: 2 / #{$grid-col-cells + 2};
      grid-row: 2 / #{$grid-row-cells + 2};
      display: grid;
      grid-template-columns: repeat($grid-col-cells, 1fr);
      grid-template-rows: repeat($grid-row-cells, 1fr);
    }
  }

  .infoPanel {
    height: 100%;
    padding-left: .8rem;
    flex: 1;

    .nextTetrimino {
      margin: 0 auto;
      display: grid;
      width: fit-content;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }

  .tetrisCell {
    height: $cell-height;
    width: $cell-width;
    max-height: $cell-max-height;
    max-width: $cell-max-width;

    &.tetrisCellColor-i {
      background: $light-blue;
      border: $grid-border-width solid $light-blue-top;
      border-right-color: $light-blue-right;
      border-bottom-color: $light-blue-bottom;
      border-left-color: $light-blue-left;
    }

    &.tetrisCellColor-j {
      background: $blue;
      border: $grid-border-width solid $blue-top;
      border-right-color: $blue-right;
      border-bottom-color: $blue-bottom;
      border-left-color: $blue-left;
    }

    &.tetrisCellColor-l {
      background: $orange;
      border: $grid-border-width solid $orange-top;
      border-right-color: $orange-right;
      border-bottom-color: $orange-bottom;
      border-left-color: $orange-left;
    }

    &.tetrisCellColor-o {
      background: $yellow;
      border: $grid-border-width solid $yellow-top;
      border-right-color: $yellow-right;
      border-bottom-color: $yellow-bottom;
      border-left-color: $yellow-left;
    }

    &.tetrisCellColor-s {
      background: $green;
      border: $grid-border-width solid $green-top;
      border-right-color: $green-right;
      border-bottom-color: $green-bottom;
      border-left-color: $green-left;
    }

    &.tetrisCellColor-t {
      background: $purple;
      border: $grid-border-width solid $purple-top;
      border-right-color: $purple-right;
      border-bottom-color: $purple-bottom;
      border-left-color: $purple-left;
    }

    &.tetrisCellColor-z {
      background: $red;
      border: $grid-border-width solid $red-top;
      border-right-color: $red-right;
      border-bottom-color: $red-bottom;
      border-left-color: $red-left;
    }

    &.tetrisCellGrid {
      background: $gray;
      border: $grid-border-width solid $gray-top;
      border-right-color: $gray-right;
      border-bottom-color: $gray-bottom;
      border-left-color: $gray-left;
    }
  }
}
</style>
