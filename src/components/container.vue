<template>
  <div class="containerAll">
    <div class="containerTitle">
      <div class="typeName">
        <span>{{ name || ($route.meta || {}).title || $route.name }}</span>
        <FullScreen class="fullScreen" title="全屏" @click="fullScreen" theme="outline"/>
      </div>
    </div>
    <div class="main" ref="container">
      <slot></slot>
      <BackTop :target="()=>$refs.container" :visibilityHeight="100"/>
    </div>
  </div>
</template>
<script>
import { BackTop } from 'ant-design-vue'
import toggleFullscreen from '@/utils/toggleFullscreen.js'
import { FullScreen } from '@icon-park/vue-next'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'container',
  props: {
    name: String
  },
  components: {
    FullScreen, BackTop
  },
  methods: {
    fullScreen () {
      toggleFullscreen.bind(this)(this.$refs.container)
    }
  }
})
</script>

<style scoped lang="scss">
.containerAll {
  height: calc(100% - 2.4rem);
  margin-top: 2.4rem;
  background: #fff;
  box-shadow: 0 0.8rem 1rem rgb(36 159 253 / 30%);
  border-radius: .8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .containerTitle {
    margin-top: -1.6rem;

    .typeName {
      margin-left: 3rem;
      padding: .5rem 1.6rem;

      height: 3.2rem;
      display: inline-flex;
      align-items: center;

      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2.4rem;

      color: #fff;
      background-color: #16b0f6;
      box-shadow: 0 0.8rem 1rem #16B0F64D;
      border-radius: .8rem;

      .i-icon {
        font-size: 2.4rem;

        & + * {
          margin-left: .5rem;
        }
      }

      * + .i-icon {
        margin-left: .5rem;
      }

      .fullScreen {
        cursor: pointer;

        &.i-icon {
          font-size: 1.8rem;
        }
      }
    }
  }

  .main {
    padding: .8rem;
    background: #fff;
    flex: 1;
    overflow-y: auto;
    border-radius: .8rem;
  }
}
</style>
