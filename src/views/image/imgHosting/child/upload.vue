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

<script>
import * as uploaders from '../uploader/index.js'

const {
  mapGetters,
  mapActions
} = createNamespacedHelpers('imgHosting')

export default {
  name: 'ImgHostingUpload',
  props: {
    activeKey: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    spinning: false,
    timeoutIndex: undefined
  }),
  computed: {
    ...mapGetters(['config', 'uploader', 'commonConfig'])
  },
  mounted () {
    document.addEventListener('paste', this.paste.bind(this))
  },
  beforeUnmount () {
    document.removeEventListener('paste', this.paste.bind(this))
  },
  methods: {
    ...mapActions(['addImage']),
    async customRequest ({ file }) {
      this.spinning = true
      if (this.uploader && this.config(this.uploader)) {
        if (this.commonConfig.renameTimeStamp) {
          const tmp = file.name || ''
          file = new File([file], ((new Date().getTime()) + tmp.substring(tmp.lastIndexOf('.'))).toLowerCase(), {
            type: file.type,
            lastModified: file.lastModified
          })
        }
        try {
          const result = await uploaders[this.uploader].handle(this.config(this.uploader), file)
          this.addImage(result)
          if (this.commonConfig.copyUrlAfterUpload) {
            try {
              if (this.commonConfig.customCopyContent) {
                await navigator.clipboard.writeText(this.commonConfig.customCopyContent.replace(/\$url/g, result.url))
              } else {
                await navigator.clipboard.writeText(result.url)
              }
              this.$msg.success('上传成功，地址已复制到剪贴板')
            } catch (e) {
              this.$msg.error('上传成功，但地址复制失败')
            }
          } else {
            this.$msg.success('上传成功')
          }
        } catch (e) {
          console.log(e)
          this.$msg.error('上传失败')
        }
      } else {
        this.$msg.warn('请先进行设置')
      }
      this.spinning = false
    },
    rejectFile () {
      this.$msg.warning('不支持的文件类型！')
    },
    paste (event) {
      if (this.activeKey === 'home' && !this.spinning && !this.timeoutIndex) {
        this.timeoutIndex = setTimeout(() => {
          this.timeoutIndex = undefined
        }, 500)
        const items = event.clipboardData && event.clipboardData.items
        let file
        if (items && items.length) {
          for (const item of items) {
            if (item.type.indexOf('image') !== -1) {
              file = item.getAsFile()
            }
          }
        }
        if (file) {
          this.customRequest({ file })
        } else {
          this.rejectFile()
          clearTimeout(this.timeoutIndex)
          this.timeoutIndex = undefined
        }
      }
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
