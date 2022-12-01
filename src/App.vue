<template>
  <a-config-provider :locale="zhCN">
    <a-layout v-if="route.meta?.type !== 'tool' || !fullScreenStatus">
      <a-layout-header>
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
      </a-layout-header>
      <a-layout-content ref="view">
        <a-back-top
          :target="()=>view.$el"
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
          @full-screen="fullScreen"
        >
          <router-view />
        </Container>
      </a-layout-content>
      <a-layout-footer>
        <span>© {{ year }}&nbsp;</span>
        <a-typography-link
          href="https://www.iszy.cc"
          target="_blank"
        >
          随遇而安Blog
        </a-typography-link>
        <br>
        <a-typography-link
          href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
          target="_blank"
        >
          苏ICP备18047890号-2
        </a-typography-link>
      </a-layout-footer>
    </a-layout>
    <router-view v-else />
  </a-config-provider>
</template>

<script setup lang="ts">
import asyncLoad from '@/utils/asyncLoad.js'
import { deleteParam, setParam, hasParam } from '@/utils/hashHandler.js'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import Modal from 'ant-design-vue/es/modal'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import type { ComponentPublicInstance, Ref } from 'vue'
import 'ant-design-vue/es/modal/style/index.js'
import { useUserStore } from '@/stores/user'
import $msg from 'ant-design-vue/es/message'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker
} = useRegisterSW()
const route = useRoute()
const _user = useUserStore()._user

const fullScreenStatus: Ref<boolean> = ref(false)
const view: Ref<ComponentPublicInstance> = ref() as Ref<ComponentPublicInstance>

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
            $msg.info('长按Esc以退出全屏')
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
    $msg.info('长按Esc以退出全屏')
  }
}

watch(offlineReady, function (val) {
  if (val) {
    $msg.success('离线使用已准备好~')
  }
})

watch(needRefresh, function (val) {
  if (val) {
    Modal.info({
      title: '存在新内容，请点击 重载 更新~',
      closable: true,
      okText: '重载',
      maskClosable: true,
      onOk () {
        updateServiceWorker()
      }
    })
  }
})

watch(() => route.path, () => {
  fullScreenStatus.value = hasParam('fullScreen')
})
</script>

<style lang="scss">
@import "styles/main";
</style>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

.ant-layout {
  background: transparent;
  height: 100%;
  width: 100%;
  font-size: 1.4rem;
  overflow: hidden;

  &-header, &-layout, &-footer {
    background: transparent;
  }

  &-header {
    padding: 1.6rem 0 .8rem;
    text-align: center;
    height: 8.4rem;
    line-height: unset;

    .header {
      height: 3.2rem;
      line-height: 3.2rem;
      font-size: 2.4rem;
      color: #333333;
      font-weight: 600;

      a {
        color: #333333;
      }
    }

    .desc {
      height: 2.2rem;
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin-top: .8rem;
      color: #999999;
    }
  }

  &-content {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.6rem 1.6rem;
    overflow-y: auto;
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
</style>
