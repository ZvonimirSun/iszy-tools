<template>
  <container>
    <Title :level="3">转换</Title>
    <Paragraph>
      <blockquote>实时计算，直接输入即可</blockquote>
    </Paragraph>
    <Form layout="vertical">
      <FormItem label="AV号">
        <InputNumber v-model:value="aid" @change="enc(aid)"/>
      </FormItem>
      <FormItem label="BV号">
        <Input v-model:value="bvid" @change="dec(bvid)"/>
      </FormItem>
    </Form>
    <Title :level="3">信息</Title>
    <Space direction="vertical">
      <Link :href="'https://www.bilibili.com/video/av' + aid">{{ 'https://www.bilibili.com/video/av' + aid }}</Link>
      <Link :href="'https://www.bilibili.com/video/' + bvid">{{ 'https://www.bilibili.com/video/' + bvid }}</Link>
    </Space>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { Form, Input, InputNumber, Typography, Space } from 'ant-design-vue'

const { Item: FormItem } = Form
const { Title, Paragraph, Link } = Typography

export default {
  name: 'bilibiliBv2av',
  components: {
    Container,
    Input,
    InputNumber,
    Form,
    FormItem,
    Title,
    Paragraph,
    Link,
    Space
  },
  data: () => ({
    aid: '19390801',
    bvid: '',

    table: 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF',
    tr: {},
    s: [11, 10, 3, 8, 4, 6],
    xor: 177451812,
    add: 8728348608
  }),
  mounted () {
    this.init()
  },
  methods: {
    init () {
      for (let i = 0; i < 58; i++) {
        this.tr[this.table[i]] = i
      }
      this.enc(this.aid)
    },
    dec (x) {
      try {
        let r = 0
        for (let i = 0; i < 6; i++) {
          r += this.tr[x[this.s[i]]] * 58 ** i
        }
        this.aid = (r - this.add) ^ this.xor
      } catch (e) {
        this.aid = ''
      }
    },
    enc (x) {
      try {
        x = parseInt(x)
        if (!isNaN(x)) {
          x = (x ^ this.xor) + this.add
          const r = ['B', 'V', '1', ' ', ' ', '4', ' ', '1', ' ', '7', ' ', ' ']
          for (let i = 0; i < 6; i++) {
            r[this.s[i]] = this.table[Math.floor(x / 58 ** i) % 58]
          }
          this.bvid = r.join('')
        } else {
          this.bvid = ''
        }
      } catch (e) {
        this.bvid = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ant-input-number {
  width: 100%;
}
</style>
