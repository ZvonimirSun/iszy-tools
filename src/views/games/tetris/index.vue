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
                     v-if="nextTetriminoMatrixLegend[x-1][y-1]"></div>
                <div class="tetrisCell" v-else></div>
              </template>
            </template>
          </template>
        </div>
        <div class="score">
          {{score}}
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import { range, random, cloneDeep } from 'lodash'
import Container from '@/components/container.vue'
import TetriminosMatrix from './js/TetriminosMatrix.js'

const tetriminos = ['i', 'j', 'l', 'o', 's', 't', 'z']

export default {
  name: 'tetris',
  components: { Container },
  data: () => ({
    inited: false,
    gridCells: {
      col: 10,
      row: 20
    },

    matrix: null,
    nextTetrimino: null,
    currentTetrimino: null,

    position: null,
    rotate: 0,
    score: 0,
    lines: 0,
    end: false,
    clearing: false
  }),
  computed: {
    level: function () {
      return Math.ceil(this.lines / 10)
    },
    nextTetriminoMatrixLegend: function () {
      if (this.nextTetrimino) {
        return TetriminosMatrix[this.nextTetrimino + 'Legend']
      } else {
        return null
      }
    },
    positions: function () {
      if (this.currentTetrimino) {
        return this._getPositions(this._getRotatedMatrix(this.rotate), this.position)
      } else {
        return null
      }
    },
    currentMatrix: function () {
      if (this.currentTetrimino) {
        const tmp = cloneDeep(this.matrix)
        for (const position of this.positions) {
          if (position[0] >= 0 && position[0] < this.gridCells.row &&
            position[1] >= 0 && position[1] < this.gridCells.col) {
            tmp[position[0]][position[1]] = this.currentTetrimino
          }
        }
        return tmp
      } else {
        return this.matrix
      }
    }
  },
  watch: {
    matrix: {
      handler: function (val) {
        if (this.inited && !this.clearing) {
          const indexs = []
          for (const i in val) {
            const tmp = val[i].filter(item => (item === ''))
            if (tmp.length === 0) {
              indexs.push(i)
            }
          }
          if (indexs.length > 0) {
            this.clearing = true
            const tmp = cloneDeep(val)
            for (let i = indexs.length - 1; i >= 0; i--) {
              tmp.splice(indexs[i], 1)
            }
            const tmp1 = Array(indexs.length)
            for (const x of range(indexs.length)) {
              tmp1[x] = Array(this.gridCells.col).fill('')
            }
            this.matrix = tmp1.concat(tmp)
            this.lines += indexs.length
            debugger
            switch (indexs.length) {
              case 1:
                this.score += 40 * this.level
                break
              case 2:
                this.score += 100 * this.level
                break
              case 3:
                this.score += 300 * this.level
                break
              case 4:
                this.score += 1200 * this.level
                break
              default:
                break
            }
            this.clearing = false
          }
        }
      },
      deep: true
    }
  },
  mounted () {
    this._resetPosition()
    this.matrix = Array(this.gridCells.row)
    for (const x of range(this.gridCells.row)) {
      this.matrix[x] = Array(this.gridCells.col).fill('')
    }
    this._getNextTetrimino()
    this._addListener()
    this.inited = true
  },
  methods: {
    start () {
      if (!this.currentTetrimino) {
        this.end = false
        this._getNextTetrimino()
      }
    },

    rotateRight () {
      if (this.currentTetrimino && !this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate - 1), this.position))) {
        this.rotate++
      }
    },
    rotateLeft () {
      if (this.currentTetrimino && !this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate - 1), this.position))) {
        this.rotate--
      }
    },
    moveLeft () {
      if (this.currentTetrimino && !this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate), [this.position[0], this.position[1] - 1]))) {
        this.position[1]--
      }
    },
    moveRight () {
      if (this.currentTetrimino && !this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate), [this.position[0], this.position[1] + 1]))) {
        this.position[1]++
      }
    },
    moveDown () {
      if (this.currentTetrimino) {
        if (!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate), [this.position[0] + 1, this.position[1]]))) {
          this.position[0]++
        } else {
          this._updateMatrix()
        }
      }
    },

    _resetPosition () {
      this.rotate = 0
      this.position = [0, Math.ceil(this.gridCells.col / 2)]
    },
    _updateMatrix () {
      if (this.currentTetrimino) {
        for (const position of this.positions) {
          if (position[0] < 0) {
            this.end = true
          } else {
            this.matrix[position[0]][position[1]] = this.currentTetrimino
          }
        }
        if (this.end) {
          this.currentTetrimino = undefined
          return
        }
        this._getNextTetrimino()
        this._resetPosition()
      }
    },
    _getNextTetrimino () {
      this.currentTetrimino = this.nextTetrimino
      this.nextTetrimino = tetriminos[random(0, 6)]
    },
    _getRotatedMatrix (rotate) {
      let index = rotate % TetriminosMatrix[this.currentTetrimino].length
      if (index < 0) { index += TetriminosMatrix[this.currentTetrimino].length }
      return TetriminosMatrix[this.currentTetrimino][index]
    },
    _getPositions (matrix, position) {
      const positions = []
      for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
          if (matrix[x][y] === 1) {
            switch (this.currentTetrimino) {
              case 'i':
              case 'o':
                positions.push([position[0] - 2 + x, position[1] - 2 + y])
                break
              case 'j':
              case 'l':
              case 't':
                positions.push([position[0] - 1 + x, position[1] - 1 + y])
                break
              case 's':
              case 'z':
                positions.push([position[0] - 2 + x, position[1] - 1 + y])
                break
              default:
                return null
            }
          }
        }
      }
      return positions
    },
    _keyboardEvent (event) {
      const modifiers = event.altKey || event.ctrlKey || event.metaKey ||
        event.shiftKey

      if (!modifiers) {
        switch (event.code) {
          case 'Space':
            this.start()
            break
          case 'KeyW':
          case 'KeyE':
          case 'ArrowUp':
            this.rotateRight()
            break
          case 'KeyQ':
            this.rotateLeft()
            break
          case 'KeyS':
          case 'ArrowDown':
            this.moveDown()
            break
          case 'KeyA':
          case 'ArrowLeft':
            this.moveLeft()
            break
          case 'KeyD':
          case 'ArrowRight':
            this.moveRight()
            break
          default:
            break
        }
      }
    },
    _hasConflict (positions) {
      for (const position of positions) {
        if (position[0] >= this.gridCells.row || position[1] < 0 || position[1] >= this.gridCells.col) {
          return true
        } else if (position[0] >= 0 && this.matrix[position[0]][position[1]] !== '') {
          return true
        }
      }
      return false
    },
    _addListener () {
      document.addEventListener('keydown', this._keyboardEvent.bind(this))
    },
    _removeListener () {
      document.removeEventListener('keydown', this._keyboardEvent.bind(this))
    }
  },
  beforeUnmount () {
    this._removeListener()
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

    .score {
      color: #fff;
      font-size: 6.4rem;
      line-height: 6.4rem;
      text-align: center;
      margin-top: .8rem;
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
