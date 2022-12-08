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
          点击上传图片
        </a-button>
      </a-upload>
      <a-button
        v-if="isUrl"
        @click="convert"
      >
        转换为Base64
      </a-button>
      <a-button
        v-if="dataUrl"
        @click="copy"
      >
        复制内容
      </a-button>
    </a-space>
    <a-textarea
      v-model:value="dataUrl"
      allow-clear
      :auto-size="{minRows: 5,maxRows: 10}"
      placeholder="请输入 图片地址 或 Base64格式的图片"
    />
    <template v-if="dataUrl">
      <a-typography-title :level="4">
        预览
      </a-typography-title>
      <img
        class="preview"
        :src="dataUrl"
        alt="preview"
      >
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { MessageApi } from 'ant-design-vue/es/message'
import type { AxiosStatic } from 'axios'

const dataUrl: Ref<string> = ref('')
const $axios: AxiosStatic = inject('$axios') as AxiosStatic

const isUrl = computed(() => {
  return dataUrl.value && (dataUrl.value.startsWith('http://') || dataUrl.value.startsWith('https://'))
})

function upload (img: File): false {
  const reader = new FileReader()
  reader.onloadend = () => {
    dataUrl.value = reader.result as string
  }
  reader.readAsDataURL(img)
  return false
}

async function copy () {
  try {
    await window.navigator.clipboard.writeText(dataUrl.value)
    ElMessage.success('复制成功')
  } catch (e) {
    ElMessage.error((e as Error)?.message)
  }
}

async function convert () {
  try {
    const res = await $axios.get(dataUrl.value, {
      responseType: 'blob'
    })
    const reader = new FileReader()
    reader.onloadend = () => {
      dataUrl.value = reader.result as string
    }
    reader.readAsDataURL(res.data)
  } catch (e) {
    ElMessage.error((e as Error)?.message)
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
