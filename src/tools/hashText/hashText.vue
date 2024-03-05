<script setup lang="ts">
import HashWorker from './hashText.worker?worker'
import type { AlgoNames } from './hashText.service'

const { post, data, terminate } = useWebWorker<{
  [K in AlgoNames]: string
} | undefined>(new HashWorker())
const { copy } = useCopy({ text: '复制成功' })

let algoNames: AlgoNames[] = []
const clearText = ref('')
const encoding = ref('Hex')
const encodingOptions = [
  {
    label: 'Binary (base 2)',
    value: 'Bin',
  },
  {
    label: 'Hexadecimal (base 16)',
    value: 'Hex',
  },
  {
    label: 'Base64 (base 64)',
    value: 'Base64',
  },
  {
    label: 'Base64url (base 64 with url safe chars)',
    value: 'Base64url',
  },
]

calculate()

onBeforeMount(async () => {
  algoNames = (await import('./hashText.service')).algoNames
})

onUnmounted(() => {
  terminate()
})

function calculate() {
  post({ value: clearText.value, encoding: encoding.value })
}
</script>

<template>
  <div
    h-full w-full flex flex-col items-center overflow-auto
  >
    <div
      max-w-full w-250 flex flex-col
    >
      <el-text mb-2>
        待计算的内容
      </el-text>
      <el-input
        v-model="clearText"
        :autosize="{ minRows: 3 }"
        type="textarea"
        autofocus
        placeholder="待计算的内容..."
        @input="calculate"
      />
      <template v-if="data && algoNames">
        <el-divider />
        <el-text mb-2>
          Digest 编码
        </el-text>
        <div mb-10>
          <el-select
            v-model="encoding"
            w-full
            @change="calculate"
          >
            <el-option
              v-for="options in encodingOptions"
              :key="options.value"
              :label="options.label"
              :value="options.value"
            />
          </el-select>
        </div>
        <div
          v-for="algo in algoNames"
          :key="algo"
          mb-4
        >
          <el-input
            v-model="data[algo]"
            readonly
          >
            <template #prepend>
              <span
                w-32
                select-none
              >{{ algo }}</span>
            </template>
            <template #append>
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
