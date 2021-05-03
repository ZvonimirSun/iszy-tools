<template>
  <a-form>
    <a-divider orientation="left">
      其他设置
    </a-divider>
    <a-form-item>
      <a-checkbox :checked="settings.enableStatistics" @change="triggerStatistics">访问统计</a-checkbox>
      <template v-if="settings.enableStatistics">
        <a-checkbox :checked="settings.showMost" @change="triggerMost">最常访问</a-checkbox>
        <a-checkbox :checked="settings.showRecent" @change="triggerRecent">最近访问</a-checkbox>
      </template>
    </a-form-item>
  </a-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: '设置',
  computed: {
    ...mapState({
      settings: state => state.settings.settings
    })
  },
  methods: {
    ...mapActions({
      triggerMost: 'settings/triggerMost',
      triggerRecent: 'settings/triggerRecent',
      triggerStatistics: 'settings/triggerStatistics'
    })
  }
}
</script>

<style scoped lang="scss">

</style>
