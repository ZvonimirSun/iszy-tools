<template>
  <div>
    <div class="gamePanel">
      <div class="tetrisPanel">
        <div v-for="item in (gridCells.col*2+gridCells.row*2+4)" :class="['tetrisCell','tetrisCellGrid']"
             :key="'tetrisFrameGrid'+item"></div>
        <div class="tetrisMainPanel">
          <template v-if="inited">
            <template v-for="x in gridCells.row" :key="x">
              <template v-for="y in gridCells.col" :key="y">
                <div
                  :class="['tetrisCell', 'tetrisCellColor-'+currentMatrix[x-1][y-1], clearIndexs.includes(x-1) ? 'blink': '']"
                  v-if="currentMatrix[x-1][y-1]"></div>
                <div class="tetrisCell" v-else></div>
              </template>
            </template>
          </template>
        </div>
      </div>
      <div class="otherPanel">
        <div class="infoPanel">
          <div class="info">最高分: <span class="digital">{{ bestScore }}</span></div>
          <div class="info">
            <template v-if="!start">上轮</template>
            得分: <span class="digital">{{ score }}</span></div>
          <div class="info">消除行: <span class="digital">{{ lines }}</span></div>
          <div class="info">级别: <span class="digital">{{ level }}</span></div>
          <div class="info">下一个</div>
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

        </div>
        <div class="controlPanel">
          <div class="controlButton pause" @click="pauseGame"></div>
          <div class="controlInfo pause">暂停P</div>
          <div class="controlButton restart" @click="resetGame" v-if="start"></div>
          <div class="controlButton restart" @click="playGame" v-else></div>
          <div class="controlInfo restart">重玩R</div>
          <div class="controlButton drop" @click="moveBottom" v-if="start"></div>
          <div class="controlButton drop" @click="playGame" v-else></div>
          <div class="controlInfo drop">掉落Space</div>
          <div class="controlButton up" @click="rotateRight"></div>
          <div class="controlInfo up">旋转</div>
          <div class="controlButton left" @click="moveLeft"></div>
          <div class="controlInfo left">左移</div>
          <div class="controlButton right" @click="moveRight"></div>
          <div class="controlInfo right">右移</div>
          <div class="controlButton down" @click="moveDown"></div>
          <div class="controlInfo down">下移</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { range, shuffle, cloneDeep } from 'lodash-es'
import TetriminosMatrix from './js/TetriminosMatrix.js'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers('tetris')
const tetriminos = ['i', 'j', 'l', 'o', 's', 't', 'z']

