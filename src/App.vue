<template>
  <a-config-provider :locale="locale">
    <div class="container">
      <a-back-top/>
      <div class="panel">
        <div class="top">
          <div class="header">{{ ($route.meta || {}).title || $route.name  }}</div>
          <div class="desc">
            <span v-if="$route.path === '/'">一个轻量的工具集合</span>
            <router-link to="/" v-else>返回首页</router-link>
          </div>
        </div>
        <div class="main">
          <router-view/>
        </div>
      </div>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'

export default {
  data: () => ({
    locale: zhCN
  })
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-variant-numeric: tabular-nums;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
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

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;

  .panel {
    max-width: 75rem;
    position: relative;
    margin: 0 auto;
    padding: 0 1.25rem 1.25rem;

    .top {
      padding-top: 2rem;
      width: 100%;
      text-align: center;

      .header {
        height: 44px;
        line-height: 44px;
        font-size: 33px;
        color: #333333;
        font-weight: 600;
      }

      .desc {
        font-size: 14px;
        margin-top: 12px;
        margin-bottom: 40px;
        color: #999999;
      }
    }

    .main {
      width: 100%;
    }
  }
}
</style>
