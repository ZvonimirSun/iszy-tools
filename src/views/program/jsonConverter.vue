<template>
  <div
    flex
    h-full
    flex-col
  >
    <a-typography-paragraph>
      在右侧输入JavaScript方法(main方法是必须的)，用于转换左侧的JSON数据。
    </a-typography-paragraph>
    <div
      flex
      flex-wrap
      justify-between
      overflow-auto
      flex-1
    >
      <div class="codePanel">
        <div class="header">
          <a-button
            type="primary"
            title="格式化"
            @click="format"
          >
            <template #icon>
              <span class="i-icon-park-outline-indent-right" />
            </template>
          </a-button>
          <a-button
            type="primary"
            title="压缩"
            @click="compact"
          >
            <template #icon>
              <span class="i-icon-park-outline-compression" />
            </template>
          </a-button>
          <a-divider type="vertical" />
          <a-button
            type="primary"
            title="折叠所有"
            @click="foldAll"
          >
            <template #icon>
              <span class="i-icon-park-outline-collapse-text-input" />
            </template>
          </a-button>
          <a-button
            type="primary"
            title="展开所有"
            @click="unfoldAll"
          >
            <template #icon>
              <span class="i-icon-park-outline-expand-text-input" />
            </template>
          </a-button>
          <a-divider type="vertical" />
          <a-button
            type="primary"
            title="撤销"
            :disabled="!hasUndo"
            @click="undoEditor"
          >
            <template #icon>
              <span class="i-icon-park-outline-undo" />
            </template>
          </a-button>
          <a-button
            type="primary"
            title="重做"
            :disabled="!hasRedo"
            @click="redoEditor"
          >
            <template #icon>
              <span class="i-icon-park-outline-redo" />
            </template>
          </a-button>
          <a-divider type="vertical" />
          <a-button
            type="primary"
            title="前往顶部"
            @click="scrollToTop"
          >
            <template #icon>
              <span class="i-icon-park-outline-to-top" />
            </template>
          </a-button>
          <a-button
            type="primary"
            title="前往底部"
            @click="scrollToBottom"
          >
            <template #icon>
              <span class="i-icon-park-outline-to-bottom" />
            </template>
          </a-button>
        </div>
        <div class="ace-container">
          <v-ace-editor
            v-model:value="json"
            lang="json"
            theme="textmate"
            style="height: 100%;"
            :options="{
              useWorker: true,
              enableBasicAutocompletion:true,
              enableSnippets:true,
              enableLiveAutocompletion:true
            }"
            @init="editorInit"
            @change="editorChange"
          />
        </div>
        <div class="footer">
          <span>总行数:&nbsp;{{ lineCount }}&nbsp;&nbsp;行数:&nbsp;{{ cursor.row + 1 }}&nbsp;&nbsp;列数:&nbsp;{{ cursor.column + 1 }}</span>
        </div>
      </div>
      <div class="codePanel">
        <div class="header">
          <a-button
            type="primary"
            title="格式化"
            @click="formatJs"
          >
            <template #icon>
              <span class="i-icon-park-outline-indent-right" />
            </template>
          </a-button>
          <a-divider type="vertical" />
          <a-button
            type="primary"
            title="撤销"
            :disabled="!hasUndoJs"
            @click="undoEditorJs"
          >
            <template #icon>
              <span class="i-icon-park-outline-undo" />
            </template>
          </a-button>
          <a-button
            type="primary"
            title="重做"
            :disabled="!hasRedoJs"
            @click="redoEditorJs"
          >
            <template #icon>
              <span class="i-icon-park-outline-redo" />
            </template>
          </a-button>
          <a-divider type="vertical" />
          <a-button
            type="primary"
            title="运行"
            @click="run"
          >
            <template #icon>
              <span class="i-icon-park-solid-right-one" />
            </template>
          </a-button>
        </div>
        <div class="ace-container">
          <v-ace-editor
            v-model:value="code"
            lang="javascript"
            theme="textmate"
            style="height: 100%;"
            :options="{
              useWorker: true,
              enableBasicAutocompletion:true,
              enableSnippets:true,
              enableLiveAutocompletion:true
            }"
            @init="editorInitJs"
            @change="editorChangeJs"
          />
        </div>
        <div class="footer">
          <span>总行数:&nbsp;{{ lineCountJs }}&nbsp;&nbsp;行数:&nbsp;{{ cursorJs.row + 1 }}&nbsp;&nbsp;列数:&nbsp;{{ cursorJs.column + 1 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VAceEditor } from 'vue3-ace-editor'
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/mode-json.js'
import 'ace-builds/src-noconflict/mode-javascript.js'
import 'ace-builds/src-noconflict/theme-textmate.js'
import 'ace-builds/src-noconflict/snippets/json.js'
import 'ace-builds/src-noconflict/snippets/javascript.js'
import 'ace-builds/src-noconflict/ext-searchbox.js'
import 'ace-builds/src-noconflict/ext-language_tools.js'
import 'ace-builds/src-noconflict/ext-beautify.js'
import workerJsonUrl from 'ace-builds/src-noconflict/worker-json.js?url'
import workerJavascriptUrl from 'ace-builds/src-noconflict/worker-javascript.js?url'
ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl)
ace.config.setModuleUrl('ace/mode/javascript_worker', workerJavascriptUrl)
const beautify = ace.require('ace/ext/beautify')

