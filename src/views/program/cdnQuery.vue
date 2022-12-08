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
            jsDelivr
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
  <a-input
    v-model:value="keyword"
    placeholder="jquery"
    :loading="loading"
    allow-clear
    @change="search(0)"
  />
  <keep-alive>
    <template v-if="status==='done'">
      <a-divider />
      <template v-if="!pkgID">
        <a-typography-title :level="4">
          <span>共找到 {{ count }} 个库</span>
          <span v-if="count > 1000">，最多展示前 1000 个结果</span>
        </a-typography-title>
        <a-list
          item-layout="vertical"
          size="large"
          :data-source="result"
          :pagination="pagination"
          :loading="loading"
        >
          <template #renderItem="{ item }">
            <a-list-item :key="item.objectID">
              <a-typography-title
                :level="4"
                class="pkgName"
                @click="showDetail(item.objectID)"
              >
                {{ item.name }}
              </a-typography-title>
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
                <a-tag v-if="item.version">
                  <template #icon>
                    <span class="i-icon-park-outline-tag-one" />
                  </template>
                  <span :title="item.version">{{ item.version }}</span>
                </a-tag>
                <a-tag v-if="item.license">
                  <template #icon>
                    <span class="i-icon-park-outline-balance-two" />
                  </template>
                  {{ item.license }}
                </a-tag>
              </div>
              <div
                v-if="item.description"
                class="description"
              >
                {{ item.description }}
              </div>
              <div v-if="item.keywords && item.keywords.length">
                <a-tag
                  v-for="(key,index) of item.keywords"
                  :key="index"
                >
                  {{ key }}
                </a-tag>
              </div>
            </a-list-item>
          </template>
        </a-list>
      </template>
      <template v-else>
        <a-typography-link
          href="javascript:;"
          style="margin-bottom: .8rem;display: block"
          @click="pkgID=null"
        >
          <span class="i-icon-park-outline-return" />
          返回
        </a-typography-link>
        <a-typography class="metaDetail">
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
            <a-divider v-if="versions.length" />
            <li v-if="versions.length">
              <b>版本: </b><a-select
                v-model:value="version"
                :options="versions"
                @change="getVersionData"
              />
            </li>
            <li v-if="defaultFile">
              <b>默认文件: </b>
              <a-typography-text
                :copyable="{
                  text: `https://cdn.jsdelivr.net/npm/${pkgData.name}@${version}${defaultFile}`
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
        <a-directory-tree
          v-if="files && files.length"
          :tree-data="treeData"
          :selectable="false"
        >
          <template #title="{title,dataRef}">
            <a-typography-text
              :copyable="dataRef.isLeaf?{
                text: `https://cdn.jsdelivr.net/npm/${pkgData.name}@${version}${dataRef.fileName}`
              }:false"
            >
              {{ title }}
            </a-typography-text>
          </template>
        </a-directory-tree>
      </template>
    </template>
  </keep-alive>
</template>

<script>
import cdnQuery, { getByName } from '@/utils/cdnQuery.js'

let timeoutIndex = null

export default {
  name: 'CdnQuery',
  data: () => ({
    loading: false,
    keyword: '',
    status: '',

    pageIndex: 0,
    pageSize: 10,

    result: [],
    count: 0,

    pkgID: '',
    pkgData: {},
    version: null,
    versions: [],
    defaultFile: null,
    files: []
  }),
  computed: {
    pagination () {
      return {
        onChange: page => {
          this.search(page - 1)
        },
        pageSize: 10,
        simple: true,
        total: this.count > 1000 ? 1000 : this.count
      }
    },
    treeData () {
      if (this.files && this.files.length) {
        return this.handleFileList(this.files)
      } else { return [] }
    }
  },
  mounted () {
  },
  methods: {
    async search (pageIndex = 0) {
      if (!this.keyword) {
        return
      }
      if (timeoutIndex) {
        clearTimeout(timeoutIndex)
      }
      timeoutIndex = setTimeout(async () => {
        this.loading = true
        this.pkgData = null
        this.version = null
        this.versions = []
        this.versionDetail = {}

        const {
          response,
          query
        } = await cdnQuery(this.keyword, pageIndex, this.pageSize)
        if (query === this.keyword) {
          if (response && Object.keys(response).length > 0) {
            const {
              hits,
              page,
              nbHits
            } = response
            this.result = hits
            this.count = nbHits
            this.pageIndex = page
            this.status = 'done'
          } else {
            ElMessage.warning('搜索失败')
          }
          this.loading = false
        }
      }, 200)
    },
    searchByOwner (owner) {
      this.keyword = 'author:' + owner
      this.search(0)
    },
    async showDetail (objectID) {
      this.pkgID = objectID
      this.pkgData = {}
      this.version = null
      this.versions = []
      this.defaultFile = null
      this.files = []

      try {
        this.pkgData = await getByName(objectID)
        this.version = this.pkgData.version
        await this.getVersionData()
      } catch (e) {
        console.error(e.message)
      }
    },
    async getVersionData () {
      try {
        this.versions = []
        this.defaultFile = null
        this.files = []

        this.versions = (await this.$axios.get(`https://data.jsdelivr.com/v1/package/npm/${this.pkgData.name}`)).data.versions.map(item => {
          return {
            label: item,
            value: item
          }
        })
        const { default: defaultFile, files } = (await this.$axios.get(`https://data.jsdelivr.com/v1/package/npm/${this.pkgData.name}@${this.version}`)).data
        this.defaultFile = defaultFile
        this.files = files
      } catch (e) {
        console.error(e.message)
      }
    },
    handleFileList (list, fileName) {
      return list.map(item => {
        const name = fileName ? `${fileName}/${item.name}` : `/${item.name}`
        return {
          title: item.name,
          key: item.hash,
          isLeaf: item.type === 'file',
          fileName: name,
          children: ((item.type === 'directory' && item.files) ? this.handleFileList(item.files, name) : undefined)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.ant-list-item {
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

    .owner {
      cursor: pointer;
      display: inline-flex;
      margin-right: .8rem;

      img {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: .5rem;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    .ant-tag {
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
    color: #666666;
    font-size: 1.4rem;
    line-height: 3rem;
    margin: .8rem 0;
  }
}

.ant-tree {
  border: #16b0f6 solid;
}

.metaDetail {
  font-size: 1.6rem;
  line-height: 2.4rem;

  li:not(:first-child) {
    margin-top: .5rem;
  }
}
</style>
