<script setup lang="ts">
import config from '@/config'
import { useGlobalStore } from '@/stores/global'
import { deleteParam, hasParam, setParam } from '@/utils/hashHandler.js'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import { useRegisterSW } from 'virtual:pwa-register/vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()
const route = useRoute()
const userStore = useUserStore()

const fullScreenStatus = ref(false)

onMounted(() => {
  window.addEventListener('keydown', fullScreenListener, false)
})

watch(offlineReady, (val) => {
  if (val) {
    console.log('离线使用已初步准备好~')
  }
})

watch(needRefresh, (val) => {
  if (val) {
    triggerUpdate()
  }
})

watch(() => route.path, () => {
  fullScreenStatus.value = hasParam('fullScreen')
})

async function triggerUpdate() {
  ElMessageBox.confirm('有更新内容，请点击 <strong>重载</strong> 更新~', '更新', {
    confirmButtonText: '重载',
    cancelButtonText: '取消',
    type: 'info',
    dangerouslyUseHTMLString: true,
  }).then(() => {
    updateServiceWorker()
  })
  window.addEventListener('beforeunload', () => {
    updateServiceWorker(false)
  })
}

function fullScreen() {
  if (fullScreenStatus.value && hasParam('fullScreen')) {
    deleteParam('fullScreen')
  }
  else if (!fullScreenStatus.value && !hasParam('fullScreen')) {
    setParam('fullScreen')
  }
  fullScreenStatus.value = !fullScreenStatus.value
  if (fullScreenStatus.value) {
    ElMessage.info('长按Esc以退出全屏')
  }
}

let showInfo = false
function fullScreenListener(e: KeyboardEvent) {
  if (fullScreenStatus.value) {
    if (e.key === 'Escape') {
      if (!e.repeat) {
        if (!showInfo) {
          showInfo = true
          setTimeout(() => {
            showInfo = false
          }, 3000)
          ElMessage.info('长按Esc以退出全屏')
        }
      }
      else {
        fullScreen()
      }
    }
  }
}
</script>

<template>
  <div class="global-wrapper">
    <el-config-provider
      :locale="zhCN"
    >
      <el-container class="main">
        <el-button
          type="primary"
          class="dark-mode-trigger"
          circle
          @click="useGlobalStore().toggleTheme"
        >
          <i
            class="i-icon-park-outline-sun-one dark:i-icon-park-outline-moon"
          />
        </el-button>
        <el-header
          v-show="!fullScreenStatus"
          class="main-header"
          :class="{ 'in-tool': route.meta?.type === 'tool' }"
        >
          <div class="header">
            <router-link to="/">
              {{ config.zhName }}
            </router-link>
          </div>
          <div class="desc">
            <span
              v-if="route.path === '/'"
            >一个轻量的工具集合</span>
            <router-link v-else to="/">
              <span class="i-icon-park-outline:return" />返回首页
            </router-link>
            ·
            <span
              class="i-icon-park-outline-user"
            />
            <router-link v-if="userStore.profile.nickName" to="/settings">
              {{ userStore.profile.nickName }}
            </router-link>
            <router-link v-else to="/login">
              未登录
            </router-link>
          </div>
        </el-header>
        <el-main
          class="main-content"
          :class="{ 'full-screen': fullScreenStatus }"
        >
          <div
            v-if="route.meta?.type !== 'tool'"
            h-full w-full
          >
            <el-scrollbar>
              <router-view />
            </el-scrollbar>
          </div>
          <Container
            v-else
            :full-screen-status="fullScreenStatus"
            @full-screen="fullScreen"
          >
            <router-view />
          </Container>
        </el-main>
        <el-footer
          v-show="!fullScreenStatus && route.meta?.type !== 'tool'"
          class="main-footer"
        >
          <span>© {{ new Date().getFullYear().toString() }}&nbsp;</span>
          <a
            href="https://www.iszy.cc"
            target="_blank"
          >
            随遇而安Blog
          </a>
          <br>
          <a
            href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
            target="_blank"
          >
            苏ICP备18047890号-2
          </a>
        </el-footer>
      </el-container>
    </el-config-provider>
  </div>
</template>

<style lang="scss">
@use "styles/main" as *;
</style>

<style lang="scss" scoped>
.global-wrapper {
  background: var(--el-bg-color-page);
  position: relative;
  height: 100%;
  width: 100%;
}

.main {
  height: 100%;
  width: 100%;
  overflow: hidden;

  &-header {
    padding: 1.6rem 0 .8rem;
    text-align: center;
    height: unset;
    line-height: unset;

    &.in-tool {
      padding: .8rem 0 0;
      height: 5.8rem;

      .header {
        font-size: var(--el-font-size-large);
        line-height: 1.5;
      }

      .desc {
        margin-top: 0;
      }
    }

    .header {
      line-height: 1.7;
      font-size: var(--el-font-size-extra-large);
      font-weight: 700;

      a {
        color: var(--el-text-color-primary) !important;
      }
    }

    .desc {
      font-size: var(--el-font-size-base);
      line-height: 1.3;
      color: var(--el-text-color-secondary);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .4rem;

      a {
        color: var(--el-color-primary) !important;
      }
    }
  }

  &-content {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.6rem 0;
    overflow-y: auto;
    flex: 1;

    &.full-screen {
      padding: 0;
    }
  }

  &-footer {
    font-size: var(--el-font-size-base);
    line-height: 1.5;
    padding: 0.8rem 0;

    height: 6rem;
    text-align: center;

    * {
      height: 2.2rem;
    }
  }
}

.dark-mode-trigger {
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
}
</style>
