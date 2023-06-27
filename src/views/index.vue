<template>
  <el-row
    v-if="settings.showSearch"
    :gutter="8"
  >
    <el-col>
      <div class="search-wrapper">
        <span class="i-icon-park-outline-search" />
        <el-input
          v-model="searchStr"
          placeholder="搜索工具"
        />
      </div>
    </el-col>
  </el-row>
  <template
    v-for="(item) in tools"
    :key="item.id"
  >
    <el-row
      :gutter="16"
      :style="{
        padding: '0 .8rem .4rem',
      }"
    >
      <el-col
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
      </el-col>
      <el-col
        v-for="(tool) in item.children"
        :key="tool.id"
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        :xl="3"
      >
        <router-link
          :target="(settings.openInNewTab || /^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link))?'_blank':''"
          :to="(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link))?('/redirect?url='+tool.link):(tool.link||'')"
        >
          <el-tooltip
            placement="top"
            :show-after="200"
            :content="tool.name"
          >
            <div
              class="tool"
              :class="{toolCollected:isFav(tool.name)}"
            >
              <span class="toolName">{{ tool.name }}</span>
              <span
                v-if="isFav(tool.name)"
                class="fav collected"
                @click.prevent="updateFav({name:tool.name,link:tool.link||'',add:false})"
              ><span class="i-icon-park-solid-star" /></span>
              <span
                v-else
                class="fav"
                @click.prevent="updateFav({name:tool.name,link:tool.link||'',add:true})"
              >
                <span class="nonHover"><span class="i-icon-park-outline-star" /></span>
                <span class="hovered"><span class="i-icon-park-solid-star" /></span>
              </span>
            </div>
          </el-tooltip>
        </router-link>
      </el-col>
    </el-row>
  </template>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
import oriTools from '@/views/tools.json'
import { cloneDeep, flatten } from 'lodash-es'
import type { Ref } from 'vue'
import { useUserStore } from '@/stores/user'
import type { ToolMenu } from '@/env'

const searchStr: Ref<string> = ref('')
const count: Ref<number> = ref(6)
const userStore = useUserStore()

const allTools = computed(() => {
  return flatten([...(oriTools || [])].map(item => {
    return item.children
  }))
})

// 补充id
for (const item of oriTools as ToolMenu[]) {
  item.id = item.id || uuid()
  if (item.children) {
    for (const tool of item.children) {
      tool.id = tool.id || uuid()
    }
  }
}

const isLogged = computed(() => userStore.isLogged)
const settings = computed(() => userStore.settings)
const isFav = computed(() => userStore.isFav)

const toolsHasAuth = computed(() => {
  let tmp: ToolMenu[]
  if (settings.value.showType) {
    tmp = [...(oriTools || [])]
  } else {
    tmp = [{
      id: uuid(),
      type: '工具',
      icon: 'i-icon-park-solid-all-application',
      children: allTools.value
    }]
  }
  if (settings.value.showRecent && userStore.recent().length > 0) {
    tmp.unshift({
      id: uuid(),
      type: '最近访问',
      icon: 'i-icon-park-outline-history',
      children: userStore.recent(count.value)
    })
  }
  if (userStore.settings.showMost && userStore.most().length > 0) {
    tmp.unshift({
      id: uuid(),
      type: '最常访问',
      icon: 'i-icon-park-solid-concern',
      children: userStore.most(count.value)
    })
  }
  if (userStore.favorite.length > 0) {
    tmp.unshift({
      id: uuid(),
      type: '收藏',
      icon: 'i-icon-park-solid-folder-focus',
      children: userStore.favorite
    })
  }
  return tmp
    .map(item => {
      const a = cloneDeep(item)
      a.children = (a.children || [])
        .filter(item => (!item.requiresAuth || isLogged.value))
      return a
    })
    .filter(item => item.children?.length)
})

const tools = computed(() => {
  const tmp: ToolMenu[] = toolsHasAuth.value
  if (searchStr.value) {
    return tmp.map(item => {
      const a = cloneDeep(item)
      a.children = (a.children || []).filter(item => {
        const tags = item.tags || []
        const tmpSearchStr = searchStr.value.toLowerCase()
        return (item.name.toLowerCase().includes(tmpSearchStr) || item.link.toLowerCase().includes(tmpSearchStr) || tags.some((tag: string) => {
          return tag.includes(tmpSearchStr)
        }))
      })
      return a
    }).filter(item => item.children?.length)
  } else {
    return tmp
  }
})

const updateFav = userStore.updateFav

onMounted(() => {
  userStore.fixFavorite()
})
</script>

<style scoped lang="scss">
.search-wrapper {
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  padding: 1.4rem 2rem;
  color: var(--el-text-color-primary);

  [class^="i-"] {
    font-size: 2.2rem;
    margin-right: 1.4rem;
    color: var(--el-color-primary)
  }

  :deep(.el-input) {
    flex: 1;
    background: transparent;

    .el-input__wrapper:not(.is-focus):not(:hover) {
      background: transparent;
      outline: none;
      border: none;
      box-shadow: unset;
    }
  }
}

.el-row {
  background: var(--el-fill-color);
  box-shadow: var(--el-box-shadow-light);
  border-radius: var(--el-border-radius-round);

  &:not(:first-child) {
    margin-top: 3.3rem;
  }
}

.typeNameCol {
  padding: .8rem;
  margin-top: -2.5rem;

  .typeName {
    margin-left: 3rem;
    padding: 0 1.6rem;

    height: 3.2rem;
    display: inline-flex;
    align-items: center;

    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.4rem;

    color: var(--el-color-white);
    background-color: var(--el-color-primary);
    box-shadow: var(--el-box-shadow-light);
    border-radius: var(--el-border-radius-middle);

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
  color: var(--el-text-color-primary);
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  border-radius: var(--el-border-radius-middle);
  margin: .8rem 0;
  padding: .8rem 1.6rem;
  background-color: var(--el-fill-color-lighter);
  border: var(--el-border);

  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  white-space: nowrap;

  position: relative;
  text-decoration: none;

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
      color: var(--el-color-primary);
    }

    .hovered {
      display: none;
    }
  }

  @media (any-hover: hover) {
    &:hover {
      background-color: var(--el-color-primary);
      color: var(--el-color-white);
      //transform: scale3d(1.1, 1.1, 1.1);
      padding-right: 1.5rem * 2;

      .fav {
        display: unset;

        &.collected {
          color: var(--el-color-white);
        }

        &:hover {
          .nonHover {
            display: none;
          }

          .hovered {
            display: unset;
            color: var(--el-color-white);
          }
        }
      }
    }
  }

  @media (any-hover: none) {
    padding-right: 1.5rem * 2;

    .fav {
      display: unset;
    }

    &:active {
      background-color: var(--el-color-primary);
      color: var(--el-color-white);
      //transform: scale3d(1.1, 1.1, 1.1);

      .fav {

        &.collected {
          color: var(--el-color-white);
        }

        .nonHover {
          display: none;
        }

        .hovered {
          display: unset;
          color: var(--el-color-white);
        }
      }
    }
  }
}

a {
  text-decoration: none;
}
</style>
