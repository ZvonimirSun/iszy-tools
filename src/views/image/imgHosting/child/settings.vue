<template>
  <a-typography-title :level="4">
    通用配置
  </a-typography-title>
  <div class="commonConfigPanel">
    <a-form-item label="时间戳重命名">
      <a-switch
        v-model:checked="currentCommonConfig.renameTimeStamp"
        @change="updateConfig"
      />
    </a-form-item>
    <a-form-item label="上传后自动复制URL">
      <a-switch
        v-model:checked="currentCommonConfig.copyUrlAfterUpload"
        @change="updateConfig"
      />
    </a-form-item>
    <a-typography-title :level="5">
      链接复制格式
    </a-typography-title>
    <a-space>
      <a-radio
        :style="radioStyle"
        :checked="currentCommonConfig.customCopyContent==='$url'"
        @change="updateCustomCopyContent('$url')"
      >
        标准<a-typography-text
          code
          content="$url"
        />
      </a-radio>
      <a-radio
        :style="radioStyle"
        :checked="currentCommonConfig.customCopyContent==='![]($url)'"
        @change="updateCustomCopyContent('![]($url)')"
      >
        MarkDown<a-typography-text
          code
          content="![]($url)"
        />
      </a-radio>
      <a-radio
        :style="radioStyle"
        :checked="currentCommonConfig.customCopyContent===customContent"
        @change="updateCustomCopyContent(customContent)"
      >
        自定义<a-input
          v-model:value="customContent"
          style="width: 100px; margin-left: 10px"
          @change="updateCustomCopyContent($event.target.value)"
        />
      </a-radio>
    </a-space>
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
      <div class="configPanel">
        <div class="configTable">
          <a-form
            v-if="currentUploader === name"
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
import { cloneDeep, debounce, merge } from 'lodash-es'
import type { Ref } from 'vue'
import { useImgHostingStore } from '@/stores/imgHosting'
import $msg from 'ant-design-vue/es/message'
import { AliOssConfig } from '../uploader/index'

const currentUploader: Ref<'aliyun'> = ref('aliyun')
const currentConfig: Ref<uploaders.Config[]> = ref([])
const currentCommonConfig = ref({
  renameBeforeUpload: false,
  renameTimeStamp: true,
  copyUrlAfterUpload: true,
  customCopyContent: '$url'
})
const customContent: Ref<string> = ref('$url')

const radioStyle = {
  display: 'flex',
  height: '32px',
  lineHeight: '32px'
}

const config = computed(() => useImgHostingStore().config)
const uploader = computed(() => useImgHostingStore().uploader)
const commonConfig = computed(() => useImgHostingStore().commonConfig)

const saveConfig = useImgHostingStore().saveConfig
const saveCommonConfig = useImgHostingStore().saveCommonConfig

const file = ref()

onMounted(() => {
  if (uploader.value) {
    currentUploader.value = uploader.value
  }
  changeUploader()
  currentCommonConfig.value = merge(currentCommonConfig.value, cloneDeep(commonConfig.value || {}))
  if (currentCommonConfig.value.customCopyContent !== '$url' && currentCommonConfig.value.customCopyContent !== '![]($url)') {
    customContent.value = currentCommonConfig.value.customCopyContent
  }
})

function changeUploader () {
  if (currentUploader.value === 'aliyun') {
    currentConfig.value = cloneDeep(uploaders[currentUploader.value].config(config.value(currentUploader.value) as unknown as AliOssConfig))
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
  saveConfig({
    uploader: currentUploader.value,
    config
  })
  $msg.success('保存成功')
}

const updateConfig = debounce(function () {
  saveCommonConfig(currentCommonConfig.value)
}, 100)

function updateCustomCopyContent (val: string) {
  currentCommonConfig.value.customCopyContent = val
  updateConfig()
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
</style>
