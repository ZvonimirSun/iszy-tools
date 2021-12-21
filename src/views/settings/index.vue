<template>
  <Title :level="3">用户</Title>
  <Space>
    <Button type="primary" @click="login" v-if="!token">登录</Button>
    <Button type="primary" @click="logout" v-else>登出</Button>
  </Space>
  <Divider/>
  <template v-if="token">
    <Title :level="3">云端同步</Title>
    <Space>
      <Button type="primary" @click="uploadToCloud">同步到云端</Button>
      <Button type="primary" @click="downloadFromCloud">从云端同步</Button>
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
</template>

<script>
import { createNamespacedHelpers, mapActions } from 'vuex'
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
    ...mapActionsUser(['getProfiles']),
    async uploadToCloud () {
      if (await this.uploadSettings()) {
        this.$msg.success('同步成功')
      } else {
        this.$msg.error('同步失败')
      }
    },
    async downloadFromCloud () {
      if (await this.downloadSettings()) {
        this.$msg.success('同步成功')
      } else {
        this.$msg.error('同步失败')
      }
    },
    login () {
      window.location.href = 'login'
    },
    logout () {
      window.location.href = '/logout'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
