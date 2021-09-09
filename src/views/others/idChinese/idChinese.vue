<template>
  <container>
    <Title :level="3">请输入身份证号码</Title>
    <Input placeholder="3205************" v-model:value="idData" @change="analyse"/>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { Input, Typography } from 'ant-design-vue'
import { all } from '@/utils/idCard.js'

const { Title } = Typography

export default {
  name: 'idChinese',
  components: { Container, Input, Title },
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
