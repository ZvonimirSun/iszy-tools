<template>
  <config-provider :locale="locale"  :getPopupContainer="getPopupContainer">
    <Layout>
      <Header>
        <div class="header">
          <router-link to="/">ISZY工具集合</router-link>
        </div>
        <div class="desc">一个轻量的工具集合</div>
      </Header>
      <Content ref="view" :class="($route.meta || {}).layout?['layout-' + ($route.meta || {}).layout]:[]">
        <BackTop :target="()=>$refs.view.$el" :visibilityHeight="100"/>
        <router-view/>
      </Content>
      <Footer>
        <span>© 2021&nbsp;</span>
        <Link href="https://www.iszy.cc" target="_blank">
          随遇而安Blog
        </Link>
        <br/>
        <Link href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">
          苏ICP备18047890号-2
        </Link>
      </Footer>
    </Layout>
  </config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { Layout, ConfigProvider, BackTop, Typography, notification } from 'ant-design-vue'
import PwaReloadPrompt from '@/components/pwaReloadPrompt.vue'
import { h, defineComponent } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker
} = useRegisterSW()
const { Header, Content, Footer } = Layout
const { Link } = Typography
const notificationKey = 'pwaNotice'

export default defineComponent({
  data: () => ({
    locale: zhCN,
    offlineReady,
    needRefresh
  }),
  components: { Layout, Header, Content, Footer, ConfigProvider, BackTop, Link },
  watch: {
    offlineReady: function (val) {
      if (val) {
        notification.close(notificationKey)
        notification.success({
          key: notificationKey,
          message: '离线使用已准备好~',
          placement: 'bottomRight',
          description: h(PwaReloadPrompt, {
            onClose: () => {
              notification.close(notificationKey)
            }
          })
        })
      }
    },
    needRefresh: function (val) {
      if (val) {
        notification.close(notificationKey)
        notification.info({
          key: notificationKey,
          message: '存在新内容，请点击按钮重载更新~',
          placement: 'bottomRight',
          duration: null,
          description: h(PwaReloadPrompt, {
            onReload: () => updateServiceWorker(),
            onClose: () => {
              notification.close(notificationKey)
            },
            type: 'reload'
          })
        })
      }
    }
  },
  methods: {
    getPopupContainer (node) {
      if (node) {
        return node.parentNode
      }
      return document.body
    }
  }
})
</script>

<style lang="scss">
@import "styles/main";
</style>

<style lang="scss" scoped>
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
    padding: 3.2rem 0 2.4rem;
    text-align: center;
    height: 13.4rem;
    line-height: unset;

    .header {
      height: 4.6rem;
      line-height: 4.6rem;
      font-size: 3.8rem;
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
      margin-top: 1.2rem;
      color: #999999;
    }
  }

  &-content {
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem 1.6rem;
    overflow-y: auto;

    &.layout-wide {
      max-width: 180rem;
    }
  }

  &-footer {
    height: 7rem;
    text-align: center;
  }
}
</style>
