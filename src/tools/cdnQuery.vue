<script lang="ts" setup>
import type { AlgoliaHit } from '@/utils/cdnQuery.js'
import $axios from '@/plugins/Axios'
import cdnQuery, { getByName } from '@/utils/cdnQuery.js'

interface File {
  type: 'file'
  name: string
  hash: string
  time: string
  size: number
}

interface Directory {
  type: 'directory'
  name: string
  files: Array<Directory | File>
}

let timeoutIndex: number | null = null

const loading = ref(false)
const keyword = ref('')
const status = ref('')
const pageIndex = ref(0)
const pageSize = 10
const result = ref<Array<AlgoliaHit>>([])
const count = ref(0)
const pkgID = ref<string | null>('')
const pkgData = ref<{
  objectID: string
  name?: string
  homepage?: string
  description?: string
  repository?: {
    type: string
    url: string
  }
  license?: string
  owner?: {
    name: string
    link: string
  }
  version?: string
} | null>()
const version = ref('')
const versions = ref<Array<{
  label: string
  value: string
}>>([])
const defaultFile = ref<string | null>()
const files = ref<Array<Directory | File>>([])

const treeData = computed(() => {
  if (files.value && files.value.length) {
    return handleFileList(files.value)
  }
  else {
    return []
  }
})

async function search(_pageIndex = 0) {
  if (!keyword.value) {
    loading.value = false
    pkgData.value = null
    version.value = ''
    versions.value = []
    result.value = []
    pageIndex.value = 0
    count.value = 0
    status.value = ''
    return
  }
  if (timeoutIndex) {
    clearTimeout(timeoutIndex)
  }
  timeoutIndex = window.setTimeout(async () => {
    loading.value = true
    const {
      response,
      query,
    } = await cdnQuery(keyword.value, _pageIndex, pageSize)
    if (query === keyword.value) {
      if (response) {
        const {
          hits,
          page,
          nbHits,
        } = response
        result.value = hits
        count.value = nbHits
        pageIndex.value = page
        status.value = 'done'
      }
      else {
        ElMessage.warning('搜索失败')
      }
      loading.value = false
    }
  }, 200)
}

function searchByOwner(owner: string) {
  keyword.value = `author:${owner}`
  search(0)
}

async function showDetail(objectID: string) {
  pkgID.value = objectID
  pkgData.value = null
  version.value = ''
  versions.value = []
  defaultFile.value = null
  files.value = []

  try {
    pkgData.value = await getByName(objectID)
    version.value = pkgData.value.version ?? ''
    await getVersionData()
  }
  catch (e) {
    console.error((e as Error).message)
  }
}

async function getVersionData() {
  try {
    versions.value = []
    defaultFile.value = null
    files.value = []

    versions.value = (await $axios.get(`https://data.jsdelivr.com/v1/package/npm/${pkgData.value?.name ?? ''}`)).data.versions.map((item: string) => {
      return {
        label: item,
        value: item,
      }
    })
    const {
      default: _defaultFile,
      files: _files,
    } = (await $axios.get(`https://data.jsdelivr.com/v1/package/npm/${pkgData.value?.name ?? ''}@${version.value}`)).data
    defaultFile.value = _defaultFile
    files.value = _files
  }
  catch (e) {
    console.error((e as Error).message)
  }
}

function handleFileList(list: Array<Directory | File>, fileName?: string): Array<any> {
  return list.map((item) => {
    const name = fileName ? `${fileName}/${item.name}` : `/${item.name}`
    return {
      label: item.name,
      icon: (item.type === 'directory' ? 'Folder' : ''),
      isLeaf: (item.type !== 'directory'),
      fileName: name,
      children: ((item.type === 'directory' && item.files) ? handleFileList(item.files, name) : undefined),
    }
  })
}
</script>

