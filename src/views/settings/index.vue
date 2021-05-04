<template>
  <container>
    <Form>
      <Divider orientation="left">
        访问统计
      </Divider>
      <Item>
        <Checkbox :checked="settings.showMost" @change="triggerMost">最常访问</Checkbox>
        <Checkbox :checked="settings.showRecent" @change="triggerRecent">最近访问</Checkbox>
      </Item>
    </Form>
  </container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Container from '@/components/container.vue'
import { Form, Divider, Checkbox } from 'ant-design-vue'
const { Item } = Form

export default {
  name: '设置',
  components: { Container, Form, Divider, Checkbox, Item },
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
