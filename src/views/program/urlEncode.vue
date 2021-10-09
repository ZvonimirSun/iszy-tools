<template>
  <container>
    <Space direction="vertical">
      <TextArea
        v-model:value="value"
        placeholder="转换的内容粘贴在这里"
        :auto-size="{ minRows: 5, maxRows: 8 }"
      />
      <Group>
        <Button type="primary" @click="encode">UrlEncode编码</Button>
        <Button type="primary" @click="decode">UrlDecode解码</Button>
        <Button type="link" @click="clear">清空结果</Button>
      </Group>
    </Space>
  </container>
</template>

<script>
import { Container } from '@/components'
import { Input, Button, Space } from 'ant-design-vue'

const { TextArea } = Input
const { Group } = Button

export default {
  name: 'URL编码/解码',
  components: {
    Container,
    TextArea,
    Button,
    Group,
    Space
  },
  data: () => ({
    mode: 'text',
    value: undefined
  }),
  methods: {
    encode () {
      if (this.value != null) {
        this.value = encodeURIComponent(this.value)
      }
    },
    decode () {
      if (this.value != null) {
        this.value = decodeURIComponent(this.value)
      }
    },
    clear () {
      this.value = undefined
    }
  }
}
</script>

<style scoped lang="scss">
.ant-space-vertical {
  width: 100%;
}

.ant-btn-group {
  flex-flow: row wrap;

  .ant-btn {
    margin-bottom: 5px;

    @media (max-width: 450px) {
      padding: 0 8px;
    }
  }
}
</style>
