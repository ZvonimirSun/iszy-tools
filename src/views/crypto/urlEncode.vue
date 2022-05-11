<template>
  <a-space direction="vertical">
    <a-textarea
      v-model:value="value"
      placeholder="转换的内容粘贴在这里"
      :auto-size="{ minRows: 5, maxRows: 8 }"
    />
    <a-space>
      <a-button
        type="primary"
        @click="encode"
      >
        UrlEncode编码
      </a-button>
      <a-button
        type="primary"
        @click="decode"
      >
        UrlDecode解码
      </a-button>
      <a-button
        type="link"
        @click="clear"
      >
        清空结果
      </a-button>
    </a-space>
  </a-space>
</template>

<script>
export default {
  name: 'URLEncode',
  data: () => ({
    mode: 'text',
    value: undefined
  }),
  methods: {
    encode () {
      if (this.value != null) {
        this.value = encodeURIComponent(this.value)
      }
    },
    decode () {
      if (this.value != null) {
        this.value = decodeURIComponent(this.value)
      }
    },
    clear () {
      this.value = undefined
    }
  }
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
