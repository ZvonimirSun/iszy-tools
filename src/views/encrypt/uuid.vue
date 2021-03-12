<template>
  <div class="container">
    <a-back-top/>
    <div class="panel">
      <div class="top">
        <div class="header">UUID在线生成工具</div>
        <div class="desc">
          <router-link to="/">返回首页</router-link>
        </div>
      </div>
      <div class="main">
        <a-form
          layout="inline"
          :model="formState"
        >
          <a-form-item label="数量">
            <a-input-number v-model:value="formState.count" :max="500" :min="1" :step="1">
            </a-input-number>
          </a-form-item>
          <a-form-item label="版本">
            <a-select v-model:value="formState.version">
              <a-select-option value="v1">Version 1</a-select-option>
              <a-select-option value="v4">Version 4</a-select-option>
              <a-select-option value="nil">NIL</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="连字符">
            <a-select v-model:value="formState.hasHyphen">
              <a-select-option value="yes">带连字符</a-select-option>
              <a-select-option value="no">不带连字符</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              @click="generate"
            >
              生成
            </a-button>
          </a-form-item>
          <a-form-item>
            <a-button
              @click="reset"
            >
              重置
            </a-button>
          </a-form-item>
        </a-form>
        <div class="resultPanel">
          <a-textarea
            v-model:value="result"
            placeholder="结果栏"
            :auto-size="{ minRows: 10,maxRows:50 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v1 as uuidv1, v4 as uuidv4, NIL as NIL_UUID } from 'uuid'
export default {
  name: 'uuid',
  data: () => ({
    formState: {
      count: 1,
      version: 'v4',
      hasHyphen: 'yes'
    },
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
        if (hasHyphen !== 'no') {
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
  },
  mounted () {
    this.generate()
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100%;

  .panel {
    max-width: 75rem;
    position: relative;
    margin: 0 auto;
    padding: 0 1.25rem 1.25rem
  }

  .top {
    padding-top: 2rem;
    width: 100%;
    text-align: center;

    .header {
      height: 44px;
      line-height: 44px;
      font-size: 33px;
      color: #333333;
      font-weight: 600;
    }

    .desc {
      font-size: 14px;
      margin-top: 12px;
      margin-bottom: 40px;
      color: #999999;
    }
  }

  .main {
    width: 100%;

    .resultPanel {
      width: 100%;
      margin-top: 16px;
    }
  }
}
</style>
