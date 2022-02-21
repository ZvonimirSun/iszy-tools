<template>
  <Paragraph>
    <blockquote>
      正则数据来源：<Link
        href="https://any86.github.io/any-rule/"
        target="_blank"
      >
        正则大全
      </Link>
    </blockquote>
  </Paragraph>
  <Form layout="vertical">
    <FormItem>
      <template #label>
        <strong>搜索</strong>
      </template>
      <Input
        v-model:value="keyword"
        placeholder="搜索关键词，如'手机'"
      />
    </FormItem>
    <template
      v-for="(item,index) in rules"
      :key="index"
    >
      <Divider v-show="isShow(item)" />
      <FormItem
        v-show="isShow(item)"
        :rules="{trigger:['change', 'blur'],validator:validator}"
        has-feedback
        :name="item.key"
      >
        <template #label>
          <strong>{{ item.title }}</strong>&nbsp;<Link
            :href="'https://github.com/any86/any-rule/issues/new?title=我有更好的正则: '+item.title"
            target="_blank"
          >
            <strong>反馈</strong>
          </Link>
        </template>
        <Input
          v-model:value="item.test"
          :placeholder="'例如: '+item.examples.join(', ') + (item.counterExamples ? '; 反例: ' + item.counterExamples.join(', '): '')"
        />
      </FormItem>
      <Paragraph
        v-show="isShow(item)"
        :copyable="{text:item.rule.toString()}"
      >
        <pre>{{ item.rule.toString() }}</pre>
      </Paragraph>
    </template>
  </Form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { Typography, Form, Input, Divider } from 'ant-design-vue'
import anyRule from '@/utils/anyRule.js'

const { Paragraph, Link } = Typography
const { Item: FormItem } = Form

export default {
  name: 'AnyRule',
  components: { Paragraph, Link, Form, FormItem, Input, Divider },
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
