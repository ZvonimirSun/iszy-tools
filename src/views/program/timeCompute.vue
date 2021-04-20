<template>
  <a-form layout="vertical">
    <a-divider orientation="left">转换时间戳</a-divider>
    <a-form-item label="时间">
      <a-date-picker v-model:value="time" :showTime="true" style="width: 100%" @change="toTimeStamp" @ok="toTimeStamp"/>
    </a-form-item>
    <a-form-item label="时间戳">
      <a-input v-model:value="timestamp" @change="toTime"/>
    </a-form-item>
    <a-divider orientation="left">计算几天后的日期</a-divider>
    <a-form-item label="日期">
      <a-date-picker v-model:value="baseTime" style="width: 100%" @change="calculateDate" @ok="calculateDate"/>
    </a-form-item>
    <a-form-item label="相差天数（输入负数向前计算）">
      <a-input v-model:value="addDays" addon-after="天" @change="calculateDate"/>
    </a-form-item>
    <a-form-item label="目标日期">
      <a-input v-model:value="resultTime" readonly/>
    </a-form-item>
    <a-divider orientation="left">计算日期差</a-divider>
    <a-form-item label="开始日期">
      <a-date-picker v-model:value="startTime" style="width: 100%" @change="calculateDuration" @ok="calculateDuration"/>
    </a-form-item>
    <a-form-item label="结束日期">
      <a-date-picker v-model:value="endTime" style="width: 100%" @change="calculateDuration" @ok="calculateDuration"/>
    </a-form-item>
    <a-form-item label="相差天数">
      <a-input v-model:value="duration" addon-after="天" readonly/>
    </a-form-item>
  </a-form>
</template>

<script>
import moment from 'moment'

export default {
  name: '时间计算',
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
