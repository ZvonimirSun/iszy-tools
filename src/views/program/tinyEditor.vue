<template>
  <div class="panel">
    <TextArea class="inputPanel" placeholder="请输入HTML内容" title="HTML" v-model:value="html"/>
    <TextArea class="inputPanel" placeholder="请输入CSS内容" title="CSS" v-model:value="css"/>
    <TextArea class="inputPanel" placeholder="请输入JS内容" title="JS" v-model:value="js"/>
    <iframe class="displayPanel" :srcdoc="doc" seamless title="展示面板"/>
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'

const { TextArea } = Input

export default {
  name: 'tinyEditor',
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
