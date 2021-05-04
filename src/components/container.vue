<template>
  <a-row :span="24">
    <a-col :span="24">
      <a-divider orientation="left">
        <span class="typeName">{{name || ($route.meta || {}).title || $route.name}}</span>
      </a-divider>
    </a-col>
    <a-col :span="24">
      <div class="main">
        <slot></slot>
      </div>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: 'container',
  props: {
    name: String
  }
}
</script>

<style scoped lang="scss">
.ant-row {
  margin-top: 35px;
  background: #fff;
  box-shadow: 0 0.5rem 0.625rem rgb(36 159 253 / 30%);
  border-radius: .5rem;

  .ant-col:first-child {
    margin-top: -35px;
  }
}

.main {
  padding: 12px;
}

.typeName {
  font-size: 1.125rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  background-color: #16b0f6;
  padding: .3rem .8rem;
  color: #fff;
  box-shadow: 0 0.5rem 0.625rem rgb(36 159 253 / 30%);
  border-radius: .5rem;
}
</style>
