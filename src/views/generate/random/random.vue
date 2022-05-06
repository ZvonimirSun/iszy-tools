<template>
  <Tabs>
    <TabPane
      key="common"
      tab="随机数字"
    >
      <RandomNumber />
    </TabPane>
    <TabPane
      key="advanced"
      tab="随机列表"
    >
      <RandomList />
    </TabPane>
  </Tabs>
</template>

<script>
import { Tabs } from 'ant-design-vue'

const { TabPane } = Tabs

export default defineComponent({
  name: 'RandomTool',
  components: {
    RandomNumber: defineAsyncComponent(() => import('./child/randomNumber.vue')),
    RandomList: defineAsyncComponent(() => import('./child/randomList.vue')),
    Tabs,
    TabPane
  }
})
</script>

<style scoped lang="scss">
</style>
