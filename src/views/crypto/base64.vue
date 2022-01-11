<template>
  <Space direction="vertical" style="width: 100%">
    <TextArea :rows="5" v-model:value="data1" placeholder="请输入要进行 Base64 编码或解码的字符"/>
    <Space style="flex-wrap: wrap">
      <Button type="primary" @click="encode">编码 (Encode)</Button>
      <Button @click="decode">解码 (Decode)</Button>
      <Button @click="exchange">↕交换</Button>
    </Space>
    <TextArea :rows="5" v-model:value="data2" readonly placeholder="Base64 编码或解码的结果"/>
  </Space>
</template>

<script setup>
import { Input, Space, Button } from 'ant-design-vue'
import { ref } from 'vue'
import Base64 from 'crypto-js/enc-base64.js'
import Utf8 from 'crypto-js/enc-utf8.js'

const { TextArea } = Input

const data1 = ref('')
const data2 = ref('')
const data = ref(null)

function encode () {
  data2.value = Base64.stringify(Utf8.parse(data1.value))
}

function decode () {
  data2.value = Base64.parse(data1.value).toString(Utf8)
}

function exchange () {
  const tmp = data1.value
  data1.value = data2.value
  data2.value = tmp
}
</script>
