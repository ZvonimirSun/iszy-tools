<template>
  <container>
    <Title :level="3">请输入一个UA开始解析</Title>
    <Input placeholder="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36" v-model:value="data"/>
    <template v-if="data">
      <Divider/>
      <Title :level="3">解析结果</Title>
      <Paragraph>
        <pre v-if="result.ua">{{result.ua}}</pre>
        <ul>
          <li v-if="result.browser.name"><b>浏览器</b>: {{ `${result.browser.name} ${result.browser.version}` }}</li>
          <li v-if="result.device.type"><b>设备</b>: {{ `${result.device.type} / ${result.device.vendor} / ${result.device.model}` }}</li>
          <li v-if="result.os.name"><b>操作系统</b>: {{ `${result.os.name} / ${result.os.version}` }}</li>
          <li v-if="result.engine.name"><b>内核</b>: {{ `${result.engine.name} / ${result.engine.version}` }}</li>
          <li v-if="result.cpu.architecture"><b>架构</b>: {{ result.cpu.architecture }}</li>
        </ul>
      </Paragraph>
    </template>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { Input, Typography, Divider } from 'ant-design-vue'
import UAParser from 'ua-parser-js'

const { Title, Paragraph } = Typography
const parser = new UAParser()

export default {
  name: 'userAgent',
  components: { Container, Title, Input, Paragraph, Divider },
  data: () => ({
    data: ''
  }),
  computed: {
    result () {
      parser.setUA(this.data)
      return parser.getResult()
    }
  },
  mounted () {
    this.data = navigator.userAgent
  }
}
</script>

<style scoped lang="scss">

</style>
