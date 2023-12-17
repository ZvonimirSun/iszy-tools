<script setup lang="ts">
import { identity } from 'lodash-es'
import type { FormInstance, FormItemRule, FormRules } from 'element-plus'

const props = withDefaults(
  defineProps<{
    transformer?:(v: string) => string
    inputValidationRules?: FormItemRule[]
    inputLabel?: string
    inputPlaceholder?: string
    inputDefault?: string
    outputLabel?: string
  }>(),
  {
    transformer: identity,
    inputValidationRules: () => [],
    inputLabel: '输入',
    inputDefault: '',
    inputPlaceholder: '输入...',
    outputLabel: '输出'
  }
)

const { transformer, inputValidationRules, inputLabel, outputLabel, inputPlaceholder, inputDefault } = toRefs(props)

const emits = defineEmits<{(e: 'format', data: string): void}>()

const ruleFormRef = ref<FormInstance>()

const form = reactive({
  input: inputDefault.value
})

watch(inputDefault, (val) => {
  form.input = val
})

const output = computed(() => transformer.value(form.input))

const rules = reactive<FormRules<typeof form>>({
  input: inputValidationRules.value
})

onMounted(() => {
  emits('format', output.value)
})

watch(output, () => {
  emits('format', output.value)
})
</script>

<template>
  <div class="formatter-container">
    <el-form
      ref="ruleFormRef"
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
        <el-input
          :model-value="output"
          :rows="20"
          type="textarea"
          readonly
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.formatter-container {
  display: flex;
  gap: .8rem;

  .el-form {
    width: 100%;
    display: flex;
    gap: .8rem;

    .el-form-item {
      width: 50%;
    }
  }
}
</style>
