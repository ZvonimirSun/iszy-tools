<template>
  <div class="wrapper">
    <el-space>
      <el-upload
        :file-list="[]"
        :show-file-list="false"
        accept="image/*"
        :before-upload="upload"
      >
        <el-button type="primary">
          点击上传图片
        </el-button>
      </el-upload>
      <el-button
        v-if="isUrl"
        @click="convert"
      >
        转换为Base64
      </el-button>
      <el-button
        v-if="dataUrl"
        @click="copy"
      >
        复制内容
      </el-button>
    </el-space>
    <el-input
      v-model="dataUrl"
      type="textarea"
      allow-clear
      :autosize="{minRows: 5,maxRows: 10}"
      placeholder="请输入 图片地址 或 Base64格式的图片"
    />
    <template v-if="dataUrl">
      <a-typography-title :level="4">
        预览
      </a-typography-title>
      <img
        ref="imgPreview"
        class="preview"
        :src="dataUrl"
        alt="preview"
        :style="{
          width: imageSize.width ? imageSize.width : '',
          height: imageSize.height ? imageSize.height : ''
        }"
        @load="onImagePreview"
      >
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import type { AxiosStatic } from 'axios'

const dataUrl: Ref<string> = ref('')
const $axios: AxiosStatic = inject('$axios') as AxiosStatic
const imgPreview: Ref<HTMLImageElement> = ref() as Ref<HTMLImageElement>
const imageSize: Ref<{
  width: string,
  height: string
}> = ref({
  width: '',
  height: ''
})

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

function onImagePreview () {
  imageSize.value.height = imgPreview.value.naturalHeight + 'px'
  imageSize.value.width = imgPreview.value.naturalWidth + 'px'
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
  padding: 0;
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
