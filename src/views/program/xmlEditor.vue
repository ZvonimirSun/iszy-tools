<template>
  <div class="codePanel">
    <div class="header">
      <a-button
        type="primary"
        title="格式化"
        @click="format"
      >
        <template #icon>
          <span class="i-iszy-jsoneditor-format" />
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
        v-model:value="code"
        lang="xml"
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
</template>

<script setup>
import { VAceEditor } from 'vue3-ace-editor'
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/mode-xml'
import 'ace-builds/src-noconflict/theme-textmate.js'
import 'ace-builds/src-noconflict/snippets/xml.js'
import 'ace-builds/src-noconflict/ext-searchbox'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'
import workerXmlUrl from 'ace-builds/src-noconflict/worker-xml?url'
ace.config.setModuleUrl('ace/mode/xml_worker', workerXmlUrl)
const beautify = ace.require('ace/ext/beautify')

let aceEditor = null
const code = ref('')
const cursor = ref({
  row: 0,
  column: 0
})
const lineCount = ref(0)
const hasUndo = ref(false)
const hasRedo = ref(false)

function editorInit (editor) {
  aceEditor = editor
  aceEditor.getSession().setTabSize(2)
  aceEditor.getSession().setUseSoftTabs(true)
  aceEditor.setShowPrintMargin(false)
  aceEditor.selection.on('changeCursor', () => {
    cursor.value = aceEditor.selection.getCursor()
  })
  cursor.value = aceEditor.selection.getCursor()
  lineCount.value = aceEditor.session.getLength()
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
  beautify.beautify(aceEditor.session)
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

function undoEditor () {
  aceEditor.getSession().getUndoManager().undo()
}

function redoEditor () {
  aceEditor.getSession().getUndoManager().redo()
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
