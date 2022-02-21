<template>
  <div class="panel">
    <TextArea
      v-model:value="html"
      class="inputPanel"
      placeholder="请输入HTML内容"
      title="HTML"
    />
    <TextArea
      v-model:value="css"
      class="inputPanel"
      placeholder="请输入CSS内容"
      title="CSS"
    />
    <TextArea
      v-model:value="js"
      class="inputPanel"
      placeholder="请输入JS内容"
      title="JS"
    />
    <iframe
      class="displayPanel"
      :srcdoc="doc"
      seamless
      title="展示面板"
    />
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'

const { TextArea } = Input

export default {
  name: 'TinyEditor',
  components: {
    TextArea
  },
  data: () => ({
    html: '',
    css: '',
    js: ''
  }),
  computed: {
    doc: function () {
      if (this.html + this.css + this.js === '') {
        return '输入内容以在此展示'
      } else {
        return this.html + '<style>' + this.css + '</style><script>' + this.js + '<\/script>'
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  .inputPanel {
    height: 50%;
    width: calc(100% / 3);
    resize: none;
  }

  .displayPanel {
    flex: 1;
    height: 50%;
    border: 1px solid rgb(217, 217, 217);

    &:hover {
      border-color: #16b0f6;
    }
  }
}
</style>
