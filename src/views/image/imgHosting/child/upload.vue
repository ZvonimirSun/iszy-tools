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
import $msg from 'ant-design-vue/es/message'

const props = defineProps({
  activeKey: {
    type: String,
    default: ''
  }
})

const spinning = ref(false)
const timeoutIndex = ref()

const config = computed(() => useImgHostingStore().config)
const uploader = computed(() => useImgHostingStore().uploader)
const commonConfig = computed(() => useImgHostingStore().commonConfig)

onMounted(() => {
  document.addEventListener('paste', paste)
})

onBeforeUnmount(() => {
  document.removeEventListener('paste', paste)
})

async function customRequest ({ file } = {} as {file: File}) {
  spinning.value = true
  if (uploader.value && config.value(uploader.value)) {
    if (commonConfig.value.renameTimeStamp) {
      const tmp = file.name || ''
      file = new File([file], ((new Date().getTime()) + tmp.substring(tmp.lastIndexOf('.'))).toLowerCase(), {
        type: file.type,
        lastModified: file.lastModified
      })
    }
    try {
      const result = await uploaders[uploader.value].handle(config.value(uploader.value), file)
      useImgHostingStore().addImage(result)
      if (commonConfig.value.copyUrlAfterUpload) {
        try {
          if (commonConfig.value.customCopyContent) {
            await navigator.clipboard.writeText(commonConfig.value.customCopyContent.replace(/\$url/g, result.url))
          } else {
            await navigator.clipboard.writeText(result.url)
          }
          $msg.success('上传成功，地址已复制到剪贴板')
        } catch (e) {
          $msg.error('上传成功，但地址复制失败')
        }
      } else {
        $msg.success('上传成功')
      }
    } catch (e) {
      console.log(e)
      $msg.error('上传失败')
    }
  } else {
    $msg.warn('请先进行设置')
  }
  spinning.value = false
}

function rejectFile () {
  $msg.warning('不支持的文件类型！')
}

function paste (event: ClipboardEvent) {
  if (props.activeKey === 'home' && !spinning.value && !timeoutIndex.value) {
    timeoutIndex.value = setTimeout(() => {
      timeoutIndex.value = undefined
    }, 500)
    const items: DataTransferItemList | null = event.clipboardData && event.clipboardData.items
    let file
    if (items && items.length) {
      for (const item of items) {
        if (item.type.indexOf('image') !== -1) {
          file = item.getAsFile()
        }
      }
    }
    if (file) {
      customRequest({ file })
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
