<template>
  <div class="code-container">
    <el-switch
      :model-value="advancedMode"
      size="large"
      inactive-text="简易模式"
      active-text="高级模式"
      @change="toggleMode"
    />
    <div
      v-if="!advancedMode"
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
          v-model="collapseContent"
          size="large"
          inactive-text="折叠内容"
        />
        <span>
          缩进大小
        </span>
        <el-input-number
          v-model="indentValue"
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
        :input-default="value"
        :transformer="transformer"
        :input-validation-rules="rules"
        @format="formattedValue = $event"
      />
    </div>
    <full-editor
      v-else
      :value="value"
      @change="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
import xmlFormat from 'xml-formatter'
import type { Ref } from 'vue'
import FullEditor from './child/fullEditor.vue'

const advancedMode: Ref<boolean> = ref(false)
const value: Ref<string> = ref('<hello><world>foo</world><world>bar</world></hello>')
const formattedValue: Ref<string> = ref('')

const collapseContent: Ref<boolean> = ref(true)
const indentValue: Ref<number> = ref(2)

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
  value.value = formattedValue.value || value.value
  advancedMode.value = !advancedMode.value
}

function updateValue (val: string) {
  formattedValue.value = val
}

function transformer (value: string) {
  try {
    return xmlFormat(value.trim(), {
      collapseContent: collapseContent.value,
      indentation: ' '.repeat(indentValue.value),
      lineSeparator: '\n'
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
  try {
    xmlFormat(tmp)
    return true
  } catch (e) {
    return false
  }
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
