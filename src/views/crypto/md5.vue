<template>
  <a-space
    direction="vertical"
    style="width: 100%"
  >
    <a-tabs
      v-model:activeKey="mode"
      type="card"
    >
      <a-tab-pane
        key="text"
        tab="文本"
      >
        <a-textarea
          v-model:value="data1"
          :rows="5"
          placeholder="请输入要进行 MD5 计算的字符"
        />
      </a-tab-pane>
      <a-tab-pane
        key="file"
        tab="文件"
      >
        <a-upload
          :file-list="fileList"
          :before-upload="fileCompute"
          @remove="fileRemove"
        >
          <a-button>选择文件</a-button>
        </a-upload>
      </a-tab-pane>
    </a-tabs>
    <a-typography-title :level="4">
      结果
    </a-typography-title>
    <a-textarea
      v-model:value="data2"
      :rows="5"
      readonly
      placeholder="MD5 计算的结果"
    />
  </a-space>
</template>

<script setup lang="ts">
import SparkMD5 from 'spark-md5'
import $msg from 'ant-design-vue/es/message'
import type { Ref } from 'vue'
import type { UploadProps } from 'ant-design-vue'
import type { FileType } from 'ant-design-vue/es/upload/interface'

const data1: Ref<string> = ref('')
const data2: Ref<string> = ref('')
const mode: Ref<string> = ref('text')
const fileList: Ref<UploadProps['fileList']> = ref([])

watch(data1, async (val: string) => {
  if (!val) {
    data2.value = ''
  } else {
    data2.value = '计算中...'
    data2.value = await encode(val)
  }
})

function fileCompute (val: FileType) {
  fileList.value = [val]
  data2.value = '计算中...'
  encode(val).then((result: string) => {
    data2.value = result
  })
  return false
}

function fileRemove () {
  fileList.value = []
}

function encode (val: string | File): Promise<string> {
  try {
    if (typeof val === 'string') {
      const tmp = SparkMD5.hash(val).toString()
      return Promise.resolve(`MD5 32位 大写: ${tmp.toUpperCase()}
MD5 32位 小写: ${tmp.toLowerCase()}
MD5 16位 大写: ${tmp.substring(8, 24).toUpperCase()}
MD5 16位 小写: ${tmp.substring(8, 24).toLowerCase()}`)
    } else {
      return new Promise((resolve) => {
        const blobSlice = File.prototype.slice
        const file = val
        const chunkSize = 2097152 // Read in chunks of 2MB
        const chunks = Math.ceil(file.size / chunkSize)
        let currentChunk = 0
        const spark = new SparkMD5.ArrayBuffer()
        const fileReader = new FileReader()
        fileReader.onload = function () {
          if (fileReader.result) {
            spark.append(fileReader.result as ArrayBuffer) // Append array buffer
            currentChunk++

            if (currentChunk < chunks) {
              loadNext()
            } else {
              const tmp = spark.end()
              resolve(`MD5 32位 大写: ${tmp.toUpperCase()}
MD5 32位 小写: ${tmp.toLowerCase()}
MD5 16位 大写: ${tmp.substring(8, 24).toUpperCase()}
MD5 16位 小写: ${tmp.substring(8, 24).toLowerCase()}`)
            }
          }
        }

        fileReader.onerror = function () {
          resolve('计算失败')
        }

        function loadNext () {
          const start = currentChunk * chunkSize
          const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize

          fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
        }

        loadNext()
      })
    }
  } catch (e) {
    $msg.error((e as Error).message)
    return Promise.resolve('计算失败')
  }
}

</script>
