<template>
  <el-space
    direction="vertical"
    w-full
    :fill="true"
  >
    <el-input
      v-model="data1"
      type="textarea"
      :rows="5"
      placeholder="请输入要进行 Base64 编码或解码的字符"
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
      placeholder="Base64 编码或解码的结果"
    />
  </el-space>
</template>

<script setup lang="ts">
const data1 = ref('')
const data2 = ref('')

function encode () {
  data2.value = btoa(encodeURIComponent(data1.value).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode(parseInt('0x' + p1))
  }))
}

function decode () {
  try {
    data2.value = decodeURIComponent(atob(data1.value).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  } catch (e) {
    ElMessage.error('解码失败')
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
