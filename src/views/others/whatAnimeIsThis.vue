<template>
  <container>
    <Title :level="3">请选择要识别动漫截图</Title>
    <Upload :fileList="[]" :showUploadList="false" accept="image/*" :before-upload="beforeUpload">
      <Input readonly placeholder="点击这里上传图片" :value="fileName">
        <template #addonAfter>
          <Button block :disabled="!file || quota===0 || quota-quotaUsed<=0" @click.stop="start"><span v-if="loading"><Loading theme="outline"/>识别中</span><span
            v-else>开始识别</span></Button>
        </template>
      </Input>
    </Upload>
    <Paragraph>
      <blockquote>使用 trace.moe API，有使用次数限制。用户ID：
        <Text code>{{ id }}</Text>
        ，每月次数剩余：
        <Text code>{{ quota }}</Text>
        ，已使用次数：
        <Text code>{{ quotaUsed }}</Text>
      </blockquote>
    </Paragraph>
    <template v-if="file">
      <Divider/>
      <Title :level="3">预览</Title>
      <Image
        style="max-width: 100%"
        :src="file"
        fallback="data:image/png;base64,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"
      />
    </template>
    <template v-if="result.length>0">
      <Divider/>
      <Title :level="3">结果</Title>
      <template v-for="(item,index) in result" :key="index">
        <Divider/>
        <Descriptions :title="item.anilist.title.native + (item.episode ? ' EP#' + item.episode: '')" bordered size="small" layout="vertical">
          <Item label="罗马音">{{ item.anilist.title.romaji }}</Item>
          <Item label="文件名">{{ item.filename }}</Item>
          <Item label="相似度">{{ (item.similarity * 100).toFixed(2) + '%' }}</Item>
          <Item label="匹配位置">
            <Text code>{{ secondToDate(item.from) }}</Text>
            ~
            <Text code>{{ secondToDate(item.to) }}</Text>
          </Item>
          <Item label="预览" :span="3">
            <video controls style="max-width: 100%"
                   :src="item.video"
                   :poster="item.image"></video>
          </Item>
        </Descriptions>
      </template>
    </template>
  </container>
</template>

<script>
import { Container } from '@/components'
import { Input, Upload, Typography, Button, Divider, Image, Descriptions } from 'ant-design-vue'
import { Loading } from '@icon-park/vue-next'

const { Item } = Descriptions
const { Title, Paragraph, Text } = Typography

export default {
  name: 'what_anime_is_this',
  components: {
    Container,
    Input,
    Upload,
    Title,
    Button,
    Divider,
    Image,
    Paragraph,
    Text,
    Descriptions,
    Item,
    Loading
  },
  data: () => ({
    file: '',
    img: undefined,
    fileName: '',
    id: '',
    quota: 0,
    quotaUsed: 0,
    loading: false,

    result: []
  }),
  mounted () {
    this.checkTimes()
  },
  methods: {
    beforeUpload (img) {
      if (img.size / 1024 / 1024 >= 10) {
        this.$msg.error('图片大小不能超过10MB!')
        return false
      }
      const reader = new FileReader()
      reader.onload = () => {
        this.img = img
        this.fileName = img.name
        this.file = reader.result
      }
      reader.readAsDataURL(img)
      return false
    },
    async start () {
      try {
        this.loading = true
        const formData = new FormData()
        formData.append('image', this.img)
        const res = await this.$axios.post('https://api.trace.moe/search?anilistInfo', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.loading = false
        await this.checkTimes()
        if (!res.data.error) {
          this.result = res.data.result || []
        }
      } catch (e) {
        this.loading = false
        this.$msg.error('请求失败，请检查网络连接')
      }
    },
    async checkTimes () {
      try {
        const res = await this.$axios.get('https://api.trace.moe/me')
        this.id = res.data.id || ''
        this.quotaUsed = res.data.quotaUsed || 0
        this.quota = res.data.quota || 0
      } catch (e) {
        this.$msg.error('请求失败，请检查网络连接')
      }
    },
    secondToDate (seconds) {
      const h = Math.floor(seconds / 3600)
      const m = Math.floor((seconds / 60 % 60))
      const s = (seconds % 60).toFixed(2)
      return h + ':' + m + ':' + s
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
</style>
