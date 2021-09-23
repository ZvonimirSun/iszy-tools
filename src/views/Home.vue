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
    <Row :gutter="{ xs: 8, sm: 16}">
      <Col :span="24" class="typeNameCol">
        <div class="typeName">
          <iconpark-icon class="i-icon" :name="item.icon" color="#fff" v-if="item.icon"/>
          <div>{{ item.type }}</div>
        </div>
      </Col>
      <Col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" v-for="(tool,i) in item.children" :key="'tool'+i">
        <router-link
          :target="(settings.openInNewTab || /^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link))?'_blank':''"
          :to="(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link))?('/redirect?url='+tool.link):(tool.link||'')">
          <Tooltip>
            <template #title>{{ tool.name }}</template>
            <div class="tool" :class="{toolCollected:isFav(tool.name)}">
              <span class="toolName">{{ tool.name }}</span>
              <span class="fav collected" v-if="isFav(tool.name)" @click.prevent="removeFav({name:tool.name})"><Star theme="filled"/></span>
              <span class="fav" @click.prevent="addFav({name:tool.name,link:tool.link||''})" v-else>
                <span class="nonHover"><Star theme="outline"/></span>
                <span class="hovered"><Star theme="filled"/></span>
              </span>
              <sup :style="{background:getLegendColor(tool.legend)}" v-if="tool.legend"></sup>
            </div>
          </Tooltip>
        </router-link>
      </Col>
    </Row>
  </template>
  <Row :gutter="{ xs: 8, sm: 16, md: 24}">
    <Col :span="24" class="typeNameCol">
      <div class="typeName">
        <notes theme="outline"/>
        <div>公告</div>
      </div>
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
import { Row, Col, Typography, Tooltip } from 'ant-design-vue'
import tools from '@/views/tools.json'
import legends from '@/views/legends.json'
import { createNamespacedHelpers } from 'vuex'
import { cloneDeep, flatten } from 'lodash-es'

const { Paragraph } = Typography
const { mapActions, mapGetters, mapState: favMapState } = createNamespacedHelpers('favorite')
const { mapState: settingsMapState } = createNamespacedHelpers('settings')

export default {
  name: '首页',
  components: { Star, Row, Col, Paragraph, Typography, Search, Notes, Tooltip },
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
    margin-top: 3.3rem;
  }
}

.typeNameCol {
  padding: .8rem;
  margin-top: -2.5rem;

  .typeName {
    margin-left: 3rem;
    padding: .5rem 1.6rem;

    height: 3.2rem;
    display: inline-flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.4rem;

    color: #fff;
    background-color: #16b0f6;
    box-shadow: 0 0.8rem 1rem #16B0F64D;
    border-radius: .8rem;

    .i-icon {
      font-size: 2.4rem;

      & + * {
        margin-left: .5rem;
      }
    }

    * + .i-icon {
      margin-left: .5rem;
    }
  }
}

.tool {
  color: #333333;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  box-shadow: 0 .5rem .8rem #16B0F64D;
  border-radius: .8rem;
  margin: .8rem 0;
  padding: .8rem 1.6rem;
  background-color: #fff;
  transform: translateZ(0);
  transition: transform 0.2s, color 0.2s, background-color 0.2s;

  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;

  position: relative;

  @media screen and (max-width: 576px) {
    box-shadow: unset;
    border: #999 .1rem solid;
  }

  &.toolCollected {
    padding-right: 1.5rem * 2;
  }

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
      //transform: scale3d(1.1, 1.1, 1.1);
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
      //transform: scale3d(1.1, 1.1, 1.1);

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
