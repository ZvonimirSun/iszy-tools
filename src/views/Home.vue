<template>
  <template v-for="(item,index) in tools" :key="'type'+ index">
    <a-divider orientation="left">{{ item.type }}</a-divider>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24}">
      <a-col :span="4" v-for="(tool,i) in item.children" :key="'tool'+i">
        <router-link :to="tool.link">{{ tool.name }}</router-link>
      </a-col>
    </a-row>
  </template>
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
  height: 100%;
  width: 100%;
}
</style>
