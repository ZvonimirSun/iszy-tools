<template>
  <a-typography-title :level="3">
    请输入身份证号码
  </a-typography-title>
  <el-input
    v-model="idData"
    placeholder="3205************"
    @change="analyse"
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

<script>
import { all } from '@/utils/idCard.js'

export default {
  name: 'IdChinese',
  data: () => ({
    idData: '',
    result: undefined
  }),
  methods: {
    analyse () {
      if (this.idData.length >= 18) {
        try {
          this.result = all(this.idData)
        } catch (e) {
          console.log(e)
          this.result = undefined
        }
      } else {
        this.result = undefined
      }
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.ant-input-group-addon) {
  padding: 0;
  border: unset;
}
</style>
