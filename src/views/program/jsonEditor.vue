<template>
  <div class="editorPanel">
    <div ref="jsonEditorLeft" class="jsonEditor jsonEditorLeft"></div>
    <div class="controller noShowMobile">
      <Space direction="vertical">
        <Button type="primary" @click="copyRight" block>
          <Right theme="outline"/>
          复制
        </Button>
        <Button type="primary" @click="copyLeft" block>
          <Left theme="outline"/>
          复制
        </Button>
        <Button type="primary" @click="save" block>
          <Save theme="outline"/>
          保存
        </Button>
        <Checkbox v-model:checked="autoSave" @change="changeAutoSave">自动</Checkbox>
        <Button type="primary" @click="clear" block v-if="getData('jsonEditor')">
          <Clear theme="outline"/>
          清除
        </Button>
        <Button type="primary" @click="download" block>
          <CodeDownload theme="outline"/>
          下载
        </Button>
        <Checkbox v-model:checked="diff" @change="changeDiff">Diff</Checkbox>
      </Space>
    </div>
    <div ref="jsonEditorRight" class="jsonEditor jsonEditorRight noShowMobile"></div>
  </div>
  <Space class="showMobile" align="center">
    <Button type="primary" @click="download">
      下载
    </Button>
  </Space>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile.js'
import { Button, Space, Checkbox } from 'ant-design-vue'
import { Right, Left, CodeDownload, Save, Clear } from '@icon-park/vue-next'
import { cloneDeep, get, isEqual, uniq, flatMapDeep, isObject } from 'lodash-es'

const { mapGetters, mapActions } = createNamespacedHelpers('cache')

let editorLeft, editorRight
let codeLeft = {
  Array: [1, 2, 3],
  Boolean: true,
  Null: null,
  Number: 123,
  Object: {
    a: 'b',
    c: 'd'
  },
  String: 'Hello World'
}
let codeRight = {
  Array: [1, 2, 3],
  Boolean: true,
  Null: null,
  Number: 123,
  Object: {
    a: 'b',
    c: 'd'
  },
  String: 'Hello World'
}

export default {
  name: 'JsonEditor',
  components: {
    Button,
    Space,
    Checkbox,
    Right,
    Left,
    CodeDownload,
    Save,
    Clear
  },
  data: () => ({
    autoSave: false,
    diff: true
  }),
  computed: {
    ...mapGetters(['getData'])
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.getData('jsonEditor')) {
        this.autoSave = Boolean(this.getData('jsonEditor').autoSave)
        if (this.getData('jsonEditor').left) {
          codeLeft = this.getData('jsonEditor').left
        }
        if (this.getData('jsonEditor').right) {
          codeRight = this.getData('jsonEditor').right
        }
      }
      editorLeft = new JSONEditor(
        this.$refs.jsonEditorLeft,
        {
          mode: 'code',
          modes: ['code', 'tree', 'text', 'preview'],
          onClassName: this.onClassName,
          onChangeText: (json) => {
            try {
              codeLeft = JSON.parse(json)
              editorRight.refresh()
              if (this.autoSave) {
                this.save()
              }
            } catch (e) {}
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
        codeLeft
      )
      editorRight = new JSONEditor(
        this.$refs.jsonEditorRight,
        {
          mode: 'tree',
          modes: ['code', 'tree', 'text', 'preview'],
          onClassName: this.onClassName,
          onChangeText: (json) => {
            try {
              codeRight = JSON.parse(json)
              editorLeft.refresh()
              if (this.autoSave) {
                this.save()
              }
            } catch (e) {
            }
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
        codeRight
      )
    },

    copyRight () {
      codeRight = cloneDeep(codeLeft)
      editorRight.update(codeRight)
      editorLeft.refresh()
      if (this.autoSave) {
        this.save()
      }
    },
    copyLeft () {
      codeLeft = cloneDeep(codeRight)
      editorLeft.update(codeLeft)
      editorRight.refresh()
      if (this.autoSave) {
        this.save()
      }
    },
    async save () {
      if (this.autoSave) {
        try {
          await this.setData({
            key: 'jsonEditor',
            val: {
              autoSave: true,
              left: editorLeft.get(),
              right: editorRight.get()
            }
          })
        } catch (e) {
          this.$msg.warn('JSON存在错误，保存失败')
          await this.setData({
            key: 'jsonEditor',
            val: {
              autoSave: true,
              left: this.getData('jsonEditor').left,
              right: this.getData('jsonEditor').right
            }
          })
        }
      } else {
        await this.setData({
          key: 'jsonEditor',
          val: {
            autoSave: false,
            left: this.getData('jsonEditor').left,
            right: this.getData('jsonEditor').right
          }
        })
      }
    },
    async clear () {
      await this.setData({
        key: 'jsonEditor',
        val: undefined
      })
      this.autoSave = false
      this.$msg.success('清除成功')
    },
    download () {
      createFile(editorLeft.getText(), 'left.json')
    },
    changeDiff () {
      editorLeft.refresh()
      editorRight.refresh()
    },
    changeAutoSave () {
      this.save()
    },

    onClassName ({ path }) {
      const leftValue = get(codeLeft, path)
      const rightValue = get(codeRight, path)

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
    },
    ...mapActions(['setData'])
  },
  beforeUnmount () {
    if (editorLeft) {
      editorLeft.destroy()
    }
    if (editorRight) {
      editorRight.destroy()
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
        display: flex;
        align-items: center;

        .i-icon {
          font-size: 1.8rem;
        }

        .i-icon + span, span + .i-icon {
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
