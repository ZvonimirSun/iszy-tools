<template>
  <container>
    <Tabs>
      <TabPane key="common" tab="通用">
        <RandomNumber/>
      </TabPane>
      <TabPane key="advanced" tab="高级"></TabPane>
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
    RandomNumber: defineAsyncComponent(() => import('@/views/others/random/randomNumber.vue')),
    Container,
    Tabs,
    TabPane
  }
})
</script>

<style scoped lang="scss">
</style>
