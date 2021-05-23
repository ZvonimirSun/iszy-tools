<template>
  <container>
    <Title :level="3">访问统计</Title>
    <Form>
      <Item>
        <Checkbox :checked="settings.showMost" @change="triggerMost">最常访问</Checkbox>
        <Checkbox :checked="settings.showRecent" @change="triggerRecent">最近访问</Checkbox>
      </Item>
    </Form>
    <Divider/>
    <Title :level="3">其他设置</Title>
    <Form>
      <Item>
        <Checkbox :checked="settings.showSearch" @change="triggerSearch">显示搜索</Checkbox>
        <Checkbox :checked="settings.showType" @change="triggerType">显示分类</Checkbox>
        <Checkbox :checked="settings.openInNewTab" @change="triggerNewTab">新标签页打开工具</Checkbox>
      </Item>
    </Form>
  </container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Container from '@/components/container.vue'
import { Typography, Form, Divider, Checkbox } from 'ant-design-vue'

const { mapState, mapActions } = createNamespacedHelpers('settings')
const { Item } = Form
const { Title } = Typography

export default {
  name: '设置',
  components: { Container, Form, Divider, Checkbox, Item, Title },
  computed: {
    ...mapState({
      settings: state => state.settings
    })
  },
  methods: {
    ...mapActions([
      'triggerMost',
      'triggerRecent',

      'triggerSearch',
      'triggerType',
      'triggerNewTab'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>
