<script lang="ts" setup>
import { NIL as NIL_UUID, v1 as uuidv1, v4 as uuidv4 } from 'uuid'

const formState = ref({
  count: 1,
  version: 'v4',
  hasHyphen: true,
})
const auto = ref(true)
const times = ref(0)
const result = ref('')

watch(formState, (val) => {
  if (val.version === 'nil' && val.count !== 1) {
    val.count = 1
  }
  if (auto.value) {
    generate()
  }
}, {
  deep: true,
})

watch(auto, (val) => {
  if (val) {
    generate()
  }
})

function generate() {
  times.value++
  result.value = ''
  const _times = times.value
  const version = formState.value.version
  const count = formState.value.count
  const hasHyphen = formState.value.hasHyphen
  for (let i = 0; i < count; i++) {
    if (_times !== times.value) {
      break
    }
    let tmp = ''
    switch (version) {
      case 'v1': {
        tmp = uuidv1()
        break
      }
      case 'v4': {
        tmp = uuidv4()
        break
      }
      case 'nil': {
        tmp = NIL_UUID
        break
      }
      default:
        break
    }
    if (hasHyphen) {
      result.value += `${tmp}\n`
    }
    else {
      result.value += `${tmp.replaceAll('-', '')}\n`
    }
  }
}
function reset() {
  times.value = 0
  formState.value = {
    count: 1,
    version: 'v4',
    hasHyphen: true,
  }
}
</script>

<template>
  <el-form
    layout="inline"
    :model="formState"
  >
    <el-form-item label="版本">
      <el-select v-model="formState.version">
        <el-option value="v1">
          Version 1
        </el-option>
        <el-option value="v4">
          Version 4
        </el-option>
        <el-option value="nil">
          NIL
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      v-show="formState.version !== 'nil'"
      label="数量"
    >
      <el-input-number
        v-model="formState.count"
        :max="500"
        :min="1"
        :step="1"
      />
    </el-form-item>
    <el-form-item label="连字符">
      <el-switch v-model="formState.hasHyphen" />
    </el-form-item>
    <el-form-item label="自动生成">
      <el-switch v-model="auto" />
    </el-form-item>
  </el-form>
  <el-divider />
  <div class="btnGroup">
    <el-button
      type="primary"
      @click="generate"
    >
      生成
    </el-button>
    <el-button
      @click="reset"
    >
      重置
    </el-button>
  </div>
  <div class="resultPanel">
    <el-input
      v-model="result"
      type="textarea"
      placeholder="结果栏"
      :autosize="{ minRows: 10, maxRows: 20 }"
    />
  </div>
</template>

<style scoped lang="scss">
.resultPanel {
  width: 100%;
  margin-top: 1.6rem;
}
</style>
