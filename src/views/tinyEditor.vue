<template>
  <div class="panel">
    <div
      v-show="!fullScreenStatus"
      class="inputPanel"
    >
      <div class="header">
        <el-button
          type="primary"
          title="格式化"
          @click="format('html')"
        >
          <template #icon>
            <span class="i-iszy-jsoneditor-format" />
          </template>
        </el-button>
        <el-button
          type="primary"
          title="折叠所有"
          @click="foldAll('html')"
        >
          <template #icon>
            <span class="i-icon-park-outline-collapse-text-input" />
          </template>
        </el-button>
        <el-button
          type="primary"
          title="展开所有"
          @click="unfoldAll('html')"
        >
          <template #icon>
            <span class="i-icon-park-outline-expand-text-input" />
          </template>
        </el-button>
      </div>
      <v-ace-editor
        v-model:value="store.html"
        lang="html"
        :theme="theme"
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
    <div
      v-show="!fullScreenStatus"
      class="inputPanel"
    >
      <div class="header">
        <el-button
          type="primary"
          title="格式化"
          @click="format('css')"
        >
          <template #icon>
            <span class="i-iszy-jsoneditor-format" />
          </template>
        </el-button>
        <el-button
          type="primary"
          title="折叠所有"
          @click="foldAll('js')"
        >
          <template #icon>
            <span class="i-icon-park-outline-collapse-text-input" />
          </template>
        </el-button>
        <el-button
          type="primary"
          title="展开所有"
          @click="unfoldAll('js')"
        >
          <template #icon>
            <span class="i-icon-park-outline-expand-text-input" />
          </template>
        </el-button>
      </div>
      <v-ace-editor
        v-model:value="store.js"
        lang="javascript"
        :theme="theme"
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
    <div
      v-show="!fullScreenStatus"
      class="inputPanel"
    >
      <div class="header">
        <el-button
          type="primary"
          title="格式化"
          @click="format('css')"
        >
          <template #icon>
            <span class="i-iszy-jsoneditor-format" />
          </template>
        </el-button>
        <el-button
          type="primary"
          title="折叠所有"
          @click="foldAll('css')"
        >
          <template #icon>
            <span class="i-icon-park-outline-collapse-text-input" />
          </template>
        </el-button>
        <el-button
          type="primary"
          title="展开所有"
          @click="unfoldAll('css')"
        >
          <template #icon>
            <span class="i-icon-park-outline-expand-text-input" />
          </template>
        </el-button>
      </div>
      <v-ace-editor
        v-model:value="store.css"
        lang="css"
        :theme="theme"
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
    <div
      class="displayPanel"
      :class="{
        fullPanel: fullScreenStatus
      }"
    >
      <el-space class="fullScreen">
        <span
          v-if="fullScreenStatus"
          class="i-icon-park-outline-off-screen"
          title="退出完整展示"
          @click="fullScreen"
        />
        <span
          v-else
          class="i-icon-park-outline-full-screen"
          title="完整展示"
          @click="fullScreen"
        />
        <span
          class="i-fa-solid-external-link-alt"
          title="新标签打开"
          @click="openNew"
        />
      </el-space>
      <iframe
        w-full
        h-full
        :srcdoc="doc"
        seamless
        title="展示面板"
        allowTransparency="true"
      />
    </div>
  </div>
</template>

<script setup>
import { useTinyEditorStore } from '@/stores/tinyEditor'
import { VAceEditor } from 'vue3-ace-editor'
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript.js'
import 'ace-builds/src-noconflict/mode-html.js'
import 'ace-builds/src-noconflict/theme-textmate.js'
import 'ace-builds/src-noconflict/theme-twilight.js'
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

const store = useTinyEditorStore()

const theme = ref('textmate')
const isDark = useDark()
if (isDark.value) {
  theme.value = 'twilight'
}

watch(isDark, (val) => {
  if (val) {
    theme.value = 'twilight'
  } else {
    theme.value = 'textmate'
  }
})

const doc = computed(() => {
  if (store.html + store.css + store.js === '') {
    return '输入内容以在此展示'
  } else {
    return store.html + '<style>' + store.css + '<\/style><script>' + store.js + '<\/script>'
  }
})

const fullScreenStatus = ref(false)

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

function fullScreen () {
  fullScreenStatus.value = !fullScreenStatus.value
}
function openNew () {
  const newTab = window.open('', '_blank')
  newTab.document.write(doc.value)
}
</script>

<style scoped lang="scss">
.panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  * {
    box-sizing: border-box;
  }

  .inputPanel {
    height: 50%;
    width: 50%;
    resize: none;
    border: 1px solid var(--el-border-color);

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
    position: relative;
    width: 50%;

    .fullScreen {
      position: absolute;
      right: .8rem;
      top: .8rem;

      [class^="i-"] {
        cursor: pointer;

        &:hover {
          color: #16b0f6;
        }
      }
    }

    &.fullPanel {
      height: 100%;
      width: 100%;
    }

    iframe {
      border: 1px solid rgb(217, 217, 217);
    }

    @media (max-width: 992px) {
      height: 70%;
    }

    &:hover {
      border-color: #16b0f6;
    }
  }
}

.el-divider {
  border-color: white;
  height: 1.6rem;
}
</style>
