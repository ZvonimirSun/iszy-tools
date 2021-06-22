<template>
  <container>
    <div class="gamePanel">
      <div class="tetrisPanel">
        <div v-for="item in (gridCells.col*2+gridCells.row*2+4)" :class="'tetrisFrameGrid tetrisFrameGrid-'+item" :key="'tetrisFrameGrid'+item"></div>
        <div class="tetrisMainPanel">
          <template v-for="x in gridCells.row" :key="x">
            <template v-for="y in gridCells.col" :key="y">
              <div :class="'tetrisTile tetrisTile-'+x+'-'+y"></div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
export default {
  name: 'tetris',
  components: { Container },
  data: () => ({
    gridCells: {
      col: 10,
      row: 20
    }
  })
}
</script>

<style scoped lang="scss">
@import "./style/variables";

.gamePanel {
  height: calc(100vh - 32rem);
  width: calc(100vh - 32rem);
  max-height: calc(100vw - 8rem);
  max-width: calc(100vw - 8rem);
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
    box-sizing: content-box;
    display: grid;
    grid-template-columns: repeat(($grid-col-cells + 2), 1fr);
    grid-template-rows: repeat(($grid-row-cells + 2), 1fr);

    .tetrisFrameGrid {
      background: $gray;
      border: $grid-border-width solid $gray-top;
      border-right-color: $gray-right;
      border-bottom-color: $gray-bottom;
      border-left-color: $gray-left;
    }

    @for $x from 1 through ($grid-row-cells * 2 + $grid-col-cells * 2 + 4) {
      .tetrisFrameGrid-#{$x} {
        @if $x <= ($grid-col-cells + 2) {
          grid-column: $x;
        } @else if $x <= ($grid-row-cells + $grid-col-cells + 2) {
          grid-column: 1;
          grid-row: ($x - $grid-col-cells - 1);
        } @else if $x <= ($grid-row-cells * 2 + $grid-col-cells + 2) {
          grid-column: $grid-col-cells + 2;
          grid-row: ($x - $grid-col-cells - $grid-row-cells - 1);
        } @else {
          grid-column: ($x - $grid-row-cells * 2 - $grid-col-cells - 2);
          grid-row: ($grid-row-cells + 2);
        }
      }
    }

    .tetrisMainPanel {
      grid-column: 2 / #{$grid-col-cells + 2};
      grid-row: 2 / #{$grid-row-cells + 2};
      display: grid;
      grid-template-columns: repeat($grid-col-cells, 1fr);
      grid-template-rows: repeat($grid-row-cells, 1fr);

      @for $x from 1 through $grid-row-cells {
        @for $y from 1 through $grid-col-cells {
          &.tetrisTile-#{$x}-#{$y} {
            grid-column: $x;
            grid-row: $y;
          }
        }
      }
    }
  }
}
</style>
