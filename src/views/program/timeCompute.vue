<template>
  <container>
    <Form layout="vertical">
      <Title :level="3">转换时间戳</Title>
      <Item label="时间">
        <DatePicker v-model:value="time" :showTime="true" style="width: 100%" @change="toTimeStamp"
                    @ok="toTimeStamp" :getCalendarContainer="getContainer"/>
      </Item>
      <Item label="时间戳">
        <Input v-model:value="timestamp" @change="toTime">
          <template #addonAfter>
            <Select v-model:value="timestampUnit" @change="toTimeStamp">
              <Option value="s">秒</Option>
              <Option value="ms">毫秒</Option>
            </Select>
          </template>
        </Input>
      </Item>
      <Title :level="3">计算几天后的日期</Title>
      <Item label="日期">
        <DatePicker v-model:value="baseTime" style="width: 100%" @change="calculateDate" @ok="calculateDate"
                    :getCalendarContainer="getContainer"/>
      </Item>
      <Item label="相差天数（输入负数向前计算）">
        <Input v-model:value="addDays" addon-after="天" @change="calculateDate"/>
      </Item>
      <Item label="目标日期">
        <Input v-model:value="resultTime" readonly/>
      </Item>
      <Title :level="3">计算日期差</Title>
      <Item label="开始日期">
        <DatePicker v-model:value="startTime" style="width: 100%" @change="calculateDuration"
                    @ok="calculateDuration" :getCalendarContainer="getContainer"/>
      </Item>
      <Item label="结束日期">
        <DatePicker v-model:value="endTime" style="width: 100%" @change="calculateDuration" @ok="calculateDuration"
                    :getCalendarContainer="getContainer"/>
      </Item>
      <Item label="相差天数">
        <Input v-model:value="duration" addon-after="天" readonly/>
      </Item>
    </Form>
  </container>
</template>

<script>
import moment from 'moment'
import Container from '@/components/container.vue'
import { Form, DatePicker, Input, Typography, Select } from 'ant-design-vue'

const { Item } = Form
const { Title } = Typography
const { Option } = Select

export default {
  name: '时间计算',
  components: { Container, Form, DatePicker, Input, Item, Select, Title, Option },
  data () {
    return {
      moment: moment,

      time: moment(),
      timestamp: moment().valueOf(),
      timestampUnit: 'ms',

      baseTime: moment(),
      addDays: 100,
      resultTime: moment().add(100, 'days').format('YYYY-MM-DD'),

      startTime: moment(),
      endTime: moment().add(100, 'days'),
      duration: 100
    }
  },
  methods: {
    getContainer (triggerNode) {
      return triggerNode.parentElement
    },
    toTime () {
      if (this.timestamp && !isNaN(parseInt(this.timestamp))) {
        const time = moment(parseInt(this.timestamp + (this.timestampUnit === 's' ? '000' : '')))
        if (time.isValid()) {
          this.time = time
        } else {
          this.time = undefined
        }
      } else {
        this.time = undefined
      }
    },
    toTimeStamp () {
      if (moment.isMoment(this.time)) {
        switch (this.timestampUnit) {
          case 'ms':
            this.timestamp = this.time.format('x')
            break
          case 's':
            this.timestamp = this.time.format('X')
            break
          default:
            this.timestamp = undefined
            break
        }
      } else {
        this.timestamp = undefined
      }
    },
    calculateDate () {
      if (moment.isMoment(this.baseTime) && !isNaN(parseInt(this.addDays))) {
        this.resultTime = this.baseTime.clone().add(parseInt(this.addDays), 'days').format('YYYY-MM-DD')
      } else {
        this.resultTime = ''
      }
    },
    calculateDuration () {
      if (moment.isMoment(this.startTime) && moment.isMoment(this.endTime)) {
        this.duration = this.endTime.diff(this.startTime, 'days')
      } else {
        this.duration = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
