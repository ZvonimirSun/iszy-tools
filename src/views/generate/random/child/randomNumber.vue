<template>
  <Form
    :label-col="{sm:{span:2}}"
    :wrapper-col="{sm:{span:3}}"
  >
    <FormItem label="最小数字">
      <InputNumber v-model:value.number="min" />
    </FormItem>
    <FormItem label="最大数字">
      <InputNumber v-model:value.number="max" />
    </FormItem>
    <FormItem label="次数">
      <InputNumber
        v-model:value.number="times"
        :step="1"
      />
    </FormItem>
    <FormItem label="小数">
      <Switch v-model:checked="float" />
    </FormItem>
    <FormItem :wrapper-col="{sm:{span:3,offset:2}}">
      <Space>
        <Button
          type="primary"
          @click="randomNum"
        >
          生成
        </Button>
        <Button @click="clearRandomNum">
          清空
        </Button>
      </Space>
    </FormItem>
    <FormItem :wrapper-col="{sm:{span:5}}">
      <TextArea
        :value="randomNumResult"
        readonly
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
    </FormItem>
  </Form>
</template>

<script>
import { Form, InputNumber, Switch, Button, Input, Space } from 'ant-design-vue'
import { random } from 'lodash-es'

const { Item: FormItem } = Form
const { TextArea } = Input
export default defineComponent({
  name: 'RandomNumber',
  components: {
    Form,
    FormItem,
    InputNumber,
    Switch,
    Button,
    TextArea,
    Space
  },
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
