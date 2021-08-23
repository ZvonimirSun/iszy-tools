<template>
  <container>
    <div class="editorPanel">
      <div ref="jsonEditorLeft" class="jsonEditor jsonEditorLeft"></div>
      <div class="controller noShowMobile">
        <Space direction="vertical">
          <Button type="primary" @click="copyRight" block>复制
            <RightOutlined/>
          </Button>
          <Button type="primary" @click="copyLeft" block>
            <LeftOutlined/>
            复制
          </Button>
          <Button type="primary" @click="download" block>
            下载
          </Button>
          <Checkbox v-model:checked="diff" @change="changeDiff">Diff</Checkbox>
        </Space>
      </div>
      <div ref="jsonEditorRight" class="jsonEditor jsonEditorRight noShowMobile"></div>
    </div>
    <Space class="showMobile">
      <Button type="primary" @click="download">
        下载
      </Button>
    </Space>
  </container>
</template>

<script>
import Container from '@/components/container.vue'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile.js'
import { Button, Space, Checkbox } from 'ant-design-vue'
import { RightOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { markRaw } from 'vue'
import { cloneDeep, get, isEqual, uniq, flatMapDeep, isObject } from 'lodash'

export default {
  name: 'JsonEditor',
  components: {
    Container,
    Button,
    Space,
    Checkbox,
    RightOutlined,
    LeftOutlined
  },
  data: () => ({
    editorLeft: null,
    editorRight: null,
    codeLeft: {
      Array: [1, 2, 3],
      Boolean: true,
      Null: null,
      Number: 123,
      Object: {
        a: 'b',
        c: 'd'
      },
      String: 'Hello World'
    },
    codeRight: {
      Array: [1, 2, 3],
      Boolean: true,
      Null: null,
      Number: 123,
      Object: {
        a: 'b',
        c: 'd'
      },
      String: 'Hello World'
    },
    diff: true
  }),
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.editorLeft = markRaw(new JSONEditor(
        this.$refs.jsonEditorLeft,
        {
          mode: 'tree',
          modes: ['code', 'tree'],
          onClassName: this.onClassName,
          onChangeText: (json) => {
            this.codeLeft = JSON.parse(json)
            this.editorRight.refresh()
          },
          autocomplete: {
            applyTo: ['value'],
            filter: 'contain',
            trigger: 'focus',
            getOptions: (text, path, input, editor) => {
              return new Promise((resolve, reject) => {
                const options = this.extractUniqueWords(editor.get())
                if (options.length > 0) {
                  resolve(options)
                } else {
                  reject(new Error('noOptions'))
                }
              })
            }
          }
        },
        this.codeLeft
      ))
      this.editorRight = markRaw(new JSONEditor(
        this.$refs.jsonEditorRight,
        {
          mode: 'tree',
          modes: ['code', 'tree'],
          onClassName: this.onClassName,
          onChangeText: (json) => {
            this.codeRight = JSON.parse(json)
            this.editorLeft.refresh()
          },
          autocomplete: {
            applyTo: ['value'],
            filter: 'contain',
            trigger: 'focus',
            getOptions: (text, path, input, editor) => {
              return new Promise((resolve, reject) => {
                const options = this.extractUniqueWords(editor.get())
                if (options.length > 0) {
                  resolve(options)
                } else {
                  reject(new Error('noOptions'))
                }
              })
            }
          }
        },
        this.codeRight
      ))
    },

    copyRight () {
      this.codeRight = cloneDeep(this.codeLeft)
      this.editorRight.update(this.codeRight)
      this.editorLeft.refresh()
    },
    copyLeft () {
      this.codeLeft = cloneDeep(this.codeRight)
      this.editorLeft.update(this.codeLeft)
      this.editorRight.refresh()
    },
    download () {
      createFile(this.editorLeft.getText(), 'main.json')
    },
    changeDiff () {
      this.editorLeft.refresh()
      this.editorRight.refresh()
    },

    onClassName ({ path }) {
      const leftValue = get(this.codeLeft, path)
      const rightValue = get(this.codeRight, path)

      if (this.diff) {
        if (isEqual(leftValue, rightValue)) {
          return ''
        } else {
          return 'differentElement'
        }
      } else {
        return ''
      }
    },
    extractUniqueWords (json) {
      return uniq(flatMapDeep(json, function (value, key) {
        return isObject(value)
          ? [key]
          : [key, String(value)]
      }))
    }
  },
  beforeUnmount () {
    if (this.editorLeft) {
      this.editorLeft.destroy()
    }
    if (this.editorRight) {
      this.editorRight.destroy()
    }
  }
}
</script>

<style lang="scss" scoped>
.editorPanel {
  display: flex;
  height: 100%;

  @media (max-width: 1024px) {
    height: calc(100% - 3.2rem - 1.2rem);
  }

  .controller {
    height: 100%;
    width: 10rem;
    text-align: center;

    .ant-space {
      margin-top: 10rem;
      width: 80%;

      :deep(.ant-btn) {
        .anticon + span, span + .anticon {
          margin-left: 0;
        }
      }
    }
  }

  :deep(.jsonEditor) {
    height: 100%;
    width: calc(50% - 5rem);

    .ace-jsoneditor *, textarea.jsoneditor-text *, code, pre {
      font-family: JetBrains Mono, monospace;
    }

    &.jsonEditorLeft {
      @media (max-width: 1024px) {
        width: 100%;
      }

      .differentElement {
        background-color: pink;

        .jsoneditor-field, .jsoneditor-value {
          color: red;
        }
      }
    }

    &.jsonEditorRight .differentElement {
      background-color: #acee61;

      .jsoneditor-field, .jsoneditor-value {
        color: red;
      }
    }
  }

}

.noShowMobile {
  @media (max-width: 1024px) {
    display: none !important;
  }
}

.showMobile {
  @media (min-width: 1024px) {
    display: none !important;
  }
}

.ant-space {
  @media (max-width: 1024px) {
    margin-top: 1.2rem;
  }
}

:deep(.jsoneditor-poweredBy) {
  display: none;
}
</style>
