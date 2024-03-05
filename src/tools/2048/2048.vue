<script>
import GameManager from './js/GameManager.js'

let gameManager

export default {
  name: '2048Game',
  data: () => ({
    state: {},
  }),
  computed: {
    gameState() {
      return use2048Store().gameState
    },
    bestScore() {
      return useSettingStore().modules['2048'].bestScore
    },
  },
  mounted() {
    gameManager = new GameManager(4, this)
  },
  beforeUnmount() {
    gameManager.destroy()
  },
  methods: {
    setBestScore: use2048Store().setBestScore,
    setGameState: use2048Store().setGameState,
    clearGameState: use2048Store().clearGameState,
  },
}
</script>

<template>
  <!-- eslint-disable vue/no-unused-refs -->
  <div>
    <div class="panel">
      <div class="wrapper">
        <div class="above-game">
          <div class="scores-container">
            <div
              ref="scoreContainer"
              class="score-container"
            >
              0
            </div>
            <div
              ref="bestContainer"
              class="best-container"
            >
              0
            </div>
          </div>
          <a
            ref="restartButton"
            class="restart-button"
          >新游戏</a>
        </div>
        <div
          ref="gameContainer"
          class="game-container"
        >
          <div
            ref="messageContainer"
            class="game-message"
          >
            <p />
            <div class="lower">
              <a
                ref="keepPlayingButton"
                class="keep-playing-button"
              >继续挑战</a>
              <a
                ref="retryButton"
                class="retry-button"
              >重新开始</a>
            </div>
          </div>
          <div class="grid-container">
            <div
              v-for="item in 16"
              :key="item"
              class="grid-cell"
            />
          </div>
          <div
            ref="tileContainer"
            class="tile-container"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:math";
@use "./style/helpers" as *;
@use "./style/clear-sans" as *;

