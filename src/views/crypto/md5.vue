<template>
  <a-space
    direction="vertical"
    style="width: 100%"
  >
    <a-textarea
      v-model:value="data1"
      :rows="5"
      placeholder="请输入要进行 MD5 编码的字符"
    />
    <a-typography-title :level="4">
      结果
    </a-typography-title>
    <a-textarea
      v-model:value="data2"
      :rows="5"
      readonly
      placeholder="MD5 编码的结果"
    />
  </a-space>
</template>

<script setup>
import MD5 from 'crypto-js/md5.js'

const data1 = ref('')
const data2 = ref('')

watch(data1, (val) => {
  if (!val) {
    data2.value = ''
  } else {
    data2.value = encode(val)
  }
})

function encode (val) {
  try {
    const tmp = MD5(val).toString()
    return `MD5 32位 大写: ${tmp.toUpperCase()}
MD5 32位 小写: ${tmp.toLowerCase()}
MD5 16位 大写: ${tmp.substring(8, 24).toUpperCase()}
MD5 16位 小写: ${tmp.substring(8, 24).toLowerCase()}`
  } catch (e) {
    this.$msg.error(e)
    return ''
  }
}

</script>

<style scoped lang="scss">
</style>
