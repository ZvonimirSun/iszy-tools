<template>
  <container>
    <Table :dataSource="releases" :columns="columns" :loading="loading" size="small" bordered rowKey="timestamp" :getPopupContainer="getPopupContainer" ref="table">
      <template #channel="{ text: channel }">
        <Tag v-if="channel==='canary_asan' || channel==='canary'" color="#d9822b">{{ channel }}</Tag>
        <Tag v-else-if="channel==='dev'" color="#137cbd">{{ channel }}</Tag>
        <Tag v-else-if="channel==='stable'" color="#0f9960">{{ channel }}</Tag>
        <Tag v-else-if="channel==='beta'" color="#db3737">{{ channel }}</Tag>
      </template>
      <template #timestamp="{ text: timestamp }">
        {{moment(timestamp).format('YYYY/MM/DD HH:mm:ss')}}
      </template>
      <template #os="{ text: os }">
        <span v-if="os==='win'">Windows (x86)</span>
        <span v-else-if="os==='win64'">Windows (x64)</span>
        <span v-else-if="os==='mac'">Mac OS</span>
        <span v-else-if="os==='linux'">Linux</span>
      </template>
    </Table>
  </container>
</template>

<script>
import { Container } from '@/components'
import { Table, Tag } from 'ant-design-vue'
import moment from 'moment'
import { uniq } from 'lodash-es'

const RELEASE_URL = 'https://chromium-downloads.herokuapp.com/builds'

export default {
  name: 'chromeDownload',
  components: {
    Container,
    Table,
    Tag
  },
  data: () => ({
    moment,
    loading: true,
    releases: []
  }),
  computed: {
    columns: function () {
      return [
        {
          title: '版本',
          dataIndex: 'version',
          key: 'version',
          filters: this.majorVersions,
          onFilter: (value, record) => (record.version.indexOf(value) === 0)
        },
        {
          title: '通道',
          dataIndex: 'channel',
          key: 'channel',
          slots: { customRender: 'channel' },
          filters: [
            {
              text: 'canary',
              value: 'canary'
            },
            {
              text: 'canary_asan',
              value: 'canary_asan'
            },
            {
              text: 'stable',
              value: 'stable'
            },
            {
              text: 'dev',
              value: 'dev'
            },
            {
              text: 'beta',
              value: 'beta'
            }
          ],
          onFilter: (value, record) => (record.channel === value)
        },
        {
          title: '系统',
          dataIndex: 'os',
          key: 'os',
          slots: { customRender: 'os' },
          filters: [
            {
              text: 'Windows (x64)',
              value: 'win64'
            },
            {
              text: 'Windows (x86)',
              value: 'win'
            },
            {
              text: 'macos',
              value: 'macos'
            },
            {
              text: 'linux',
              value: 'linux'
            }
          ],
          onFilter: (value, record) => (record.os === value)
        },
        {
          title: '时间',
          dataIndex: 'timestamp',
          key: 'timestamp',
          slots: { customRender: 'timestamp' }
        }
      ]
    },
    majorVersions: function () {
      return uniq(this.releases.map(item => {
        return item.version.split('.')[0]
      })).sort((a, b) => {
        const _a = parseInt(a)
        const _b = parseInt(b)
        return _a > _b ? -1 : 1
      }).map(item => {
        return {
          text: item,
          value: item
        }
      })
    }
  },
  mounted () {
    this.getReleases()
  },
  methods: {
    async getReleases () {
      this.loading = true
      try {
        this.releases = (await this.$axios.get(RELEASE_URL)).data
      } catch (e) {
        this.$msg.error('获取信息失败')
      }
      this.loading = false
    },
    getPopupContainer () {
      return this.$refs.table.$el
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep(.ant-table-filter-dropdown) .ant-dropdown-menu {
  max-height: 25rem;
}
</style>
