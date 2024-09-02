<script>
import { random } from 'lodash-es'

export default defineComponent({
  name: 'RandomNumber',
  data: () => ({
    min: 0,
    max: 10,
    times: 1,
    float: false,
    randomNumResult: '',
  }),
  methods: {
    randomNum() {
      try {
        for (let i = 0; i < this.times; i++) {
          this.randomNumResult = random(this.min, this.max, this.float) + (this.randomNumResult === '' ? '' : '\n') + this.randomNumResult
        }
      }
      catch (e) {
        ElMessage.error('计算错误')
      }
    },
    clearRandomNum() {
      this.randomNumResult = ''
    },
  },
})
</script>

<template>
  <el-form
    :label-col="{ sm: { span: 2 } }"
    :wrapper-col="{ sm: { span: 3 } }"
  >
    <el-form-item label="最小数字">
      <el-input-number v-model.number="min" />
    </el-form-item>
    <el-form-item label="最大数字">
      <el-input-number v-model.number="max" />
    </el-form-item>
    <el-form-item label="次数">
      <el-input-number
        v-model.number="times"
        :step="1"
      />
    </el-form-item>
    <el-form-item label="小数">
      <el-switch v-model="float" />
    </el-form-item>
    <el-form-item :wrapper-col="{ sm: { span: 3, offset: 2 } }">
      <el-space>
        <el-button
          type="primary"
          @click="randomNum"
        >
          生成
        </el-button>
        <el-button @click="clearRandomNum">
          清空
        </el-button>
      </el-space>
    </el-form-item>
    <el-form-item :wrapper-col="{ sm: { span: 5 } }">
      <el-input
        v-model="randomNumResult"
        type="textarea"
        readonly
        :autosize="{ minRows: 2, maxRows: 5 }"
      />
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">
</style>
