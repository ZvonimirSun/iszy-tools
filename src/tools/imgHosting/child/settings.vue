<template>
  <a-typography-title :level="4">
    通用配置
  </a-typography-title>
  <div class="commonConfigPanel">
    <el-form-item label="时间戳重命名">
      <el-switch
        v-model="commonConfig.renameTimeStamp"
      />
    </el-form-item>
    <el-form-item label="上传后自动复制URL">
      <el-switch
        v-model="commonConfig.copyUrlAfterUpload"
      />
    </el-form-item>
    <a-typography-title :level="5">
      链接复制格式
    </a-typography-title>
    <el-radio-group
      v-model="customCopyContentType"
      class="custom-copy-wrapper"
      @change="updateCustomCopyContent"
    >
      <el-radio
        label="standard"
      >
        标准
        <a-typography-text
          code
          content="$url"
        />
      </el-radio>
      <el-radio
        label="markdown"
      >
        MarkDown
        <a-typography-text
          code
          content="![]($url)"
        />
      </el-radio>
      <el-radio
        label="custom"
      >
        自定义
        <el-input
          v-model="customContent"
          style="width: 100px; margin-left: 10px"
        />
      </el-radio>
    </el-radio-group>
  </div>
  <el-divider />
  <a-typography-title :level="4">
    图床设置
  </a-typography-title>
  <el-tabs
    v-model="currentUploader"
    type="card"
    @tab-change="changeUploader"
  >
    <el-tab-pane
      v-for="(item,name) of uploaders"
      :key="name"
      :name="name"
      :label="item.name"
    >
      <div
        v-if="currentUploader === name"
        class="configPanel"
      >
        <div class="configTable">
          <el-form
            label-position="top"
          >
            <el-form-item
              v-for="(item1) of currentConfig"
              :key="item1.name"
              :label="item1.label"
              :required="item1.required"
            >
              <el-input
                v-if="item1.type==='input'"
                v-model="item1.default"
                allow-clear
                :placeholder="item1.hint"
              />
              <el-input
                v-else-if="item1.type==='password'"
                v-model="item1.default"
                type="password"
                allow-clear
                :placeholder="item1.hint"
              />
            </el-form-item>
          </el-form>
        </div>
        <div class="configOperator">
          <el-button
            type="primary"
            @click="save"
          >
            保存
          </el-button>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import * as uploaders from '../uploader/index'
import { cloneDeep, merge } from 'lodash-es'
import { AliOssConfig } from '../uploader/index'

const imgHosingStore = useImgHostingStore()
const commonConfig = imgHosingStore.commonConfig
const config = imgHosingStore.config

const defaultCommonConfig = {
  renameBeforeUpload: false,
  renameTimeStamp: true,
  copyUrlAfterUpload: true,
  customCopyContent: '$url'
}
const customCopyContentType = ref<'standard'|'markdown'|'custom'>('standard')
const customContent = ref('$url')

const currentUploader = ref<'aliyun'>('aliyun')
const currentConfig = ref<uploaders.Config[]>([])

onMounted(() => {
  const uploader = useImgHostingStore().uploader
  if (uploader != null) {
    currentUploader.value = uploader
  }
  merge(commonConfig, merge({}, defaultCommonConfig, commonConfig))
  switch (commonConfig.customCopyContent) {
    case '$url':
      customCopyContentType.value = 'standard'
      break
    case '![]($url)':
      customCopyContentType.value = 'markdown'
      break
    default:
      customCopyContentType.value = 'custom'
      customContent.value = commonConfig.customCopyContent
  }
  changeUploader()
})
function updateCustomCopyContent (val: string | number | boolean) {
  switch (val) {
    case 'standard':
      commonConfig.customCopyContent = '$url'
      break
    case 'markdown':
      commonConfig.customCopyContent = '![]($url)'
      break
    case 'custom':
      commonConfig.customCopyContent = customContent.value
      break
  }
}
watch(customContent, (val: string) => {
  if (customCopyContentType.value === 'custom') {
    commonConfig.customCopyContent = val
  }
})

function changeUploader () {
  if (currentUploader.value === 'aliyun') {
    currentConfig.value = cloneDeep(uploaders[currentUploader.value].config(config(currentUploader.value) as AliOssConfig))
  }
}

function save () {
  const config = {} as Record<string, string>
  for (const c of currentConfig.value) {
    if (c.required && (c.default == null || c.default === '')) {
      ElMessage.warning('必填项未填写完整')
      return
    }
    config[c.name] = c.default
  }
  useImgHostingStore().saveConfig({
    uploader: currentUploader.value,
    config
  })
  ElMessage.success('保存成功')
}
</script>

<style scoped lang="scss">
.el-divider {
  margin: .8rem 0;
}

.configPanel {

  .configOperator {
    text-align: right;
    margin-top: .8rem;
  }
}

.commonConfigPanel {
  .ant-space {
    flex-wrap: wrap;
  }
}

.el-form-item {
  margin-bottom: .8rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.custom-copy-wrapper :deep(.ant-radio-wrapper) {
  display: flex;
  height: 32px;
  line-height: 32px;
}
</style>
