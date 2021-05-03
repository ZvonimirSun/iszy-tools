<template>
  <template v-for="(item,index) in tools" :key="'type'+ index">
    <a-divider orientation="left">
      <span class="typeName">
      <IconFont :type="item.icon" v-if="item.icon"></IconFont>
      <div>{{ item.type }}</div>
      </span>
    </a-divider>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24}">
      <a-col :xs="12" :sm="12" :md="8" :lg="6" v-for="(tool,i) in item.children" :key="'tool'+i">
        <a :href="tool.link" target="_blank" v-if="/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}$/.test(tool.link)">
          <div class="tool">{{ tool.name }}</div>
        </a>
        <router-link :to="(item.link||'')+(tool.link||'')" v-else>
          <div class="tool">{{ tool.name }}</div>
        </router-link>
      </a-col>
    </a-row>
  </template>
</template>

<script>
import tools from '@/assets/tools.json'
import { mapGetters } from 'vuex'

export default {
  name: '首页',
  computed: {
    tools () {
      const tmp = [...tools] || []
      if (this.recent.length > 0) {
        tmp.unshift({
          type: '最近访问',
          icon: 'icon-t-recent',
          children: this.recent
        })
      }
      if (this.most.length > 0) {
        tmp.unshift({
          type: '最常访问',
          icon: 'icon-t-changyong',
          children: this.most
        })
      }
      return tmp
    },
    ...mapGetters({
      most: 'statistics/most',
      recent: 'statistics/recent'
    })
  }
}
</script>

<style scoped lang="scss">
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

  .anticon {
    font-size: 1.5rem;
    margin-right: 5px;
  }
}

.tool {
  color: #666666;
  font-size: 1.125rem;
  line-height: 1.67rem;
  font-weight: 600;
  box-shadow: 0 0 0.0625rem 0 rgb(8 11 14 / 6%), 0 0.1875rem 0.1875rem -0.0625rem rgb(8 11 14 / 10%), 0 0 0.1875rem 0 rgb(8 11 14 / 2%);
  border-radius: .25rem;
  overflow: hidden;
  margin: .4375rem;
  padding: .625rem .9375rem;
  white-space: nowrap;
  background-color: transparent;
  transform: translateZ(0);
  transition: transform 0.2s, color 0.2s, background-color 0.2s;
  text-align: center;

  &:hover {
    background-color: #16b0f6;
    color: #fff;
    transform: scale3d(1.1, 1.1, 1.1);
  }
}
</style>
