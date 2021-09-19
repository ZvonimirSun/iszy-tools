<template>
  <container>
    <Paragraph>
      <blockquote>
        <ul>
          <li>数据来自:
            <Link href="https://www.jsdelivr.com/" target="_blank">jsDelivr</Link>
          </li>
          <li>搜索接口来自:
            <Link href="https://www.algolia.com/" target="_blank">Algolia</Link>
          </li>
        </ul>
      </blockquote>
    </Paragraph>
    <Title :level="3">请输入要获取CDN的库名</Title>
    <Search
      placeholder="jquery"
      v-model:value="keyword"
      enter-button="搜索"
      :loading="loading"
      allowClear
      @search="search(0)"/>
    <keep-alive>
      <template v-if="status==='done'">
        <Divider/>
        <template v-if="!pkgData">
          <Title :level="4">
            <span>共找到 {{count}} 个库</span>
            <span v-if="count > 1000">，最多展示前 1000 个结果</span>
          </Title>
          <List item-layout="vertical" size="large" :data-source="result" :pagination="pagination" :loading="loading">
            <template #renderItem="{ item }">
              <Item :key="item.objectID">
                <Title :level="4" class="pkgName" @click="showDetail(item.objectID)">{{item.name}}</Title>
                <div class="meta">
                  <div class="owner" v-if="item.owner" @click="searchByOwner(item.owner.name)">
                    <img :src="item.owner.avatar" :alt="item.owner.name"/>
                    <div>{{ item.owner.name }}</div>
                  </div>
                  <Tag v-if="item.version">
                    <template #icon>
                      <tag-one theme="filled"/>
                    </template>
                    <span :title="item.version">{{ item.version }}</span>
                  </Tag>
                  <Tag v-if="item.license">
                    <template #icon>
                      <balance-two theme="outline"/>
                    </template>
                    {{ item.license }}</Tag>
                </div>
                <div v-if="item.description" class="description">{{item.description}}</div>
                <div v-if="item.keywords && item.keywords.length">
                  <Tag v-for="(keyword,index) of item.keywords" :key="index">
                    {{keyword}}
                  </Tag>
                </div>
              </Item>
            </template>
          </List>
        </template>
        <template v-else>
          <Space :size="8" direction="vertical">
            <Link href="javascript:" @click="pkgData=null"><return theme="outline"/>返回</Link>
            <Typography class="metaDetail">
              <ul>
                <li v-if="pkgData.name"><b>名称:</b> <code>{{pkgData.name}}</code></li>
                <li v-if="pkgData.homepage"><b>主页:</b> <code>{{pkgData.homepage}}</code></li>
                <li v-if="pkgData.description"><b>简介:</b> <code>{{pkgData.description}}</code></li>
                <li v-if="pkgData.repository"><b>仓库:</b> <code>{{pkgData.repository.type}}</code> / <code><Link :href="pkgData.repository.url">{{pkgData.repository.url}}</Link></code></li>
                <li v-if="pkgData.license"><b>协议:</b> <code>{{pkgData.license}}</code></li>
                <li v-if="pkgData.owner"><b>作者:</b> <code>{{pkgData.owner.name}}</code> / <code><Link :href="pkgData.owner.link">{{pkgData.owner.link}}</Link></code></li>
              </ul>
            </Typography>
          </Space>
        </template>
      </template>
    </keep-alive>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { Input, Typography, Divider, List, Tag, Space } from 'ant-design-vue'
import cdnQuery, { getByName } from '@/utils/cdnQuery.js'
import { TagOne, BalanceTwo, Return } from '@icon-park/vue-next'

const { Search } = Input
const {
  Title,
  Paragraph,
  Link
} = Typography
const { Item } = List

export default {
  name: 'cdnQuery',
  components: {
    Container,
    Divider,
    Title,
    Paragraph,
    Typography,
    Space,
    Link,
    Search,
    List,
    Item,
    Tag,
    TagOne,
    BalanceTwo,
    Return
  },
  data: () => ({
    loading: false,
    keyword: '',
    status: '',

    pageIndex: 0,
    pageSize: 10,

    result: [],
    count: 0,

    pkgData: null
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
    }
  },
  mounted () {
  },
  methods: {
    async search (pageIndex = 0) {
      if (!this.keyword) {
        return
      }
      this.loading = true
      this.pkgData = null
      const { response } = await cdnQuery(this.keyword, pageIndex, this.pageSize)
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
        this.$msg.warn('搜索失败')
      }
      this.loading = false
    },
    searchByOwner (owner) {
      this.keyword = 'author:' + owner
      this.search(0)
    },
    async showDetail (objectID) {
      this.pkgData = await getByName(objectID)
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

      .i-icon {
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

.metaDetail {
  font-size: 1.6rem;
  line-height: 2.4rem;

  li:not(:first-child) {
    margin-top: .5rem;
  }
}
</style>
