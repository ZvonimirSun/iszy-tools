<script>
import { html_beautify as htmlBeatify } from 'js-beautify'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/idea.css'
import $axios from '@/plugins/Axios'

export default {
  name: 'ViewSourceCode',
  components: { HighlightJs: hljsVuePlugin.component },
  data: () => ({
    url: undefined,
    data: '',
    loading: false,
  }),
  methods: {
    async getContent() {
      if (this.url) {
        this.loading = true
        try {
          const res = await $axios(`https://cors.iszy.xyz/${this.url}`)
          this.data = htmlBeatify(res.data || '')
          ElMessage.success('解析成功')
        }
        catch (e) {
          ElMessage.error('解析出错')
        }
        this.loading = false
      }
      else {
        ElMessage.warning('请输入地址')
      }
    },
  },
}
</script>

<template>
  <el-input
    v-model="url"
    placeholder="填入网址"
    enter-button="获取"
    size="large"
  >
    <template #append>
      <el-button @click="getContent">
        <span class="i-icon-park-outline-search" />
      </el-button>
    </template>
  </el-input>
  <a-typography-paragraph v-show="data">
    <HighlightJs
      autodetect
      :code="data"
    />
  </a-typography-paragraph>
</template>

<style scoped lang="scss">

</style>
