<script setup>
import { decodeGeoHash, encodeGeoHash } from '@/utils/geohash.js'

const data1 = ref('')
const data2 = ref('')

function encode() {
  try {
    data2.value = encodeGeoHash(data1.value)
  }
  catch (e) {
    ElMessage.error(`编码失败，${e.message}`)
  }
}

function decode() {
  try {
    const { latitude, longitude } = decodeGeoHash(data1.value)
    data2.value = `${latitude},${longitude}`
  }
  catch (e) {
    ElMessage.error(`解码失败，${e.message}`)
  }
}

function exchange() {
  const tmp = data1.value
  data1.value = data2.value
  data2.value = tmp
}
</script>

<template>
  <el-space
    direction="vertical"
    :fill="true"
    w-full
  >
    <el-input
      v-model="data1"
      type="textarea"
      :rows="5"
      placeholder="请输入要进行 GeoHash 编码或解码的字符"
    />
    <el-space style="flex-wrap: wrap">
      <el-button
        type="primary"
        @click="encode"
      >
        编码 (Encode)
      </el-button>
      <el-button @click="decode">
        解码 (Decode)
      </el-button>
      <el-button @click="exchange">
        ↕交换
      </el-button>
    </el-space>
    <el-input
      v-model="data2"
      type="textarea"
      :rows="5"
      readonly
      placeholder="GeoHash 编码或解码的结果"
    />
  </el-space>
</template>
