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
  <a-form layout="vertical">
    <a-form-item>
      <template #label>
        <strong>搜索</strong>
      </template>
      <a-input
        v-model:value="keyword"
        placeholder="搜索关键词，如'手机'"
      />
    </a-form-item>
    <template
      v-for="(item,index) in rules"
      :key="index"
    >
      <a-divider v-show="isShow(item)" />
      <a-form-item
        v-show="isShow(item)"
        :rules="{trigger:['change', 'blur'],validator:validator}"
        has-feedback
        :name="item.key"
      >
        <template #label>
          <strong>{{ item.title }}</strong>&nbsp;<a-typography-link
            :href="'https://github.com/any86/any-rule/issues/new?title=我有更好的正则: '+item.title"
            target="_blank"
          >
            <strong>反馈</strong>
          </a-typography-link>
        </template>
        <a-input
          v-model:value="item.test"
          :placeholder="'例如: '+item.examples.join(', ') + (item.counterExamples ? '; 反例: ' + item.counterExamples.join(', '): '')"
        />
      </a-form-item>
      <a-typography-paragraph
        v-show="isShow(item)"
        :copyable="{text:item.rule.toString()}"
      >
        <pre>{{ item.rule.toString() }}</pre>
      </a-typography-paragraph>
    </template>
  </a-form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import anyRule from '@/utils/anyRule.js'

export default {
  name: 'AnyRule',
  data: () => ({
    rules: [],
    keyword: '',
    dict: {}
  }),
  computed: {
    isShow () {
      return item => (item.title.includes(this.keyword))
    }
  },
  mounted () {
    this.rules = Object.freeze(anyRule.map(item => {
      item.key = uuidv4()
      item.test = ''
      item.status = ''
      this.dict[item.key] = item
      return item
    }))
  },
  methods: {
    async validator (val) {
      if (val && val.field && this.dict[val.field]) {
        const { rule, test } = this.dict[val.field]
        if (test !== '') {
          if (!rule.test(test)) {
            throw new Error('不通过')
          }
        }
      }
    }
  }
}
</script>

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
