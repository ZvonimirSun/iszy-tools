<script lang="ts" setup>
const imgList = computed(() => {
  return useImgHostingStore().imgList
})

const preImgList = computed(() => {
  return imgList.value.map((item) => {
    return item.url
  })
})

const commonConfig = computed(() => {
  return useImgHostingStore().commonConfig
})

const removeImage = useImgHostingStore().removeImage

async function copyImgUrl({ url } = {} as { url: string }) {
  try {
    if (commonConfig.value.customCopyContent) {
      await navigator.clipboard.writeText(commonConfig.value.customCopyContent.replace(/\$url/g, url))
    }
    else {
      await navigator.clipboard.writeText(url)
    }
    ElMessage.success('地址已复制到剪贴板')
  }
  catch (e) {
    ElMessage.error('复制失败')
  }
}
</script>

<template>
  <div
    v-if="imgList.length"
    class="imgList"
  >
    <el-space :size="8">
      <el-card
        v-for="(item, index) in imgList"
        :key="item.id"
        :body-style="{ padding: '0px' }"
      >
        <el-image
          loading="lazy"
          :src="item.url"
          :alt="item.name"
          :preview-src-list="preImgList"
          :initial-index="index"
          style="width: 20rem; height: 12.36rem"
          fit="cover"
        />
        <div
          :title="item.name"
          class="card-meta"
        >
          {{ item.name }}
        </div>
        <div class="card-action">
          <span class="flex py-3">
            <span
              class="i-icon-park-outline-copy-link"
              @click="copyImgUrl(item)"
            />
          </span>
          <el-popconfirm
            title="是否确认删除？"
            confirm-button-text="是"
            cancel-button-text="否"
            confirm-button-type="danger"
            @confirm="removeImage(item)"
          >
            <template #reference>
              <span class="flex py-3">
                <span class="i-icon-park-outline-delete" />
              </span>
            </template>
          </el-popconfirm>
        </div>
      </el-card>
    </el-space>
  </div>
  <el-empty v-else />
</template>

<style scoped lang="scss">
.imgList {
  width: 100%;
  height: 100%;
  overflow: auto;

  .card-meta {
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .card-action {
    display: flex;

    > span {
      width: 50%;
      cursor: pointer;
      border-top: solid .1rem var(--el-border-color);

      &:not(:last-child) {
        border-right: solid .1rem var(--el-border-color);
      }

      &:hover {
        [class^="i-"] {
          color: var(--el-color-primary);
        }
      }
    }

    [class^="i-"] {
      font-size: 1.8rem;
      width: 100%;
      display: block;
      color: var(--el-text-color-placeholder);
    }
  }

  :deep(.ant-image) {
    cursor: pointer;
  }

  :deep(.ant-card-body) {
    padding: .8rem;
    width: 20rem;
  }

  :deep(.ant-card-actions) {
    & > li {
      margin: 0;
    }

  }

  .ant-space {
    flex-wrap: wrap;
  }
}
</style>
