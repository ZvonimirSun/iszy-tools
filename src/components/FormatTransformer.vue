<script setup lang="ts">
import { identity } from 'lodash-es'
import type { FormRules } from 'element-plus'
import { EditorPlugin } from '@/types/editor'
import EditorMini from '@/components/editor/EditorMini.vue'
import type { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    plugin: EditorPlugin,
    target?: string
    inputLabel?: string
    inputDefault?: string
    inputPlaceholder?: string,
    invalidMessage?: string,
    outputLabel?: string,
    options?: Record<string, any>
  }>(),
  {
    target: '',
    inputLabel: '输入',
    inputDefault: '',
    inputPlaceholder: '输入...',
    invalidMessage: '请输入正确的内容',
    outputLabel: '输出',
    options: () => ({})
  }
)

const { plugin, inputDefault } = toRefs(props)

const { _inputLabel, _inputPlaceholder, _invalidMessage, _outputLabel } = props.target
  ? {
      _inputLabel: '你的' + props.target + '内容',
      _inputPlaceholder: '在这里粘贴' + props.target + '内容...',
      _invalidMessage: '请输入正确的' + props.target + '内容',
      _outputLabel: '格式化后的' + props.target + '内容'
    }
  : {
      _inputLabel: props.inputLabel,
      _inputPlaceholder: props.inputPlaceholder,
      _invalidMessage: props.invalidMessage,
      _outputLabel: props.outputLabel
    }
const emits = defineEmits<{(e: 'format', data: string): void}>()

const editor = ref<InstanceType<typeof EditorMini>>() as Ref<InstanceType<typeof EditorMini>>
const form = reactive({
  input: inputDefault.value
})
const formatter = props.plugin.formatter || identity<string>
const isValid = props.plugin.isValid || (() => true)

const valid = computed(() => isValid(form.input))

watch(inputDefault, (val) => {
  form.input = val
})
watch([valid, () => props.options, editor], () => {
  if (valid.value) {
    editor.value?.setInput(formatter(form.input, props.options))
  } else {
    editor.value?.setInput('')
  }
}, {
  deep: true
})

const rules = reactive<FormRules<typeof form>>({
  input: [{
    validator: (rule: unknown, val: string, callback: any) => {
      if (!valid.value) {
        callback(new Error(_invalidMessage))
      } else {
        callback()
      }
    },
    trigger: 'change'
  }]
})
</script>

<template>
  <div class="formatter-container">
    <el-form
      :model="form"
      label-position="top"
      :rules="rules"
    >
      <el-form-item
        :label="_inputLabel"
        prop="input"
      >
        <el-input
          v-model="form.input"
          :placeholder="_inputPlaceholder"
          :rows="20"
          type="textarea"
        />
      </el-form-item>
      <el-form-item
        :label="_outputLabel"
      >
        <EditorMini
          ref="editor"
          :plugin="plugin"
          :readonly="true"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.el-form {
  width: 100%;
  display: flex;
  gap: .8rem;

  .el-form-item {
    width: 50%;
  }
}
</style>
