<template>
  <a-form layout="vertical">
    <a-typography-title :level="3">
      转换时间戳
    </a-typography-title>
    <a-form-item label="时间">
      <a-date-picker
        v-model:value="time"
        :show-time="true"
        style="width: 100%"
        :get-popup-container="getContainer"
        @change="toTimeStamp"
        @ok="toTimeStamp"
      />
    </a-form-item>
    <a-form-item label="时间戳">
      <a-input
        v-model:value="timestamp"
        @change="toTime"
      >
        <template #addonAfter>
          <a-select
            v-model:value="timestampUnit"
            @change="toTimeStamp"
          >
            <a-select-option value="s">
              秒
            </a-select-option>
            <a-select-option value="ms">
              毫秒
            </a-select-option>
          </a-select>
        </template>
      </a-input>
    </a-form-item>
    <a-typography-title :level="3">
      计算几天后的日期
    </a-typography-title>
    <a-form-item label="日期">
      <a-date-picker
        v-model:value="baseTime"
        style="width: 100%"
        :get-popup-container="getContainer"
        @change="calculateDate"
        @ok="calculateDate"
      />
    </a-form-item>
    <a-form-item label="相差天数（输入负数向前计算）">
      <a-input
        v-model:value="addDays"
        addon-after="天"
        @change="calculateDate"
      />
    </a-form-item>
    <a-form-item label="目标日期">
      <a-input
        v-model:value="resultTime"
        readonly
      />
    </a-form-item>
    <a-typography-title :level="3">
      计算日期差
    </a-typography-title>
    <a-form-item label="开始日期">
      <a-date-picker
        v-model:value="startTime"
        style="width: 100%"
        :get-popup-container="getContainer"
        @change="calculateDuration"
        @ok="calculateDuration"
      />
    </a-form-item>
    <a-form-item label="结束日期">
      <a-date-picker
        v-model:value="endTime"
        style="width: 100%"
        :get-popup-container="getContainer"
        @change="calculateDuration"
        @ok="calculateDuration"
      />
    </a-form-item>
    <a-form-item label="相差天数">
      <a-input
        v-model:value="duration"
        addon-after="天"
        readonly
      />
    </a-form-item>
  </a-form>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'TimeCompute',
  data () {
    return {
      dayjs,

      time: dayjs(),
      timestamp: dayjs().valueOf(),
      timestampUnit: 'ms',

      baseTime: dayjs(),
      addDays: 100,
      resultTime: dayjs().add(100, 'days').format('YYYY-MM-DD'),

      startTime: dayjs(),
      endTime: dayjs().add(100, 'days'),
      duration: 100
    }
  },
  methods: {
    getContainer (triggerNode) {
      return triggerNode.parentElement
    },
    toTime () {
      if (this.timestamp && !isNaN(parseInt(this.timestamp))) {
        const time = dayjs(parseInt(this.timestamp + (this.timestampUnit === 's' ? '000' : '')))
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
      if (dayjs.isDayjs(this.time)) {
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
      if (dayjs.isDayjs(this.baseTime) && !isNaN(parseInt(this.addDays))) {
        this.resultTime = this.baseTime.clone().add(parseInt(this.addDays), 'days').format('YYYY-MM-DD')
      } else {
        this.resultTime = ''
      }
    },
    calculateDuration () {
      if (dayjs.isDayjs(this.startTime) && dayjs.isDayjs(this.endTime)) {
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
