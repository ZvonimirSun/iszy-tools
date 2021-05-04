<template>
  <container>
    <Form layout="vertical">
      <Divider orientation="left">转换时间戳</Divider>
      <Item label="时间">
        <DatePicker v-model:value="time" :showTime="true" style="width: 100%" @change="toTimeStamp"
                       @ok="toTimeStamp"/>
      </Item>
      <Item label="时间戳">
        <Input v-model:value="timestamp" @change="toTime"/>
      </Item>
      <Divider orientation="left">计算几天后的日期</Divider>
      <Item label="日期">
        <DatePicker v-model:value="baseTime" style="width: 100%" @change="calculateDate" @ok="calculateDate"/>
      </Item>
      <Item label="相差天数（输入负数向前计算）">
        <Input v-model:value="addDays" addon-after="天" @change="calculateDate"/>
      </Item>
      <Item label="目标日期">
        <Input v-model:value="resultTime" readonly/>
      </Item>
      <Divider orientation="left">计算日期差</Divider>
      <Item label="开始日期">
        <DatePicker v-model:value="startTime" style="width: 100%" @change="calculateDuration"
                       @ok="calculateDuration"/>
      </Item>
      <Item label="结束日期">
        <DatePicker v-model:value="endTime" style="width: 100%" @change="calculateDuration" @ok="calculateDuration"/>
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
import { Form, Divider, DatePicker, Input } from 'ant-design-vue'
const { Item } = Form

export default {
  name: '时间计算',
  components: { Container, Form, Divider, DatePicker, Input, Item },
  data () {
    return {
      moment: moment,

      time: moment(),
      timestamp: moment().valueOf(),

      baseTime: moment(),
      addDays: 100,
      resultTime: moment().add(100, 'days').format('YYYY-MM-DD'),

      startTime: moment(),
      endTime: moment().add(100, 'days'),
      duration: 100
    }
  },
  methods: {
    toTime () {
      if (this.timestamp && !isNaN(parseInt(this.timestamp))) {
        const time = moment(parseInt(this.timestamp))
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
        this.timestamp = this.time.valueOf()
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
