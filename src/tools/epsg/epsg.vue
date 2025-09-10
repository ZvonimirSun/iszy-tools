<script setup lang="ts">
import axios from 'axios'
import config from '@/config.ts'

const searchVal = ref<string>('')
const loading = ref<boolean>(false)
const selectedCRS = ref<null | CRS>(null)

interface CRS {
  id: null | { authority: string, code: string }
  name: string
  area: null | string
  accuracy: null | number
}

const result = reactive<{
  total: null | number
  results: CRS[]
  page: number
}>({
  total: null,
  results: [],
  page: 1,
})

function onSearchValUpdate() {
  if (!searchVal.value) {
    result.total = null
    result.results = []
    result.page = 1
  }
}

async function search() {
  if (!searchVal.value) {
    ElMessage.warning('请输入搜索内容')
    return
  }
  try {
    await getResultByPage()
  }
  catch (e) {
    ElMessage.error('搜索失败，请稍后重试')
  }
  finally {
    loading.value = false
  }
}

async function getResultByPage(page: number = 1) {
  loading.value = true
  result.page = page
  result.results = []
  const url = `${config.apiBaseUrl}/epsg/coordinates/search/${encodeURIComponent(searchVal.value)}.json`
  try {
    const res = (await axios.get(url, {
      params: {
        offset: (result.page - 1) * 10,
      },
    })).data
    result.total = res.total
    result.results = res.results
  }
  catch (e) {
    ElMessage.error('获取数据失败，请稍后重试')
  }
  finally {
    loading.value = false
  }
}

function selectCRS(crs: CRS) {
  selectedCRS.value = crs
}
</script>

<template>
  <div h-full w-full overflow-auto>
    <div h-full w-full flex flex-col justify-center overflow-auto>
      <div w-full flex justify-center gap-2>
        <el-input v-model="searchVal" placeholder="英文国家或地区名，坐标系代码或英文名称" class="w-[50%]" clearable @keyup.enter="search" @change="onSearchValUpdate" />
        <el-button w-50 type="primary" size="large" text-8 :loading="loading" @click="search">
          <i class="i-icon-park-outline-search" mr-2 text-10 />
          搜索
        </el-button>
      </div>
      <div v-if="result.total != null" w-full flex flex-1 flex-col gap-2 overflow-auto>
        <ul flex-1 overflow-auto>
          <li v-for="(item, index) in result.results" :key="index" mb-8 border-b p-4>
            <div cursor-pointer text-8 font-bold leading-normal @click="selectCRS(item)">
              {{ item.name }}
            </div>
            <div v-if="item.id" class="item-code" text-6 leading-normal>
              {{ item.id.authority }}:{{ item.id.code }}
            </div>
            <div v-if="item.area" class="item-info" text-6 leading-normal>
              使用地区: {{ item.area }}<span v-if="item.accuracy"> (精度: {{ item.accuracy.toFixed(1) }})</span>
            </div>
          </li>
        </ul>
        <el-pagination
          v-model:current-page="result.page"
          background
          layout="prev, pager, next, total"
          :total="result.total"
          :page-size="10" size="large"
          @current-change="getResultByPage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-code {
  color: var(--el-text-color-secondary);
}
</style>
