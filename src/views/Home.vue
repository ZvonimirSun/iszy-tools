<template>
  <Row :gutter="{ xs: 8, sm: 16, md: 24}" v-if="settings.showSearch" class="noName">
    <Col :span="24">
      <div class="search">
        <IconFont type="icon-t-search"/><input type="search" placeholder="搜索工具" v-model="searchStr">
      </div>
    </Col>
  </Row>
  <template v-for="(item,index) in tools" :key="'type'+ index">
    <Row :gutter="{ xs: 8, sm: 16, md: 24}">
      <Col :span="24">
        <Divider orientation="left">
          <span class="typeName">
            <IconFont :type="item.icon" v-if="item.icon"/>
            <div>{{ item.type }}</div>
          </span>
        </Divider>
      </Col>
      <Col :xs="12" :sm="12" :md="8" :lg="6" v-for="(tool,i) in item.children" :key="'tool'+i">
        <router-link
          :target="(settings.openInNewTab || /^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1+}$/.test(tool.link))?'_blank':''"
          :to="(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1+}$/.test(tool.link))?('/redirect?url='+tool.link):((item.link||'')+(tool.link||''))">
          <div class="tool">
            <span class="toolName">{{ tool.name }}</span>
            <span class="fav collected" v-if="isFav(tool.name)" @click.prevent="removeFav({name:tool.name})"><StarFilled/></span>
            <span class="fav" @click.prevent="addFav({name:tool.name,link:(item.link||'')+(tool.link||'')})"
                  v-else><span class="nonHover"><StarOutlined/></span><span class="hovered"><StarFilled/></span></span>
            <sup :style="{background:tool.color}" v-if="tool.color"></sup>
          </div>
        </router-link>
      </Col>
    </Row>
  </template>
  <Row :gutter="{ xs: 8, sm: 16, md: 24}">
    <Col :span="24">
      <Divider orientation="left">
          <span class="typeName">
            <IconFont type="icon-t-gonggao"/>
            <div>公告</div>
          </span>
      </Divider>
    </Col>
    <Col :span="24">
      <div class="announcement">
        <Typography>
          <Paragraph>
            <ul>
              <li>
                <div class="legendInfo">图例：
                  <span class="legendName">推荐</span><sup :style="{background:'#16b0f6'}"></sup>
                  <span class="legendName">需要联网</span><sup :style="{background:'red'}"></sup>
                </div>
              </li>
            </ul>
          </Paragraph>
        </Typography>
      </div>
    </Col>
  </Row>
</template>

<script>
import { StarOutlined, StarFilled } from '@ant-design/icons-vue'
import { Row, Col, Divider, Typography } from 'ant-design-vue'
import tools from '@/assets/tools.json'
import { mapActions, mapGetters, mapState } from 'vuex'
import { cloneDeep } from 'lodash'

const { Paragraph } = Typography

export default {
  name: '首页',
  components: { StarOutlined, StarFilled, Row, Col, Divider, Paragraph, Typography },
  methods: {
    ...mapActions({
      addFav: 'favorite/addFav',
      removeFav: 'favorite/removeFav'
    })
  },
  data: () => ({
    searchStr: ''
  }),
  computed: {
    tools () {
      let tmp
      if (this.settings.showType) {
        tmp = tools ? [...tools] : []
      } else {
        tmp = [{
          type: '工具',
          icon: 'icon-t-changyong',
          children: []
        }]
        for (const type of (tools ? [...tools] : [])) {
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
      if (this.searchStr) {
        tmp = tmp.map(item => {
          const a = cloneDeep(item)
          a.children = a.children.filter(item => (item.name.includes(this.searchStr)))
          return a
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

.tool {
  color: #666666;
  font-size: 1.8rem;
  line-height: 2.672rem;
  font-weight: 600;
  box-shadow: 0 0 0.1rem 0 rgb(8 11 14 / 6%), 0 0.3rem 0.3rem -0.1rem rgb(8 11 14 / 10%), 0 0 0.3rem 0 rgb(8 11 14 / 2%);
  border-radius: .25rem;
  overflow: hidden;
  margin: .7rem;
  padding: 1rem 1.5rem;
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
    right: 1.5rem;
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
    top: .5rem;
    right: .5rem;
    width: .6rem;
    height: .6rem;
    border-radius: 100%;
    box-shadow: 0 0 0 .1rem #fff;
  }

  &:hover {
    background-color: #16b0f6;
    color: #fff;
    transform: scale3d(1.1, 1.1, 1.1);
    padding-right: 1.5rem * 2;

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

.announcement {
  display: block;
  width: 100%;
  padding: 1.6rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 700;

  .legendInfo {
    display: flex;
    align-items: center;

    .legendName + sup {
      margin: 0 .8rem 0 .5rem;
      display: block;
      width: .6rem;
      height: .6rem;
      border-radius: 100%;
      box-shadow: 0 0 0 .1rem #fff;
    }
  }
}

.search {
  display: inline-flex;
  width: 100%;
  align-items: center;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 700;
  padding: 1.6rem .8rem;
  color: #666666;

  .anticon {
    font-size: 2.4rem;
    margin-right: 1.6rem;
  }

  input {
    flex: 1;
    outline: none;
    border: none;
  }
}
</style>
