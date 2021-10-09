<template>
  <container>
    <Title :level="3">请输入身份证号码</Title>
    <Input placeholder="3205************" v-model:value="idData" @change="analyse"/>
    <template v-if="result && result.checkIdCard">
      <Divider/>
      <Title :level="3">信息</Title>
      <Paragraph>
        <ul>
          <li>性别：{{result.sex}}</li>
          <li>年龄：{{result.age}} 岁</li>
          <li>住址：{{result.address.all.replace(/-/g, '')}}</li>
          <li>生日：{{result.birthDay.year}} 年 {{result.birthDay.month}} 月 {{result.birthDay.day}} 日</li>
          <li>农历生日：{{result.birthDay.nong.split('/')[0]}} 年 {{result.birthDay.nong.split('/')[1]}} 月 {{result.birthDay.nong.split('/')[2]}} 日</li>
          <li>出生周：{{result.birthDay.week}}</li>
          <li>星座：{{result.birthDay.zodiac}}</li>
          <li>生肖：{{result.birthDay.zodiac_zh}}</li>
        </ul>
      </Paragraph>
    </template>
  </container>
</template>

<script>
import { Container } from '@/components'
import { Input, Typography, Divider } from 'ant-design-vue'
import { all } from '@/utils/idCard.js'

const { Title, Paragraph } = Typography

export default {
  name: 'idChinese',
  components: { Container, Input, Title, Paragraph, Divider },
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
