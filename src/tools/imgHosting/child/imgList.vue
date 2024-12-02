<script lang="ts" setup>
import type { ImageItem } from '../type'
import * as uploaders from '../uploader/index'

const imgList = computed(() => {
  return useImgHostingStore().imgList
})

const preImgList = computed(() => {
  return imgList.value.map((item) => {
    return item.url
  })
})

const imgHostingStore = useImgHostingStore()
const config = imgHostingStore.config
const uploader = imgHostingStore.uploader
const commonConfig = imgHostingStore.commonConfig

const isLoading = ref(true)

const uploaderConfig = computed(() => {
  if (uploader) {
    return config(uploader)
  }
  else {
    return null
  }
})

watch(uploaderConfig, () => {
  getImageList()
})

onMounted(() => {
  getImageList()
})

async function copyImgUrl({ url } = {} as { url: string }) {
  try {
    if (commonConfig.customCopyContent) {
      await navigator.clipboard.writeText(commonConfig.customCopyContent.replace(/\$url/g, url))
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

async function getImageList() {
  if (uploader && uploaderConfig.value) {
    isLoading.value = true
    imgHostingStore.importImages(await uploaders[uploader].list(uploaderConfig.value as any))
    isLoading.value = false
  }
  else {
    imgHostingStore.importImages([])
    isLoading.value = false
  }
}

async function removeImage(imageItem: ImageItem) {
  if (uploader && uploaderConfig.value) {
    await uploaders[uploader].remove(uploaderConfig.value as any, imageItem)
    imgHostingStore.removeImage(imageItem)
    ElMessage.success('删除成功')
  }
}
</script>

<template>
  <div
    v-if="imgList.length || isLoading"
    class="imgList"
  >
    <div class="img-wrapper">
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
      <template v-if="isLoading">
        <el-skeleton v-for="(i) in 10" :key="i" :loading="true" animated>
          <template #template>
            <el-skeleton-item variant="image" style="width: 20rem; height: 12.36rem" />
            <div style="padding: 14px">
              <el-skeleton-item variant="h3" style="width: 50%" />
              <div style="display: flex;align-items: center;justify-items: space-between;margin-top: 16px;height: 16px;">
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </template>
    </div>
  </div>
  <el-empty v-else />
</template>

<style scoped lang="scss">
.imgList {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .img-wrapper {
    display: grid;
    flex-wrap: wrap;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 20rem);
    gap: .8rem;

    .el-card {
      height: 20rem;
      width: 20rem;
    }

    .el-skeleton {
      height: 20rem;
      width: 20rem;
    }
  }

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
}
</style>
