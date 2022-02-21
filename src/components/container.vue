<template>
  <div
    ref="container"
    class="containerBase"
  >
    <div class="containerAll">
      <div class="containerTitle">
        <div class="typeName">
          <span>{{ name || $route.meta?.title || $route.name }}</span>
          <OffScreen
            v-if="fullScreenStatus"
            class="fullScreen"
            title="取消全屏"
            theme="outline"
            @click="fullScreen"
          />
          <FullScreen
            v-else
            class="fullScreen"
            title="全屏"
            theme="outline"
            @click="fullScreen"
          />
        </div>
      </div>
      <div class="main">
        <slot />
        <BackTop
          :target="()=>$refs.container"
          :visibility-height="100"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { BackTop } from 'ant-design-vue'
import { FullScreen, OffScreen } from '@icon-park/vue-next'

// eslint-disable-next-line no-undef
const props = defineProps({
  name: { type: String, default: '' },
  fullScreenStatus: Boolean
})

// eslint-disable-next-line no-undef
const emit = defineEmits(['fullScreen'])

function fullScreen () {
  emit('fullScreen')
}
</script>

<style scoped lang="scss">
.containerBase {
  overflow: auto;
  height: 100%;
}

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
