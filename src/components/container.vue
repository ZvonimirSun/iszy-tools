<script setup>
defineProps({
  fullScreenStatus: { type: Boolean, default: false },
})
const emit = defineEmits(['fullScreen'])
const route = useRoute()

function fullScreen() {
  emit('fullScreen')
}
</script>

<template>
  <div
    class="containerBase"
    :class="{
      'full-screen': fullScreenStatus,
    }"
  >
    <div class="containerAll">
      <div class="containerTitle">
        <div class="typeName">
          <span>{{ route.meta?.title || route.name }}</span>
          <span
            class="i-icon-park-outline-full-screen fullScreen"
            title="全屏"
            @click="fullScreen"
          />
        </div>
      </div>
      <div class="main">
        <slot />
        <el-backtop
          :visibility-height="100"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.containerBase {
  overflow: auto;
  height: 100%;
}

.containerAll {
  height: calc(100% - 2.4rem);
  margin-top: 2.4rem;
  background: var(--el-fill-color-lighter);
  box-shadow: var(--el-box-shadow-light);
  border-radius: var(--el-border-radius-round);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .containerTitle {
    margin-top: -1.7rem;

    .typeName {
      margin-left: 3rem;
      padding: 0 1.6rem;

      height: 3.2rem;
      display: inline-flex;
      align-items: center;

      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2.4rem;

      color: var(--el-color-white);
      background-color: var(--el-color-primary);
      box-shadow: var(--el-box-shadow-light);
      border-radius: var(--el-border-radius-middle);

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
    background: var(--el-fill-color-lighter);
    flex: 1;
    overflow-y: auto;
    border-radius: .8rem;
    position: relative;
  }
}

.full-screen {
  .containerAll {
    height: 100%;
    margin: 0;

    .containerTitle {
      display: none;
    }

    .main {
      padding: 0;
      border-radius: 0;
    }
  }
}
</style>