let aceEditor = null
let aceEditorJs = null
const code = ref(`function main(json) {
  return json
}`)
const json = ref(`{
  "a": 1,
  "b": 2
}`)
const cursor = ref({
  row: 0,
  column: 0
})
const cursorJs = ref({
  row: 0,
  column: 0
})
const lineCount = ref(0)
const lineCountJs = ref(0)
const hasUndo = ref(false)
const hasRedo = ref(false)
const hasUndoJs = ref(false)
const hasRedoJs = ref(false)

const $msg = inject('$msg')

function editorInit (editor) {
  aceEditor = editor
  editor.getSession().setTabSize(2)
  editor.getSession().setUseSoftTabs(true)
  editor.setShowPrintMargin(false)
  editor.selection.on('changeCursor', () => {
    cursor.value = editor.selection.getCursor()
  })
  cursor.value = editor.selection.getCursor()
  lineCount.value = editor.session.getLength()
}
function editorInitJs (editor) {
  aceEditorJs = editor
  editor.getSession().setTabSize(2)
  editor.getSession().setUseSoftTabs(true)
  editor.setShowPrintMargin(false)
  editor.selection.on('changeCursor', () => {
    cursorJs.value = editor.selection.getCursor()
  })
  cursorJs.value = editor.selection.getCursor()
  lineCountJs.value = editor.session.getLength()
}

function foldAll () {
  aceEditor.session.foldAll()
}

function unfoldAll () {
  aceEditor.session.unfold()
}

function scrollToTop () {
  aceEditor.gotoLine(0)
}

function format () {
  try {
    json.value = JSON.stringify(JSON.parse(json.value), null, 2)
  } catch (e) {}
}

function compact () {
  try {
    json.value = JSON.stringify(JSON.parse(json.value))
  } catch (e) {}
}

function formatJs () {
  beautify.beautify(aceEditorJs.session)
}

function scrollToBottom () {
  aceEditor.gotoLine(aceEditor.session.getLength())
}

async function editorChange () {
  lineCount.value = aceEditor.session.getLength()
  await nextTick()
  const undoManager = aceEditor.session.getUndoManager()
  hasUndo.value = undoManager.hasUndo()
  hasRedo.value = undoManager.hasRedo()
}

async function editorChangeJs () {
  lineCountJs.value = aceEditorJs.session.getLength()
  await nextTick()
  const undoManager = aceEditorJs.session.getUndoManager()
  hasUndoJs.value = undoManager.hasUndo()
  hasRedoJs.value = undoManager.hasRedo()
}

function undoEditor () {
  aceEditor.getSession().getUndoManager().undo()
}

function redoEditor () {
  aceEditor.getSession().getUndoManager().redo()
}

function undoEditorJs () {
  aceEditorJs.getSession().getUndoManager().undo()
}

function redoEditorJs () {
  aceEditorJs.getSession().getUndoManager().redo()
}

function run () {
  try {
    // eslint-disable-next-line no-new-func
    const func = new Function('json', code.value + '\nreturn main(json)')
    json.value = JSON.stringify(func(JSON.parse(json.value)))
    format()
    $msg.success('转换成功')
  } catch (e) {
    $msg.warn(e.message)
  }
}
</script>

<style scoped lang="scss">
.codePanel {
  width: calc(50% - 4px);
  height: 100%;
  border: .1rem solid #ddd;
  font-size: 1.4rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80%;
  }

  .header {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: .5rem;
    background-color: #1890ff;
    color: #fff;
    align-items: center;
  }

  .ace-container {
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

.ant-divider {
  border-color: white;
  height: 1.6rem;
}
</style>
