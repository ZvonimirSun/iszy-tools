<template>
  <div
    v-if="imgList.length"
    class="imgList"
  >
    <a-image-preview-group>
      <a-space :size="8">
        <a-card
          v-for="(item) in imgList"
          :key="item.id"
        >
          <template #cover>
            <a-image
              :src="item.url"
              :alt="item.name"
              width="20rem"
              height="12.36rem"
            />
          </template>
          <template #actions>
            <a-tooltip>
              <template #title>
                复制链接
              </template>
              <span class="py-3 flex">
                <span
                  class="i-icon-park-outline-copy-link"
                  @click="copyImgUrl(item)"
                />
              </span>
            </a-tooltip>

            <a-tooltip>
              <template #title>
                删除
              </template>
              <a-popconfirm
                title="是否确认删除？"
                ok-text="是"
                cancel-text="否"
                :get-popup-container="getPopupContainer"
                @confirm="removeImage(item)"
              >
                <span class="py-3 flex">
                  <span class="i-icon-park-outline-delete" />
                </span>
              </a-popconfirm>
            </a-tooltip>
          </template>
          <a-card-meta :title="item.name" />
        </a-card>
      </a-space>
    </a-image-preview-group>
  </div>
  <a-empty v-else />
</template>

<script>
const {
  mapState,
  mapActions,
  mapGetters
} = createNamespacedHelpers('imgHosting')

export default {
  name: 'ImgHostingList',
  computed: {
    ...mapState(['imgList']),
    ...mapGetters(['commonConfig'])
  },
  methods: {
    ...mapActions(['removeImage']),
    async copyImgUrl ({ url }) {
      try {
        if (this.commonConfig.customCopyContent) {
          await navigator.clipboard.writeText(this.commonConfig.customCopyContent.replace(/\$url/g, url))
        } else {
          await navigator.clipboard.writeText(url)
        }
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

    [class^="i-"] {
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
