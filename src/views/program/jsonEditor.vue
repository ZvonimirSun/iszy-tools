<template>
  <container>
    <div ref="jsonEditor" class="jsonEditor"></div>
    <Space>
      <Button type="primary" @click="download">
        下载 JSON 文件
      </Button>
      <Checkbox v-model:checked="save">保留结果</Checkbox>
    </Space>
  </container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Container from '@/components/container.vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile.js'
import { Button, Checkbox, Space } from 'ant-design-vue'
import { markRaw } from 'vue'

const {
  mapActions,
  mapState
} = createNamespacedHelpers('jsonEditor')

export default {
  name: 'JsonEditor',
  components: {
    Container,
    Button,
    Checkbox,
    Space
  },
  data () {
    return {
      editor: null,
      code: JSON.stringify({
        Array: [1, 2, 3],
        Boolean: true,
        Null: null,
        Number: 123,
        Object: {
          a: 'b',
          c: 'd'
        },
        String: 'Hello World'
      })
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    save: {
      get () {
        return this.$store.state.jsonEditor.save
      },
      set (save) {
        if (save) {
          this.$store.dispatch('jsonEditor/changeSave', {
            save,
            content: this.code
          })
        } else {
          this.$store.dispatch('jsonEditor/changeSave', { save })
        }
      }
    },
    ...mapState({
      content: state => state.content
    })
  },
  methods: {
    init () {
      let code = this.save
        ? this.content || this.code
        : this.code
      if (typeof code === 'string') {
        try {
          code = JSON.parse(code)
        } catch (e) {
        }
      }
      this.editor = markRaw(new JSONEditor(
        this.$refs.jsonEditor,
        {
          mode: 'code',
          modes: ['text', 'code', 'tree', 'form', 'view'],
          onChangeText: (jsonString) => {
            this.code = jsonString
            if (this.save) {
              this.saveContent(jsonString)
            }
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

<style lang="scss" scoped>
.jsonEditor {
  height: calc(100% - 3.2rem - 1.2rem);

  .ace-jsoneditor *, textarea.jsoneditor-text * {
    font-family: JetBrains Mono, monospace;
  }
}

.ant-space {
  margin-top: 1.2rem;
}

:deep(.jsoneditor-poweredBy) {
  display: none;
}
</style>
