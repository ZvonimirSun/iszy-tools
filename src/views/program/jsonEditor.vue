<template>
  <div class="codePanel">
    <textarea ref="textarea" name="codemirror" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript.js'
// theme css
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
// require active-line.js
import 'codemirror/addon/selection/active-line.js'
// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js'
import 'codemirror/addon/search/searchcursor.js'
// hint
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/javascript-hint.js'
// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'

import 'codemirror/addon/search/match-highlighter.js'
// keyMap
import 'codemirror/mode/clike/clike.js'
import 'codemirror/addon/edit/matchbrackets.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'

import 'codemirror/addon/search/search.js'
import 'codemirror/keymap/sublime.js'
// foldGutter
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'

let codemirror

export default {
  name: 'JSON编辑器',
  data: () => ({
    code: 'const a = 1',
    cmOptions: {
      tabSize: 4,
      mode: 'text/javascript',
      theme: 'idea',
      lineNumbers: true,
      line: true
    }
  }),
  mounted () {
    codemirror = CodeMirror.fromTextArea(this.$refs.textarea, this.cmOptions)
    codemirror.setValue(this.code)
    codemirror.on('change', cm => {
      this.code = cm.getValue()
      if (this.$emit) {
        this.$emit('input', this.code)
      }
    })
  },
  beforeUnmount () {
    this.destroy()
  },
  methods: {
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
  height: 500px;
}
</style>
