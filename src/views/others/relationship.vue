<template>
  <Typography>
    <blockquote>
      <p>逢年过节遇到三姑六婆，拒绝叫不出口的尴尬！轻松搞定亲戚关系～</p>
      <p>来源: <a href="https://github.com/mumuy/relationship">mumuy/relationship</a></p>
    </blockquote>
    <Form>
      <FormItem label="计算类型">
        <RadioGroup v-model:value="type">
          <RadioButton value="default">
            找称呼
          </RadioButton>
          <RadioButton value="chain">
            找关系
          </RadioButton>
        </RadioGroup>
      </FormItem>
      <FormItem label="我的性别">
        <RadioGroup v-model:value="sex">
          <RadioButton :value="1">
            男
          </RadioButton>
          <RadioButton :value="0">
            女
          </RadioButton>
        </RadioGroup>
      </FormItem>
      <FormItem label="称呼方式">
        <RadioGroup v-model:value="reverse">
          <RadioButton :value="0">
            我称呼对方
          </RadioButton>
          <RadioButton :value="1">
            对方称呼我
          </RadioButton>
        </RadioGroup>
      </FormItem>
    </Form>
    <TextArea
      v-model:value="input"
      placeholder="称谓间用'的'字分开..."
      :auto-size="{ minRows: 2, maxRows: 5 }"
      style="resize: none"
    />
    <h5>快速选择：</h5>
    <Space :size="8">
      <Button @click="add('爸爸')">
        父
      </Button>
      <Button @click="add('妈妈')">
        母
      </Button>
      <Divider type="vertical" />
      <Button @click="add('老公')">
        夫
      </Button>
      <Button @click="add('老婆')">
        妻
      </Button>
      <Divider type="vertical" />
      <Button @click="add('哥哥')">
        兄
      </Button>
      <Button @click="add('弟弟')">
        弟
      </Button>
      <Divider type="vertical" />
      <Button @click="add('姐姐')">
        姐
      </Button>
      <Button @click="add('妹妹')">
        妹
      </Button>
      <Divider type="vertical" />
      <Button @click="add('儿子')">
        子
      </Button>
      <Button @click="add('女儿')">
        女
      </Button>
    </Space>
    <Space :size="8">
      <Button
        type="primary"
        @click="backspace"
      >
        回退
      </Button>
      <Button
        type="primary"
        @click="clear"
      >
        清空
      </Button>
      <Button type="primary">
        计算
      </Button>
    </Space>
    <h5>计算结果：</h5>
    <pre>{{ result }}</pre>
    <Divider />
    <h5>使用案例</h5>
    <ol>
      <li>使用别称查询：<code>姥姥的爸爸的老窦</code> / <code>娘子的爹地的母亲</code> / <code>岳丈的妈咪</code></li>
      <li>使用合称查询：<code>舅舅的孙辈</code> / <code>爸爸的祖父母</code> / <code>姑妈的兄弟姐妹</code></li>
      <li>大小数字混合查询：<code>儿子的大舅的二姑妈的七舅姥爷</code></li>
      <li>不限制方向祖辈孙辈跨度，反复查询：<code>舅妈的婆婆的外甥的姨妈的侄子的爷爷</code></li>
    </ol>
  </Typography>
</template>

<script>
import relationship from 'relationship.js'
import { Typography, Input, Button, Radio, Form, Space, Divider } from 'ant-design-vue'

const { Button: RadioButton, Group: RadioGroup } = Radio
const { Item: FormItem } = Form
const { TextArea } = Input

export default {
  name: 'RelationshipCalculator',
  components: { Typography, RadioGroup, RadioButton, Form, FormItem, TextArea, Button, Space, Divider },
  data: () => ({
    type: 'default',
    sex: 1,
    reverse: 0,
    input: ''
  }),
  computed: {
    result () {
      try {
        const rel = relationship({
          text: this.input,
          sex: this.sex,
          type: this.type,
          reverse: Boolean(this.reverse)
        })
        return rel.join('\n') + '\n'
      } catch (e) {
        return '\n'
      }
    }
  },
  methods: {
    add (val) {
      if (!val) {
        return
      }
      const tmp = this.input.split('的').map(item => { return item.trim() }).filter(item => (item))
      tmp.push(val)
      this.input = tmp.join('的')
    },
    clear () {
      this.input = ''
    },
    backspace () {
      const tmp = this.input.split('的').map(item => { return item.trim() }).filter(item => (item))
      if (tmp.length) {
        tmp.pop()
      }
      this.input = tmp.join('的')
    }
  }
}
</script>

<style scoped lang="scss">
.ant-form-item {
  margin-bottom: .8rem;
}

.ant-typography {
  textarea {
    margin-bottom: .8rem;
  }

  h5 {
    margin: 0 0 .8rem;
  }
}

.ant-space {
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: .8rem;
}
</style>
