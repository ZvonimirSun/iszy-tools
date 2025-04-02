<script setup lang="ts">
import type { AlgoNames } from './hashFile.service'
import formatBytes from '@/utils/formatBytes'
import HashFileWorker from './hashFile.worker?worker'

const { post, data, terminate } = useWebWorker<{
  [K in AlgoNames]: string
} | undefined>(new HashFileWorker())
const { copy } = useCopy({ text: '复制成功' })

let tmpFile: File | undefined
const algoNames = ref<AlgoNames[]>([])
const algos = ref<AlgoNames[]>(['MD5'])
const fileInfo = ref('')
const loading = computed(() => {
  if (!fileInfo.value) {
    return false
  }
  else if (!data.value) {
    return true
  }
  else {
    return Object.keys(data.value).length !== algos.value.length
  }
})

onBeforeMount(async () => {
  algoNames.value = (await import('./hashFile.service')).algoNames
})

onUnmounted(() => {
  terminate()
})

function updateAlgos() {
  tmpFile = undefined
  data.value = undefined
  fileInfo.value = ''
  if (algos.value.length === 0) {
    algos.value = ['MD5']
  }
}

function calculate(rawFile: File) {
  tmpFile = rawFile
  fileInfo.value = `${rawFile.name} (类型: ${rawFile.type}, 大小: ${formatBytes(rawFile.size)})`
  post({ value: tmpFile, algos: toRaw(algos.value) })
  return false
}
</script>

<template>
  <div
    h-full w-full flex flex-col items-center overflow-auto
  >
    <div
      max-w-full w-250 flex flex-col gap-4
    >
      <el-alert
        title="文件不会被上传"
        type="info"
        show-icon
        center
      />
      <el-upload
        class="upload-demo"

        multiple drag
        :before-upload="calculate"
        :disabled="loading"
        :show-file-list="false"
      >
        <i class="el-icon--upload i-icon-park-outline-upload-one" />
        <div class="el-upload__text">
          将文件拖拽到此处 或 <em>点击选择文件</em>
        </div>
      </el-upload>
      <el-checkbox-group
        v-if="algoNames"
        v-model="algos"
        :disabled="loading"
        @change="updateAlgos"
      >
        <el-checkbox
          v-for="algo in algoNames"
          :key="algo"
          :label="algo"
        />
      </el-checkbox-group>
      <div
        v-if="fileInfo"
      >
        <el-input
          v-model="fileInfo"
          readonly
        >
          <template #prepend>
            <span
              w-32
              select-none
            >文件名称</span>
          </template>
          <template #append>
            <el-button @click="copy(fileInfo)">
              <i class="i-icon-park-outline-copy" />
            </el-button>
          </template>
        </el-input>
      </div>
      <template v-if="algos && fileInfo">
        <el-divider
          mb-4 mt-4
        />
        <div
          v-loading="loading"
          flex
          flex-col
          gap-4
        >
          <el-input
            v-for="algo in algos"
            :key="algo"
            :model-value="data?.[algo]"
            readonly
          >
            <template #prepend>
              <span
                w-32
                select-none
              >{{ algo }}</span>
            </template>
            <template
              v-if="data?.[algo]"
              #append
            >
              <el-button @click="copy(data[algo])">
                <i class="i-icon-park-outline-copy" />
              </el-button>
            </template>
          </el-input>
        </div>
      </template>
    </div>
  </div>
</template>
