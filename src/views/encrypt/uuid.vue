<template>
  <container>
    <a-form layout="inline" :model="formState">
      <a-form-item label="版本">
        <a-select v-model:value="formState.version">
          <a-select-option value="v1">Version 1</a-select-option>
          <a-select-option value="v4">Version 4</a-select-option>
          <a-select-option value="nil">NIL</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="数量" v-show="formState.version!=='nil'">
        <a-input-number v-model:value="formState.count" :max="500" :min="1" :step="1">
        </a-input-number>
      </a-form-item>
      <a-form-item label="连字符">
        <a-switch v-model:checked="formState.hasHyphen"/>
      </a-form-item>
      <a-form-item label="自动生成">
        <a-switch v-model:checked="auto"/>
      </a-form-item>
    </a-form>
    <a-divider/>
    <div class="btnGroup">
      <a-button
        type="primary"
        @click="generate"
      >
        生成
      </a-button>
      <a-button
        @click="reset"
      >
        重置
      </a-button>
    </div>
    <div class="resultPanel">
      <a-textarea
        v-model:value="result"
        placeholder="结果栏"
        :auto-size="{ minRows: 10,maxRows:50 }"
      />
    </div>
  </container>
</template>

<script>
import { v1 as uuidv1, v4 as uuidv4, NIL as NIL_UUID } from 'uuid'
import Container from '@/components/container.vue'

export default {
  name: 'UUID在线生成',
  components: { Container },
  watch: {
    formState: {
      handler (val) {
        if (val.version === 'nil' && val.count !== 1) {
          val.count = 1
        }
        if (this.auto) {
          this.generate()
        }
      },
      deep: true
    },
    auto: {
      handler (val) {
        if (val) {
          this.generate()
        }
      },
      immediate: true
    }
  },
  data: () => ({
    formState: {
      count: 1,
      version: 'v4',
      hasHyphen: true
    },
    auto: true,
    times: 0,
    result: ''
  }),
  methods: {
    generate () {
      this.times++
      this.result = ''
      const times = this.times
      const version = this.formState.version
      const count = this.formState.count
      const hasHyphen = this.formState.hasHyphen
      for (let i = 0; i < count; i++) {
        if (times !== this.times) {
          break
        }
        let tmp = ''
        switch (version) {
          case 'v1': {
            tmp = uuidv1()
            break
          }
          case 'v4': {
            tmp = uuidv4()
            break
          }
          case 'nil': {
            tmp = NIL_UUID
            break
          }
          default:
            break
        }
        if (hasHyphen) {
          this.result += tmp + '\n'
        } else {
          this.result += tmp.replaceAll('-', '') + '\n'
        }
      }
    },
    reset () {
      this.times = 0
      this.formState = {
        count: 1,
        version: 'v4',
        hasHyphen: 'yes'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.resultPanel {
  width: 100%;
  margin-top: 16px;
}

.btnGroup {

  .ant-btn + .ant-btn {
    margin-left: 8px;
  }
}
</style>
