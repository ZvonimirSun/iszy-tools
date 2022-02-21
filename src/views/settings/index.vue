<template>
  <Title :level="3">
    用户
  </Title>
  <Space>
    <Button
      v-if="!_user.token"
      type="primary"
      @click="login"
    >
      登录
    </Button>
    <Button
      v-else
      type="primary"
      @click="logout"
    >
      登出
    </Button>
    <Popconfirm
      title="您是否确定要清空本地缓存？"
      ok-text="清空"
      @confirm="clearOfflineCache"
    >
      <Button danger>
        清空本地缓存
      </Button>
    </Popconfirm>
  </Space>
  <Divider />
  <template v-if="_user.token">
    <Title :level="3">
      云端同步
    </Title>
    <Space>
      <Button
        type="primary"
        @click="uploadToCloud"
      >
        同步到云端
      </Button>
      <Button
        type="primary"
        @click="downloadFromCloud"
      >
        从云端同步
      </Button>
      <Checkbox
        :checked="settings.autoSync"
        @change="triggerSetting('autoSync')"
      >
        自动同步
      </Checkbox>
    </Space>
    <Divider />
  </template>
  <Title :level="3">
    访问统计
  </Title>
  <Space>
    <Checkbox
      :checked="settings.showMost"
      @change="triggerSetting('showMost')"
    >
      最常访问
    </Checkbox>
    <Checkbox
      :checked="settings.showRecent"
      @change="triggerSetting('showRecent')"
    >
      最近访问
    </Checkbox>
  </Space>
  <Divider />
  <Title :level="3">
    其他设置
  </Title>
  <Space>
    <Checkbox
      :checked="settings.showSearch"
      @change="triggerSetting('showSearch')"
    >
      显示搜索
    </Checkbox>
    <Checkbox
      :checked="settings.showType"
      @change="triggerSetting('showType')"
    >
      显示分类
    </Checkbox>
    <Checkbox
      :checked="settings.openInNewTab"
      @change="triggerSetting('openInNewTab')"
    >
      新标签页打开工具
    </Checkbox>
  </Space>
</template>

<script>
import { createNamespacedHelpers, mapActions, mapMutations } from 'vuex'
import { Typography, Divider, Checkbox, Space, Button, Popconfirm } from 'ant-design-vue'

const { Title } = Typography
const {
  mapState: mapStateUser,
  mapMutations: mapMutationsUser
} = createNamespacedHelpers('user')

export default {
  name: 'SettingsPage',
  components: {
    Divider,
    Checkbox,
    Title,
    Space,
    Button,
    Popconfirm
  },
  computed: {
    ...mapStateUser(['_user', 'settings'])
  },
  methods: {
    ...mapMutations(['clearOfflineCache']),
    ...mapActions(['uploadSettings', 'downloadSettings']),
    ...mapMutationsUser(['triggerSetting']),
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
      this.$router.push('/login')
    },
    logout () {
      this.$router.push('/logout')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
