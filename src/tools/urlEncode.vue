<script setup lang="ts">
const value = ref('')
const result = ref('')
const urlEncodeStore = useUrlEncodeStore()

function encode() {
  result.value = encodeURIComponent(value.value)
  if (value.value && result.value) {
    urlEncodeStore.addHistory({
      origin: value.value,
      target: result.value,
    })
  }
}
function decode() {
  result.value = decodeURIComponent(value.value)
  if (value.value && result.value) {
    urlEncodeStore.addHistory({
      origin: value.value,
      target: result.value,
    })
  }
}
function revert() {
  const tmp = value.value
  value.value = result.value
  result.value = tmp
}
function clear() {
  value.value = ''
  result.value = ''
  urlEncodeStore.clearHistory()
}

function revertHistory(history: Array<string>) {
  value.value = history[0]!
  result.value = history[1]!
}
</script>

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
      <div
        class="history-list"
        w-full
      >
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
          <span class="middle">&nbsp;-->&nbsp;</span>
          <span class="target">
            {{ history[1] }}
          </span>
        </el-button>
      </div>
    </template>
  </el-space>
</template>

<style scoped lang="scss">
.history-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  :deep(.el-button) {
    max-width: 100%;

    & > span {
      width: 100%;
    }
  }

  .middle {
    white-space: nowrap;
    height: 2.4rem;
    line-height: 2.4rem;
  }

  .origin, .target {
    height: 2.4rem;
    line-height: 2.4rem;
    max-width: calc(100% - 3rem);
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

:deep(.el-space__item) {
  max-width: 100%;
}

h5.ant-typography {
  margin-bottom: 0;
}
</style>
