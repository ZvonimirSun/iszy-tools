<script setup lang="ts">
import { iniToSettings, settingsToIni, getEmptySettings } from './palServerSettings.service'
import type { SettingObject } from './palServerSettings'
import createFile from '@/utils/createFile'

const settings: SettingObject[] = reactive(getEmptySettings())

async function getFile (file: File) {
  try {
    const text = await file.text()
    settings.splice(0, settings.length, ...iniToSettings(text))
    ElMessage.success('解析成功')
  } catch (_) {
    ElMessage.error('解析失败')
  }
  return false
}

function downloadFile () {
  const ini = settingsToIni(settings)
  createFile(ini, 'PalWorldSettings.ini')
}

function reset () {
  settings.splice(0, settings.length, ...getEmptySettings())
}
</script>

<template>
  <div
    flex
    flex-col
    gap-4
    w-full
    h-full
    overflow-auto
    items-center
  >
    <div
      flex
      flex-wrap
      gap-4
    >
      <el-upload
        :before-upload="getFile"
        :show-file-list="false"
        accept=".ini"
      >
        <el-button type="primary">
          解析配置
        </el-button>
      </el-upload>
      <el-button
        @click="reset"
      >
        恢复默认
      </el-button>
      <el-button
        @click="downloadFile"
      >
        下载配置
      </el-button>
    </div>
    <el-form
      flex-1
      overflow-auto
      label-width="21rem"
      @submit.prevent
    >
      <div
        flex
        flex-wrap
      >
        <el-form-item
          v-for="setting in settings"
          :key="setting.key"
          :label="setting.label"
        >
          <el-input-number
            v-if="setting.type === 'number'"
            v-model="setting.default"
            :min="setting.min"
            :max="setting.max"
          />
          <el-switch
            v-else-if="setting.type === 'switch'"
            v-model="setting.default"
          />
          <el-select
            v-else-if="setting.type === 'select'"
            v-model="setting.default"
          >
            <el-option
              v-for="option in setting.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
          <el-input
            v-else
            v-model="setting.default"
          />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.el-button + .el-button {
  margin-left: 0;
}

.el-form-item {
  width: 30%;
  min-width: 40rem;
}
</style>
