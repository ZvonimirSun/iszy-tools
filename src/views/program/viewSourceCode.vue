<template>
  <Search
    v-model:value="url"
    placeholder="填入网址"
    enter-button="获取"
    size="large"
    :loading="loading"
    @search="getContent"
  />
  <Paragraph v-show="data">
    <highlight-js
      autodetect
      :code="data"
    />
  </Paragraph>
</template>

<script>
import { Input, Typography } from 'ant-design-vue'
import { html_beautify as htmlBeatify } from 'js-beautify'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/idea.css'

const { Search } = Input
const { Paragraph } = Typography
export default {
  name: 'ViewSourceCode',
  components: { Search, Paragraph, highlightJs: hljsVuePlugin.component },
  data: () => ({
    url: undefined,
    data: '',
    loading: false
  }),
  methods: {
    async getContent () {
      if (this.url) {
        this.loading = true
        try {
          const res = await this.$axios('https://cors.iszy.xyz/' + this.url)
          this.data = htmlBeatify(res.data || '')
          this.$msg.success('解析成功')
        } catch (e) {
          this.$msg.error('解析出错')
        }
        this.loading = false
      } else {
        this.$msg.warn('请输入地址')
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
