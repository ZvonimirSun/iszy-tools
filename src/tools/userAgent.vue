<script>
import { UAParser } from 'ua-parser-js'

export default {
  name: 'UserAgent',
  data: () => ({
    data: '',
  }),
  computed: {
    result() {
      return UAParser(this.data)
    },
  },
  mounted() {
    this.data = navigator.userAgent
  },
}
</script>

<template>
  <a-typography-title :level="3">
    请输入一个UA开始解析
  </a-typography-title>
  <el-input
    v-model="data"
    placeholder="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
  />
  <template v-if="data">
    <el-divider />
    <a-typography-title :level="3">
      解析结果
    </a-typography-title>
    <a-typography-paragraph>
      <pre v-if="result.ua">{{ result.ua }}</pre>
      <ul>
        <li v-if="result.browser.name">
          <b>浏览器</b>: {{ `${result.browser.name} ${result.browser.version}` }}
        </li>
        <li v-if="result.device.type">
          <b>设备</b>: {{ `${result.device.type} / ${result.device.vendor} / ${result.device.model}` }}
        </li>
        <li v-if="result.os.name">
          <b>操作系统</b>: {{ `${result.os.name} / ${result.os.version}` }}
        </li>
        <li v-if="result.engine.name">
          <b>内核</b>: {{ `${result.engine.name} / ${result.engine.version}` }}
        </li>
        <li v-if="result.cpu.architecture">
          <b>架构</b>: {{ result.cpu.architecture }}
        </li>
      </ul>
    </a-typography-paragraph>
  </template>
</template>

<style scoped lang="scss">

</style>