:deep(.panel) {

  $field-width: 50rem;
  $grid-spacing: 1.5rem;
  $grid-row-cells: 4;
  $tile-size: math.div($field-width - $grid-spacing * ($grid-row-cells + 1), $grid-row-cells);
  $tile-border-radius: .3rem;

  $mobile-threshold: $field-width + 2rem;

  $text-color: #776E65;
  $bright-text-color: #f9f6f2;

  $tile-color: #eee4da;
  $tile-gold-color: #edc22e;
  $tile-gold-glow-color: lighten($tile-gold-color, 15%);

  $game-container-margin-top: 4rem;
  $game-container-background: #bbada0;

  $transition-speed: 100ms;

  @include keyframes(move-up) {
    0% {
      top: 2.5rem;
      opacity: 1;
    }

    100% {
      top: -5rem;
      opacity: 0;
    }
  }

  .scores-container {
    display: flex;
    box-sizing: content-box;

    * + * {
      margin-left: .5rem;
    }
  }

  .score-container, .best-container {
    $height: 2.5rem;

    position: relative;
    display: inline-block;
    background: $game-container-background;
    padding: 1.5rem 2.5rem;
    font-size: $height;
    height: $height;
    line-height: $height + 2.2rem;
    font-weight: bold;
    border-radius: .3rem;
    color: white;
    text-align: center;
    box-sizing: content-box;

    &:after {
      position: absolute;
      width: 100%;
      top: 1rem;
      left: 0;
      text-transform: uppercase;
      font-size: 1.3rem;
      line-height: 1.3rem;
      text-align: center;
      color: $tile-color;
      box-sizing: content-box;
    }

    .score-addition {
      position: absolute;
      right: 3rem;
      color: red;
      font-size: $height;
      line-height: $height;
      font-weight: bold;
      color: rgba($text-color, .9);
      z-index: 100;
      box-sizing: content-box;
      @include animation(move-up 600ms ease-in);
      @include animation-fill-mode(both);
    }
  }

  .score-container:after {
    content: "分数";
    box-sizing: content-box;
  }

  .best-container:after {
    box-sizing: content-box;
    content: "最高分";
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.65;
  }

  a {
    color: $text-color;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  strong {
    &.important {
      text-transform: uppercase;
    }
  }

  hr {
    border: none;
    border-bottom: .1rem solid lighten($text-color, 40%);
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  .wrapper {
    font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
    font-size: 1.8rem;
    color: $text-color;
    width: $field-width;
    margin: 0 auto;
  }

  @include keyframes(fade-in) {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  // Styles for buttons
  @mixin button {
    display: inline-block;
    background: darken($game-container-background, 20%);
    border-radius: .3rem;
    padding: 0 2rem;
    text-decoration: none;
    color: $bright-text-color;
    height: 4rem;
    line-height: 4.2rem;
  }

  .game-container {
    margin-top: $game-container-margin-top;
    position: relative;
    padding: $grid-spacing;

    cursor: default;
    -webkit-touch-callout: none;
    -ms-touch-callout: none;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    -ms-touch-action: none;
    touch-action: none;

    background: $game-container-background;
    border-radius: $tile-border-radius * 2;
    width: $field-width;
    height: $field-width;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    .game-message {
      display: none;

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba($tile-color, .5);
      z-index: 100;

      text-align: center;

      p {
        font-size: 6rem;
        font-weight: bold;
        height: 6rem;
        line-height: 6rem;
        margin-top: 22.2rem;
        // height: $field-width;
        // line-height: $field-width;
      }

      .lower {
        display: block;
        margin-top: 5.9rem;
      }

      a {
        @include button;
        margin-left: .9rem;
        // margin-top: 5.9rem;

        &.keep-playing-button {
          display: none;
        }
      }

      @include animation(fade-in 800ms ease $transition-speed * 12);
      @include animation-fill-mode(both);

      &.game-won {
        background: rgba($tile-gold-color, .5);
        color: $bright-text-color;

        a.keep-playing-button {
          display: inline-block;
        }
      }

      &.game-won, &.game-over {
        display: block;
      }
    }
  }

  .grid-container {
    position: absolute;
    z-index: 1;
  }

  .grid-cell {
    width: $tile-size;
    height: $tile-size;
    margin-right: $grid-spacing;
    margin-bottom: $grid-spacing;
    float: left;

    border-radius: $tile-border-radius;

    background: rgba($tile-color, .35);

    &:nth-child(#{$grid-row-cells}n) {
      margin-right: 0;
    }

    &:nth-last-child(-n + #{$grid-row-cells}) {
      margin-bottom: 0;
    }
  }

  .tile-container {
    position: absolute;
    z-index: 2;
  }

  .tile {
    &, .tile-inner {
      width: ceil($tile-size);
      height: ceil($tile-size);
      line-height: ceil($tile-size);
    }

    // Build position classes
    @for $x from 1 through $grid-row-cells {
      @for $y from 1 through $grid-row-cells {
        &.tile-position-#{$x}-#{$y} {
          $xPos: floor(($tile-size + $grid-spacing) * ($x - 1));
          $yPos: floor(($tile-size + $grid-spacing) * ($y - 1));
          @include transform(translate($xPos, $yPos));
        }
      }
    }
  }

  .tile {
    position: absolute; // Makes transforms relative to the top-left corner

    .tile-inner {
      border-radius: $tile-border-radius;

      background: $tile-color;
      text-align: center;
      font-weight: bold;
      z-index: 10;

      font-size: 5.5rem;
    }

    // Movement transition
    @include transition($transition-speed ease-in-out);
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    transition-property: transform;

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

    // Build tile colors
    @while $exponent <= $limit {
      $power: pow($base, $exponent);

      &.tile-#{$power} .tile-inner {
        // Calculate base background color
        $gold-percent: math.div($exponent - 1, $limit - 1) * 100%;
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
          box-shadow: 0 0 3rem 1rem rgba($tile-gold-glow-color, $glow-opacity / 1.8),
          inset 0 0 0 .1rem rgba(white, $glow-opacity / 3);
        }

        // Adjust font size for bigger numbers
        @if $power >= 100 and $power < 1000 {
          font-size: 4.5rem;

          // Media queries placed here to avoid carrying over the rest of the logic
          @include smaller($mobile-threshold) {
            font-size: 2.5rem;
          }
        } @else if $power >= 1000 {
          font-size: 3.5rem;

          @include smaller($mobile-threshold) {
            font-size: 1.5rem;
          }
        }
      }

      $exponent: $exponent + 1;
    }

    // Super tiles (above 2048)
    &.tile-super .tile-inner {
      color: $bright-text-color;
      background: mix(#333, $tile-gold-color, 95%);

      font-size: 3rem;

      @include smaller($mobile-threshold) {
        font-size: 1rem;
      }
    }
  }

  @include keyframes(appear) {
    0% {
      opacity: 0;
      @include transform(scale(0));
    }

    100% {
      opacity: 1;
      @include transform(scale(1));
    }
  }

  .tile-new .tile-inner {
    @include animation(appear 200ms ease $transition-speed);
    @include animation-fill-mode(backwards);
  }

  @include keyframes(pop) {
    0% {
      @include transform(scale(0));
    }

    50% {
      @include transform(scale(1.2));
    }

    100% {
      @include transform(scale(1));
    }
  }

  .tile-merged .tile-inner {
    z-index: 20;
    @include animation(pop 200ms ease $transition-speed);
    @include animation-fill-mode(backwards);
  }

  .above-game {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }

  .game-intro {
    float: left;
    line-height: 4.2rem;
    margin-bottom: 0;
  }

  .restart-button {
    @include button;
    display: block;
    text-align: center;
    float: right;
  }

  .game-explanation {
    margin-top: 5rem;
  }

  @include smaller($mobile-threshold) {
    // Redefine variables for smaller screens
    $field-width: 28rem;
    $grid-spacing: 1rem;
    $grid-row-cells: 4;
    $tile-size: math.div($field-width - $grid-spacing * ($grid-row-cells + 1), $grid-row-cells);
    $tile-border-radius: .3rem;
    $game-container-margin-top: 1.7rem;

    .wrapper {
      font-size: 1.5rem;
      width: $field-width;
      margin: 0 auto;
    }

    .score-container, .best-container {
      margin-top: 0;
      padding: 1.5rem 1rem;
      min-width: 4rem;
    }

    // Show intro and restart button side by side
    .game-intro {
      width: 55%;
      display: block;
      box-sizing: border-box;
      line-height: 1.65;
    }

    .restart-button {
      width: 25%;
      padding: 0;
      display: block;
      box-sizing: border-box;
      margin-top: .2rem;
    }

    // Render the game field at the right width
    .game-container {
      margin-top: $game-container-margin-top;
      position: relative;
      padding: $grid-spacing;

      cursor: default;
      -webkit-touch-callout: none;
      -ms-touch-callout: none;

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;

      -ms-touch-action: none;
      touch-action: none;

      background: $game-container-background;
      border-radius: $tile-border-radius * 2;
      width: $field-width;
      height: $field-width;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      .game-message {
        display: none;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba($tile-color, .5);
        z-index: 100;

        text-align: center;

        p {
          font-size: 6rem;
          font-weight: bold;
          height: 6rem;
          line-height: 6rem;
          margin-top: 22.2rem;
          // height: $field-width;
          // line-height: $field-width;
        }

        .lower {
          display: block;
          margin-top: 5.9rem;
        }

        a {
          @include button;
          margin-left: .9rem;
          // margin-top: 5.9rem;

          &.keep-playing-button {
            display: none;
          }
        }

        @include animation(fade-in 800ms ease $transition-speed * 12);
        @include animation-fill-mode(both);

        &.game-won {
          background: rgba($tile-gold-color, .5);
          color: $bright-text-color;

          a.keep-playing-button {
            display: inline-block;
          }
        }

        &.game-won, &.game-over {
          display: block;
        }
      }
    }

    .grid-container {
      position: absolute;
      z-index: 1;
    }

    .grid-cell {
      width: $tile-size;
      height: $tile-size;
      margin-right: $grid-spacing;
      margin-bottom: $grid-spacing;
      float: left;

      border-radius: $tile-border-radius;

      background: rgba($tile-color, .35);

      &:nth-child(#{$grid-row-cells}n) {
        margin-right: 0;
      }

      &:nth-last-child(-n + #{$grid-row-cells}) {
        margin-bottom: 0;
      }
    }

    .tile-container {
      position: absolute;
      z-index: 2;
    }

    .tile {
      &, .tile-inner {
        width: ceil($tile-size);
        height: ceil($tile-size);
        line-height: ceil($tile-size);
      }

      // Build position classes
      @for $x from 1 through $grid-row-cells {
        @for $y from 1 through $grid-row-cells {
          &.tile-position-#{$x}-#{$y} {
            $xPos: floor(($tile-size + $grid-spacing) * ($x - 1));
            $yPos: floor(($tile-size + $grid-spacing) * ($y - 1));
            @include transform(translate($xPos, $yPos));
          }
        }
      }
    }

    // Rest of the font-size adjustments in the tile class
    .tile .tile-inner {
      font-size: 3.5rem;
    }

    .game-message {
      p {
        font-size: 3rem !important;
        height: 3rem !important;
        line-height: 3rem !important;
        margin-top: 9rem !important;
      }

      .lower {
        margin-top: 3rem !important;
      }
    }
  }
}
</style>
