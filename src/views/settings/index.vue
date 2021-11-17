<template>
  <container>
    <template v-if="token">
      <Title :level="3">云端同步</Title>
      <Space>
        <Button type="primary" @click="uploadSettings">同步到云端</Button>
        <Button type="primary" @click="downloadSettings">从云端同步</Button>
        <Checkbox :checked="settings.autoSync" @change="triggerSetting('autoSync')">自动同步</Checkbox>
      </Space>
      <Divider/>
    </template>
    <Title :level="3">访问统计</Title>
    <Space>
      <Checkbox :checked="settings.showMost" @change="triggerSetting('showMost')">最常访问</Checkbox>
      <Checkbox :checked="settings.showRecent" @change="triggerSetting('showRecent')">最近访问</Checkbox>
    </Space>
    <Divider/>
    <Title :level="3">其他设置</Title>
    <Space>
      <Checkbox :checked="settings.showSearch" @change="triggerSetting('showSearch')">显示搜索</Checkbox>
      <Checkbox :checked="settings.showType" @change="triggerSetting('showType')">显示分类</Checkbox>
      <Checkbox :checked="settings.openInNewTab" @change="triggerSetting('openInNewTab')">新标签页打开工具</Checkbox>
    </Space>
  </container>
</template>

<script>
import { createNamespacedHelpers, mapActions } from 'vuex'
import { Container } from '@/components'
import { Typography, Divider, Checkbox, Space, Button } from 'ant-design-vue'

const {
  mapState: mapStateSettings,
  mapActions: mapActionSettings
} = createNamespacedHelpers('settings')
const { Title } = Typography
const {
  mapState: mapStateUser,
  mapActions: mapActionsUser
} = createNamespacedHelpers('user')

export default {
  name: '设置',
  components: {
    Container,
    Divider,
    Checkbox,
    Title,
    Space,
    Button
  },
  computed: {
    ...mapStateSettings({
      settings: state => state.settings
    }),
    ...mapStateUser(['token'])
  },
  methods: {
    ...mapActions(['uploadSettings', 'downloadSettings']),
    ...mapActionSettings(['triggerSetting']),
    ...mapActionsUser(['getProfiles'])
  }
}
</script>

<style scoped lang="scss">

</style>
