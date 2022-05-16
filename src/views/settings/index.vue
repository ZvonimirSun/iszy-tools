<template>
  <a-typography-title :level="3">
    用户
  </a-typography-title>
  <a-space>
    <a-button
      v-show="!_user.token"
      type="primary"
      @click="login"
    >
      登录
    </a-button>
    <a-button
      v-show="_user.token"
      type="primary"
      @click="logout"
    >
      登出
    </a-button>
    <a-popconfirm
      title="您是否确定要清空本地缓存？"
      ok-text="清空"
      @confirm="clearOfflineCache"
    >
      <a-button danger>
        清空本地缓存
      </a-button>
    </a-popconfirm>
  </a-space>
  <a-divider />
  <template v-if="_user.token">
    <a-typography-title :level="3">
      云端同步
    </a-typography-title>
    <a-space>
      <a-button
        type="primary"
        @click="uploadToCloud"
      >
        同步到云端
      </a-button>
      <a-button
        type="primary"
        @click="downloadFromCloud"
      >
        从云端同步
      </a-button>
      <a-checkbox
        :checked="settings.autoSync"
        @change="triggerSetting('autoSync')"
      >
        自动同步
      </a-checkbox>
    </a-space>
    <a-divider />
  </template>
  <a-typography-title :level="3">
    访问统计
  </a-typography-title>
  <a-space>
    <a-checkbox
      :checked="settings.showMost"
      @change="triggerSetting('showMost')"
    >
      最常访问
    </a-checkbox>
    <a-checkbox
      :checked="settings.showRecent"
      @change="triggerSetting('showRecent')"
    >
      最近访问
    </a-checkbox>
  </a-space>
  <a-divider />
  <a-typography-title :level="3">
    其他设置
  </a-typography-title>
  <a-space>
    <a-checkbox
      :checked="settings.showSearch"
      @change="triggerSetting('showSearch')"
    >
      显示搜索
    </a-checkbox>
    <a-checkbox
      :checked="settings.showType"
      @change="triggerSetting('showType')"
    >
      显示分类
    </a-checkbox>
    <a-checkbox
      :checked="settings.openInNewTab"
      @change="triggerSetting('openInNewTab')"
    >
      新标签页打开工具
    </a-checkbox>
  </a-space>
</template>

<script>
import { createNamespacedHelpers, mapActions, mapMutations } from 'vuex'

const {
  mapState: mapStateUser,
  mapMutations: mapMutationsUser
} = createNamespacedHelpers('user')

export default {
  name: 'SettingsPage',
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
      this.$router.push({
        path: '/login',
        query: {
          redirect: this.$route.fullPath
        }
      })
    },
    logout () {
      this.$router.push('/logout')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
