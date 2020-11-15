<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-variant-numeric: tabular-nums;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: #333333;
  height: 100%;
}

/*滚动条样式*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: rgba(249, 249, 249, 0.98);
}

/*定义滚动条轨道 内阴影+圆角*/

::-webkit-scrollbar-track {
  width: 10px;
  box-shadow: inset 0 0 6px rgba(248, 255, 111, 0);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0);
}

/*定义滑块 内阴影+圆角*/

::-webkit-scrollbar-thumb {
  z-index: 100;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(246, 246, 246, 0.76);
  background-color: rgb(210, 212, 214);
}

body {
  margin: 0
}
</style>
