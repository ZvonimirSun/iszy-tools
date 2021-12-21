<template>
  <Paragraph>
    <blockquote>数据来源：
      <Link href="https://github.com/jaywcjlove/linux-command" target="_blank">jaywcjlove/linux-command</Link>
    </blockquote>
  </Paragraph>
  <Title :level="3">请输入要查询的命令</Title>
  <Input v-model:value.trim="keyword" placeholder="man"/>
  <Divider v-show="keyword"/>
  <Title v-show="keyword" :level="3">搜索结果（点击查看详情）</Title>
  <Paragraph v-show="keyword">
    <ul>
      <li v-show="searchResults.length === 0"><b>没有结果</b></li>
      <li v-for="(item,index) in searchResults" :key="index" class="resultListItem">
        <Paragraph @click="query(item)"><b>{{ data[item].n }}</b>: {{ data[item].d }}</Paragraph>
      </li>
    </ul>
  </Paragraph>
  <Modal :footer="null" :title="command + ' 命令详情'" v-model:visible="showModal" :width="modalWidth">
    <Typography v-html="commandDetail"></Typography>
  </Modal>
</template>

<script>
import { Typography, Input, Divider, Modal } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'
import dayjs from 'dayjs'
import md from '@/utils/markdown'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const { mapActions, mapState } = createNamespacedHelpers('linuxCommand')

const { Paragraph, Link, Title } = Typography

export default {
  name: 'linuxCommand',
  components: { Paragraph, Link, Title, Input, Divider, Modal, Typography },
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
        const res = await this.$axios.get(`https://cdn.jsdelivr.net/gh/jaywcjlove/linux-command@1.8.1/command/${command}.md`)
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
