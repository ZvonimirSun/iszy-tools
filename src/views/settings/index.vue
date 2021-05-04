<template>
  <container>
    <a-form>
      <a-divider orientation="left">
        访问统计
      </a-divider>
      <a-form-item>
        <a-checkbox :checked="settings.showMost" @change="triggerMost">最常访问</a-checkbox>
        <a-checkbox :checked="settings.showRecent" @change="triggerRecent">最近访问</a-checkbox>
      </a-form-item>
    </a-form>
  </container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Container from '@/components/container.vue'

export default {
  name: '设置',
  components: { Container },
  computed: {
    ...mapState({
      settings: state => state.settings.settings
    })
  },
  methods: {
    ...mapActions({
      triggerMost: 'settings/triggerMost',
      triggerRecent: 'settings/triggerRecent'
    })
  }
}
</script>

<style scoped lang="scss">

</style>
