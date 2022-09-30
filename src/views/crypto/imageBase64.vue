<template>
  <div class="wrapper">
    <a-space>
      <a-upload
        :file-list="[]"
        :show-upload-list="false"
        accept="image/*"
        :before-upload="upload"
      >
        <a-button type="primary">
          点击上传
        </a-button>
      </a-upload>
      <a-button
        v-if="file"
        @click="copy"
      >
        复制
      </a-button>
    </a-space>
    <a-typography-paragraph v-if="file">
      <pre>{{ file }}</pre>
    </a-typography-paragraph>
    <template v-if="file">
      <a-typography-title :level="4">
        预览
      </a-typography-title>
      <img
        class="preview"
        :src="file"
        alt="preview"
      >
    </template>
  </div>
</template>

<script setup>
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
.wrapper {
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
