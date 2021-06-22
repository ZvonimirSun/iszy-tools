<template>
  <container>
    <div class="gamePanel">
      <div class="tetrisPanel">
        <div v-for="item in (gridCells.col*2+gridCells.row*2+4)" :class="['tetrisCell','tetrisCellGrid']"
             :key="'tetrisFrameGrid'+item"></div>
        <div class="tetrisMainPanel">
          <template v-for="x in gridCells.row" :key="x">
            <template v-for="y in gridCells.col" :key="y">
              <div :class="['tetrisCell', 'tetrisCellColor-'+matrix[x-1][y-1]]"
                   v-if="inited && matrix[x-1][y-1]"></div>
              <div class="tetrisCell" v-else></div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import { range, random } from 'lodash'
import Container from '@/components/container.vue'

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

    matrix: undefined,
    nextTetrimino: undefined,
    score: 0
  }),
  mounted () {
    this.matrix = Array(this.gridCells.row)
    for (const x of range(this.gridCells.row)) {
      this.matrix[x] = Array(this.gridCells.col).fill('')
    }
    this.getNextTetrimino()
    this.inited = true
  },
  methods: {
    getNextTetrimino () {
      this.nextTetrimino = this.tetriminos[random(0, 6)]
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

  .tetrisPanel {
    height: 100%;
    width: 50%;
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
