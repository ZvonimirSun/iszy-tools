<script setup lang="ts">
const base64Str = ref('')
const fileType = ref('')

const defaultFileType = 'data:application/octet-stream;base64,'

const base64TypeMap: {
  [key: string]: string
} = {
  txt: 'data:text/plain;base64,',
  doc: 'data:application/msword;base64,',
  docx: 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,',
  xls: 'data:application/vnd.ms-excel;base64,',
  xlsx: 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,',
  pdf: 'data:application/pdf;base64,',
  pptx: 'data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64,',
  ppt: 'data:application/vnd.ms-powerpoint;base64,',
  png: 'data:image/png;base64,',
  jpg: 'data:image/jpeg;base64,',
  gif: 'data:image/gif;base64,',
  svg: 'data:image/svg+xml;base64,',
  ico: 'data:image/x-icon;base64,',
  bmp: 'data:image/bmp;base64,',
  csv: 'data:text/csv;base64,',
}

const hasPrefix = computed(() => {
  return base64Str.value.includes('base64,')
})

function preview() {
  if (!hasPrefix.value && !fileType.value) {
    ElMessage.warning('请选择文件后缀')
    return
  }
  let tmp = base64Str.value
  if (!hasPrefix.value) {
    tmp = (fileType.value || defaultFileType) + base64Str.value
  }
  const blob = dataURLtoBlob(tmp)
  const url = URL.createObjectURL(blob)
  window.open(url)
}

function clear() {
  base64Str.value = ''
}

function dataURLtoBlob(dataUrl: string) {
  const arr = dataUrl.split(',')
  const mime = arr[0]!.match(/:(.*?);/)![1]
  const bstr = window.atob(arr[1]!)
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
</script>

<template>
  <div class="wrapper">
    <el-space style="flex-wrap: wrap">
      <el-button
        type="primary"
        @click="preview"
      >
        预览
      </el-button>
      <el-button @click="clear">
        清空
      </el-button>
    </el-space>
    <el-select v-model="fileType" placeholder="请选择文件后缀">
      <el-option v-for="(value, key) in base64TypeMap" :key="key" :label="`.${key}`" :value="value" />
    </el-select>
    <el-input v-model="base64Str" type="textarea" placeholder="base64 字符串" flex-1 />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  gap: .8rem;

  :deep(.el-textarea) {
    flex: 1;

    .el-textarea__inner {
      height: 100%;
    }
  }
}
</style>