<template>
  <a-typography-paragraph>
    <blockquote>
      <ul>
        <li>
          数据来自:
          <a-typography-link
            href="https://www.jsdelivr.com/"
            target="_blank"
          >
            JSDelivr
          </a-typography-link>
        </li>
        <li>
          搜索接口来自:
          <a-typography-link
            href="https://www.algolia.com/"
            target="_blank"
          >
            Algolia
          </a-typography-link>
        </li>
      </ul>
    </blockquote>
  </a-typography-paragraph>
  <a-typography-title :level="3">
    请输入要获取CDN的库名
  </a-typography-title>
  <el-input
    v-model="keyword"
    placeholder="jquery"
    clearable
    @change="search(0)"
  />
  <keep-alive>
    <template v-if="status === 'done'">
      <el-divider />
      <template v-if="!pkgID">
        <a-typography-title :level="4">
          <span>共找到 {{ count }} 个库</span>
          <span v-if="count > 1000">，最多展示前 1000 个结果</span>
        </a-typography-title>
        <div class="result-list">
          <div
            v-for="item in result"
            :key="item.objectID"
            class="result-list-item"
          >
            <div
              class="pkgName"
            >
              <a-typography-title
                :level="4"
                @click="showDetail(item.objectID)"
              >
                {{ item.name }}
              </a-typography-title>
            </div>
            <div class="meta">
              <div
                v-if="item.owner"
                class="owner"
                @click="searchByOwner(item.owner.name)"
              >
                <img
                  :src="item.owner.avatar"
                  :alt="item.owner.name"
                >
                <div>{{ item.owner.name }}</div>
              </div>
              <el-tag
                v-if="item.version"
                effect="plain"
              >
                <span class="i-icon-park-outline-tag-one" /><span :title="item.version">{{ item.version }}</span>
              </el-tag>
              <el-tag
                v-if="item.license"
                effect="plain"
              >
                <span class="i-icon-park-outline-balance-two" />{{ item.license }}
              </el-tag>
            </div>
            <div
              v-if="item.description"
              class="description"
            >
              {{ item.description }}
            </div>
            <div v-if="item.keywords && item.keywords.length" flex gap-2>
              <el-tag
                v-for="(key, index) of item.keywords"
                :key="index"
                effect="plain"
              >
                {{ key }}
              </el-tag>
            </div>
          </div>
        </div>
        <el-pagination
          layout="prev,jumper,next"
          :total="count > 1000 ? 1000 : count"
          :hide-on-single-page="true"
          @current-change="search($event - 1)"
        />
      </template>
      <template v-else>
        <a-typography-link
          href="javascript:;"
          style="margin-bottom: .8rem;display: block"
          @click="pkgID = null"
        >
          <span class="i-icon-park-outline-return" />
          返回
        </a-typography-link>
        <a-typography
          v-if="pkgData"
          class="metaDetail"
        >
          <ul>
            <li v-if="pkgData.name">
              <b>名称: </b>{{ pkgData.name }}
            </li>
            <li v-if="pkgData.homepage">
              <b>主页: </b>
              <a-typography-link
                :href="pkgData.homepage"
                target="_blank"
              >
                {{ pkgData.homepage }}
              </a-typography-link>
            </li>
            <li v-if="pkgData.description">
              <b>简介: </b>{{ pkgData.description }}
            </li>
            <li v-if="pkgData.repository">
              <b>仓库: </b>{{ pkgData.repository.type }} /
              <a-typography-link
                :href="pkgData.repository.url"
                target="_blank"
              >
                {{ pkgData.repository.url }}
              </a-typography-link>
            </li>
            <li v-if="pkgData.license">
              <b>协议: </b>{{ pkgData.license }}
            </li>
            <li v-if="pkgData.owner">
              <b>作者: </b>{{ pkgData.owner.name }} /
              <a-typography-link
                :href="pkgData.owner.link"
                target="_blank"
              >
                {{ pkgData.owner.link }}
              </a-typography-link>
            </li>
            <el-divider v-if="versions.length" />
            <li v-if="versions.length">
              <b>版本: </b>
              <el-select
                v-model="version"
                :options="versions"
                @change="getVersionData"
              >
                <el-option
                  v-for="_version in versions"
                  :key="_version.value"
                  :value="_version.value"
                  :label="_version.label"
                />
              </el-select>
            </li>
            <li v-if="defaultFile">
              <b>默认文件: </b>
              <a-typography-text
                :copyable="{
                  text: `https://cdn.jsdelivr.net/npm/${pkgData.name}@${version}${defaultFile}`,
                }"
              >
                <a-typography-link
                  :href="`https://cdn.jsdelivr.net/npm/${pkgData.name}@${version}${defaultFile}`"
                  target="_blank"
                >
                  {{ defaultFile }}
                </a-typography-link>
              </a-typography-text>
            </li>
            <li v-if="files && files.length">
              <b>文件列表</b><span class="i-icon-park-outline-corner-right-down" />
            </li>
          </ul>
        </a-typography>
        <el-tree
          v-if="pkgData && files && files.length"
          :data="treeData"
          :selectable="false"
        >
          <template #default="{ data }">
            <div
              v-if="data.isLeaf"
              flex
              items-center
            >
              <span
                class="i-fa-solid-file"
                m-r-2
              />
              <a-typography-text
                :copyable="{
                  text: `https://cdn.jsdelivr.net/npm/${pkgData.name}@${version}${data.fileName}`,
                }"
              >
                {{ data.label }}
              </a-typography-text>
            </div>
            <div
              v-else
              flex
              items-center
            >
              <span
                class="i-fa-solid-folder"
                m-r-2
              />
              <a-typography-text>
                {{ data.label }}
              </a-typography-text>
            </div>
          </template>
        </el-tree>
      </template>
    </template>
  </keep-alive>
</template>

<style scoped lang="scss">
.result-list {

  .result-list-item {
    padding: 1.6rem;

    &:not(:last-child) {
      border-bottom: .1rem solid var(--el-border-color);
    }

    .pkgName {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .meta {
      font-size: 1.6rem;
      line-height: 2.4rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;

      .owner {
        cursor: pointer;
        display: inline-flex;
        margin-right: .8rem;
        color: var(--el-text-color-primary);

        img {
          width: 2.4rem;
          height: 2.4rem;
          margin-right: .5rem;
        }

        &:hover {
          text-decoration: underline;
        }
      }

      .el-tag {
        height: 2.4rem;
        font-size: 1.4rem;
        display: inline-flex;
        align-items: center;

        [class^="i-"] {
          font-size: 1.6rem;
          margin-right: .5rem;
        }
      }
    }

    .description {
      color: var(--el-text-color-secondary);
      font-size: 1.4rem;
      line-height: 3rem;
      margin: .8rem 0;
    }
  }
}

.el-tag span {
  vertical-align: middle;
}

.metaDetail {
  font-size: 1.6rem;
  line-height: 2.4rem;

  li:not(:first-child) {
    margin-top: .5rem;
  }
}
</style>
