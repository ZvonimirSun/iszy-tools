<script setup lang="ts">
import { isExternalLink } from '@/utils/common'

const searchStr = ref('')
const settingStore = useSettingStore()
const toolsStore = useToolsStore()

const toolMenus = computed(() => {
  return toolsStore.toolMenusFilter(searchStr.value)
})

const settings = settingStore.general
const isFav = toolsStore.isFav

const updateFav = toolsStore.updateFav

onMounted(() => {
  toolsStore.fixFavorite()
})
</script>

<template>
  <div class="home-page">
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
      v-for="(item, index) in toolMenus"
      :key="item.id"
    >
      <el-row
        :gutter="16"
        :style="{
          padding: '0 .8rem .4rem',
          marginTop: index === 0 && settings.showSearch ? '3.3rem' : '2.5rem',
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
            :target="(settings.openInNewTab || isExternalLink(tool.link)) ? '_blank' : ''"
            :to="isExternalLink(tool.link) ? (`/redirect?url=${tool.link}`) : (tool.link || '')"
          >
            <div
              class="tool"
              :class="{ toolCollected: isFav(tool.name) }"
            >
              <span class="toolName">{{ tool.name }}</span>
              <span
                v-if="isFav(tool.name)"
                class="fav collected"
                @click.prevent="updateFav({ name: tool.name, link: tool.link || '', add: false })"
              ><span class="i-icon-park-solid-star" /></span>
              <span
                v-else
                class="fav"
                @click.prevent="updateFav({ name: tool.name, link: tool.link || '', add: true })"
              >
                <span class="nonHover"><span class="i-icon-park-outline-star" /></span>
                <span class="hovered"><span class="i-icon-park-solid-star" /></span>
              </span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 1.6rem;
  box-sizing: border-box;
}

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

    font-size: var(--el-font-size-medium);
    line-height: 1.5;

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
  font-size: var(--el-font-size-medium);
  line-height: 1.5;
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
