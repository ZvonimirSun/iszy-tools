<script setup>
import { v4 as uuid } from 'uuid'
import anyRule from '@/utils/anyRule.js'

const model = ref({})
const anyRules = ref([])
const keyword = ref('')
const dict = ref({})

function isShow(item) {
  return item.title.includes(keyword.value)
}

onMounted(() => {
  anyRules.value = anyRule.map((item) => {
    const result = {
      ...item,
      key: uuid(),
    }
    model.value[result.key] = ''
    dict.value[result.key] = result
    return result
  })
})

function validator(rule, value, callback) {
  if (rule && rule.field && dict.value[rule.field]) {
    const { rule: _rule } = dict.value[rule.field]
    if (value) {
      if (!_rule.test(value)) {
        callback(new Error('不通过'))
        return
      }
    }
  }
  callback()
}
</script>

<template>
  <a-typography-paragraph>
    <blockquote>
      正则数据来源：<a-typography-link
        href="https://any86.github.io/any-rule/"
        target="_blank"
      >
        正则大全
      </a-typography-link>
    </blockquote>
  </a-typography-paragraph>
  <el-form
    label-position="top"
    :model="model"
  >
    <el-form-item>
      <template #label>
        <strong>搜索</strong>
      </template>
      <el-input
        v-model="keyword"
        placeholder="搜索关键词，如'手机'"
      />
    </el-form-item>
    <div
      v-for="(item, index) in anyRules"
      :key="index"
    >
      <el-divider v-show="isShow(item)" />
      <el-form-item
        v-show="isShow(item)"
        :rules="[{
          validator,
          trigger: 'change',
        }]"
        :prop="item.key"
      >
        <template #label>
          <strong>{{ item.title }}</strong>&nbsp;<a-typography-link
            :href="`https://github.com/any86/any-rule/issues/new?title=我有更好的正则: ${item.title}`"
            target="_blank"
          >
            <strong>反馈</strong>
          </a-typography-link>
        </template>
        <el-input
          v-model="model[item.key]"
          :placeholder="`例如: ${item.examples.join(', ')}${item.counterExamples ? `; 反例: ${item.counterExamples.join(', ')}` : ''}`"
        />
      </el-form-item>
      <a-typography-paragraph
        v-show="isShow(item)"
        :copyable="{ text: item.rule.toString() }"
      >
        <pre>{{ item.rule.toString() }}</pre>
      </a-typography-paragraph>
    </div>
  </el-form>
</template>

<style scoped lang="scss">
.ant-typography {
  position: relative;

  :deep(.ant-typography-copy) {
    position: absolute;
    right: .8rem;
    top: .8rem;
    display: block;

    & + div {
      .ant-tooltip-inner {
        white-space: nowrap;
      }
    }
  }
}
</style>
