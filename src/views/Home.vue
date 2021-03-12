<template>
  <div class="container">
    <a-back-top/>
    <div class="panel">
      <div class="top">
        <div class="header">ISZY 工具集合</div>
        <div class="desc">一个轻量的工具集合</div>
      </div>
      <div class="main">
        <template v-for="(item,index) in tools" :key="'type'+ index">
          <a-divider orientation="left">{{ item.type }}</a-divider>
          <a-row :gutter="{ xs: 8, sm: 16, md: 24}">
            <a-col :span="4" v-for="(tool,i) in item.children" :key="'tool'+i">
              <router-link :to="tool.link">{{tool.name}}</router-link>
            </a-col>
          </a-row>
        </template>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: '首页',
  data: () => ({
    tools: []
  }),
  mounted () {
    this.$axios.get('/tools.json').then(tools => {
      this.tools = tools.data
    })
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100%;

  .panel {
    max-width: 75rem;
    position: relative;
    margin: 0 auto;
    padding: 0 1.25rem 1.25rem
  }

  .top {
    padding-top: 2rem;
    width: 100%;
    text-align: center;

    .header {
      height: 44px;
      line-height: 44px;
      font-size: 33px;
      color: #333333;
      font-weight: 600;
    }

    .desc {
      font-size: 14px;
      margin-top: 12px;
      margin-bottom: 40px;
      color: #999999;
    }
  }

  .main {
    width: 100%;
  }
}
</style>
