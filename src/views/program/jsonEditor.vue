<template>
  <container>
    <div class="codePanel">
      <div class="header">
        <Button type="primary" @click="format" title="格式化">
          <template #icon>
            <IconFont type="icon-t-format-indent-increa"></IconFont>
          </template>
        </Button>
        <Button type="primary" @click="compact" title="压缩">
          <template #icon>
            <IconFont type="icon-t-format-indent-decrea"></IconFont>
          </template>
        </Button>
        <Button type="primary" @click="showFilterPanel" title="筛选，排序，或者转换内容">
          <template #icon>
            <FilterFilled/>
          </template>
        </Button>
        <Divider type="vertical"/>
        <Button type="primary" @click="undo" title="撤销" :disabled="historySize.undo === 0">
          <template #icon>
            <UndoOutlined/>
          </template>
        </Button>
        <Button type="primary" @click="redo" title="重做" :disabled="historySize.redo === 0">
          <template #icon>
            <RedoOutlined/>
          </template>
        </Button>
        <Divider type="vertical"/>
        <Button type="primary" title="前往顶部" @click="goTop">
          <template #icon>
            <VerticalAlignTopOutlined/>
          </template>
        </Button>
        <Button type="primary" title="前往底部" @click="goBottom">
          <template #icon>
            <VerticalAlignBottomOutlined/>
          </template>
        </Button>
        <Divider type="vertical"/>
        <Button type="primary" title="修复" @click="fix">
          <template #icon>
            <IconFont type="icon-t-fix"></IconFont>
          </template>
        </Button>
      </div>
      <CodeMirror ref="cmEditor" class="cmEditor" v-model:value="code" :options="cmOptions"
                  @changes="onChanges"
                  @cursorActivity="onCursorActivity"
      />
      <div class="footer">
        <span>总行数:&nbsp;{{ lineCount }}&nbsp;&nbsp;行数:&nbsp;{{ cursor.line + 1 }}&nbsp;&nbsp;列数:&nbsp;{{
            cursor.ch + 1
          }}</span>
      </div>
      <Modal v-model:visible="showFilter" title="变换" @ok="filter"
             :bodyStyle="{maxHeight: 'calc(100vh - 80px - 103px)', overflowY: 'auto'}" style="top: 40px">
        <p>输入一个
          <Text code>JMESPath</Text>
          查询以过滤、排序或转换JSON数据。要学习
          <Text code>JMESPath</Text>
          ，请转到
          <Link target="_blank" href="https://jmespath.org/tutorial.html">教程</Link>
          。
        </p>
        <Divider orientation="left">查询</Divider>
        <TextArea v-model:value="filterExpression" placeholder="输入一个JMESPath查询以过滤、排序或转换JSON数据。" allow-clear
                  style="resize: vertical;" :auto-size="{ minRows: 2, maxRows: 5 }"/>
        <Divider orientation="left">预览</Divider>
        <Paragraph>
          <pre>{{ filterPreview }}</pre>
        </Paragraph>
      </Modal>
    </div>
  </container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import {
  UndoOutlined,
  RedoOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignBottomOutlined,
  FilterFilled
} from '@ant-design/icons-vue'
import jmespath from 'jmespath'

// region codemirror

import 'codemirror/lib/codemirror.css'
// 代码高亮
import 'codemirror/mode/javascript/javascript.js'
// 主题
import 'codemirror/theme/idea.css'
// vim keyMap
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/search/search'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/dialog/dialog.js'
// 代码折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
// 全屏
import 'codemirror/addon/display/fullscreen.css'
import 'codemirror/addon/display/fullscreen.js'
// 括号匹配
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/edit/closebrackets.js'
// 自动补全
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/anyword-hint.js'
// 行注释
import 'codemirror/addon/comment/comment.js'
// 代码错误
import jsonlint from 'jsonlint-mod'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/json-lint.js'
import Container from '@/components/container.vue'
import CodeMirror from '@/components/vue-codemirror.vue'
// endregion

import { Button, Divider, Modal, Typography, Input } from 'ant-design-vue'

const { mapActions, mapState } = createNamespacedHelpers('jsonEditor')
const { Text, Link, Paragraph } = Typography
const { TextArea } = Input
window.jsonlint = jsonlint

