<template>
  <a-form
    :label-col="{sm:{span:2}}"
    :wrapper-col="{sm:{span:3}}"
  >
    <a-form-item label="最小数字">
      <a-input-number v-model:value.number="min" />
    </a-form-item>
    <a-form-item label="最大数字">
      <a-input-number v-model:value.number="max" />
    </a-form-item>
    <a-form-item label="次数">
      <a-input-number
        v-model:value.number="times"
        :step="1"
      />
    </a-form-item>
    <a-form-item label="小数">
      <a-switch v-model:checked="float" />
    </a-form-item>
    <a-form-item :wrapper-col="{sm:{span:3,offset:2}}">
      <a-space>
        <a-button
          type="primary"
          @click="randomNum"
        >
          生成
        </a-button>
        <a-button @click="clearRandomNum">
          清空
        </a-button>
      </a-space>
    </a-form-item>
    <a-form-item :wrapper-col="{sm:{span:5}}">
      <a-textarea
        :value="randomNumResult"
        readonly
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
    </a-form-item>
  </a-form>
</template>

<script>
import { random } from 'lodash-es'

export default defineComponent({
  name: 'RandomNumber',
  data: () => ({
    min: 0,
    max: 10,
    times: 1,
    float: false,
    randomNumResult: ''
  }),
  methods: {
    randomNum () {
      try {
        for (let i = 0; i < this.times; i++) {
          this.randomNumResult = random(this.min, this.max, this.float) + (this.randomNumResult === '' ? '' : '\n') + this.randomNumResult
        }
      } catch (e) {
        this.$msg.error('计算错误')
      }
    },
    clearRandomNum () {
      this.randomNumResult = ''
    }
  }
})
</script>

<style scoped lang="scss">
.ant-input-number {
  width: 100%;
}
</style>
