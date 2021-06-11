<template>
  <Row :span="24">
    <Col :span="24">
      <Divider orientation="left">
        <span class="typeName">{{name || ($route.meta || {}).title || $route.name}}</span>
      </Divider>
    </Col>
    <Col :span="24">
      <div class="main">
        <slot></slot>
      </div>
    </Col>
  </Row>
</template>
<script>
import { Row, Col, Divider } from 'ant-design-vue'

export default {
  name: 'container',
  props: {
    name: String
  },
  components: { Row, Col, Divider }
}
</script>

<style scoped lang="scss">
.ant-row {
  margin-top: 3.5rem;
  background: #fff;
  box-shadow: 0 0.8rem 1rem rgb(36 159 253 / 30%);
  border-radius: .8rem;

  &:not(:first-child) {
    margin-top: 3.5rem;
  }

  &:not(.noName) {
    .ant-col:first-child {
      margin-top: -3.5rem;
    }
  }
}

.main {
  padding: 1.2rem;
}

.typeName {
  font-size: 1.8rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  background-color: #16b0f6;
  padding: .48rem 1.28rem;
  color: #fff;
  box-shadow: 0 0.8rem 1rem rgb(36 159 253 / 30%);
  border-radius: .8rem;

  .anticon {
    font-size: 2.4rem;
    margin-right: .5rem;
  }
}
</style>
