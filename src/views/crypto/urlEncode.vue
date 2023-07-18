<template>
  <el-space
    direction="vertical"
    w-full
    :fill="true"
  >
    <el-input
      v-model="value"
      type="textarea"
      placeholder="转换的内容粘贴在这里"
      :autosize="{ minRows: 5, maxRows: 8 }"
    />
    <el-space>
      <el-button
        type="primary"
        @click="encode"
      >
        UrlEncode编码
      </el-button>
      <el-button
        type="primary"
        @click="decode"
      >
        UrlDecode解码
      </el-button>
      <el-button
        @click="revert"
      >
        交换
      </el-button>
      <el-button
        link
        type="primary"
        @click="clear"
      >
        清空结果
      </el-button>
    </el-space>
    <el-input
      v-model="result"
      type="textarea"
      placeholder="转换的内容粘贴在这里"
      :autosize="{ minRows: 5, maxRows: 8 }"
    />
  </el-space>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

const value: Ref<string> = ref('')
const result: Ref<string> = ref('')

function encode () {
  result.value = encodeURIComponent(value.value)
}
function decode () {
  result.value = decodeURIComponent(value.value)
}
function revert () {
  const tmp = value.value
  value.value = result.value
  result.value = tmp
}
function clear () {
  value.value = ''
  result.value = ''
}
</script>

<style scoped lang="scss">
.ant-space-vertical {
  width: 100%;
}

.ant-btn-group {
  flex-flow: row wrap;

  .ant-btn {
    margin-bottom: 5px;

    @media (max-width: 450px) {
      padding: 0 8px;
    }
  }
}
</style>
