<template>
  <div class="containerAll">
    <div class="containerTitle">
      <Divider orientation="left">
          <span class="typeName">{{ name || ($route.meta || {}).title || $route.name }}&nbsp;
            <span class="fullScreen" title="全屏" @click="fullScreen"><FullScreen theme="outline"/></span>
          </span>
      </Divider>
    </div>
    <div class="main" ref="container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleFullscreen from '@/utils/toggleFullscreen.js'
import { Divider } from 'ant-design-vue'
import { FullScreen } from '@icon-park/vue-next'

export default {
  name: 'container',
  props: {
    name: String
  },
  components: {
    Divider,
    FullScreen
  },
  methods: {
    fullScreen () {
      toggleFullscreen.bind(this)(this.$refs.container)
    }
  }
}
</script>

<style scoped lang="scss">
.containerAll {
  height: calc(100% - 3.5rem);
  margin-top: 3.5rem;
  background: #fff;
  box-shadow: 0 0.8rem 1rem rgb(36 159 253 / 30%);
  border-radius: .8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .containerTitle {
    margin-top: -3.5rem;

    .typeName {
      font-size: 1.8rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      background-color: #16b0f6;
      padding: .48rem 1.28rem;
      color: #fff;
      box-shadow: 0 0.8rem 1rem rgb(36 159 253 / 30%);
      border-radius: .8rem;

      .i-icon {
        font-size: 2.4rem;

        .i-icon:first-child {
          margin-right: .5rem;
        }
      }

      .fullScreen {
        cursor: pointer;

        .i-icon {
          font-size: 1.8rem;
        }
      }
    }
  }

  .main {
    padding: 1.2rem;
    background: #fff;
    flex: 1;
    overflow-y: auto;
    border-radius: .8rem;
  }
}
</style>
