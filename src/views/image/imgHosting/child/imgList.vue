<template>
  <div class="imgList" v-if="imgList.length">
    <PreviewGroup>
      <Space :size="8">
        <Card v-for="(item) in imgList" :key="item.id">
          <template #cover>
            <Image :src="item.url" :alt="item.name" width="20rem" height="12.36rem"/>
          </template>
          <template #actions>
            <Tooltip>
              <template #title>复制链接</template>
              <CopyLink @click="copyImgUrl(item)"/>
            </Tooltip>

            <Tooltip>
              <template #title>删除</template>
              <Popconfirm @confirm="removeImage(item)" title="是否确认删除？" ok-text="是" cancel-text="否"
                          :getPopupContainer="getPopupContainer">
                <Delete/>
              </Popconfirm>
            </Tooltip>
          </template>
          <Meta :title="item.name"></Meta>
        </Card>
      </Space>
    </PreviewGroup>
  </div>
  <Empty v-else/>
</template>

<script>
import { CopyLink, Delete } from '@icon-park/vue-next'
import { Empty, Card, Space, Image, Popconfirm, Tooltip } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'

const { Meta } = Card
const { PreviewGroup } = Image
const {
  mapState,
  mapActions
} = createNamespacedHelpers('imgHosting')

export default {
  name: 'imgList',
  computed: {
    ...mapState(['imgList'])
  },
  components: {
    Empty,
    Card,
    Meta,
    Space,
    Image,
    PreviewGroup,
    CopyLink,
    Delete,
    Popconfirm,
    Tooltip
  },
  methods: {
    ...mapActions(['removeImage']),
    async copyImgUrl ({ url }) {
      try {
        await navigator.clipboard.writeText(url)
        this.$msg.success('地址已复制到剪贴板')
      } catch (e) {
        this.$msg.error('复制失败')
      }
    },
    getPopupContainer () {
      return document.body
    }
  }
}
</script>

<style scoped lang="scss">
.imgList {
  width: 100%;
  height: 100%;
  overflow: auto;

  :deep(.ant-image) {
    cursor: pointer;
  }

  :deep(.ant-image-img) {
    object-fit: cover;
  }

  :deep(.ant-card-body) {
    padding: .8rem;
    width: 20rem;
  }

  :deep(.ant-card-actions) {
    & > li {
      margin: 0;
    }

    .i-icon {
      font-size: 1.8rem;
      width: 100%;
      display: block;
      padding: .8rem 0;
    }
  }

  .ant-space {
    flex-wrap: wrap;
  }
}
</style>
