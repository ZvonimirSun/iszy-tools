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
          @click="toggleDark()"
        >
          <i
            class="dark:i-icon-park-outline-moon i-icon-park-outline-sun-one"
          />
        </el-button>
        <el-header
          v-show="!fullScreenStatus"
          class="main-header"
        >
          <div class="header">
            <router-link to="/">
              ISZY工具集合
            </router-link>
          </div>
          <div
            v-if="route.path === '/'"
            class="desc"
          >
            一个轻量的工具集合
            <template v-if="_user.profile.nickName">
              ·
              <router-link to="/settings">
                {{ _user.profile.nickName }}
              </router-link>
            </template>
          </div>
          <div
            v-else
            class="desc"
          >
            <router-link to="/">
              <span class="i-icon-park-outline:return" />返回首页
            </router-link>
            <template v-if="_user.profile.nickName">
              ·
              <router-link to="/settings">
                {{ _user.profile.nickName }}
              </router-link>
            </template>
          </div>
        </el-header>
        <el-main
          class="main-content"
          :class="{'full-screen': fullScreenStatus}"
        >
          <el-backtop
            :visibility-height="100"
          />
          <div
            v-if="route.meta?.type !== 'tool'"
            class="container"
          >
            <router-view />
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
          v-show="!fullScreenStatus"
          class="main-footer"
        >
          <span>© {{ year }}&nbsp;</span>
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

<script setup lang="ts">
import asyncLoad from '@/utils/asyncLoad.js'
import { deleteParam, setParam, hasParam } from '@/utils/hashHandler.js'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import type { Ref } from 'vue'
import { useUserStore } from '@/stores/user'
import zhCN from 'element-plus/dist/locale/zh-cn.mjs'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const {
  offlineReady,
  needRefresh,
  updateServiceWorker
} = useRegisterSW()
const route = useRoute()
const _user = useUserStore()._user

const fullScreenStatus: Ref<boolean> = ref(false)

const year = ref('2021')

const now = new Date().getFullYear().toString()

if (now !== year.value) {
  year.value += ` - ${now}`
}

let showInfo = false

onMounted(() => {
  asyncLoad('https://fonts.cdn.iszy.xyz/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif+SC:wght@300;400;700&display=swap', 'style')
  window.addEventListener('keydown', function (e: KeyboardEvent) {
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
        } else {
          fullScreen()
        }
      }
    }
  }, false)
})

function fullScreen () {
  if (fullScreenStatus.value && hasParam('fullScreen')) {
    deleteParam('fullScreen')
  } else if (!fullScreenStatus.value && !hasParam('fullScreen')) {
    setParam('fullScreen')
  }
  fullScreenStatus.value = !fullScreenStatus.value
  if (fullScreenStatus.value) {
    ElMessage.info('长按Esc以退出全屏')
  }
}

watch(offlineReady, function (val) {
  if (val) {
    ElMessage.success('离线使用已准备好~')
  }
})

watch(needRefresh, function (val) {
  if (val) {
    ElMessageBox.confirm('存在新内容，请点击 重载 更新~', '更新', {
      confirmButtonText: '重载',
      cancelButtonText: '取消',
      type: 'info'
    }).then(() => {
      updateServiceWorker()
    })
  }
})

watch(() => route.path, () => {
  fullScreenStatus.value = hasParam('fullScreen')
})
</script>

<style lang="scss">
@use "styles/main" as *;
</style>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

.global-wrapper {
  background: var(--el-bg-color-page);
  position: relative;
  height: 100%;
  width: 100%;
}

.main {
  height: 100%;
  width: 100%;
  font-size: 1.4rem;
  overflow: hidden;

  &-header {
    padding: 1.6rem 0 .8rem;
    text-align: center;
    height: 8.4rem;
    line-height: unset;

    .header {
      height: 3.2rem;
      line-height: 3.2rem;
      font-size: 2.4rem;
      font-weight: 600;

      a {
        color: var(--el-text-color-primary) !important;
      }
    }

    .desc {
      height: 2.2rem;
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin-top: .8rem;
      color: var(--el-text-color-secondary);

      a {
        color: var(--el-color-primary) !important;
      }
    }
  }

  &-content {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.6rem 1.6rem;
    overflow-y: auto;
    flex: 1;

    &.full-screen {
      padding: 0;
    }
  }

  &-footer {
    font-size: 1.4rem;
    line-height: 2.2rem;
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
