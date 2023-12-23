<script setup lang="ts">
import { identity } from 'lodash-es'
import type { FormRules } from 'element-plus'
import { EditorPlugin } from '@/index'
import EditorMini from '@/components/editor/EditorMini.vue'
import type { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    plugin: EditorPlugin,
    inputLabel?: string
    inputDefault?: string
    inputPlaceholder?: string,
    invalidMessage?: string,
    outputLabel?: string,
    options?: Record<string, any>
  }>(),
  {
    inputLabel: '输入',
    inputDefault: '',
    inputPlaceholder: '输入...',
    invalidMessage: '请输入正确的内容',
    outputLabel: '输出',
    options: () => ({})
  }
)

const { plugin, inputLabel, inputDefault, inputPlaceholder, invalidMessage, outputLabel, options } = toRefs(props)

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
watch([valid, options, editor], () => {
  if (valid.value) {
    editor.value?.setInput(formatter(form.input, options.value))
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
        callback(new Error(invalidMessage.value))
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
        :label="inputLabel"
        prop="input"
      >
        <el-input
          v-model="form.input"
          :placeholder="inputPlaceholder"
          :rows="20"
          type="textarea"
        />
      </el-form-item>
      <el-form-item
        :label="outputLabel"
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
