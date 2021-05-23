<template>
  <config-provider :locale="locale">
    <BackTop/>
    <layout>
      <Header>
        <div class="header">
          <router-link to="/">ISZY工具集合</router-link>
        </div>
        <div class="desc">一个轻量的工具集合</div>
      </Header>
      <Content>
        <router-view/>
      </Content>
      <Footer>
        <span>© 2021&nbsp;</span>
        <Link href="https://www.iszy.cc" target="_blank">
          随遇而安Blog
        </Link>
        <Link href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">
          苏ICP备18047890号-2
        </Link>
      </Footer>
    </layout>
  </config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { Layout, ConfigProvider, BackTop, Typography } from 'ant-design-vue'
const { Header, Content, Footer } = Layout
const { Link } = Typography

export default {
  data: () => ({
    locale: zhCN
  }),
  components: { Layout, Header, Content, Footer, ConfigProvider, BackTop, Link }
}
</script>

<style lang="scss">
@import "assets/css/main";
</style>

<style lang="scss" scoped>
.ant-layout {
  background: transparent;
  height: 100%;
  width: 100%;
  font-size: 14px;
  overflow: hidden;

  &-header, &-layout, &-footer {
    background: transparent;
  }

  &-header {
    padding: 2rem 0 24px;
    text-align: center;
    height: 134px;
    line-height: unset;

    .header {
      height: 46px;
      line-height: 46px;
      font-size: 38px;
      color: #333333;
      font-weight: 600;

      a {
        color: #333333;
      }
    }

    .desc {
      height: 22px;
      font-size: 14px;
      line-height: 22px;
      margin-top: 12px;
      color: #999999;
    }
  }

  &-content {
    max-width: 75rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.25rem;
    overflow-y: auto;
  }

  &-footer {
    height: 70px;
    text-align: center;
  }
}
</style>
