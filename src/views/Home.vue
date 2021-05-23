<template>
  <template v-for="(item,index) in tools" :key="'type'+ index">
    <Row :gutter="{ xs: 8, sm: 16, md: 24}">
      <Col :span="24">
        <Divider orientation="left">
          <span class="typeName">
            <IconFont :type="item.icon" v-if="item.icon"></IconFont>
            <div>{{ item.type }}</div>
          </span>
        </Divider>
      </Col>
      <Col :xs="12" :sm="12" :md="8" :lg="6" v-for="(tool,i) in item.children" :key="'tool'+i">
        <router-link :target="(settings.openInNewTab || /^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1+}$/.test(tool.link))?'_blank':''"
                     :to="(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1+}$/.test(tool.link))?('/redirect?url='+tool.link):((item.link||'')+(tool.link||''))">
          <div class="tool">
            <span class="toolName">{{ tool.name }}</span>
            <span class="fav collected" v-if="isFav(tool.name)" @click.prevent="removeFav({name:tool.name})"><StarFilled/></span>
            <span class="fav" @click.prevent="addFav({name:tool.name,link:(item.link||'')+(tool.link||'')})"
                  v-else><span class="nonHover"><StarOutlined/></span><span class="hovered"><StarFilled/></span></span>
            <sup :style="{color:tool.color}" v-if="tool.color"></sup>
          </div>
        </router-link>
      </Col>
    </Row>
  </template>
</template>

<script>
import { StarOutlined, StarFilled } from '@ant-design/icons-vue'
import { Row, Col, Divider } from 'ant-design-vue'
import tools from '@/assets/tools.json'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: '首页',
  components: { StarOutlined, StarFilled, Row, Col, Divider },
  methods: {
    ...mapActions({
      addFav: 'favorite/addFav',
      removeFav: 'favorite/removeFav'
    })
  },
  computed: {
    tools () {
      let tmp
      if (this.settings.showType) {
        tmp = [...tools] || []
      } else {
        tmp = [{
          type: '工具',
          icon: 'icon-t-changyong',
          children: []
        }]
        for (const type of (tools || [])) {
          for (const tool of type.children) {
            tmp[0].children.push(
              Object.assign(tool, {
                link: (/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1+}$/.test(tool.link)) ? ('/redirect?url=' + tool.link) : ((type.link || '') + (tool.link || ''))
              })
            )
          }
        }
      }
      if (this.settings.showRecent && this.recent.length > 0) {
        tmp.unshift({
          type: '最近访问',
          icon: 'icon-t-recent',
          children: this.recent
        })
      }
      if (this.settings.showMost && this.most.length > 0) {
        tmp.unshift({
          type: '最常访问',
          icon: 'icon-t-changyong',
          children: this.most
        })
      }
      if (this.favorite.length > 0) {
        tmp.unshift({
          type: '收藏',
          icon: 'icon-t-star-filled',
          children: this.favorite
        })
      }
      return tmp.filter(item => (Array.isArray(item.children) && item.children.length > 0))
    },
    ...mapState({
      settings: state => state.settings.settings,
      favorite: state => state.favorite.favorite
    }),
    ...mapGetters({
      most: 'statistics/most',
      recent: 'statistics/recent',
      isFav: 'favorite/isFav'
    })
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
  background-color: #fff;
  transform: translateZ(0);
  transition: transform 0.2s, color 0.2s, background-color 0.2s;
  text-align: center;
  text-overflow: ellipsis;
  position: relative;

  .fav {
    display: none;
    position: absolute;
    right: 0.9375rem;
    overflow: hidden;

    &.collected {
      display: unset;
      color: #16b0f6;
    }

    .hovered {
      display: none;
    }
  }

  sup {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 6px;
    height: 6px;
    background: #ff4d4f;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff;
  }

  &:hover {
    background-color: #16b0f6;
    color: #fff;
    transform: scale3d(1.1, 1.1, 1.1);
    padding-right: .9375rem * 2;

    .fav {
      display: unset;

      &.collected {
        color: yellow;
      }

      &:hover {
        .nonHover {
          display: none;
        }

        .hovered {
          display: unset;
          color: yellow;
        }
      }
    }

    sup {
      display: none;
    }
  }
}
</style>
