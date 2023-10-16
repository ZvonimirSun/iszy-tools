<template>
  <el-space
    direction="vertical"
    w-full
    :fill="true"
  >
    <el-input
      v-model="value"
      type="textarea"
      placeholder="转换的内容粘贴在这里"
      :autosize="{ minRows: 5, maxRows: 8 }"
    />
    <el-space>
      <el-button
        type="primary"
        @click="encode"
      >
        UrlEncode编码
      </el-button>
      <el-button
        type="primary"
        @click="decode"
      >
        UrlDecode解码
      </el-button>
      <el-button
        @click="revert"
      >
        交换
      </el-button>
      <el-button
        link
        type="primary"
        @click="clear"
      >
        清空结果
      </el-button>
    </el-space>
    <el-input
      v-model="result"
      type="textarea"
      placeholder="转换的内容粘贴在这里"
      :autosize="{ minRows: 5, maxRows: 8 }"
    />
    <template v-if="urlEncodeStore.history.length">
      <a-typography-title :level="5">
        历史
      </a-typography-title>
      <div class="history-list">
        <el-button
          v-for="(history, index) in urlEncodeStore.history"
          :key="index"
          type="primary"
          link
          @click="revertHistory(history)"
        >
          <span class="origin">
            {{ history[0] }}
          </span>
          &nbsp;-->&nbsp;
          <span class="target">
            {{ history[1] }}
          </span>
        </el-button>
      </div>
    </template>
  </el-space>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { useStore } from '@/stores/urlEncode'

const value: Ref<string> = ref('')
const result: Ref<string> = ref('')
const urlEncodeStore = useStore()

function encode () {
  result.value = encodeURIComponent(value.value)
  if (value.value && result.value) {
    urlEncodeStore.addHistory({
      origin: value.value,
      target: result.value
    })
  }
}
function decode () {
  result.value = decodeURIComponent(value.value)
  if (value.value && result.value) {
    urlEncodeStore.addHistory({
      origin: value.value,
      target: result.value
    })
  }
}
function revert () {
  const tmp = value.value
  value.value = result.value
  result.value = tmp
}
function clear () {
  value.value = ''
  result.value = ''
  urlEncodeStore.clearHistory()
}

function revertHistory (history: Array<string>) {
  value.value = history[0]
  result.value = history[1]
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

.history-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
