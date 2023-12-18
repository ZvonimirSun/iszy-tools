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
  <el-input
    v-model.trim="keyword"
    placeholder="man"
  />
  <el-divider v-show="keyword" />
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
        <div @click="query(item)">
          <a-typography-paragraph>
            <b>{{ store.data[item].n }}</b>: {{ store.data[item].d }}
          </a-typography-paragraph>
        </div>
      </li>
    </ul>
  </a-typography-paragraph>
  <el-dialog
    v-model="showModal"
    :title="command + ' 命令详情'"
    :width="modalWidth"
  >
    <!-- eslint-disable vue/no-v-html -->
    <a-typography v-html="commandDetail" />
  </el-dialog>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import md from '@/utils/markdown.js'
import duration from 'dayjs/plugin/duration'
import { useLinuxCommandStore } from '@/stores/linuxCommand'
import $axios from '@/plugins/Axios'

dayjs.extend(duration)

const keyword = ref('')
const command = ref('')
const commandData = ref('')
const showModal = ref(false)

const store = useLinuxCommandStore()

const searchResults = computed(() => {
  if (keyword.value) {
    return Object.keys(store.data).filter(key => (store.data[key].n.toString().toLowerCase().includes(keyword.value.toLowerCase())))
  } else {
    return []
  }
})
const commandDetail = computed(() => {
  return commandData.value ? md(commandData.value) : ''
})
const modalWidth = computed(() => {
  return document.body.clientWidth < 832 ? document.body.clientWidth - 32 : 800
})

onMounted(() => {
  if (store.time) {
    const currentDate = dayjs()
    const storageDate = dayjs(store.time)
    if (dayjs.duration(currentDate.diff(storageDate)).asDays() <= 1) {
      return
    }
  }
  store.getData()
})

async function query (c: string) {
  try {
    const res = await $axios.get(`https://jsdelivr.cdn.iszy.xyz/gh/jaywcjlove/linux-command@1.8.1/command/${c}.md`)
    command.value = c
    commandData.value = res.data
    showModal.value = true
  } catch (e) {
    ElMessage.error('查询失败')
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
