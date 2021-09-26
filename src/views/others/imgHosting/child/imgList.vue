<template>
  <div class="imgList" v-if="imgList.length">
    <PreviewGroup>
      <Space :size="8">
        <Card v-for="(item) in imgList" :key="item.id">
          <template #cover>
            <Image :src="item.url" :alt="item.name" width="20rem" height="12.36rem"/>
          </template>
          <template class="ant-card-actions" #actions>
            <CopyLink @click="copyImgUrl(item)"/>
            <Delete @click="removeImage(item)"/>
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
import { Empty, Card, Space, Image } from 'ant-design-vue'
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
    Delete
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
    }
  }
}
</script>

<style scoped lang="scss">
.imgList {
  width: 100%;
  height: 100%;
  overflow: auto;

  ::v-deep(.ant-image) {
    cursor: pointer;
  }

  ::v-deep(.ant-card-body) {
    padding: .8rem;
    width: 20rem;
  }

  .ant-space {
    flex-wrap: wrap;
  }
}
</style>
