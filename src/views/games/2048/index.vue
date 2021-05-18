<template>
  <container>
    <div class="game-container" ref="gameContainer">
      <div class="grid-container">
        <div class="grid-cell" v-for="item in 16" :key="item"></div>
      </div>
      <div class="tile-container" v-if="gameState && gameState.grid">
        <template v-for="(item, index) in gameState.grid.cells">
          <template v-for="(item1, index1) in item">
            <div class="tile" :key="'tile-'+index+'-'+index1" v-if="item1" :class="tileClass(item1)">
              <span>{{item1.value}}</span>
            </div>
          </template>
        </template>
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
    tileClass (cell) {
      if (cell) {
        const tmp = []
        if (cell.value > 2048) {
          tmp.push('tile-super')
        } else {
          tmp.push('tile-' + cell.value)
        }
        tmp.push('tile-position-' + (cell.position.x + 1) + '-' + (cell.position.y + 1))
        return tmp
      } else {
        return []
      }
    },

    actuate (grid, metadata) {

    },
    continueGame () {
    },
    ...mapActions({
      setBestScore: 'g2048/setBestScore',
      setGameState: 'g2048/setGameState',
      clearGameState: 'g2048/clearGameState'
    })
  },
  beforeUnmount () {
    gameManager.destroy()
  }
}
</script>

<style scoped lang="scss">
@use "sass:string";
@import "./style/helpers";
@import "./style/clear-sans";

$field-width: 500px;
$grid-spacing: 15px;
$grid-row-cells: 4;
$tile-border-radius: 3px;

$text-color: #776E65;
$bright-text-color: #f9f6f2;

$tile-color: #eee4da;
$tile-gold-color: #edc22e;
$tile-gold-glow-color: lighten($tile-gold-color, 15%);

$game-container-margin-top: 40px;
$game-container-background: #bbada0;

$transition-speed: 100ms;

.game-container {
  color: $text-color;
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
  width: 100%;
  max-width: $field-width;
  margin: 0 auto;
  background: $game-container-background;
  border-radius: 6px;
  position: relative;

  &:after {
    padding-bottom: 100%;
    content: '';
    display: block;
  }

  .grid-container, .tile-container {
    position: absolute;
    top: $grid-spacing;
    left: $grid-spacing;

    width: calc(100% - #{$grid-spacing} * 2);
    height: calc(100% - #{$grid-spacing} * 2);
    display: grid;

    grid-template-columns: repeat(4, [col] 1fr);
    grid-template-rows: repeat(4, [row] 1fr);
    grid-row-gap: $grid-spacing;
    grid-column-gap: $grid-spacing;
    box-sizing: border-box;
  }

  .grid-container {
    z-index: 1;

    .grid-cell {
      border-radius: 3px;
      background: rgba(238, 228, 218, 0.35);
    }
  }

  .tile-container {
    z-index: 2;

    .tile {
      border-radius: $tile-border-radius;
      display: flex;
      align-items: center;

      span {
        font-weight: bold;
        font-size: 55px;
        flex: 1;
        text-align: center;
      }

      @for $x from 1 through $grid-row-cells {
        @for $y from 1 through 4 {
          &.tile-position-#{$x}-#{$y} {
            grid-column: col $x;
            grid-row: row $y;
          }
        }
      }

      $base: 2;
      $exponent: 1;
      $limit: 11;

      // Colors for all 11 states, false = no special color
      $special-colors: false false, // 2
      false false, // 4
      #f78e48 true, // 8
      #fc5e2e true, // 16
      #ff3333 true, // 32
      #ff0000 true, // 64
      false true, // 128
      false true, // 256
      false true, // 512
      false true, // 1024
      false true; // 2048

      @while $exponent <= $limit {
        $power: pow($base, $exponent);

        &.tile-#{$power} {
          // Calculate base background color
          $gold-percent: ($exponent - 1) / ($limit - 1) * 100;
          $mixed-background: mix($tile-gold-color, $tile-color, $gold-percent);

          $nth-color: nth($special-colors, $exponent);

          $special-background: nth($nth-color, 1);
          $bright-color: nth($nth-color, 2);

          @if $special-background {
            $mixed-background: mix($special-background, $mixed-background, 55%);
          }

          @if $bright-color {
            color: $bright-text-color;
          }

          // Set background
          background: $mixed-background;

          // Add glow
          $glow-opacity: max(#{$exponent} - 4, 0) / ($limit - 4);

          @if not $special-background {
            box-shadow: 0 0 30px 10px rgba($tile-gold-glow-color, $glow-opacity / 1.8),
            inset 0 0 0 1px rgba(white, $glow-opacity / 3);
          }

          // Adjust font size for bigger numbers
          @if $power >= 100 and $power < 1000 {
            font-size: 45px;

            // Media queries placed here to avoid carrying over the rest of the logic
            //@include smaller($mobile-threshold) {
            //  font-size: 25px;
            //}
          } @else if $power >= 1000 {
            font-size: 35px;

            //@include smaller($mobile-threshold) {
            //  font-size: 15px;
            //}
          }
        }

        $exponent: $exponent + 1;
      }

      &.tile-super {
        color: $bright-text-color;
        background: mix(#333, $tile-gold-color, 95%);

        font-size: 30px;
      }
    }
  }
}
</style>
