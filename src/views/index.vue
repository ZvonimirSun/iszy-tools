<template>
  <a-row
    v-if="settings.showSearch"
    :gutter="{ xs: 8, sm: 16, md: 24}"
    class="noName"
  >
    <a-col :span="24">
      <div class="search">
        <search theme="outline" />
        <input
          v-model="searchStr"
          type="search"
          placeholder="搜索工具"
        >
      </div>
    </a-col>
  </a-row>
  <template
    v-for="(item,index) in tools"
    :key="'type'+ index"
  >
    <a-row :gutter="{ xs: 8, sm: 16}">
      <a-col
        :span="24"
        class="typeNameCol"
      >
        <div class="typeName">
          <span
            v-if="item.icon"
            :class="item.icon"
          />
          <div>{{ item.type }}</div>
        </div>
      </a-col>
      <a-col
        v-for="(tool,i) in item.children"
        :key="'tool'+i"
        :xs="12"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="4"
        :xxl="3"
      >
        <router-link
          :target="(settings.openInNewTab || /^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link))?'_blank':''"
          :to="(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link))?('/redirect?url='+tool.link):(tool.link||'')"
        >
          <a-tooltip>
            <template #title>
              {{ tool.name }}
            </template>
            <div
              class="tool"
              :class="{toolCollected:isFav(tool.name)}"
            >
              <span class="toolName">{{ tool.name }}</span>
              <span
                v-if="isFav(tool.name)"
                class="fav collected"
                @click.prevent="updateFav({name:tool.name})"
              ><Star theme="filled" /></span>
              <span
                v-else
                class="fav"
                @click.prevent="updateFav({name:tool.name,link:tool.link||'',add:true})"
              >
                <span class="nonHover"><Star theme="outline" /></span>
                <span class="hovered"><Star theme="filled" /></span>
              </span>
            </div>
          </a-tooltip>
        </router-link>
      </a-col>
    </a-row>
  </template>
</template>

<script>
import { Search, Star } from '@icon-park/vue-next'
import tools from '@/views/tools.json'
import { cloneDeep, flatten } from 'lodash-es'

const { mapActions, mapGetters, mapState, mapMutations } = createNamespacedHelpers('user')

export default {
  name: 'HomePage',
  components: { Star, Search },
  data: () => ({
    searchStr: '',

    count: 6
  }),
  computed: {
    tools () {
      let tmp
      if (this.settings.showType) {
        tmp = [...(tools || [])]
      } else {
        tmp = [{
          type: '工具',
          icon: 'i-icon-park-solid-all-application',
          children: this.allTools
        }]
      }
      if (this.settings.showRecent && this.recent.length > 0) {
        tmp.unshift({
          type: '最近访问',
          icon: 'i-icon-park-outline-history',
          children: this.recent(this.count)
        })
      }
      if (this.settings.showMost && this.most.length > 0) {
        tmp.unshift({
          type: '最常访问',
          icon: 'i-icon-park-solid-concern',
          children: this.most(this.count)
        })
      }
      if (this.favorite.length > 0) {
        tmp.unshift({
          type: '收藏',
          icon: 'i-icon-park-solid-folder-focus',
          children: this.favorite
        })
      }
      if (this.searchStr) {
        tmp = tmp.map(item => {
          const a = cloneDeep(item)
          a.children = a.children.filter(item => {
            const tags = item.tags || []
            const searchStr = this.searchStr.toLowerCase()
            return (item.name.toLowerCase().includes(searchStr) || item.link.toLowerCase().includes(searchStr) || tags.some((tag) => { return tag.includes(searchStr) }))
          })
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
    ...mapState(['settings', 'favorite']),
    ...mapGetters([
      'most',
      'recent',
      'isFav'
    ])
  },
  mounted () {
    this.fixFavorite()
  },
  methods: {
    ...mapMutations(['updateFav']),
    ...mapActions([
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

    [class^="i-"] {
      font-size: 2.2rem;

      & + * {
        margin-left: .5rem;
      }
    }

    * + [class^="i-"] {
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

  [class^="i-"] {
    font-size: 2.2rem;
    margin-right: 1.4rem;
  }

  input {
    flex: 1;
    outline: none;
    border: none;
  }
}
</style>
