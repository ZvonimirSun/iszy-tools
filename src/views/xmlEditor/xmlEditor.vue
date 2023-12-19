<template>
  <div class="code-container">
    <el-switch
      :model-value="data.advancedMode"
      size="large"
      inactive-text="简易模式"
      active-text="高级模式"
      @change="toggleMode"
    />
    <div
      v-if="!data.advancedMode"
      flex
      gap-4
      flex-col
      w-full
      items-center
    >
      <div
        flex
        gap-4
        items-center
      >
        <el-switch
          v-model="options.collapseContent"
          size="large"
          inactive-text="折叠内容"
        />
        <span>
          缩进大小
        </span>
        <el-input-number
          v-model="options.indentValue"
          :min="0"
          :max="10"
          :step="1"
          :step-strictly="true"
        />
      </div>
      <FormatTransformer
        w-full
        input-label="你的XML内容"
        input-placeholder="在这里粘贴XML内容..."
        output-label="格式化后的XML内容"
        :input-default="data.value"
        :transformer="transformer"
        :input-validation-rules="rules"
        @format="data.formattedValue = $event"
      />
    </div>
    <full-editor
      v-else
      :value="data.value"
      @change="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
import { formatter, isValid } from '@/components/editor/lang-xml'
import FullEditor from './child/fullEditor.vue'

const data = reactive({
  advancedMode: false,
  value: '<hello><world>foo</world><world>bar</world></hello>',
  formattedValue: ''
})

const options = reactive({
  collapseContent: true,
  indentValue: 2
})

const rules = [{
  validator: (rule: any, val: string, callback: any) => {
    if (!isValidXML(val)) {
      callback(new Error('请输入正确的XML内容'))
    } else {
      callback()
    }
  },
  trigger: 'change'
}]

function toggleMode () {
  data.value = data.formattedValue || data.value
  data.advancedMode = !data.advancedMode
}

function updateValue (val: string) {
  data.formattedValue = val
}

function transformer (value: string) {
  try {
    return formatter(value.trim(), options.indentValue, {
      collapseContent: options.collapseContent
    })
  } catch (e) {
    return ''
  }
}

function isValidXML (val: string) {
  const tmp = val.trim()
  if (!tmp) {
    return true
  }
  return isValid(tmp)
}
</script>

<style scoped lang="scss">
.code-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;

  & > :last-child {
    flex: 1;
    width: 100%;
  }
}
</style>
