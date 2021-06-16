<template>
  <container>
    <div ref="jsonEditor" class="jsonEditor"></div>
    <Button type="primary" @click="download">
      下载 JSON 文件
    </Button>
  </container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Container from '@/components/container.vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile.js'
import { Button } from 'ant-design-vue'
import { markRaw } from 'vue'
const { mapActions, mapState } = createNamespacedHelpers('jsonEditor')

export default {
  name: 'JsonEditor',
  components: { Container, Button },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    ...mapState({
      content: state => state.content
    })
  },
  methods: {
    init () {
      let code = this.content || {
        Array: [1, 2, 3],
        Boolean: true,
        Null: null,
        Number: 123,
        Object: { a: 'b', c: 'd' },
        String: 'Hello World'
      }
      if (typeof code === 'string') {
        try {
          code = JSON.parse(this.content)
        } catch (e) {}
      }
      this.editor = markRaw(new JSONEditor(
        this.$refs.jsonEditor,
        {
          mode: 'code',
          modes: ['text', 'code', 'tree', 'form', 'view'],
          onChangeText: (jsonString) => {
            this.saveContent(jsonString)
          }
        },
        code
      ))
    },
    download () {
      createFile(this.editor.getText(), 'main.json')
    },
    ...mapActions(['saveContent'])
  },
  beforeUnmount () {
    if (this.editor) {
      this.editor.destroy()
    }
  }
}
</script>

<style lang="scss">
.jsonEditor {
  height: calc(100vh - 36.3rem);
}

.ant-btn {
  margin-top: 1.2rem;
}

.jsoneditor-poweredBy {
  display: none;
}
</style>
