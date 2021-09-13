<template>
  <container>
    <Row :gutter="[{ xs: 8, sm: 16},{ xs: 8, sm: 16}]" v-if="!demo">
      <Col :xs="12" :sm="8" :md="6" :lg="4" :xl="3">
        <Card hoverable @click="demo='BingMap'">
          <template #cover>
            <img src="https://lib.iszy.xyz/iClient3D_28443/examples/webgl/img/bingMap.jpg" alt="BingMap"/>
          </template>
          <Meta title="BingMap"></Meta>
        </Card>
      </Col>
    </Row>
    <template v-else>
      <Breadcrumb>
        <Item @click="demo=''" href="">
          <span>首页</span>
        </Item>
        <Item>
          <span style="user-select: none">{{ demo }}</span>
        </Item>
      </Breadcrumb>
      <div class="demo">
        <BingMap v-if="demo==='BingMap'"/>
      </div>
    </template>
  </container>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Container from '@/components/container.vue'
import { Row, Col, Card, Breadcrumb } from 'ant-design-vue'

const { Meta } = Card
const { Item } = Breadcrumb

export default {
  name: 'cesiumDemo',
  components: {
    BingMap: defineAsyncComponent(() => import('@/views/gis/cesiumDemo/demos/BingMap.vue')),
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
.ant-breadcrumb {
  margin-bottom: .8rem;
}

.demo {
  height: calc(100% - 3rem);
  width: 100%;
}

:deep(.ant-card-body) {
  padding: 1.6rem;
}
</style>
