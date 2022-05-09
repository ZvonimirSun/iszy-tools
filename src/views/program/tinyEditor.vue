<template>
  <div class="panel">
    <div class="inputPanel">
      <div class="header">
        <a-button
          type="primary"
          title="格式化"
          @click="format('html')"
        >
          <template #icon>
            <span class="i-icon-park-outline-indent-right" />
          </template>
        </a-button>
        <a-button
          type="primary"
          title="折叠所有"
          @click="foldAll('html')"
        >
          <template #icon>
            <span class="i-icon-park-outline-collapse-text-input" />
          </template>
        </a-button>
        <a-button
          type="primary"
          title="展开所有"
          @click="unfoldAll('html')"
        >
          <template #icon>
            <span class="i-icon-park-outline-expand-text-input" />
          </template>
        </a-button>
      </div>
      <v-ace-editor
        v-model:value="html"
        lang="html"
        theme="textmate"
        style="height: calc(100% - 4.2rem);"
        placeholder="请输入HTML内容"
        :options="{
          useWorker: true,
          enableBasicAutocompletion:true,
          enableSnippets:true,
          enableLiveAutocompletion:true
        }"
        @init="editorInit($event, 'html')"
      />
    </div>
    <div class="inputPanel">
      <div class="header">
        <a-button
          type="primary"
          title="格式化"
          @click="format('css')"
        >
          <template #icon>
            <span class="i-icon-park-outline-indent-right" />
          </template>
        </a-button>
        <a-button
          type="primary"
          title="折叠所有"
          @click="foldAll('css')"
        >
          <template #icon>
            <span class="i-icon-park-outline-collapse-text-input" />
          </template>
        </a-button>
        <a-button
          type="primary"
          title="展开所有"
          @click="unfoldAll('css')"
        >
          <template #icon>
            <span class="i-icon-park-outline-expand-text-input" />
          </template>
        </a-button>
      </div>
      <v-ace-editor
        v-model:value="css"
        lang="css"
        theme="textmate"
        style="height: calc(100% - 4.2rem);"
        placeholder="请输入CSS内容"
        :options="{
          useWorker: true,
          enableBasicAutocompletion:true,
          enableSnippets:true,
          enableLiveAutocompletion:true
        }"
        @init="editorInit($event, 'css')"
      />
    </div>
    <div class="inputPanel">
      <div class="header">
        <a-button
          type="primary"
          title="格式化"
          @click="format('css')"
        >
          <template #icon>
            <span class="i-icon-park-outline-indent-right" />
          </template>
        </a-button>
        <a-button
          type="primary"
          title="折叠所有"
          @click="foldAll('js')"
        >
          <template #icon>
            <span class="i-icon-park-outline-collapse-text-input" />
          </template>
        </a-button>
        <a-button
          type="primary"
          title="展开所有"
          @click="unfoldAll('js')"
        >
          <template #icon>
            <span class="i-icon-park-outline-expand-text-input" />
          </template>
        </a-button>
      </div>
      <v-ace-editor
        v-model:value="js"
        lang="javascript"
        theme="textmate"
        style="height: calc(100% - 4.2rem);"
        placeholder="请输入JS内容"
        :options="{
          useWorker: true,
          enableBasicAutocompletion:true,
          enableSnippets:true,
          enableLiveAutocompletion:true
        }"
        @init="editorInit($event, 'js')"
      />
    </div>
    <div class="displayPanel">
      <iframe
        w-full
        h-full
        :srcdoc="doc"
        seamless
        title="展示面板"
      />
    </div>
  </div>
</template>

<script setup>
import { VAceEditor } from 'vue3-ace-editor'
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript.js'
import 'ace-builds/src-noconflict/mode-html.js'
import 'ace-builds/src-noconflict/theme-textmate.js'
import 'ace-builds/src-noconflict/snippets/css.js'
import 'ace-builds/src-noconflict/snippets/javascript.js'
import 'ace-builds/src-noconflict/snippets/html.js'
import 'ace-builds/src-noconflict/ext-searchbox.js'
import 'ace-builds/src-noconflict/ext-language_tools.js'
import 'ace-builds/src-noconflict/ext-beautify.js'
import workerCssUrl from 'ace-builds/src-noconflict/worker-css.js?url'
import workerJavascriptUrl from 'ace-builds/src-noconflict/worker-javascript.js?url'
import workerHtmlUrl from 'ace-builds/src-noconflict/worker-html.js?url'
ace.config.setModuleUrl('ace/mode/css_worker', workerCssUrl)
ace.config.setModuleUrl('ace/mode/javascript_worker', workerJavascriptUrl)
ace.config.setModuleUrl('ace/mode/html_worker', workerHtmlUrl)
const beautify = ace.require('ace/ext/beautify')

const aceEditors = {}

const html = ref('')
const css = ref('')
const js = ref('')

const doc = computed(() => {
  if (html.value + css.value + js.value === '') {
    return '输入内容以在此展示'
  } else {
    return html.value + '<style>' + css.value + '<\/style><script>' + js.value + '<\/script>'
  }
})

function editorInit (aceEditor, type) {
  aceEditor.getSession().setTabSize(2)
  aceEditor.getSession().setUseSoftTabs(true)
  aceEditor.setShowPrintMargin(false)
  aceEditors[type] = aceEditor
}

function format (type) {
  aceEditors[type] && beautify.beautify(aceEditors[type].session)
}
function foldAll (type) {
  aceEditors[type]?.session.foldAll()
}
function unfoldAll (type) {
  aceEditors[type]?.session.unfold()
}
</script>

<style scoped lang="scss">
.panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;

  .inputPanel {
    height: 50%;
    width: calc(100% / 3);
    resize: none;
    border: 1px solid rgb(217, 217, 217);

    @media (max-width: 992px) {
      height: 70%;
      width: 100%;
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

    &:hover {
      border-color: #16b0f6;
    }
  }

  .displayPanel {
    flex: 1;
    height: 50%;

    iframe {
      border: 1px solid rgb(217, 217, 217);
    }

    @media (max-width: 992px) {
      height: 100%;
    }

    &:hover {
      border-color: #16b0f6;
    }
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
