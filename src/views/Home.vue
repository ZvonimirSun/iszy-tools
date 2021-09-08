<template>
  <Row :gutter="{ xs: 8, sm: 16, md: 24}" v-if="settings.showSearch" class="noName">
    <Col :span="24">
      <div class="search">
        <search theme="outline"/>
        <input type="search" placeholder="搜索工具" v-model="searchStr">
      </div>
    </Col>
  </Row>
  <template v-for="(item,index) in tools" :key="'type'+ index">
    <Row :gutter="{ xs: 8, sm: 16, md: 24}">
      <Col :span="24">
        <Divider orientation="left">
          <span class="typeName">
            <iconpark-icon class="i-icon" :name="item.icon" color="#fff" v-if="item.icon"/>
            <div>{{ item.type }}</div>
          </span>
        </Divider>
      </Col>
      <Col :xs="12" :sm="12" :md="8" :lg="6" v-for="(tool,i) in item.children" :key="'tool'+i">
        <router-link
          :target="(settings.openInNewTab || /^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link))?'_blank':''"
          :to="(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link))?('/redirect?url='+tool.link):(tool.link||'')">
          <div class="tool">
            <span class="toolName">{{ tool.name }}</span>
            <span class="fav collected" v-if="isFav(tool.name)" @click.prevent="removeFav({name:tool.name})"><Star theme="filled"/></span>
            <span class="fav" @click.prevent="addFav({name:tool.name,link:tool.link||''})" v-else>
                <span class="nonHover"><Star theme="outline"/></span>
                <span class="hovered"><Star theme="filled"/></span>
              </span>
            <sup :style="{background:getLegendColor(tool.legend)}" v-if="tool.legend"></sup>
          </div>
        </router-link>
      </Col>
    </Row>
  </template>
  <Row :gutter="{ xs: 8, sm: 16, md: 24}">
    <Col :span="24">
      <Divider orientation="left">
          <span class="typeName">
            <notes theme="outline"/>
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
                  <template v-for="(item,index) in legends" :key="index">
                    <span class="legendName">{{ item.label }}</span><sup :style="{background:item.color}"></sup>
                  </template>
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
import { Search, Notes, Star } from '@icon-park/vue-next'
import { Row, Col, Divider, Typography } from 'ant-design-vue'
import tools from '@/views/tools.json'
import legends from '@/views/legends.json'
import { createNamespacedHelpers } from 'vuex'
import { cloneDeep, flatten } from 'lodash-es'

const { Paragraph } = Typography
const { mapActions, mapGetters, mapState: favMapState } = createNamespacedHelpers('favorite')
const { mapState: settingsMapState } = createNamespacedHelpers('settings')

export default {
  name: '首页',
  components: { Star, Row, Col, Divider, Paragraph, Typography, Search, Notes },
  computed: {
    tools () {
      let tmp
      if (this.settings.showType) {
        tmp = [...(tools || [])]
      } else {
        tmp = [{
          type: '工具',
          icon: 'all-application',
          children: this.allTools
        }]
      }
      if (this.settings.showRecent && this.recent.length > 0) {
        tmp.unshift({
          type: '最近访问',
          icon: 'history',
          children: this.recent
        })
      }
      if (this.settings.showMost && this.most.length > 0) {
        tmp.unshift({
          type: '最常访问',
          icon: 'concern',
          children: this.most
        })
      }
      if (this.favorite.length > 0) {
        tmp.unshift({
          type: '收藏',
          icon: 'folder-focus',
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
    allTools () {
      return flatten([...(tools || [])].map(item => {
        return item.children
      }))
    },
    ...settingsMapState(['settings']),
    ...favMapState(['favorite']),
    ...mapGetters([
      'most',
      'recent',
      'isFav'
    ])
  },
  data: () => ({
    searchStr: '',
    legends: legends
  }),
  mounted () {
    this.fixFavorite()
  },
  methods: {
    getLegendColor (label) {
      const tmp = legends.filter(item => (item.label === label))
      if (tmp.length > 0) {
        return tmp[0].color
      } else {
        return ''
      }
    },
    ...mapActions([
      'addFav',
      'removeFav',
      'fixFavorite'
    ])
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

  .i-icon {
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

  @media (any-hover: hover) {
    &:hover {
      background-color: #16b0f6;
      color: #fff;
      transform: scale3d(1.1, 1.1, 1.1);
      padding-right: 1.5rem * 2;

      .fav {
        display: unset;

        &.collected {
          color: white;
        }

        &:hover {
          .nonHover {
            display: none;
          }

          .hovered {
            display: unset;
            color: white;
          }
        }
      }

      sup {
        display: none;
      }
    }
  }

  @media (any-hover: none) {
    padding-right: 1.5rem * 2;

    .fav {
      display: unset;
    }

    &:active {
      background-color: #16b0f6;
      color: #fff;
      transform: scale3d(1.1, 1.1, 1.1);

      .fav {

        &.collected {
          color: white;
        }

        .nonHover {
          display: none;
        }

        .hovered {
          display: unset;
          color: white;
        }
      }

      sup {
        display: none;
      }
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

  .i-icon {
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
