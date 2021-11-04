<template>
  <container>
    <Tabs>
      <TabPane key="common" tab="随机数字">
        <RandomNumber/>
      </TabPane>
      <TabPane key="advanced" tab="随机列表">
        <RandomList/>
      </TabPane>
    </Tabs>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { Tabs } from 'ant-design-vue'
import { defineAsyncComponent, defineComponent } from 'vue'

const { TabPane } = Tabs

export default defineComponent({
  name: 'random',
  components: {
    RandomNumber: defineAsyncComponent(() => import('./randomNumber.vue')),
    RandomList: defineAsyncComponent(() => import('./randomList.vue')),
    Container,
    Tabs,
    TabPane
  }
})
</script>

<style scoped lang="scss">
</style>
