<template>
<container>
  <Search
    v-model:value="url"
    placeholder="填入网址"
    enter-button="获取"
    size="large"
    @search="getContent"
  />
  <Paragraph v-show="data">
    <pre>{{data}}</pre>
  </Paragraph>
</container>
</template>

<script>
import { Input, Typography } from 'ant-design-vue'
import Container from '@/components/container.vue'
import { html_beautify as htmlBeatify } from 'js-beautify'

const { Search } = Input
const { Paragraph } = Typography
export default {
  name: 'viewSourceCode',
  components: { Container, Search, Paragraph },
  data: () => ({
    url: undefined,
    data: undefined
  }),
  methods: {
    async getContent () {
      if (this.url) {
        try {
          const res = await this.$axios('https://cors.iszy.xyz/' + this.url)
          this.data = htmlBeatify(res.data)
          this.$msg.success('解析成功')
        } catch (e) {
          this.$msg.error('解析出错')
        }
      } else {
        this.$msg.warn('请输入地址')
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
