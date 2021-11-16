<template>
  <config-provider :locale="locale"  :getPopupContainer="getPopupContainer">
    <Layout>
      <Header>
        <div class="header">
          <router-link to="/">ISZY工具集合</router-link>
        </div>
        <div class="desc" v-if="$route.path === '/'">一个轻量的工具集合<template v-if="nickName"> · <router-link to="/settings">{{nickName}}</router-link></template></div>
        <div class="desc" v-else><router-link to="/"><return theme="outline"/>返回首页</router-link><template v-if="nickName"> · <router-link to="/settings">{{nickName}}</router-link></template></div>
      </Header>
      <Content ref="view">
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
import { Layout, ConfigProvider, BackTop, Typography, Modal } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { Return } from '@icon-park/vue-next'
import { createNamespacedHelpers } from 'vuex'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker
} = useRegisterSW()
const { Header, Content, Footer } = Layout
const { Link } = Typography
const { mapState, mapActions } = createNamespacedHelpers('user')

export default defineComponent({
  data: () => ({
    locale: zhCN,
    offlineReady,
    needRefresh,

    nickName: undefined
  }),
  components: { Layout, Header, Content, Footer, ConfigProvider, BackTop, Link, Return },
  computed: {
    ...mapState(['token'])
  },
  watch: {
    offlineReady: function (val) {
      if (val) {
        this.$msg.success('离线使用已准备好~')
      }
    },
    needRefresh: function (val) {
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
    },
    token: {
      handler: async function (val) {
        if (!val) {
          this.nickName = undefined
        } else {
          this.nickName = ((await this.getProfiles()) || {}).nickName
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions(['getProfiles']),
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
    max-width: 180rem;
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