export default {
  name: 'JSON编辑器',
  data: () => ({
    code: '{\n  "Array": [\n    1,\n    2,\n    3\n  ],\n  "Boolean": true,\n  "Null": null,\n  "Number": 123,\n  "Object": {\n    "a": "b",\n    "c": "d"\n  },\n  "String": "Hello World"\n}',
    cursor: { line: 0, ch: 0 },
    lineCount: 0,
    historySize: { undo: 0, redo: 0 },

    showFilter: false,
    startFilter: false,
    filterExpression: '@',
    cmOptions: {
      // Js高亮显示
      mode: {
        name: 'javascript',
        json: true
      },
      tabSize: 2,
      indentUnit: 2, // 缩进单位，默认2
      smartIndent: true, // 是否智能缩进
      // 显示行号
      styleActiveLine: true,
      lineNumbers: true,
      // 设置主题
      theme: 'idea',
      // 绑定Vim
      keyMap: 'sublime',
      // 代码折叠
      lineWrapping: true,
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
      // CodeMirror-lint-markers是实现语法报错功能
      lint: true,

      // 全屏模式
      fullScreen: false,

      // 括号匹配
      matchBrackets: true,
      autoCloseBrackets: true,

      // 快捷键
      extraKeys: {
        F11: (cm) => {
          cm.setOption('fullScreen', !cm.getOption('fullScreen'))
        },
        Esc: (cm) => {
          if (cm.getOption('fullScreen')) {
            cm.setOption('fullScreen', false)
          }
        }
      }
    }
  }),
  watch: {
    code: function (val) {
      this.saveContent(val)
    }
  },
  computed: {
    codemirror: function () {
      return this.$refs.cmEditor.codemirror
    },
    filterPreview: function () {
      if (this.startFilter && this.filterExpression) {
        try {
          return JSON.stringify(jmespath.search(JSON.parse(this.code), this.filterExpression), undefined, 2)
        } catch (e) {
          return ''
        }
      } else {
        return ''
      }
    },
    ...mapState({
      content: state => state.content
    })
  },
  components: {
    CodeMirror,
    Container,
    UndoOutlined,
    RedoOutlined,
    VerticalAlignTopOutlined,
    VerticalAlignBottomOutlined,
    FilterFilled,
    Button,
    Divider,
    Modal,
    Text,
    Link,
    Paragraph,
    TextArea
  },
  mounted () {
    this.codemirror.setSize('100%', '100%')
    this.code = this.content || this.code
    this.$nextTick(() => {
      this.codemirror.doc.clearHistory()
      this.lineCount = this.codemirror.doc.lineCount()
      this.historySize = this.codemirror.doc.historySize()
    })
  },
  beforeUnmount () {
    this.destroy()
  },
  methods: {
    format () {
      try {
        this.code = JSON.stringify(JSON.parse(this.code), undefined, 2)
      } catch (e) {
      }
    },
    compact () {
      try {
        this.code = JSON.stringify((JSON).parse(this.code))
      } catch (e) {
      }
    },
    fix () {
      try {
        const tmp = this.codemirror.getScrollInfo()
        const tmp1 = this.cursor
        this.code = JSON.stringify(eval('(' + this.code + ')'), undefined, 2)
        this.codemirror.scrollTo(tmp.left, tmp.top)
        this.codemirror.setCursor(tmp1)
      } catch (e) {
      }
    },
    showFilterPanel () {
      this.showFilter = true
      this.startFilter = true
    },
    filter () {
      this.code = this.filterPreview
      this.startFilter = false
      this.showFilter = false
      this.filterExpression = '@'
    },
    redo () {
      this.codemirror.redo()
    },
    undo () {
      this.codemirror.undo()
    },
    goTop () {
      this.codemirror.execCommand('goDocStart')
    },
    goBottom () {
      this.codemirror.execCommand('goDocEnd')
    },
    destroy () {
      const element = this.codemirror.doc.cm.getWrapperElement()
      element && element.remove && element.remove()
    },

    onChanges (cm) {
      this.code = cm.getValue()
      this.lineCount = cm.doc.lineCount()
      this.historySize = cm.doc.historySize()
    },
    onCursorActivity (cm) {
      this.cursor = cm.getCursor()
    },
    ...mapActions(['saveContent'])
  }
}
</script>

<style scoped lang="scss">
$highlight-background: #f0f0f0;
$highlight-foreground: #444;

.codePanel {
  width: 100%;
  height: calc(100vh - 310px);
  border: 1px solid #ddd;
  font-size: 14px;
  overflow: hidden;

  .header {
    display: inline-flex;
    width: 100%;
    padding: 5px;
    background-color: #1890ff;
    color: #fff;
    align-items: center;
  }

  .cmEditor {
    width: 100%;
    height: calc(100% - 72px);
  }

  .footer {
    width: 100%;
    padding: 5px;
    line-height: 22px;
    background-color: #f7f7f7;
    border-top: 1px solid #ddd;
  }
}

.ant-btn {
  font-size: 18px;

  &[disabled] {
    background-color: #1890ff;
    border: unset;
    cursor: default;
  }

  &:hover:not([disabled]) {
    border-color: #f7f7f7;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
