<template>
  <container>
    <Row :gutter="16">
      <Col :span="12">
        <Card>
          <Statistic title="分数" :value="score"/>
        </Card>
      </Col>
      <Col :span="12"></Col>
    </Row>
  </container>
</template>

<script>
import { Row, Col, Card, Statistic } from 'ant-design-vue'
import Container from '@/components/container.vue'
export default {
  name: '2048',
  components: { Container, Row, Col, Card, Statistic },
  data: () => ({
    score: 0,
    best: 0
  })
}
</script>

<style scoped lang="scss">
</style>
