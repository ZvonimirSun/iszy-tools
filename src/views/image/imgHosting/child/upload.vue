<template>
  <a-spin :spinning="spinning">
    <a-upload-dragger
      :file-list="[]"
      accept="image/bmp,image/gif,image/jpeg,image/png,image/webp"
      :show-upload-list="false"
      :custom-request="customRequest"
      @reject="rejectFile"
    >
      <p class="ant-upload-drag-icon">
        <span class="i-icon-park-upload-one" />
      </p>
      <p class="ant-upload-text">
        直接粘贴图片或拖拽图片到这里上传<br>或者直接点击选择文件上传
      </p>
      <p class="ant-upload-hint">
        暂时仅支持单文件上传。
      </p>
    </a-upload-dragger>
  </a-spin>
</template>

<script lang="ts" setup>
import * as uploaders from '../uploader/index'
import { useImgHostingStore } from '@/stores/imgHosting'
import { AliOssConfig } from '../uploader/index'

const props = defineProps({
  activeKey: {
    type: String,
    default: ''
  }
})

const spinning = ref(false)
const timeoutIndex = ref()

const imgHostingStore = useImgHostingStore()

const config = imgHostingStore.config
const uploader = imgHostingStore.uploader
const commonConfig = imgHostingStore.commonConfig

onMounted(() => {
  document.addEventListener('paste', paste)
})

onBeforeUnmount(() => {
  document.removeEventListener('paste', paste)
})

async function customRequest ({ file } = { } as UploadRequestOption) {
  let tmpFile: File = file as File
  spinning.value = true
  if (uploader && config(uploader)) {
    if (commonConfig.renameTimeStamp) {
      const tmp = tmpFile.name || ''
      tmpFile = new File([tmpFile], ((new Date().getTime()) + tmp.substring(tmp.lastIndexOf('.'))).toLowerCase(), {
        type: tmpFile.type,
        lastModified: tmpFile.lastModified
      })
    }
    try {
      const result = await uploaders[uploader].handle(config(uploader) as AliOssConfig, tmpFile)
      useImgHostingStore().addImage(result)
      if (commonConfig.copyUrlAfterUpload) {
        try {
          if (commonConfig.customCopyContent) {
            await navigator.clipboard.writeText(commonConfig.customCopyContent.replace(/\$url/g, result.url))
          } else {
            await navigator.clipboard.writeText(result.url)
          }
          ElMessage.success('上传成功，地址已复制到剪贴板')
        } catch (e) {
          ElMessage.error('上传成功，但地址复制失败')
        }
      } else {
        ElMessage.success('上传成功')
      }
    } catch (e) {
      console.log(e)
      ElMessage.error('上传失败')
    }
  } else {
    ElMessage.warning('请先进行设置')
  }
  spinning.value = false
}

function rejectFile () {
  ElMessage.warning('不支持的文件类型！')
}

function paste (event: ClipboardEvent) {
  if (props.activeKey === 'home' && !spinning.value && !timeoutIndex.value) {
    timeoutIndex.value = setTimeout(() => {
      timeoutIndex.value = undefined
    }, 500)
    // todo ts fix
    const items: any = event.clipboardData && event.clipboardData.items
    let file
    if (items && items.length) {
      for (const item of items) {
        if (item.type.indexOf('image') !== -1) {
          file = item.getAsFile()
        }
      }
    }
    if (file) {
      customRequest({ file } as UploadRequestOption)
    } else {
      rejectFile()
      clearTimeout(timeoutIndex.value)
      timeoutIndex.value = undefined
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
}

:deep(.ant-upload-drag-icon) {
  [class^="i-"] {
    font-size: 4.8rem;
  }
}

.ant-spin-nested-loading {
  height: 100% !important;

  :deep(.ant-spin) {
    height: 100%;
    max-height: unset;
  }

  :deep(.ant-spin-container) {
    height: 100%;
  }
}

</style>
