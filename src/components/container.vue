<template>
  <Row :span="24">
    <Col :span="24">
      <Divider orientation="left">
        <span class="typeName">{{name || ($route.meta || {}).title || $route.name}}&nbsp;<span class="fullScreen" @click="fullScreen"><FullscreenOutlined /></span></span>
      </Divider>
    </Col>
    <Col :span="24">
      <div class="main" ref="container">
        <slot></slot>
      </div>
    </Col>
  </Row>
</template>
<script>
import { Row, Col, Divider } from 'ant-design-vue'
import { FullscreenOutlined } from '@ant-design/icons-vue'

export default {
  name: 'container',
  props: {
    name: String
  },
  components: { Row, Col, Divider, FullscreenOutlined },
  methods: {
    fullScreen () {
      // eslint-disable-next-line no-useless-call
      this.$refs.container.requestFullscreen.call(this.$refs.container)
    }
  }
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
  background: #fff;
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

  .fullScreen {
    cursor: pointer;

    .anticon {
      font-size: 1.8rem;
    }
  }
}
</style>
