<template>
  <Spin :spinning="spinning">
    <Dragger :fileList="[]" accept="image/bmp,image/gif,image/jpeg,image/png,image/webp"
             @reject="rejectFile" :showUploadList="false" :customRequest="customRequest">
      <p class="ant-upload-drag-icon">
        <UploadOne/>
      </p>
      <p class="ant-upload-text">直接粘贴图片或拖拽图片到这里上传<br/>或者直接点击选择文件上传</p>
      <p class="ant-upload-hint">
        暂时仅支持单文件上传。
      </p>
    </Dragger>
  </Spin>
</template>

<script>
import * as uploaders from '../uploader'
import { UploadOne } from '@icon-park/vue-next'
import { Upload, Spin } from 'ant-design-vue'
import { createNamespacedHelpers } from 'vuex'

const { Dragger } = Upload
const {
  mapGetters,
  mapState,
  mapActions
} = createNamespacedHelpers('imgHosting')

export default {
  name: 'upload',
  components: {
    Dragger,
    UploadOne,
    Spin
  },
  props: ['activeKey'],
  data: () => ({
    spinning: false
  }),
  computed: {
    ...mapGetters(['config']),
    ...mapState(['uploader', 'commonConfig'])
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
          try {
            await navigator.clipboard.writeText(result.url)
            this.$msg.success('上传成功，地址已复制到剪贴板')
          } catch (e) {
            this.$msg.error('上传成功，但地址复制失败')
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
      if (this.activeKey === 'home') {
        const items = event.clipboardData && event.clipboardData.items
        let file
        if (items && items.length) {
          if (items[0].type.indexOf('image') !== -1) {
            file = items[0].getAsFile()
            this.customRequest({ file })
          } else {
            this.rejectFile()
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}

::v-deep(.ant-upload-drag-icon) {
  .i-icon {
    font-size: 4.8rem;
  }
}

.ant-spin-nested-loading {
  height: 100% !important;

  ::v-deep(.ant-spin) {
    height: 100%;
    max-height: unset;
  }

  ::v-deep(.ant-spin-container) {
    height: 100%;
  }
}

</style>
