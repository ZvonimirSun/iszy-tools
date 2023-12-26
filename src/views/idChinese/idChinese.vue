<template>
  <a-typography-title :level="3">
    请输入身份证号码
  </a-typography-title>
  <el-input
    v-model="idData"
    placeholder="3205************"
    @input="analyse"
  />
  <template v-if="result && result.checkIdCard">
    <el-divider />
    <a-typography-title :level="3">
      信息
    </a-typography-title>
    <a-typography-paragraph>
      <ul>
        <li>性别：{{ result.sex }}</li>
        <li>年龄：{{ result.age }} 岁</li>
        <li>住址：{{ result.address.all.replace(/-/g, '') }}</li>
        <li>生日：{{ result.birthDay.year }} 年 {{ result.birthDay.month }} 月 {{ result.birthDay.day }} 日</li>
        <li>农历生日：{{ result.birthDay.nong.split('/')[0] }} 年 {{ result.birthDay.nong.split('/')[1] }} 月 {{ result.birthDay.nong.split('/')[2] }} 日</li>
        <li>出生周：{{ result.birthDay.week }}</li>
        <li>星座：{{ result.birthDay.zodiac }}</li>
        <li>生肖：{{ result.birthDay.zodiac_zh }}</li>
      </ul>
    </a-typography-paragraph>
  </template>
</template>

<script setup lang="ts">
import IdWorker from './idChinese.worker?worker'

const { post, data: result, terminate } = useWebWorker<{
  checkIdCard: boolean
  sex: string
  age: number
  address: {
    all: string
    province: string
    city: string
    district: string
  }
  birthDay: {
    year: number
    month: number
    day: number
    nong: string
    week: string
    zodiac: string
    zodiac_zh: string
  }
} | undefined>(new IdWorker())

const idData = ref('')

onBeforeUnmount(() => {
  terminate()
})

async function analyse () {
  if (idData.value.length >= 18) {
    result.value = undefined
    post({ idData: idData.value })
  } else {
    result.value = undefined
  }
}
</script>

