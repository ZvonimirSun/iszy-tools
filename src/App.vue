<template>
  <a-config-provider :locale="locale">
    <a-back-top/>
    <a-layout>
      <a-layout-header>
        <div class="header">{{ ($route.meta || {}).title || $route.name }}</div>
        <div class="desc">
          <span v-if="$route.path === '/'">一个轻量的工具集合</span>
          <router-link to="/" v-else>返回首页</router-link>
        </div>
      </a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer>
        <span>© 2021&nbsp;</span>
        <a-typography-link href="https://www.iszy.cc" target="_blank">
          随遇而安
        </a-typography-link>
      </a-layout-footer>
    </a-layout>
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
  font-size: 14px;
  line-height: 22px;
  color: #333333;
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

html, body, #app {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.ant-layout {
  background: transparent;
  height: 100%;
  width: 100%;
  font-size: 14px;
  overflow: hidden;

  &-header, &-layout, &-footer {
    background: transparent;
  }

  &-header {
    padding: 2rem 0 24px;
    text-align: center;
    height: 134px;
    line-height: unset;

    .header {
      height: 46px;
      line-height: 46px;
      font-size: 38px;
      color: #333333;
      font-weight: 600;
    }

    .desc {
      height: 22px;
      font-size: 14px;
      line-height: 22px;
      margin-top: 12px;
      color: #999999;
    }
  }

  &-content {
    max-width: 75rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.25rem;
    overflow-y: auto;
  }

  &-footer {
    height: 70px;
    text-align: center;
  }
}
</style>
