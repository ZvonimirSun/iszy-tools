<template>
  <a-typography-title :level="3">
    转换
  </a-typography-title>
  <a-typography-paragraph>
    <blockquote>实时计算，直接输入即可</blockquote>
  </a-typography-paragraph>
  <el-form layout="vertical">
    <el-form-item label="AV号">
      <el-input-number
        v-model="aid"
        controls-position="right"
        @change="enc(aid)"
      />
    </el-form-item>
    <el-form-item label="BV号">
      <el-input
        v-model="bvid"
        @change="dec(bvid)"
      />
    </el-form-item>
  </el-form>
  <a-typography-title :level="3">
    信息
  </a-typography-title>
  <el-space
    direction="vertical"
    alignment="normal"
  >
    <a-typography-link :href="'https://www.bilibili.com/video/av' + aid">
      {{ 'https://www.bilibili.com/video/av' + aid }}
    </a-typography-link>
    <a-typography-link :href="'https://www.bilibili.com/video/' + bvid">
      {{ 'https://www.bilibili.com/video/' + bvid }}
    </a-typography-link>
  </el-space>
</template>

<script>
export default {
  name: 'BilibiliBv2av',
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
