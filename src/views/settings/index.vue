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
        <Checkbox :checked="settings.showType" @change="triggerType">显示分类</Checkbox>
        <Checkbox :checked="settings.openInNewTab" @change="triggerNewTab">新标签页打开工具</Checkbox>
      </Item>
    </Form>
  </container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Container from '@/components/container.vue'
import { Typography, Form, Divider, Checkbox } from 'ant-design-vue'

const { Item } = Form
const { Title } = Typography

export default {
  name: '设置',
  components: { Container, Form, Divider, Checkbox, Item, Title },
  computed: {
    ...mapState({
      settings: state => state.settings.settings
    })
  },
  methods: {
    ...mapActions({
      triggerMost: 'settings/triggerMost',
      triggerRecent: 'settings/triggerRecent',
      triggerType: 'settings/triggerType',
      triggerNewTab: 'settings/triggerNewTab'
    })
  }
}
</script>

<style scoped lang="scss">

</style>
