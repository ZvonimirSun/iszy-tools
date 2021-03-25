<template>
  <div class="container">
    <a-row v-if="setting">
      <a-col :xs="24" :sm="20">
        <a-form :label-col="{xs: 24, sm: 6, md: 5, xl: 3}">
          <a-form-item label="上传方式" :wrapperCol="{sm: 6, md: 5, xl: 3}">
            <a-select v-model:value="mode" compact>
              <a-select-option value="aliOss">阿里云 OSS</a-select-option>
            </a-select>
          </a-form-item>
          <a-divider/>
          <a-form-item label="设定KeyId" :wrapperCol="{sm: 12, md: 9, xl: 6}" :required="true">
            <a-input v-model:value="aliOssOptions.accessKey" placeholder="AccessKeyId" allow-clear/>
          </a-form-item>
          <a-form-item label="设定KeySecret" :wrapperCol="{sm: 11, md: 8, xl: 5}" :required="true">
            <a-input-password v-model:value="aliOssOptions.secretKey" placeholder="AccessKeySecret" allow-clear/>
          </a-form-item>
          <a-form-item label="设定存储空间" :wrapperCol="{sm: 8, md: 6, xl: 4}" :required="true">
            <a-input v-model:value="aliOssOptions.bucket" placeholder="Bucket" allow-clear/>
          </a-form-item>
          <a-form-item label="确认存储区域" :wrapperCol="{sm: 18, md: 12, xl: 8}" :required="true">
            <a-input v-model:value="aliOssOptions.endpoint" placeholder="例如oss-cn-shanghai" allow-clear/>
          </a-form-item>
          <a-form-item label="指定存储路径" :wrapperCol="{sm: 18, md: 12, xl: 8}">
            <a-input v-model:value="aliOssOptions.path" placeholder="例如img/" allow-clear/>
          </a-form-item>
          <a-form-item label="设定网址后缀" :wrapperCol="{sm: 18, md: 12, xl: 8}">
            <a-input v-model:value="aliOssOptions.addon" placeholder="例如?x-oss-process=xxx" allow-clear/>
          </a-form-item>
          <a-form-item label="设定自定义域名" :wrapperCol="{sm: 18, md: 12, xl: 8}">
            <a-input v-model:value="aliOssOptions.domain" placeholder="例如https://xxx.com" allow-clear/>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :xs="24" :sm="4">
        <a-button type="primary" @click="changeSettings" style="float: right;margin-bottom: 16px;">保存</a-button>
      </a-col>
    </a-row>
    <a-row v-else>
      <a-col span="24">
        <a-button shape="circle" style="float: right;margin: 16px;" @click="changeSettings">
          <template #icon>
            <SettingOutlined/>
          </template>
        </a-button>
      </a-col>
    </a-row>

    <a-upload-dragger
      v-model:fileList="fileList"
      accept="image/*"
      :action="host"
      :method="httpMethod"
      :disabled="!isValid"
      :headers="httpHeaders"
      @beforeUpload="beforeUpload"
      @reject="rejectFile"
    >
      <div class="imgUploaderContent">
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">点击或拖拽图片到这里上传</p>
      </div>
    </a-upload-dragger>
  </div>
</template>

<script>
import { message } from 'ant-design-vue'
import { InboxOutlined, SettingOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    InboxOutlined, SettingOutlined
  },
  name: 'imgHosting',
  data: () => ({
    mode: 'aliOss',
    setting: false,
    fileList: [],
    aliOssOptions: {
      bucket: '',
      endpoint: '',
      accessKey: '',
      secretKey: ''
    }
  }),
  mounted () {
  },
  methods: {
    changeSettings () {
      this.setting = !this.setting
    },
    rejectFile () {
      message.warning('不支持的文件类型！')
    },
    async beforeUpload (file) {
      debugger
      console.log(file)
    }
  },
  watch: {
  },
  computed: {
    isValid: function () {
      switch (this.mode) {
        case 'aliOss':
          return Boolean(this.aliOssOptions.bucket !== '' && this.aliOssOptions.endpoint !== '' && this.aliOssOptions.accessKey !== '' && this.aliOssOptions.secretKey !== '')
        default:
          return false
      }
    },
    host: function () {
      if (this.isValid) {
        switch (this.mode) {
          case 'aliOss':
            return 'https://' + this.aliOssOptions.bucket + '.' + this.aliOssOptions.endpoint + '.aliyuncs.com'
          default:
            break
        }
      }
      return ''
    },
    httpMethod: function () {
      if (this.isValid) {
        switch (this.mode) {
          case 'aliOss':
            return 'post'
          default:
            break
        }
      }
      return 'post'
    },
    httpHeaders: function () {
      if (this.isValid) {
        switch (this.mode) {
          case 'aliOss':
            return {
              OSSAccessKeyId: this.aliOssOptions.accessKey
            }
          default:
            break
        }
      }
      return {}
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
}

.imgUploaderContent {
  user-select: none;
  height: 250px;
  padding-top: 78px;
}

.ant-upload {
  cursor: pointer;
}
</style>
