<script setup lang="ts">
const settingStore = useSettingStore()
const styleStore = useGlobalStore()
const settings = settingStore.general
</script>

<template>
  <div class="settings-wrapper">
    <a-typography-title :level="4">
      全局设置
    </a-typography-title>
    <a-typography-title :level="5">
      外观
    </a-typography-title>
    <el-space>
      <el-radio-group
        :model-value="settings.theme.mode"
        @change="styleStore.setTheme"
      >
        <el-radio value="auto" label="跟随系统" />
        <el-radio value="light" label="浅色" />
        <el-radio value="dark" label="深色" />
      </el-radio-group>
    </el-space>
    <a-typography-title :level="5">
      访问统计
    </a-typography-title>
    <el-space>
      <el-checkbox
        v-model="settings.showMost"
      >
        最常访问
      </el-checkbox>
      <el-checkbox
        v-model="settings.showRecent"
      >
        最近访问
      </el-checkbox>
    </el-space>
    <a-typography-title :level="5">
      其他设置
    </a-typography-title>
    <el-space>
      <el-checkbox
        v-model="settings.showSearch"
      >
        显示搜索
      </el-checkbox>
      <el-checkbox
        v-model="settings.showType"
      >
        显示分类
      </el-checkbox>
      <el-checkbox
        v-model="settings.openInNewTab"
      >
        新标签页打开工具
      </el-checkbox>
    </el-space>
  </div>
</template>

<style scoped lang="scss">
.settings-wrapper {
  width: calc((100% - 3rem) / 4);
  min-width: 35rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
}
</style>
