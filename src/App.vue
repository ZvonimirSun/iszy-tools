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
          @click="useStyleStore().toggleTheme"
        >
          <i
            class="dark:i-icon-park-outline-moon i-icon-park-outline-sun-one"
          />
        </el-button>
        <el-header
          v-show="!fullScreenStatus"
          class="main-header"
          :class="{'in-tool': route.meta?.type === 'tool'}"
        >
          <div class="header">
            <router-link to="/">
              {{ config.zhName }}
            </router-link>
          </div>
          <div
            v-if="route.path === '/'"
            class="desc"
          >
            一个轻量的工具集合
            <template v-if="userStore.profile.nickName">
              ·
              <router-link to="/settings">
                {{ userStore.profile.nickName }}
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
            <template v-if="userStore.profile.nickName">
              ·
              <router-link to="/settings">
                {{ userStore.profile.nickName }}
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

<script setup lang="ts">
import { deleteParam, setParam, hasParam } from '@/utils/hashHandler.js'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import $axios from '@/plugins/Axios'
import config from '@/config'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker
} = useRegisterSW()
const route = useRoute()
const userStore = useUserStore()

const fullScreenStatus = ref(false)

onMounted(() => {
  window.addEventListener('keydown', fullScreenListener, false)
})

watch(offlineReady, function (val) {
  if (val) {
    console.log('离线使用已初步准备好~')
  }
})

watch(needRefresh, function (val) {
  if (val) {
    triggerUpdate()
  }
})

watch(() => route.path, () => {
  fullScreenStatus.value = hasParam('fullScreen')
})

async function triggerUpdate () {
  let updateInfoHtml = ''
  try {
    const text: string = await $axios.get('https://jsdelivr.cdn.iszy.xyz/gh/zvonimirsun/iszy-tools@deploy/CHANGELOG.md', {
      headers: {
        'X-BYPASS-CACHE': 1
      },
      params: {
        t: Date.now()
      }
    }).then((res) => {
      return res.data || ''
    })
    if (text) {
      const updateInfo = text.split('\n')
      updateInfoHtml = updateInfo.filter(item => item).map((item, index) => {
        return `<p>${index + 1}. ${item}</p>`
      }).join('')
    }
  } catch (_) {
    // ignore
  }
  ElMessageBox.confirm('有更新内容，请点击 <strong>重载</strong> 更新~' + (updateInfoHtml ? `<br><br><div style="max-height: 10rem;overflow: auto">${updateInfoHtml}</div>` : ''), '更新', {
    confirmButtonText: '重载',
    cancelButtonText: '取消',
    type: 'info',
    dangerouslyUseHTMLString: true
  }).then(() => {
    updateServiceWorker()
  })
}

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

let showInfo = false
function fullScreenListener (e: KeyboardEvent) {
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
}
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

    &.in-tool {
      padding: .8rem 0 0;
      height: 5.8rem;

      .header {
        font-size: 2rem;
        line-height: 2.8rem;
      }

      .desc {
        margin-top: 0;
      }
    }

    .header {
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
