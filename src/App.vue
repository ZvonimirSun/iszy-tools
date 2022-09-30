<template>
  <a-config-provider :locale="zhCN">
    <a-layout>
      <a-layout-header v-show="!fullScreenStatus">
        <div class="header">
          <router-link to="/">
            ISZY工具集合
          </router-link>
        </div>
        <div
          v-if="route.path === '/'"
          class="desc"
        >
          一个轻量的工具集合<template v-if="_user.profile.nickName">
            · <router-link to="/settings">
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
          </router-link><template v-if="_user.profile.nickName">
            · <router-link to="/settings">
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
          :full-screen-status="fullScreenStatus"
          @full-screen="fullScreen"
        >
          <router-view />
        </Container>
      </a-layout-content>
      <a-layout-footer v-show="!fullScreenStatus">
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
  </a-config-provider>
</template>

<script setup lang="ts">
import asyncLoad from '@/utils/asyncLoad.js'
import { deleteParam, setParam, hasParam } from '@/utils/hashHandler.js'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import Modal from 'ant-design-vue/es/modal'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import type { MessageApi } from 'ant-design-vue/es/message'
import type { ComponentPublicInstance } from 'vue'
import 'ant-design-vue/es/modal/style/index.js'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker
} = useRegisterSW()
const store = useStore()
const route = useRoute()
const _user = computed(() => store.state.user._user)
const $msg: MessageApi = inject('$msg')

const fullScreenStatus = ref(false)
const view = ref<ComponentPublicInstance >()

const year = ref('2021')

const now = new Date().getFullYear().toString()

if (now !== year.value) {
  year.value += ` - ${now}`
}

onMounted(() => {
  asyncLoad('https://fonts.cdn.iszy.xyz/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Serif+SC:wght@300;400;700&display=swap', 'style')
})

function fullScreen () {
  if (fullScreenStatus.value && hasParam('fullScreen')) {
    deleteParam('fullScreen')
  } else if (!fullScreenStatus.value && !hasParam('fullScreen')) {
    setParam('fullScreen')
  }
  fullScreenStatus.value = !fullScreenStatus.value
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
