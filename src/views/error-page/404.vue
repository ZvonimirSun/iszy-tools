<template>
  <div class="404-container">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/404_images/404_cloud.png" alt="404">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style lang="scss" scoped>
.pic-404 {
  position: relative;
  float: left;
  width: 100%;
  overflow: hidden;
  &__parent {
    width: 100%;
  }
  &__child {
    position: absolute;
    &.left {
      width: 8rem;
      top: 1.7rem;
      left: 22rem;
      opacity: 0;
      animation-name: cloudLeft;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      animation-delay: 1s;
    }
    &.mid {
      width: 4.6rem;
      top: 1rem;
      left: 42rem;
      opacity: 0;
      animation-name: cloudMid;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      animation-delay: 1.2s;
    }
    &.right {
      width: 6.2rem;
      top: 10rem;
      left: 50rem;
      opacity: 0;
      animation-name: cloudRight;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      animation-delay: 1s;
    }
    @keyframes cloudLeft {
      0% {
        top: 1.7rem;
        left: 22rem;
        opacity: 0;
      }
      20% {
        top: 3.3rem;
        left: 18.8rem;
        opacity: 1;
      }
      80% {
        top: 8.1rem;
        left: 9.2rem;
        opacity: 1;
      }
      100% {
        top: 9.7rem;
        left: 6rem;
        opacity: 0;
      }
    }
    @keyframes cloudMid {
      0% {
        top: 1rem;
        left: 42rem;
        opacity: 0;
      }
      20% {
        top: 4rem;
        left: 36rem;
        opacity: 1;
      }
      70% {
        top: 13rem;
        left: 18rem;
        opacity: 1;
      }
      100% {
        top: 16rem;
        left: 12rem;
        opacity: 0;
      }
    }
    @keyframes cloudRight {
      0% {
        top: 10rem;
        left: 50rem;
        opacity: 0;
      }
      20% {
        top: 12rem;
        left: 46rem;
        opacity: 1;
      }
      80% {
        top: 18rem;
        left: 34rem;
        opacity: 1;
      }
      100% {
        top: 20rem;
        left: 30rem;
        opacity: 0;
      }
    }
  }
}
</style>
