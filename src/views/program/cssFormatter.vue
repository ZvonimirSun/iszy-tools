<template>
  <div class="codePanel">
    <div class="header">
      <Button type="primary" @click="format" title="格式化">
        <template #icon>
          <indent-right theme="outline"/>
        </template>
      </Button>
      <Button type="primary" @click="compact" title="压缩">
        <template #icon>
          <compression theme="outline"/>
        </template>
      </Button>
      <Divider type="vertical"/>
      <Button type="primary" @click="foldAll" title="折叠所有">
        <template #icon>
          <collapse-text-input theme="outline"/>
        </template>
      </Button>
      <Button type="primary" @click="unfoldAll" title="展开所有">
        <template #icon>
          <expand-text-input theme="outline"/>
        </template>
      </Button>
      <Divider type="vertical"/>
      <Button type="primary" @click="undo" title="撤销" :disabled="historySize.undo === 0">
        <template #icon>
          <undo theme="outline"/>
        </template>
      </Button>
      <Button type="primary" @click="redo" title="重做" :disabled="historySize.redo === 0">
        <template #icon>
          <redo theme="outline"/>
        </template>
      </Button>
      <Divider type="vertical"/>
      <Button type="primary" title="前往顶部" @click="goTop">
        <template #icon>
          <to-top theme="outline"/>
        </template>
      </Button>
      <Button type="primary" title="前往底部" @click="goBottom">
        <template #icon>
          <to-bottom theme="outline"/>
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
  </div>
</template>

<script>
import {
  IndentRight,
  Compression,
  Undo,
  Redo,
  ToTop,
  ToBottom,
  ExpandTextInput,
  CollapseTextInput
} from '@icon-park/vue-next'
// region codemirror
import 'codemirror/lib/codemirror.css'
// 代码高亮
import 'codemirror/mode/css/css.js'
// 主题
import 'codemirror/theme/idea.css'
import 'codemirror/addon/dialog/dialog.css'
// Sublime Keymap
import 'codemirror/keymap/sublime.js'
// 搜索
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
// import { CSSLint } from 'csslint'
// import 'codemirror/addon/lint/lint.css'
// import 'codemirror/addon/lint/lint.js'
// import 'codemirror/addon/lint/css-lint.js'
import CodeMirror from '@/components/vue-codemirror.vue'
// endregion
import { Button, Divider } from 'ant-design-vue'
import { css_beautify as cssBeautify } from 'js-beautify'
// window.CSSLint = CSSLint

export default {
  name: 'cssFormatter',
  data: () => ({
    code: '',
    cursor: {
      line: 0,
      ch: 0
    },
    lineCount: 0,
    historySize: {
      undo: 0,
      redo: 0
    },
    cmOptions: {
      // Js高亮显示
      mode: 'text/css',
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
      lint: false,
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
  computed: {
    codemirror: function () {
      return this.$refs.cmEditor.codemirror
    }
  },
  components: {
    CodeMirror,
    Button,
    Divider,
    IndentRight,
    Compression,
    Undo,
    Redo,
    ToTop,
    ToBottom,
    ExpandTextInput,
    CollapseTextInput
  },
  mounted () {
    this.codemirror.setSize('100%', '100%')
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
        this.code = cssBeautify(this.code)
      } catch (e) {
      }
    },
    compact () {
      try {
        this.code = this.code.replace(/\s+|\n/g, ' ')
          .replace(/\s*{\s*/g, '{')
          .replace(/\s*}\s*/g, '}')
          .replace(/\s*:\s*/g, ':')
          .replace(/\s*;\s*/g, ';')
      } catch (e) {
      }
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
    foldAll () {
      this.codemirror.execCommand('foldAll')
    },
    unfoldAll () {
      this.codemirror.execCommand('unfoldAll')
    },
    destroy () {
      const element = this.codemirror.doc.cm.getWrapperElement()
      element && element.remove && element.remove()
    },
    onChanges (cm) {
      this.lineCount = cm.doc.lineCount()
      this.historySize = cm.doc.historySize()
    },
    onCursorActivity (cm) {
      this.cursor = cm.getCursor()
    }
  }
}
</script>

<style scoped lang="scss">
.codePanel {
  width: 100%;
  height: 100%;
  border: .1rem solid #ddd;
  font-size: 1.4rem;
  overflow: hidden;

  .header {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: .5rem;
    background-color: #1890ff;
    color: #fff;
    align-items: center;
  }

  .cmEditor {
    width: 100%;
    height: calc(100% - 7.2rem);
  }

  .footer {
    width: 100%;
    padding: .5rem;
    line-height: 2.2rem;
    background-color: #f7f7f7;
    border-top: .1rem solid #ddd;
  }
}

.ant-btn {
  font-size: 1.8rem;

  &[disabled] {
    background-color: #1890ff;
    border: unset;
    cursor: default;
  }

  &:hover:not([disabled]) {
    border-color: #f7f7f7;
  }

  &:not(:last-child) {
    margin-right: .5rem;
  }
}
</style>
