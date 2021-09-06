<template>
  <Space>
    <Button v-if="type==='reload'" @click="reload">
      重载
    </Button>
    <Button @click="close">
      关闭
    </Button>
  </Space>
</template>
<script>
import { defineComponent } from 'vue'
import { Button, Space } from 'ant-design-vue'

export default defineComponent({
  name: 'pwaReloadPrompt',
  components: { Button, Space },
  props: {
    type: {
      type: String
    }
  },
  emits: ['close', 'reload'],
  methods: {
    reload () {
      this.$emit('reload')
    },
    close () {
      this.$emit('close')
    }
  }
})
</script>
