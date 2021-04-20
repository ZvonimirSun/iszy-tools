<template>
  <a-form layout="vertical">
    <a-form-item label="时间">
      <a-date-picker v-model:value="time" :showTime="true" style="width: 100%"/>
    </a-form-item>
    <a-form-item label="时间戳">
      <a-input v-model:value="timestamp"/>
    </a-form-item>
    <a-form-item>
      <a-button-group>
        <a-button type="primary" @click="toTimeStamp" :disabled="!moment.isMoment(time)">时间 → 时间戳</a-button>
        <a-button type="primary" @click="toTime" :disabled="!(timestamp && moment(timestamp).isValid())">时间戳 → 时间</a-button>
        <a-button @click="format" :disabled="!(moment.isMoment(time) || (timestamp && moment(timestamp).isValid()))">格式化</a-button>
      </a-button-group>
    </a-form-item>
    <a-form-item label="格式化字符串">
      <a-input v-model:value="formatter"/>
    </a-form-item>
    <a-form-item label="格式化后的时间">
      <a-input v-model:value="formatTime" readonly/>
    </a-form-item>
  </a-form>
</template>

<script>
import moment from 'moment'

export default {
  name: '时间戳转换',
  data () {
    return {
      moment: moment,

      time: undefined,
      timestamp: undefined,

      formatter: 'YYYY/MM/DD hh:mm:ss a',
      formatTime: undefined
    }
  },
  methods: {
    toTime () {
      if (this.timestamp) {
        const time = moment(this.timestamp)
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
    format () {
      if (moment.isMoment(this.time)) {
        this.toTimeStamp()
        this.formatTime = this.time.format(this.formatter)
      } else if (this.timestamp && moment(this.timestamp).isValid()) {
        this.toTime()
        this.formatTime = this.time.format(this.formatter)
      } else {
        this.formatTime = undefined
      }
    }
  }
}
</script>

<style scoped>

</style>