export default {
  name: 'tetris',
  data: () => ({
    inited: false,
    gridCells: {
      col: 10,
      row: 20
    },

    matrix: null,
    rotate: 0,
    position: null,
    currentTetrimino: null,
    nextTetrimino: null,
    tetriminosShuffle: [],
    score: 0,
    lines: 0,

    start: false,
    end: false,
    pause: false,
    lock: false,

    clearing: false,
    clearIndexs: [],

    intervalID: undefined
  }),
  computed: {
    movable: function () {
      return this.start && !this.end && !this.clearing && !this.pause
    },
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
    },
    speed: function () {
      const level = this.level <= 20 ? this.level : 20
      return 1000 * ((0.8 - ((level - 1) * 0.007)) ** (level - 1))
    },
    ...mapGetters(['bestScore'])
  },
  mounted () {
    this.resetGame()
    this.getNextTetrimino()
    this.addListener()
    this.inited = true
  },
  methods: {
    playGame () {
      if (!this.start) {
        this.score = 0
        this.lines = 0
        this.getNextTetrimino()
        this.start = true
        this.intervalID = setInterval(() => {
          if (!this.clearing) {
            this.moveDown()
          }
        }, this.speed)
      }
    },
    resetGame () {
      clearInterval(this.intervalID)
      const tmp = Array(this.gridCells.row)
      for (const x of range(this.gridCells.row)) {
        tmp[x] = Array(this.gridCells.col).fill('')
      }
      this.matrix = tmp
      this.rotate = 0
      this.resetPosition()
      this.currentTetrimino = undefined
      this.start = false
      this.end = false
      this.pause = false
      this.lock = false
      this.clearing = false
    },
    pauseGame (lock) {
      if (lock) {
        this.lock = true
      } else if (lock === false) {
        this.lock = false
      }
      if (this.start && (this.lock === false || lock)) {
        if (this.pause) {
          this.pause = !this.pause
          this.intervalID = setInterval(() => {
            if (!this.clearing) {
              this.moveDown()
            }
          }, this.speed)
        } else {
          this.pause = !this.pause
          clearInterval(this.intervalID)
        }
      }
    },
    resetPosition () {
      this.rotate = 0
      this.position = [0, Math.ceil(this.gridCells.col / 2)]
    },
    updateMatrix () {
      if (this.start) {
        for (const position of this.positions) {
          if (position[0] < 0) {
            this.end = true
          }
        }
        this.matrix = cloneDeep(this.currentMatrix)
        if (this.end) {
          this.pauseGame(true)
          this.clearIndexs = []
          for (const x of range(this.gridCells.row)) {
            this.clearIndexs.push(x)
          }
          setTimeout(() => {
            if (this.score > this.bestScore) {
              this.setBestScore(this.score)
            }
            this.clearIndexs = []
            this.resetGame()
          }, 600)
          return
        }
        this.score += 4
        const indexs = []
        for (const i in this.matrix) {
          const tmp = this.matrix[i].filter(item => (item === ''))
          if (tmp.length === 0) {
            indexs.push(parseInt(i))
          }
        }
        if (indexs.length > 0) {
          this.clearing = true
          this.pauseGame(true)
          this.clearIndexs = indexs
          const tmp = cloneDeep(this.matrix)
          for (let i = this.clearIndexs.length - 1; i >= 0; i--) {
            tmp.splice(this.clearIndexs[i], 1)
          }
          const tmp1 = Array(this.clearIndexs.length)
          for (const x of range(this.clearIndexs.length)) {
            tmp1[x] = Array(this.gridCells.col).fill('')
          }
          setTimeout(() => {
            this.lines += this.clearIndexs.length
            switch (this.clearIndexs.length) {
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
            this.clearIndexs = []
            this.matrix = [...tmp1, ...tmp]
            this.getNextTetrimino()
            this.resetPosition()
            this.clearing = false
            this.pauseGame(false)
          }, 600)
        } else {
          this.getNextTetrimino()
          this.resetPosition()
        }
      }
    },
    getNextTetrimino () {
      this.currentTetrimino = this.nextTetrimino
      if (this.tetriminosShuffle.length <= 7) {
        this.tetriminosShuffle = this.tetriminosShuffle.concat(shuffle(tetriminos))
      }
      this.nextTetrimino = this.tetriminosShuffle.shift()
    },

    rotateRight () {
      if (this.movable && !this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate - 1), this.position))) {
        this.rotate++
      }
    },
    rotateLeft () {
      if (this.movable && !this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate - 1), this.position))) {
        this.rotate--
      }
    },
    moveLeft () {
      if (this.movable && !this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate), [this.position[0], this.position[1] - 1]))) {
        this.position[1]--
      }
    },
    moveRight () {
      if (this.movable && !this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate), [this.position[0], this.position[1] + 1]))) {
        this.position[1]++
      }
    },
    moveDown () {
      if (this.movable) {
        if (!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate), [this.position[0] + 1, this.position[1]]))) {
          this.position[0]++
        } else {
          this.updateMatrix()
        }
      }
    },
    moveBottom () {
      if (this.movable) {
        let time = 0
        while (!this._hasConflict(this._getPositions(this._getRotatedMatrix(this.rotate), [this.position[0] + time + 1, this.position[1]]))) {
          time++
        }
        this.position[0] += time
        this.updateMatrix()
      }
    },

    addListener () {
      document.addEventListener('keydown', this._keyboardEvent.bind(this))
    },
    removeListener () {
      document.removeEventListener('keydown', this._keyboardEvent.bind(this))
    },

    _getRotatedMatrix (rotate) {
      let index = rotate % TetriminosMatrix[this.currentTetrimino].length
      if (index < 0) {
        index += TetriminosMatrix[this.currentTetrimino].length
      }
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
            if (!this.start) {
              this.playGame()
            } else {
              if (this.pause) {
                this.pauseGame()
              }
              this.moveBottom()
            }
            break
          case 'KeyW':
          case 'KeyE':
          case 'ArrowUp':
            if (this.pause) {
              this.pauseGame()
            }
            this.rotateRight()
            break
          case 'KeyQ':
            if (this.pause) {
              this.pauseGame()
            }
            this.rotateLeft()
            break
          case 'KeyS':
          case 'ArrowDown':
            if (this.pause) {
              this.pauseGame()
            }
            this.moveDown()
            break
          case 'KeyA':
          case 'ArrowLeft':
            if (this.pause) {
              this.pauseGame()
            }
            this.moveLeft()
            break
          case 'KeyD':
          case 'ArrowRight':
            if (this.pause) {
              this.pauseGame()
            }
            this.moveRight()
            break
          case 'KeyP':
            this.pauseGame()
            break
          case 'KeyR':
            if (this.start) {
              this.resetGame()
            } else {
              this.playGame()
            }
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
    ...mapActions(['setBestScore'])
  },
  beforeUnmount () {
    this.removeListener()
  }
}
</script>

