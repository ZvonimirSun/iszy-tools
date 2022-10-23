<template>
  <a-space
    direction="vertical"
    style="width: 100%"
  >
    <a-textarea
      v-model:value="data1"
      :rows="5"
      placeholder="请输入要进行 GeoHash 编码或解码的字符"
    />
    <a-space style="flex-wrap: wrap">
      <a-button
        type="primary"
        @click="encode"
      >
        编码 (Encode)
      </a-button>
      <a-button @click="decode">
        解码 (Decode)
      </a-button>
      <a-button @click="exchange">
        ↕交换
      </a-button>
    </a-space>
    <a-textarea
      v-model:value="data2"
      :rows="5"
      readonly
      placeholder="GeoHash 编码或解码的结果"
    />
  </a-space>
</template>

<script setup>
import { encodeGeoHash, decodeGeoHash } from '@/utils/geohash.js'
const data1 = ref('')
const data2 = ref('')
const msg = inject('$msg')

function encode () {
  try {
    data2.value = encodeGeoHash(data1.value)
  } catch (e) {
    msg.error(`编码失败，${e.message}`)
  }
}

function decode () {
  try {
    data2.value = JSON.stringify(decodeGeoHash(data1.value))
  } catch (e) {
    msg.error(`解码失败，${e.message}`)
  }
}

function exchange () {
  const tmp = data1.value
  data1.value = data2.value
  data2.value = tmp
}
</script>

<style lang="scss">
textarea.ant-input {
  resize: none;
}
</style>
