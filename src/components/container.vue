<template>
  <div
    ref="container"
    class="containerBase"
  >
    <div class="containerAll">
      <div class="containerTitle">
        <div class="typeName">
          <span>{{ name || route.meta?.title || route.name }}</span>
          <span
            v-if="fullScreenStatus"
            class="i-icon-park-outline-off-screen fullScreen"
            title="取消全屏"
            @click="fullScreen"
          />
          <span
            v-else
            class="i-icon-park-outline-full-screen fullScreen"
            title="全屏"
            @click="fullScreen"
          />
        </div>
      </div>
      <div class="main">
        <slot />
        <a-back-top
          :target="()=>$refs.container"
          :visibility-height="100"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-undef
const emit = defineEmits(['fullScreen'])
const route = useRoute()

defineProps({
  fullScreenStatus: { type: Boolean, default: false },
  name: { type: String, default: '' }
})

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

      [class^="i-"] {
        font-size: 2.4rem;

        & + * {
          margin-left: .5rem;
        }
      }

      * + [class^="i-"] {
        margin-left: .5rem;
      }

      .fullScreen {
        cursor: pointer;

        &[class^="i-"] {
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
    position: relative;
  }
}
</style>
