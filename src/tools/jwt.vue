<script setup lang="ts">
const token = ref('')
const header = ref('')
const payload = ref('')

function tokenChange() {
  if (token.value) {
    try {
      const strings = token.value.split('.')
      if (strings.length === 3) {
        header.value = JSON.stringify(JSON.parse(window.atob(strings[0]!)), null, 2)
        payload.value = JSON.stringify(JSON.parse(window.atob(strings[1]!.replace(/-/g, '+').replace(/_/g, '/'))), null, 2)
      }
      else {
        header.value = ''
        payload.value = ''
      }
    }
    catch (e) {
      header.value = ''
      payload.value = ''
    }
  }
  else {
    header.value = ''
    payload.value = ''
  }
}
</script>

<template>
  <div h-full w-full flex flex-wrap gap-4 class="wrapper">
    <div flex flex-1 flex-col gap-4>
      <a-typography-title :level="3">
        Encoded
      </a-typography-title>
      <div flex flex-1 flex-col gap-4>
        <a-typography-title :level="4">
          Token
        </a-typography-title>
        <el-input
          v-model="token"
          type="textarea"
          label="Token"
          @change="tokenChange"
        />
      </div>
    </div>
    <div flex flex-1 flex-col gap-4>
      <a-typography-title :level="3">
        Decoded
      </a-typography-title>
      <div flex flex-1 flex-col gap-4 class="wrapper">
        <a-typography-title :level="4">
          Header
        </a-typography-title>
        <el-input
          v-model="header"
          type="textarea"
          label="Header"
          readonly
        />
        <a-typography-title :level="4">
          Payload
        </a-typography-title>
        <el-input
          v-model="payload"
          type="textarea"
          label="Payload"
          readonly
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ant-typography {
  margin: 0;
}

.ant-typography + .ant-typography {
  margin: 0;
}

h3.ant-typography {
  height: 32px;
}

:deep(.el-textarea) {
  flex: 1;

  .el-textarea__inner {
    height: 100%;
    resize: none;
  }
}

@media screen and (max-width: 576px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
