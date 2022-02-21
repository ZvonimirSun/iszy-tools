<template>
  <Space
    direction="vertical"
    style="width: 100%"
  >
    <TextArea
      v-model:value="data1"
      :rows="5"
      placeholder="请输入要进行 Base64 编码或解码的字符"
    />
    <Space style="flex-wrap: wrap">
      <Button
        type="primary"
        @click="encode"
      >
        编码 (Encode)
      </Button>
      <Button @click="decode">
        解码 (Decode)
      </Button>
      <Button @click="exchange">
        ↕交换
      </Button>
    </Space>
    <TextArea
      v-model:value="data2"
      :rows="5"
      readonly
      placeholder="Base64 编码或解码的结果"
    />
  </Space>
</template>

<script setup>
import { Input, Space, Button } from 'ant-design-vue'
import { ref, inject } from 'vue'

const { TextArea } = Input

const data1 = ref('')
const data2 = ref('')
const msg = inject('$msg')

function encode () {
  data2.value = btoa(encodeURIComponent(data1.value).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1)
  }))
}

function decode () {
  try {
    data2.value = decodeURIComponent(atob(data1.value).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  } catch (e) {
    msg.error('解码失败')
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
