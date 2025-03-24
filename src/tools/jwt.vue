<script setup lang="ts">
const token = ref('')
const header = ref('')
const payload = ref('')

function tokenChange() {
  if (token.value) {
    try {
      const strings = token.value.split('.')
      if (strings.length === 3) {
        header.value = JSON.stringify(JSON.parse(window.atob(strings[0])), null, 2)
        payload.value = JSON.stringify(JSON.parse(window.atob(strings[1].replace(/-/g, '+').replace(/_/g, '/'))), null, 2)
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
  <div class="wrapper">
    <div class="encoded">
      <a-typography-title :level="3">
        Encoded
      </a-typography-title>
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
    <div class="decoded">
      <a-typography-title :level="3">
        Decoded
      </a-typography-title>
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
</template>

<style scoped lang="scss">
.ant-typography {
  margin-bottom: .8rem;
  margin-top: 0;
}

.ant-typography + .ant-typography {
  margin-top: 0;
}

h3.ant-typography {
  height: 32px;
}

.wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  gap: .8rem;

  .encoded, .decoded {
    height: 100%;
    overflow: auto;
    flex: 1;
  }

  .encoded .el-textarea {
    height: calc(100% - 60px - 1.6rem);
  }

  .decoded .el-textarea {
    height: calc((100% - 88px - 2.4rem) / 2);
  }

  :deep(.el-textarea) .el-textarea__inner {
    height: 100%;
    resize: none;
  }

  @media screen and (max-width: 576px) {
    .encoded {
      height: calc(40% - .8rem);
      width: 100%;
      overflow: hidden;
    }

    .decoded {
      height: calc(60% - .8rem);
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>
