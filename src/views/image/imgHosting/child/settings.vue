<template>
  <a-typography-title :level="4">
    通用配置
  </a-typography-title>
  <div class="commonConfigPanel">
    <a-form-item label="时间戳重命名">
      <a-switch
        v-model:checked="commonConfig.renameTimeStamp"
      />
    </a-form-item>
    <a-form-item label="上传后自动复制URL">
      <a-switch
        v-model:checked="commonConfig.copyUrlAfterUpload"
      />
    </a-form-item>
    <a-typography-title :level="5">
      链接复制格式
    </a-typography-title>
    <a-radio-group
      v-model:value="customCopyContentType"
      class="custom-copy-wrapper"
      @change="updateCustomCopyContent"
    >
      <a-radio
        value="standard"
      >
        标准
        <a-typography-text
          code
          content="$url"
        />
      </a-radio>
      <a-radio
        value="markdown"
      >
        MarkDown
        <a-typography-text
          code
          content="![]($url)"
        />
      </a-radio>
      <a-radio
        value="custom"
      >
        自定义
        <a-input
          v-model:value="customContent"
          style="width: 100px; margin-left: 10px"
        />
      </a-radio>
    </a-radio-group>
  </div>
  <a-divider />
  <a-typography-title :level="4">
    图床设置
  </a-typography-title>
  <a-tabs
    v-model:activeKey="currentUploader"
    type="card"
    @change="changeUploader"
  >
    <a-tab-pane
      v-for="(item,name) of uploaders"
      :key="name"
      :tab="item.name"
    >
      <div
        v-if="currentUploader === name"
        class="configPanel"
      >
        <div class="configTable">
          <a-form
            layout="vertical"
          >
            <a-form-item
              v-for="(item1) of currentConfig"
              :key="item1.name"
              :label="item1.label"
              :required="item1.required"
            >
              <a-input
                v-if="item1.type==='input'"
                v-model:value="item1.default"
                allow-clear
                :placeholder="item1.hint"
              />
              <a-input-password
                v-else-if="item1.type==='password'"
                v-model:value="item1.default"
                allow-clear
                :placeholder="item1.hint"
              />
            </a-form-item>
          </a-form>
        </div>
        <div class="configOperator">
          <a-button
            type="primary"
            @click="save"
          >
            保存
          </a-button>
        </div>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import * as uploaders from '../uploader/index'
import { cloneDeep, merge } from 'lodash-es'
import type { Ref } from 'vue'
import { useImgHostingStore } from '@/stores/imgHosting'
import $msg from 'ant-design-vue/es/message'
import { AliOssConfig } from '../uploader/index'
import { CheckboxChangeEvent } from 'ant-design-vue/es/checkbox/interface'

const imgHosingStore = useImgHostingStore()
const commonConfig = imgHosingStore.commonConfig
const config = imgHosingStore.config

const defaultCommonConfig = {
  renameBeforeUpload: false,
  renameTimeStamp: true,
  copyUrlAfterUpload: true,
  customCopyContent: '$url'
}
const customCopyContentType: Ref<'standard'|'markdown'|'custom'> = ref('standard')
const customContent: Ref<string> = ref('$url')

const currentUploader: Ref<'aliyun'> = ref('aliyun')
const currentConfig: Ref<uploaders.Config[]> = ref([])

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
function updateCustomCopyContent (val: CheckboxChangeEvent) {
  switch (val.target.value) {
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
      $msg.warn('必填项未填写完整')
      return
    }
    config[c.name] = c.default
  }
  useImgHostingStore().saveConfig({
    uploader: currentUploader.value,
    config
  })
  $msg.success('保存成功')
}
</script>

<style scoped lang="scss">
.ant-divider {
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

.ant-form-item {
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
