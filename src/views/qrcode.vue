<template>
  <a-typography-title :level="3">
    生成二维码
  </a-typography-title>
  <el-form
    label-width="10rem"
  >
    <el-form-item label="内容">
      <el-input
        v-model="generateContent"
        type="textarea"
        placeholder="请输入待处理内容"
        allow-clear
        @change="generateQR"
      />
    </el-form-item>
    <el-form-item
      label="结果"
    >
      <el-image
        :width="200"
        :height="200"
        :src="generateResult"
        fallback="data:image/png;base64,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"
      />
    </el-form-item>
    <el-form-item v-if="generateResult">
      <el-button
        @click="saveResult"
      >
        保存
      </el-button>
    </el-form-item>
  </el-form>
  <el-divider />
  <a-typography-title :level="3">
    解析二维码
  </a-typography-title>
  <el-form
    label-width="10rem"
  >
    <el-form-item label="上传二维码">
      <el-upload
        :file-list="[]"
        :show-upload-list="false"
        accept="image/*"
        :before-upload="upload"
      >
        <img
          v-if="qrCodeFile"
          ref="decodeImg"
          class="upload-container"
          alt="qrCode"
          :src="qrCodeFile"
        >
        <div
          v-else
          class="upload-container"
        >
          <span class="i-icon-park-outline-upload" />
        </div>
      </el-upload>
    </el-form-item>
    <el-form-item label="结果">
      <el-input
        type="textarea"
        :value="decodeResult"
        readonly
      />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { toDataURL } from 'qrcode'
import createFile from '@/utils/createFile'
import QrcodeDecoder from 'qrcode-decoder/src/index'

const generateContent = ref('')
const generateResult = ref('')
const qrCodeFile = ref('')
const decodeResult = ref('')
const decodeImg = ref<HTMLImageElement>()

async function generateQR () {
  if (!generateContent.value) {
    generateResult.value = ''
    return
  }
  try {
    generateResult.value = await toDataURL(generateContent.value)
  } catch (e) {
    generateResult.value = ''
    if (e instanceof Error) {
      ElMessage.error(e.message)
    }
  }
}

function saveResult () {
  if (!generateResult.value) {
    return
  }
  createFile(generateResult.value, 'result.png', 'url')
}

function upload (img: File) {
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    if (typeof reader.result === 'string') {
      qrCodeFile.value = reader.result
      nextTick(() => {
        if (!decodeImg.value) {
          return
        }
        decodeQRCode(decodeImg.value)
      })
    } else {
      ElMessage.error('读取文件失败')
    }
  })
  reader.addEventListener('error', () => {
    ElMessage.error('读取文件失败')
  })
  reader.readAsDataURL(img)
  return false
}

async function decodeQRCode (img: HTMLImageElement) {
  try {
    const qrcodeDecoder = new QrcodeDecoder()
    const res = await qrcodeDecoder.decodeFromImage(img) as { data: string }
    if (res) {
      decodeResult.value = res.data
    }
  } catch (e) {
    console.error(e)
    if (e instanceof Error) { ElMessage.error(e.message) }
  }
}
</script>

<style scoped lang="scss">
.ant-form-item {
  margin-bottom: .8rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.upload-container {
  cursor: pointer;
  font-size: 30px;

  &:not(img) {
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--el-border-color);
    background: var(--el-fill-color-light);

    &:hover {
      border-color: var(--el-color-primary);
    }
  }
}
</style>
