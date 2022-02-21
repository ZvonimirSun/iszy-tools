<template>
  <div class="container">
    <div class="encoded">
      <Title :level="3">
        Encoded
      </Title>
      <Title :level="4">
        Token
      </Title>
      <TextArea
        v-model:value="token"
        label="Token"
        @change="tokenChange"
      />
    </div>
    <div class="decoded">
      <Title :level="3">
        Decoded
      </Title>
      <Title :level="4">
        Header
      </Title>
      <TextArea
        v-model:value="header"
        label="Header"
        readonly
      />
      <Title :level="4">
        Payload
      </Title>
      <TextArea
        v-model:value="payload"
        label="Payload"
        readonly
      />
    </div>
  </div>
</template>

<script setup>
import { Input, Typography } from 'ant-design-vue'
import { ref } from 'vue'
const { TextArea } = Input
const { Title } = Typography

const token = ref('')
const header = ref('')
const payload = ref('')

function tokenChange () {
  if (token.value) {
    try {
      const strings = token.value.split('.')
      if (strings.length === 3) {
        header.value = JSON.stringify(JSON.parse(window.atob(strings[0])), null, 2)
        payload.value = JSON.stringify(JSON.parse(window.atob(strings[1].replace(/-/g, '+').replace(/_/g, '/'))), null, 2)
      } else {
        header.value = ''
        payload.value = ''
      }
    } catch (e) {
      header.value = ''
      payload.value = ''
    }
  } else {
    header.value = ''
    payload.value = ''
  }
}
</script>

<style scoped lang="scss">
.ant-typography {
  margin-bottom: .8rem;
}

.ant-typography + .ant-typography {
  margin-top: 0;
}

h3.ant-typography {
  height: 32px;
}

.container {
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  gap: .8rem;

  .encoded, .decoded {
    height: 100%;
    width: calc(50% - .4rem);
    overflow: auto;
  }

  .encoded .ant-input {
    height: calc(100% - 60px - 1.6rem);
    resize: none;
  }

  .decoded .ant-input {
    height: calc((100% - 88px - 2.4rem) / 2);
    resize: none;
  }

  @media screen and (max-width: 576px) {
    .encoded {
      height: calc(40% - .8rem);
      width: 100%;
      overflow: auto;
    }

    .decoded {
      height: calc(60% - .8rem);
      width: 100%;
      overflow: auto;
    }
  }
}
</style>
