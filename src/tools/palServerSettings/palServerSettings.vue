<script setup lang="ts">
import type { SettingObject } from './palServerSettings'
import createFile from '@/utils/createFile'
import { getEmptySettings, iniToSettings, settingsToIni } from './palServerSettings.service'

const scrollContainer = ref<HTMLDivElement | null>(null)
const {
  width,
  height,
} = useElementSize(scrollContainer)

const settings: SettingObject[] = reactive(getEmptySettings())

async function getFile(file: File) {
  try {
    const text = await file.text()
    settings.splice(0, settings.length, ...iniToSettings(text))
    ElMessage.success('解析成功')
  }
  catch (_) {
    ElMessage.error('解析失败')
  }
  return false
}

function downloadFile() {
  const ini = settingsToIni(settings)
  createFile(ini, 'PalWorldSettings.ini')
}

function reset() {
  settings.splice(0, settings.length, ...getEmptySettings())
}
</script>

<template>
  <div
    h-full w-full flex flex-col items-center gap-4 overflow-auto
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
      label-width="17rem"
      position-relative w-full flex-1 overflow-auto
      @submit.prevent
    >
      <div
        ref="scrollContainer"
        class="scroll-container"
        h-full w-full
      >
        <div
          class="v-scroll"
        >
          <div class="content">
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
        </div>
      </div>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.el-button + .el-button {
  margin-left: 0;
}

@media(min-width: 768px) {
  .scroll-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .v-scroll {
    width: calc(v-bind('height') * 1px);
    height: calc(v-bind('width') * 1px);
    position: relative;
    overflow: auto;
    transform-origin: 0 0;
    transform: translateY(calc(v-bind('height') * 1px)) rotate(-90deg);
  }

  .content {
    height: calc(v-bind('height') * 1px);
    position: absolute;
    left: 100%;
    transform-origin: 0 0;
    rotate: 90deg;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .el-form-item {
    width: calc(calc(v-bind('width') * 1px) / 3 - 1.6rem);
    min-width: 40rem;
  }
}

@media(max-width: 768px) {
  .scroll-container {
    position: relative;
  }

  .v-scroll {
    width: 100%;
    height: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .el-form-item {
    width: 100%;
  }
}
</style>
