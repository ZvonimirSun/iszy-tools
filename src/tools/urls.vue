<script setup lang="ts">
import { API } from '@/plugins/API'
import dayjs from 'dayjs'

interface Url {
  keyword: string
  title: string
  url: string
  createdAt: string
  updatedAt: string
}

const urlBase = 'https://url.iszy.cc'
const urlList = ref<Url[]>([])
const pageSize = ref(10)
const pageIndex = ref(1)
const count = ref(0)
const loading = ref(false)

const editing = reactive<Record<string, boolean>>({})
const editingUrl = reactive<Record<string, string>>({})
const newUrl = reactive({
  keyword: '',
  url: '',
})

onMounted(() => {
  getUrlList(pageIndex.value - 1, pageSize.value)
})

watchEffect(() => {
  getUrlList(pageIndex.value - 1, pageSize.value)
})

watch(pageSize, () => {
  pageIndex.value = 1
})

async function getUrlList(pageIndex: number, pageSize: number) {
  const tmp = setTimeout(() => {
    loading.value = true
  }, 300)
  try {
    const res = await API.get(`/urls/admin/urls`, {
      params: {
        pageIndex,
        pageSize,
      },
    })
    if (res.success) {
      count.value = res.data.count
      urlList.value = res.data.rows.map((item: Url) => {
        item.createdAt = dayjs(item.createdAt).format('YYYY年MM月DD日 HH:mm')
        item.updatedAt = dayjs(item.updatedAt).format('YYYY年MM月DD日 HH:mm')
        return item
      })
    }
    else {
      ElMessage.error(res.message)
    }
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
  clearTimeout(tmp)
  loading.value = false
}

async function createUrl() {
  if (!newUrl.url) {
    return
  }
  try {
    const res = await API.post(`/urls/admin/url`, {
      url: newUrl.url,
      keyword: newUrl.keyword,
    })
    if (res.success) {
      ElMessage.success('创建成功')
      newUrl.url = ''
      newUrl.keyword = ''
      await getUrlList(pageIndex.value - 1, pageSize.value)
    }
    else {
      ElMessage.error(res.message)
    }
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}

async function updateUrl(url: Url) {
  try {
    const res = await API.put(`/urls/admin/url/${url.keyword}`, {
      url: editingUrl[url.keyword],
    })
    if (res.success) {
      ElMessage.success('更新成功')
      url.url = editingUrl[url.keyword]!
      editing[url.keyword] = false
      await getUrlList(pageIndex.value - 1, pageSize.value)
    }
    else {
      ElMessage.error(res.message)
    }
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}

async function deleteUrl(url: Url) {
  try {
    const res = await API.delete(`/urls/admin/url/${url.keyword}`, {
      params: {
        keyword: url.keyword,
      },
    })
    if (res.success) {
      await getUrlList(pageIndex.value - 1, pageSize.value)
      ElMessage.success('删除成功')
    }
    else {
      ElMessage.error(res.message)
    }
  }
  catch (e) {
    ElMessage.error((e as Error).message)
  }
}

function editUrl(url: Url) {
  editing[url.keyword] = !editing[url.keyword]
  if (editing[url.keyword]) {
    editingUrl[url.keyword] = url.url
  }
}

function indexMethod(index: number) {
  return (pageIndex.value - 1) * pageSize.value + index + 1
}
</script>

<template>
  <div
    h-full flex flex-col gap-4
  >
    <div class="new-url-form">
      <span>
        输入链接:
      </span>
      <el-input
        v-model="newUrl.url"
        placeholder="https"
        clearable
        flex-1
      />
      <span>
        自定义短网址(选):
      </span>
      <el-input
        v-model="newUrl.keyword"
        clearable
      />
      <el-button
        type="primary"
        @click="createUrl"
      >
        缩短
      </el-button>
    </div>
    <el-table
      v-loading="loading"
      :data="urlList"
      :border="true"
      :stripe="true"
      size="small"
      flex-1
    >
      <el-table-column
        type="index"
        :index="indexMethod"
        fixed="left"
      />
      <el-table-column
        prop="keyword"
        label="短网址"
        width="100"
        fixed="left"
      >
        <template #default="{ row }">
          <el-link
            :href="`${urlBase}/${row.keyword}`"
            target="_blank"
            style="white-space: nowrap;"
          >
            {{ row.keyword }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="url"
        label="原网址"
        min-width="300"
      >
        <template #default="{ row }">
          <template
            v-if="!editing[row.keyword]"
          >
            <template v-if=" row.title">
              <el-link
                :href="row.url"
                target="_blank"
              >
                {{ row.title }}
              </el-link>
              <br>
            </template>
            <el-link
              :href="row.url"
              target="_blank"
            >
              {{ row.url }}
            </el-link>
          </template>
          <el-input
            v-else
            v-model="editingUrl[row.keyword]"
          />
        </template>
      </el-table-column>
      <el-table-column
        prop="createdAt"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="ip"
        label="IP"
        width="130"
      />
      <el-table-column
        prop="clicks"
        label="点击次数"
        width="80"
      />
      <el-table-column
        label="操作"
        width="140"
        fixed="right"
      >
        <template #default="{ row }">
          <template v-if="!editing[row.keyword]">
            <el-button
              size="small"
              @click="editUrl(row)"
            >
              编辑
            </el-button>
            <el-popconfirm
              width="160"
              title="删除后无法恢复！"
              confirm-button-type="danger"
              confirm-button-text="删除"
              @confirm="deleteUrl(row)"
            >
              <template #reference>
                <el-button
                  size="small"
                  type="danger"
                >
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </template>
          <template v-else>
            <el-button
              size="small"
              @click="editUrl(row)"
            >
              取消
            </el-button>
            <el-button
              size="small"
              type="primary"
              @click="updateUrl(row)"
            >
              更新
            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageIndex"
      v-model:page-size="pageSize"
      small
      background
      layout="prev, pager, next"
      :total="count"
    />
  </div>
</template>

<style scoped lang="scss">
.new-url-form {
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;

  & > span {
    white-space: nowrap;
    font-size: var(--el-form-label-font-size)
  }
}
</style>
