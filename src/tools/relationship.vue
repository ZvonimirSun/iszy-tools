<script setup>
import relationship from 'relationship.js'

const type = ref('default')
const sex = ref(1)
const reverse = ref(0)
const input = ref('')

const result = computed(() => {
  try {
    const rel = relationship({
      text: input.value,
      sex: sex.value,
      type: type.value,
      reverse: Boolean(reverse.value),
    })
    return `${rel.join('\n')}\n`
  }
  catch (e) {
    return '\n'
  }
})

function add(val) {
  if (!val) {
    return
  }
  const tmp = input.value.split('的').map((item) => {
    return item.trim()
  }).filter(item => Boolean(item))
  tmp.push(val)
  input.value = tmp.join('的')
}

function clear() {
  input.value = ''
}

function backspace() {
  const tmp = input.value.split('的').map((item) => {
    return item.trim()
  }).filter(item => (item))
  if (tmp.length) {
    tmp.pop()
  }
  input.value = tmp.join('的')
}
</script>

<template>
  <a-typography>
    <blockquote>
      <p>逢年过节遇到三姑六婆，拒绝叫不出口的尴尬！轻松搞定亲戚关系～</p>
      <p>来源: <a href="https://github.com/mumuy/relationship">mumuy/relationship</a></p>
    </blockquote>
  </a-typography>
  <el-form>
    <el-form-item label="计算类型">
      <el-radio-group v-model="type">
        <el-radio-button label="default">
          找称呼
        </el-radio-button>
        <el-radio-button label="chain">
          找关系
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="我的性别">
      <el-radio-group v-model="sex">
        <el-radio-button :label="1">
          男
        </el-radio-button>
        <el-radio-button :label="0">
          女
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="称呼方式">
      <el-radio-group v-model="reverse">
        <el-radio-button :label="0">
          我称呼对方
        </el-radio-button>
        <el-radio-button :label="1">
          对方称呼我
        </el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
  <el-input
    v-model="input"
    type="textarea"
    placeholder="称谓间用'的'字分开..."
    :autosize="{ minRows: 2, maxRows: 5 }"
    style="resize: none"
  />
  <a-typography-title :level="5">
    快速选择：
  </a-typography-title>
  <el-space :size="8">
    <el-space :size="8">
      <el-button @click="add('爸爸')">
        父
      </el-button>
      <el-button @click="add('妈妈')">
        母
      </el-button>
      <el-divider type="vertical" />
      <el-button @click="add('老公')">
        夫
      </el-button>
      <el-button @click="add('老婆')">
        妻
      </el-button>
      <el-divider type="vertical" />
      <el-button @click="add('哥哥')">
        兄
      </el-button>
      <el-button @click="add('弟弟')">
        弟
      </el-button>
      <el-divider type="vertical" />
      <el-button @click="add('姐姐')">
        姐
      </el-button>
      <el-button @click="add('妹妹')">
        妹
      </el-button>
      <el-divider type="vertical" />
      <el-button @click="add('儿子')">
        子
      </el-button>
      <el-button @click="add('女儿')">
        女
      </el-button>
    </el-space>
    <el-space :size="8">
      <el-button
        type="primary"
        @click="backspace"
      >
        回退
      </el-button>
      <el-button
        type="primary"
        @click="clear"
      >
        清空
      </el-button>
    </el-space>
  </el-space>
  <a-typography-title :level="5">
    计算结果：
  </a-typography-title>
  <el-input
    :model-value="result"
    type="textarea"
    readonly
    autosize
  />
  <el-divider />
  <a-typography-title :level="5">
    使用案例
  </a-typography-title>
  <a-typography>
    <ol>
      <li>使用别称查询：<code>姥姥的爸爸的老窦</code> / <code>娘子的爹地的母亲</code> / <code>岳丈的妈咪</code></li>
      <li>使用合称查询：<code>舅舅的孙辈</code> / <code>爸爸的祖父母</code> / <code>姑妈的兄弟姐妹</code></li>
      <li>大小数字混合查询：<code>儿子的大舅的二姑妈的七舅姥爷</code></li>
      <li>不限制方向祖辈孙辈跨度，反复查询：<code>舅妈的婆婆的外甥的姨妈的侄子的爷爷</code></li>
    </ol>
  </a-typography>
</template>

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
