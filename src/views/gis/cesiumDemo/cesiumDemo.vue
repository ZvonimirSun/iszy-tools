<template>
  <container>
    <Row v-show="demo" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
      <Col :span="24">
        <Breadcrumb>
          <Item @click="demo=''" href="">
            <span>首页</span>
          </Item>
          <Item>
            <span style="user-select: none">{{ demo }}</span>
          </Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]" v-show="!demo">
      <Col :span="8">
        <Card hoverable @click="demo='BingMap'">
          <template #cover>
            <img src="https://lib.iszy.xyz/iClient3D_28443/examples/webgl/img/bingMap.jpg"/>
          </template>
          <Meta title="BingMap"></Meta>
        </Card>
      </Col>
    </Row>
    <Row v-if="demo" :gutter="[{ xs: 8, sm: 16, md: 24},{ xs: 8, sm: 16, md: 24}]">
      <Col :span="24">
        <div class="demo">
          <BingMap v-if="demo==='BingMap'"/>
        </div>
      </Col>
    </Row>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import { Row, Col, Card, Breadcrumb } from 'ant-design-vue'
import BingMap from '@/views/gis/cesiumDemo/demos/BingMap.vue'

const { Meta } = Card
const { Item } = Breadcrumb

export default {
  name: 'cesiumDemo',
  components: {
    BingMap,
    Container,
    Row,
    Col,
    Card,
    Meta,
    Breadcrumb,
    Item
  },
  data: () => ({
    demo: ''
  })
}
</script>

<style scoped lang="scss">
.demo {
  height: calc(100vh - 34.8rem);
  width: 100%;
}
</style>
