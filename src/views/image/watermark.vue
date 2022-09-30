<template>
  <a-typography-paragraph>
    <blockquote>全部过程均在本地进行，本工具可离线使用</blockquote>
  </a-typography-paragraph>
  <a-form layout="vertical">
    <a-form-item label="请选择要添加水印的图片">
      <a-upload
        :file-list="[]"
        :show-upload-list="false"
        accept="image/*"
        :before-upload="upload"
      >
        <a-input
          readonly
          placeholder="点击这里上传图片"
          :value="fileName"
        >
          <template #addonAfter>
            <a-button
              block
              :disabled="!file"
              :loading="loading"
              @click.stop="addWatermark"
            >
              <span v-if="loading">处理中</span>
              <span v-else>开始处理</span>
            </a-button>
          </template>
        </a-input>
      </a-upload>
    </a-form-item>
    <a-form-item label="请输入水印文字">
      <a-input
        v-model:value="options.text"
        placeholder="仅供 xxx 验证使用"
      />
    </a-form-item>
    <a-form-item label="字体大小">
      <a-slider
        v-model:value="options.fontSize"
        :max="30"
        :min="10"
      />
    </a-form-item>
    <a-form-item label="透明度">
      <a-slider
        v-model:value="options.alpha"
        :max="10"
        :min="1"
        :step="0.1"
      />
    </a-form-item>
    <a-form-item label="旋转角度">
      <a-slider
        v-model:value="options.rotate"
        :max="365"
        :min="0"
      />
    </a-form-item>
    <a-form-item label="文本间距">
      <a-slider
        v-model:value="options.width"
        :max="100"
        :min="0"
      />
    </a-form-item>
    <a-form-item label="文字颜色">
      <Compact v-model="color" />
    </a-form-item>
    <a-form-item
      v-show="file"
      label="预览"
    >
      <div
        ref="preview"
        class="preview"
      >
        <img
          :src="file"
          alt="preview"
        >
        <div
          class="watermark"
          :style="{ background: `url(${svg})` }"
        />
      </div>
    </a-form-item>
  </a-form>
</template>

<script>
import { Buffer } from 'buffer'
import { Compact } from '@ckpack/vue-color'
import domToImage from 'dom-to-image'
import createFile from '@/utils/createFile'

export default {
  name: 'WatermarkTool',
  components: {
    Compact
  },
  data: () => ({
    file: '',
    fileName: '',
    loading: false,

    options: {
      fontSize: 14,
      text: '仅供 xxx 验证使用',
      alpha: 5,
      color: '#000000',
      rotate: 23,
      width: 10
    }
  }),
  computed: {
    color: {
      get () {
        return {
          hex: this.options.color
        }
      },
      set (val) {
        if (val && val.hex) {
          this.options.color = val.hex
        }
      }
    },
    svg () {
      let width = this.options.fontSize * this.options.text.length
      width = width + (this.options.width / 100) * width
      const svgText = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${width}px">
                <text x="50%" y="50%"
                    alignment-baseline="middle"
                    text-anchor="middle"
                    stroke="${this.options.color}"
                    opacity="${this.options.alpha / 10}"
                    transform="translate(${width / 2}, ${width / 2}) rotate(${
        this.options.rotate
      }) translate(-${width / 2}, -${width / 2})"
                    font-weight="100"
                    font-size="${this.options.fontSize}"
                    font-family="microsoft yahe"
                    >
                    ${this.options.text}
                </text>
            </svg>`
      return (
        'data:image/svg+xml;base64,' +
        Buffer.from(svgText).toString('base64')
      )
    }
  },
  methods: {
    upload (img) {
      const reader = new FileReader()
      reader.onload = () => {
        this.fileName = img.name
        this.file = reader.result
      }
      reader.readAsDataURL(img)
      return false
    },
    async addWatermark () {
      this.loading = true
      try {
        const result = await domToImage.toBlob(this.$refs.preview, {})
        createFile(result, 'watermark.png')
      } catch (e) {
        this.$msg.error('生成失败')
      }
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.ant-upload) {
  width: 100% !important;
}

:deep(.ant-input-group-addon) {
  padding: 0;
  border: unset;
}

.ant-form-item {
  margin-bottom: .8rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.preview {
  width: 100%;
  position: relative;

  img {
    max-width: 100%;
  }

  .watermark {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
