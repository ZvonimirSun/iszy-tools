<template>
  <a-typography-paragraph>
    <blockquote>
      数据来源：
      <a-typography-link
        href="https://github.com/jaywcjlove/linux-command"
        target="_blank"
      >
        jaywcjlove/linux-command
      </a-typography-link>
    </blockquote>
  </a-typography-paragraph>
  <a-typography-title :level="3">
    请输入要查询的命令
  </a-typography-title>
  <a-input
    v-model:value.trim="keyword"
    placeholder="man"
  />
  <a-divider v-show="keyword" />
  <a-typography-title
    v-show="keyword"
    :level="3"
  >
    搜索结果（点击查看详情）
  </a-typography-title>
  <a-typography-paragraph v-show="keyword">
    <ul>
      <li v-show="searchResults.length === 0">
        <b>没有结果</b>
      </li>
      <li
        v-for="(item,index) in searchResults"
        :key="index"
        class="resultListItem"
      >
        <a-typography-paragraph @click="query(item)">
          <b>{{ data[item].n }}</b>: {{ data[item].d }}
        </a-typography-paragraph>
      </li>
    </ul>
  </a-typography-paragraph>
  <a-modal
    v-model:visible="showModal"
    :footer="null"
    :title="command + ' 命令详情'"
    :width="modalWidth"
  >
    <!-- eslint-disable vue/no-v-html -->
    <a-typography v-html="commandDetail" />
  </a-modal>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import dayjs from 'dayjs'
import md from '@/utils/markdown.js'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const { mapActions, mapState } = createNamespacedHelpers('linuxCommand')

export default {
  name: 'LinuxCommand',
  data: () => ({
    keyword: '',
    command: '',
    commandData: '',
    showModal: false
  }),
  computed: {
    ...mapState(['data', 'time']),
    searchResults () {
      return Object.keys(this.data).filter(key => (this.data[key].n.toString().toLowerCase().includes(this.keyword.toLowerCase())))
    },
    commandDetail () {
      return this.commandData ? md(this.commandData) : ''
    },
    modalWidth () {
      return document.body.clientWidth < 832 ? document.body.clientWidth - 32 : 800
    }
  },
  mounted () {
    if (this.time) {
      const currentDate = dayjs()
      const storageDate = dayjs(this.time)
      if (dayjs.duration(currentDate.diff(storageDate)).asDays() <= 1) {
        return
      }
    }
    this.getData()
  },
  methods: {
    ...mapActions(['getData']),
    async query (command) {
      try {
        const res = await this.$axios.get(`https://jsdelivr.cdn.iszy.cc/gh/jaywcjlove/linux-command@1.8.1/command/${command}.md`)
        this.command = command
        this.commandData = res.data
        this.showModal = true
      } catch (e) {
        this.$msg.error('查询失败')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.resultListItem {

  .ant-typography {
    width: fit-content;
    font-size: 1.6rem;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
