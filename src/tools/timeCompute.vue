<script setup>
import dayjs from 'dayjs'

const date = new Date()

const time = ref(date)
const timestamp = ref(date.getTime())
const timestampUnit = ref('ms')
const baseTime = ref(date)
const addDays = ref(100)
const resultTime = ref(dayjs(date).add(100, 'days').format('YYYY-MM-DD'))
const startTime = ref(date)
const endTime = ref(dayjs(date).add(100, 'days').toDate())
const duration = ref(100)

function toTime() {
  if (timestamp.value && !Number.isNaN(Number.parseInt(timestamp.value))) {
    const _time = dayjs(Number.parseInt(timestamp.value + (timestampUnit.value === 's' ? '000' : '')))
    if (_time.isValid()) {
      time.value = _time
    }
    else {
      time.value = undefined
    }
  }
  else {
    time.value = undefined
  }
}
function toTimeStamp() {
  if (time.value) {
    switch (timestampUnit.value) {
      case 'ms':
        timestamp.value = dayjs(time.value).format('x')
        break
      case 's':
        timestamp.value = dayjs(time.value).format('X')
        break
      default:
        timestamp.value = undefined
        break
    }
  }
  else {
    timestamp.value = undefined
  }
}
function calculateDate() {
  if (baseTime.value && !Number.isNaN(Number.parseInt(addDays.value))) {
    resultTime.value = dayjs(baseTime.value).add(Number.parseInt(addDays.value), 'days').format('YYYY-MM-DD')
  }
  else {
    resultTime.value = ''
  }
}
function calculateDuration() {
  if (startTime.value && endTime.value) {
    duration.value = dayjs(endTime.value).diff(dayjs(startTime.value), 'days')
  }
  else {
    duration.value = ''
  }
}
</script>

<template>
  <el-form label-position="top">
    <a-typography-title :level="3">
      转换时间戳
    </a-typography-title>
    <el-form-item label="时间">
      <el-date-picker
        v-model="time"
        type="datetime"
        @change="toTimeStamp"
      />
    </el-form-item>
    <el-form-item label="时间戳">
      <el-input
        v-model="timestamp"
        @change="toTime"
      >
        <template #append>
          <el-select
            v-model="timestampUnit"
            @change="toTimeStamp"
          >
            <el-option
              label="秒"
              value="s"
            />
            <el-option
              label="毫秒"
              value="ms"
            />
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <a-typography-title :level="3">
      计算几天后的日期
    </a-typography-title>
    <el-form-item label="日期">
      <el-date-picker
        v-model="baseTime"
        @change="calculateDate"
      />
    </el-form-item>
    <el-form-item label="相差天数（输入负数向前计算）">
      <el-input
        v-model="addDays"
        @change="calculateDate"
      >
        <template #append>
          天
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="目标日期">
      <el-input
        v-model="resultTime"
        readonly
      />
    </el-form-item>
    <a-typography-title :level="3">
      计算日期差
    </a-typography-title>
    <el-form-item label="开始日期">
      <el-date-picker
        v-model="startTime"
        @change="calculateDuration"
      />
    </el-form-item>
    <el-form-item label="结束日期">
      <el-date-picker
        v-model="endTime"
        @change="calculateDuration"
      />
    </el-form-item>
    <el-form-item label="相差天数">
      <el-input
        v-model="duration"
        readonly
      >
        <template #append>
          天
        </template>
      </el-input>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>
