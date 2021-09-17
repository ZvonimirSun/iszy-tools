<template>
  <container>
    <Paragraph>
      <blockquote>全部过程均在本地进行，本工具可离线使用</blockquote>
    </Paragraph>
    <Form layout="vertical">
      <FormItem label="请选择要添加水印的图片">
        <Upload :fileList="[]" :showUploadList="false" accept="image/*" :before-upload="upload">
          <Input readonly placeholder="点击这里上传图片" :value="fileName">
            <template #addonAfter>
              <Button block :disabled="!file" @click.stop="addWatermark" :loading="loading">
                <span v-if="loading">处理中</span>
                <span v-else>开始处理</span>
              </Button>
            </template>
          </Input>
        </Upload>
      </FormItem>
      <FormItem label="请输入水印文字">
        <Input placeholder="仅供 xxx 验证使用" v-model:value="options.text"/>
      </FormItem>
      <FormItem label="字体大小">
        <Slider :max="30" :min="10" v-model:value="options.fontSize"/>
      </FormItem>
      <FormItem label="透明度">
        <Slider :max="10" :min="1" :step="0.1" v-model:value="options.alpha"/>
      </FormItem>
      <FormItem label="旋转角度">
        <Slider :max="365" :min="0" v-model:value="options.rotate"/>
      </FormItem>
      <FormItem label="文本间距">
        <Slider :max="100" :min="0" v-model:value="options.width"/>
      </FormItem>
      <FormItem label="文字颜色">
        <Compact v-model="color"/>
      </FormItem>
      <FormItem label="预览" v-show="file">
        <div class="preview" ref="preview">
          <img :src="file" alt="preview">
          <div class="watermark" :style="{ background: `url(${svg})` }"></div>
        </div>
      </FormItem>
    </Form>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { Buffer } from 'buffer'
import { Input, Upload, Button, Form, Slider, Typography } from 'ant-design-vue'
import { Compact } from '@ckpack/vue-color'
import domToImage from 'dom-to-image'
import createFile from '@/utils/createFile.js'

const { Paragraph } = Typography
const { Item: FormItem } = Form

export default {
  name: 'watermark',
  components: {
    Container,
    Input,
    Upload,
    Button,
    Form,
    FormItem,
    Slider,
    Compact,
    Paragraph
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
