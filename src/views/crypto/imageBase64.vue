<template>
  <div class="container">
    <Space>
      <Upload
        :file-list="[]"
        :show-upload-list="false"
        accept="image/*"
        :before-upload="upload"
      >
        <Button type="primary">
          点击上传
        </Button>
      </Upload>
      <Button
        v-if="file"
        @click="copy"
      >
        复制
      </Button>
    </Space>
    <Paragraph v-if="file">
      <pre>{{ file }}</pre>
    </Paragraph>
    <template v-if="file">
      <Title :level="4">
        预览
      </Title>
      <img
        class="preview"
        :src="file"
        alt="preview"
      >
    </template>
  </div>
</template>

<script setup>
import { Typography, Upload, Button, Space } from 'ant-design-vue'
import { ref, inject } from 'vue'

const { Paragraph, Title } = Typography

const file = ref('')
const $msg = inject('$msg')

function upload (img) {
  const reader = new FileReader()
  reader.onload = () => {
    file.value = reader.result
  }
  reader.readAsDataURL(img)
  return false
}

async function copy () {
  try {
    await window.navigator.clipboard.writeText(file.value)
    $msg.success('复制成功')
  } catch (e) {
    $msg.error(e)
  }
}
</script>

<style scoped lang="scss">
.container {
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;
}

.ant-input-textarea {
  margin: 0;
  resize: none;
}

.preview {
  margin: 0;
  flex: 1;
  overflow: auto;
  object-fit: scale-down;
  width: 100%;
}

:deep(.ant-typography pre) {
  word-break: break-all;
  max-height: 30rem;
  margin: 0;
}

.ant-typography {
  margin: 0 !important;
}
</style>