<style scoped lang="scss">
@import "./style/ds-digital";
@import "./style/variables";

@keyframes blink {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}

.gamePanel {
  height: $height;
  width: $width;
  margin: 0 auto;
  border: $padding solid $gray-bottom;
  border-right-color: $gray-left;
  border-bottom-color: $gray-top;
  border-left-color: $gray-right;
  background: #000;
  box-sizing: border-box;
  padding: $padding;
  display: flex;
  user-select: none;

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

  .otherPanel {
    height: 100%;
    padding-left: $padding;
    display: flex;
    flex-direction: column;
    flex: 1;

    .infoPanel {
      text-align: center;
      height: fit-content;

      .info {
        text-align: left;
        font-size: calc(#{$font-size} - .8rem);
        line-height: calc(#{$font-size} + .8rem);
        color: #fff;
        margin-bottom: calc(#{$padding} * 3);
        font-family: 'Microsoft Yahei', sans-serif;

        .digital {
          font-family: "DS Digital", serif;
          font-style: italic;
          font-size: calc(#{$font-size} + .8rem);
        }
      }

      .nextTetrimino {
        margin: 0 auto;
        display: grid;
        width: fit-content;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }
    }

    .controlPanel {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);

      .controlButton {
        cursor: pointer;

        &.pause {
          grid-row: 2;
          grid-column: 2 / 4;

          background: $green;
          border: $grid-border-width solid $green-top;
          border-right-color: $green-right;
          border-bottom-color: $green-bottom;
          border-left-color: $green-left;

          &:active {
            border: $grid-border-width solid $green-bottom;
            border-right-color: $green-left;
            border-bottom-color: $green-top;
            border-left-color: $green-right;
          }
        }

        &.restart {
          grid-row: 2;
          grid-column: 5 / 7;

          background: $red;
          border: $grid-border-width solid $red-top;
          border-right-color: $red-right;
          border-bottom-color: $red-bottom;
          border-left-color: $red-left;

          &:active {
            border: $grid-border-width solid $red-bottom;
            border-right-color: $red-left;
            border-bottom-color: $red-top;
            border-left-color: $red-right;
          }
        }

        &.drop {
          grid-row: 5 / 7;
          grid-column: 2 / 4;

          background: $blue;
          border: $grid-border-width solid $blue-top;
          border-right-color: $blue-right;
          border-bottom-color: $blue-bottom;
          border-left-color: $blue-left;

          &:active {
            border: $grid-border-width solid $blue-bottom;
            border-right-color: $blue-left;
            border-bottom-color: $blue-top;
            border-left-color: $blue-right;
          }
        }

        &.up {
          grid-row: 4;
          grid-column: 6;

          background: $blue;
          border: $grid-border-width solid $blue-top;
          border-right-color: $blue-right;
          border-bottom-color: $blue-bottom;
          border-left-color: $blue-left;

          &:active {
            border: $grid-border-width solid $blue-bottom;
            border-right-color: $blue-left;
            border-bottom-color: $blue-top;
            border-left-color: $blue-right;
          }
        }

        &.left {
          grid-row: 5;
          grid-column: 5;

          background: $blue;
          border: $grid-border-width solid $blue-top;
          border-right-color: $blue-right;
          border-bottom-color: $blue-bottom;
          border-left-color: $blue-left;

          &:active {
            border: $grid-border-width solid $blue-bottom;
            border-right-color: $blue-left;
            border-bottom-color: $blue-top;
            border-left-color: $blue-right;
          }
        }

        &.right {
          grid-row: 5;
          grid-column: 7;

          background: $blue;
          border: $grid-border-width solid $blue-top;
          border-right-color: $blue-right;
          border-bottom-color: $blue-bottom;
          border-left-color: $blue-left;

          &:active {
            border: $grid-border-width solid $blue-bottom;
            border-right-color: $blue-left;
            border-bottom-color: $blue-top;
            border-left-color: $blue-right;
          }
        }

        &.down {
          grid-row: 6;
          grid-column: 6;

          background: $blue;
          border: $grid-border-width solid $blue-top;
          border-right-color: $blue-right;
          border-bottom-color: $blue-bottom;
          border-left-color: $blue-left;

          &:active {
            border: $grid-border-width solid $blue-bottom;
            border-right-color: $blue-left;
            border-bottom-color: $blue-top;
            border-left-color: $blue-right;
          }
        }
      }

      .controlInfo {
        text-align: center;
        color: #fff;
        font-family: 'Microsoft Yahei', sans-serif;
        font-size: 1.2rem;
        line-height: 2.0rem;
        white-space: nowrap;
        //text-overflow: ellipsis;
        overflow: hidden;

        @media screen and (max-width: 40rem) {
          display: none;
        }

        &.pause {
          grid-row: 3;
          grid-column: 2 / 4;
        }

        &.restart {
          grid-row: 3;
          grid-column: 5 / 7;
        }

        &.drop {
          grid-row: 7;
          grid-column: 2 / 4;
        }

        &.up {
          grid-row: 4;
          grid-column: 7;
        }

        &.left {
          grid-row: 6;
          grid-column: 5;
        }

        &.right {
          grid-row: 6;
          grid-column: 7;
        }

        &.down {
          grid-row: 7;
          grid-column: 6;
        }
      }

      .startGame {
        font-family: 'Microsoft Yahei', sans-serif;
        font-size: $font-size;
        color: #fff;
        line-height: calc(#{$font-size} + .8rem);
        cursor: pointer;
        background: $gray;
        border: $grid-border-width solid $gray-top;
        border-right-color: $gray-right;
        border-bottom-color: $gray-bottom;
        border-left-color: $gray-left;

        &:active {
          border-top-color: $gray-bottom;
          border-right-color: $gray-left;
          border-bottom-color: $gray-top;
          border-left-color: $gray-right;
          font-size: calc(#{$font-size} * 0.9);
          transition: .1s;
        }
      }
    }
  }

  .tetrisCell {
    height: $cell-height;
    width: $cell-width;

    &.blink {
      animation: blink 0.6s both;
    }

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
