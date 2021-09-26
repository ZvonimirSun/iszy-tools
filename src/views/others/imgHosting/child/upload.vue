<template>
  <Dragger :fileList="[]" accept="image/bmp,image/gif,image/jpeg,image/png,image/webp"
           @reject="rejectFile" :showUploadList="false" :customRequest="customRequest">
    <p class="ant-upload-drag-icon">
      <UploadOne/>
    </p>
    <p class="ant-upload-text">拖拽图片到这里上传<br/>或者点击选择文件上传</p>
    <p class="ant-upload-hint">
      暂时仅支持单文件上传。
    </p>
  </Dragger>
</template>

<script>
import * as uploaders from '../uploader'
import { UploadOne } from '@icon-park/vue-next'
import { Upload } from 'ant-design-vue'
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
    UploadOne
  },
  computed: {
    ...mapGetters(['config']),
    ...mapState(['uploader', 'commonConfig'])
  },
  methods: {
    ...mapActions(['addImage']),
    async customRequest (val) {
      if (this.uploader && this.config(this.uploader)) {
        if (this.commonConfig.renameTimeStamp) {
          const tmp = val.file.name || ''
          val.file = new File([val.file], ((new Date().getTime()) + tmp.substring(tmp.lastIndexOf('.'))).toLowerCase(), {
            type: val.file.type,
            lastModified: val.file.lastModified
          })
        }
        try {
          this.addImage(await uploaders[this.uploader].handle(this.config(this.uploader), val.file))
          this.$msg.success('上传成功')
          this.$emit('success')
        } catch (e) {
          console.log(e)
          this.$msg.error('上传失败')
        }
      } else {
        this.$msg.warn('请先进行设置')
      }
    },
    rejectFile () {
      this.$msg.warning('不支持的文件类型！')
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep(.ant-upload-drag-icon) {
  .i-icon {
    font-size: 4.8rem;
  }
}
</style>
