<template>
  <el-upload
    style="height: 100%"
    drag
    accept="image/bmp,image/gif,image/jpeg,image/png,image/webp"
    :show-file-list="false"
    :before-upload="customRequest"
  >
    <div class="el-icon--upload">
      <span class="i-icon-park-upload-one?mask" />
    </div>
    <div class="el-upload__text">
      直接粘贴图片或拖拽图片到这里上传<br>或者<em>直接点击选择文件上传</em>
    </div>
    <div class="el-upload__tip">
      暂时仅支持单文件上传。
    </div>
  </el-upload>
</template>

<script lang="ts" setup>
import * as uploaders from '../uploader/index'
import { AliOssConfig } from '../uploader/index'

const props = withDefaults(defineProps<{
  activeKey: string
}>(), {
  activeKey: ''
})

const spinning = ref(false)
const timeoutIndex = ref<number>()

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

async function customRequest (file: File) {
  let tmpFile = file
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
  return false
}

function rejectFile () {
  ElMessage.warning('不支持的文件类型！')
}

function paste (event: ClipboardEvent) {
  if (props.activeKey === 'home' && !spinning.value && !timeoutIndex.value) {
    timeoutIndex.value = window.setTimeout(() => {
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
      customRequest(file)
    } else {
      rejectFile()
      clearTimeout(timeoutIndex.value)
      timeoutIndex.value = undefined
    }
  }
}
</script>

<style scoped lang="scss">

:deep(.el-upload) {
  height: 100%;

  .el-upload-dragger {
    height: 100%;
  }

  .el-icon--upload {
    [class^="i-"] {
      font-size: 4.8rem;
      color: var(--el-text-color-placeholder)
    }
  }
}
</style>
