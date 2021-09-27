<template>
  <container>
    <div class="container">
      <Tabs v-model:activeKey="activeKey" type="card" class="totalTab">
        <TabPane key="home" tab="首页">
          <Upload @success="success"/>
        </TabPane>
        <TabPane key="uploaded" tab="我的上传">
          <ImgList/>
        </TabPane>
        <TabPane key="settings" tab="设置">
          <Settings/>
        </TabPane>
      </Tabs>
    </div>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { defineAsyncComponent } from 'vue'
import { Tabs } from 'ant-design-vue'

const { TabPane } = Tabs

export default {
  name: '极简图床',
  components: {
    Container,
    ImgList: defineAsyncComponent(() => import('./child/imgList.vue')),
    Upload: defineAsyncComponent(() => import('./child/upload.vue')),
    Settings: defineAsyncComponent(() => import('./child/settings.vue')),
    Tabs,
    TabPane
  },
  data: () => ({
    activeKey: 'home'
  }),
  methods: {
    success () {
      this.activeKey = 'uploaded'
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;

  .totalTab {
    height: 100%;
  }
}

::v-deep(.ant-tabs) {
  width: 100%;

  .ant-tabs-bar {
    height: 4rem !important;
    margin-bottom: .8rem;

    .ant-tabs-tab {
      height: 4rem !important;
      line-height: 4rem !important;
    }
  }

  .ant-tabs-content {
    width: 100%;
    height: calc(100% - 4.8rem);

    .ant-tabs-tabpane {
      width: 100%;
      height: 100%;
      overflow: auto;

      &.ant-tabs-tabpane-inactive {
        display: none;
      }
    }
  }
}
</style>
