<template>
  <div class="codePanel">
    <div class="header">
      <a-button type="primary" @click="format" title="格式化 (Ctrl-I)">
        <template #icon>
          <IconFont type="icon-t-format-indent-increa"></IconFont>
        </template>
      </a-button>
      <a-button type="primary" @click="compact" title="压缩 (Ctrl-Shift-I)">
        <template #icon>
          <IconFont type="icon-t-format-indent-decrea"></IconFont>
        </template>
      </a-button>
      <a-divider type="vertical" />
      <a-button type="primary" @click="undo" title="撤销 (Ctrl-Z)" :disabled="historySize.undo === 0">
        <template #icon>
          <UndoOutlined />
        </template>
      </a-button>
      <a-button type="primary" @click="redo" title="重做 (Ctrl-Y)" :disabled="historySize.redo === 0">
        <template #icon>
          <RedoOutlined />
        </template>
      </a-button>
      <a-divider type="vertical" />
      <a-button type="primary" title="前往顶部" @click="goTop">
        <template #icon>
          <VerticalAlignTopOutlined />
        </template>
      </a-button>
      <a-button type="primary" title="前往底部" @click="goBottom">
        <template #icon>
          <VerticalAlignBottomOutlined />
        </template>
      </a-button>
      <a-divider type="vertical" />
      <a-button type="primary" title="修复" @click="fix">
        <template #icon>
          <IconFont type="icon-t-fix"></IconFont>
        </template>
      </a-button>
    </div>
    <textarea ref="codemirror"></textarea>
    <div class="footer">
      <span>总行数:&nbsp;{{lineCount}}&nbsp;&nbsp;行数:&nbsp;{{cursor.line+1}}&nbsp;&nbsp;列数:&nbsp;{{cursor.ch+1}}</span>
    </div>
  </div>
</template>

<script>
// region import

import { markRaw } from 'vue'
import CodeMirror from 'codemirror'
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

import { UndoOutlined, RedoOutlined, VerticalAlignTopOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons-vue'

window.jsonlint = jsonlint
// endregion

let codemirror

export default {
  name: 'JSON编辑器',
  data: () => ({
    code: '{\n  "Array": [\n    1,\n    2,\n    3\n  ],\n  "Boolean": true,\n  "Null": null,\n  "Number": 123,\n  "Object": {\n    "a": "b",\n    "c": "d"\n  },\n  "String": "Hello World"\n}',
    cursor: { line: 0, ch: 0 },
    lineCount: 0,
    historySize: { undo: 0, redo: 0 }
  }),
  components: { UndoOutlined, RedoOutlined, VerticalAlignTopOutlined, VerticalAlignBottomOutlined },
  mounted () {
    codemirror = markRaw(CodeMirror.fromTextArea(this.$refs.codemirror, {
      // Js高亮显示
      mode: 'application/json',
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
          if (cm.getOption('fullScreen')) { cm.setOption('fullScreen', false) }
        },
        'Ctrl-/': (cm) => {
          cm.execCommand('toggleComment')
        },
        'Ctrl-I': () => {
          this.format()
        }, // 代码格式化
        'Ctrl-S': (cm) => {
          cm.save()
          localStorage.setItem('jsonEditor_content', this.code)
          cm.doc.markClean()
        }
      }
    }))
    codemirror.on('change', cm => {
      this.code = cm.getValue()
      this.lineCount = cm.doc.lineCount()
      this.historySize = cm.doc.historySize()
    })
    codemirror.on('cursorActivity', cm => {
      this.cursor = cm.getCursor()
    })
    codemirror.setValue(localStorage.getItem('jsonEditor_content') || this.code)
    this.lineCount = codemirror.doc.lineCount()
    codemirror.doc.clearHistory()
    this.historySize = codemirror.doc.historySize()
    codemirror.setSize('100%', 'calc(100% - 72px)')
  },
  beforeUnmount () {
    this.destroy()
  },
  methods: {
    format () {
      try {
        codemirror.setValue(JSON.stringify(JSON.parse(this.code), undefined, 2))
      } catch (e) {
      }
    },
    compact () {
      codemirror.setValue((this.code || '').replaceAll(' ', '').replaceAll('\n', ''))
    },
    fix () {
      try {
        const tmp = codemirror.getScrollInfo()
        codemirror.setValue(JSON.stringify(eval('(' + this.code + ')'), undefined, 2))
        codemirror.scrollTo(tmp.left, tmp.top)
      } catch (e) {}
    },
    redo () {
      codemirror.redo()
    },
    undo () {
      codemirror.undo()
    },
    goTop () {
      codemirror.execCommand('goDocStart')
    },
    goBottom () {
      codemirror.execCommand('goDocEnd')
    },
    destroy () {
      const element = codemirror.doc.cm.getWrapperElement()
      element && element.remove && element.remove()
    }
  }
}
</script>

<style scoped lang="scss">
.codePanel {
  width: 100%;
  height: calc(100vh - 200px);
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
