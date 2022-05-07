<template>
  <div class="codePanel">
    <div class="header">
      <a-button
        type="primary"
        title="格式化"
      >
        <template #icon>
          <span class="i-icon-park-outline-indent-right" />
        </template>
      </a-button>
      <a-button
        type="primary"
        title="压缩"
      >
        <template #icon>
          <span class="i-icon-park-outline-compression" />
        </template>
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        title="折叠所有"
      >
        <template #icon>
          <span class="i-icon-park-outline-collapse-text-input" />
        </template>
      </a-button>
      <a-button
        type="primary"
        title="展开所有"
      >
        <template #icon>
          <span class="i-icon-park-outline-expand-text-input" />
        </template>
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        title="撤销"
        :disabled="historySize.undo === 0"
      >
        <template #icon>
          <span class="i-icon-park-outline-undo" />
        </template>
      </a-button>
      <a-button
        type="primary"
        title="重做"
        :disabled="historySize.redo === 0"
      >
        <template #icon>
          <span class="i-icon-park-outline-redo" />
        </template>
      </a-button>
      <a-divider type="vertical" />
      <a-button
        type="primary"
        title="前往顶部"
      >
        <template #icon>
          <span class="i-icon-park-outline-to-top" />
        </template>
      </a-button>
      <a-button
        type="primary"
        title="前往底部"
      >
        <template #icon>
          <span class="i-icon-park-outline-to-bottom" />
        </template>
      </a-button>
    </div>
    <div class="ace-container">
      <vue-ace v-model:value="code" />
    </div>
    <div class="footer">
      <span>总行数:&nbsp;{{ lineCount }}&nbsp;&nbsp;行数:&nbsp;{{ cursor.line + 1 }}&nbsp;&nbsp;列数:&nbsp;{{
        cursor.ch + 1
      }}</span>
    </div>
  </div>
</template>

<script setup>
const code = ref('')
const cursor = ref({
  line: 0,
  ch: 0
})
const lineCount = ref(0)
const historySize = ref({
  undo: 0,
  redo: 0
})

</script>

<style scoped lang="scss">
.codePanel {
  width: 100%;
  height: 100%;
  border: .1rem solid #ddd;
  font-size: 1.4rem;
  overflow: hidden;

  .header {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: .5rem;
    background-color: #1890ff;
    color: #fff;
    align-items: center;
  }

  .ace-container {
    width: 100%;
    height: calc(100% - 7.2rem);
  }

  .footer {
    width: 100%;
    padding: .5rem;
    line-height: 2.2rem;
    background-color: #f7f7f7;
    border-top: .1rem solid #ddd;
  }
}

.ant-btn {
  font-size: 1.8rem;

  &[disabled] {
    background-color: #1890ff;
    border: unset;
    cursor: default;
  }

  &:hover:not([disabled]) {
    border-color: #f7f7f7;
  }

  &:not(:last-child) {
    margin-right: .5rem;
  }
}

.ant-divider {
  border-color: white;
  height: 1.6rem;
}
</style>
