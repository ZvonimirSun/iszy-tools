<template>
  <div
    v-show="loading"
    class="loadingPanel"
  >
    <a-spin tip="同步中..." />
  </div>
  <DefineEditor
    v-slot="{
      position,
      $slots,
      ...attrs
    }"
  >
    <div v-bind="attrs">
      <div
        class="editorController"
        :class="`editorController${capitalize(position)}`"
      >
        <div class="editorTitle">
          {{ store[`${position}Data`]?.name }}
        </div>
        <el-space class="editorControlButtons">
          <el-button
            size="small"
            type="primary"
            @click="create(position)"
          >
            <span class="buttonWithIcon"><span class="i-icon-park-outline-file-addition-one" />&nbsp;新建</span>
          </el-button>
          <el-dropdown
            @command="open($event,position)"
          >
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="recent">
                  <span class="buttonWithIcon"><span class="i-icon-park-outline-history" />&nbsp;打开最近记录</span>
                </el-dropdown-item>
                <el-dropdown-item command="file">
                  <span class="buttonWithIcon"><span class="i-icon-park-outline-computer" />&nbsp;打开本地文件</span>
                </el-dropdown-item>
                <el-dropdown-item command="url">
                  <span class="buttonWithIcon"><span class="i-icon-park-outline-link-three" />&nbsp;打开URL</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
            <el-button
              size="small"
              type="primary"
            >
              <span class="buttonWithIcon"><span class="i-icon-park-outline-folder-open" />&nbsp;打开<span class="i-icon-park-outline-down" /></span>
            </el-button>
          </el-dropdown>
          <el-button
            size="small"
            type="primary"
            @click="download(position)"
          >
            <span class="buttonWithIcon"><span class="i-icon-park-outline-save" />&nbsp;保存</span>
          </el-button>
          <el-dropdown
            @command="changeOption($event,position)"
          >
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="indentation">
                  <span class="buttonWithIcon"><span class="i-icon-park-outline-indent-right" />&nbsp;缩进({{ indent }})</span>
                </el-dropdown-item>
                <el-dropdown-item command="properties">
                  <span class="buttonWithIcon"><span class="i-icon-park-outline-info" />&nbsp;文档属性</span>
                </el-dropdown-item>
                <el-dropdown-item
                  command="delete"
                  :disabled="!Boolean(store[`${position}Id`])"
                >
                  <span class="buttonWithIcon"><span class="i-icon-park-outline-delete" />&nbsp;删除文档</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
            <el-button
              size="small"
              type="primary"
            >
              <span class="buttonWithIcon"><span class="i-icon-park-outline-setting-two" />&nbsp;选项<span class="i-icon-park-outline-down" /></span>
            </el-button>
          </el-dropdown>
        </el-space>
      </div>
      <div
        :ref="`jsonEditor${position}`"
        class="jsonEditor"
        :class="`jsonEditor${capitalize(position)}`"
      />
    </div>
  </DefineEditor>
  <div
    v-show="!loading"
    ref="editorPanel"
    class="editorPanel"
  >
    <ReuseEditor
      ref="editorPanelContainerLeft"
      position="left"
      class="editorPanelContainer editorPanelContainerLeft"
      :class="{full:fullPanel==='left',hide:fullPanel==='right'}"
      :style="{flex: store.splitterValue + ' 1 0'}"
    />
    <div
      class="controller noShowMobile"
      :class="{full:fullPanel}"
    >
      <el-space direction="vertical">
        <template v-if="!fullPanel">
          <div class="emptySpace" />
          <el-button
            type="primary"
            block
            @click="copyRight"
          >
            复制
            <span class="i-icon-park-outline-right" />
          </el-button>
          <el-button
            type="primary"
            block
            @click="copyLeft"
          >
            <span class="i-icon-park-outline-left" />
            复制
          </el-button>
          <el-checkbox
            :checked="diff"
            @change="changeDiff"
          >
            对比
          </el-checkbox>
          <el-space v-if="diff">
            <el-button
              type="primary"
              class="diffBtn"
            >
              <span class="i-icon-park-outline-up" />
            </el-button>
            <el-button
              type="primary"
              class="diffBtn"
            >
              <span class="i-icon-park-outline-down" />
            </el-button>
          </el-space>
        </template>
        <div
          class="drag"
          @mousedown="startDrag"
          @touchstart="startDrag"
          @click="clickDragger"
        >
          <div class="dragIcon">
            <svg
              v-if="fullPanel==='right'"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            ><path
              fill="currentColor"
              d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
            /></svg>
            <svg
              v-else-if="fullPanel==='left'"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            ><path
              fill="currentColor"
              d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
            /></svg>
            <svg
              v-else
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-vertical"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            ><path
              fill="currentColor"
              d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"
            /></svg>
          </div>
        </div>
      </el-space>
    </div>
    <ReuseEditor
      position="right"
      class="editorPanelContainer editorPanelContainerRight noShowMobile"
      :class="{full:fullPanel==='right',hide:fullPanel==='left'}"
      :style="{flex: (1-store.splitterValue) + ' 1 0'}"
    />
  </div>
  <el-dialog
    :model-value="modalStatus.type === 'openRecent'"
    title="打开最近"
    @cancel="closeModal"
    @ok="openRecent"
  >
    <a-typography-paragraph>搜索</a-typography-paragraph>
    <el-input
      v-model="keyword"
      placeholder="请输入文档名称"
    />

    <a-list
      class="dataList"
      item-layout="horizontal"
      :data-source="dataListAfterSearch"
    >
      <template #renderItem="{ item }">
        <a-list-item
          :class="{selected: item._id === selectId}"
          @click="selectId=item._id"
        >
          <template #actions>
            <a-button
              type="primary"
              danger
              @click="deleteData({id:item._id})"
            >
              删除
            </a-button>
          </template>
          <a-list-item-meta
            :description="'最后修改: '+item.updated"
          >
            <template #title>
              {{ item.name }}
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </el-dialog>
  <input
    ref="uploader"
    hidden
    type="file"
    accept=".json,.JSON"
    @change="openFile"
  >
  <el-dialog
    :value="modalStatus.type === 'openUrl'"
    title="打开URL"
    @cancel="closeModal"
    @ok="openUrl(url)"
  >
    <a-typography-paragraph>不支持需要验证或开启CORS的地址</a-typography-paragraph>
    <el-input
      v-model="url"
      placeholder="请输入URL地址"
    />
  </el-dialog>
  <el-dialog
    :value="modalStatus.type === 'setIndentation'"
    title="设置缩进"
    @cancel="closeModal"
    @ok="changeIndentation"
  >
    <a-typography-paragraph>配置代码模式下用于缩进的空格数。 缩进同时应用于两个面板。</a-typography-paragraph>
    <el-input v-model.number="indent" />
  </el-dialog>
  <el-dialog
    :value="modalStatus.type === 'documentProperties'"
    title="文档属性"
    class="documentProperties"
    @cancel="closeModal"
    @ok="closeModal"
  >
    <a-typography-paragraph>
      <strong>名称：</strong><a-typography-text
        v-show="documentProperties.name"
        :editable="{onStart:onEditStart,onChange:onEditChange,onEnd:onEditEnd}"
        :content="documentProperties.name"
      />
    </a-typography-paragraph>
    <a-typography-paragraph>
      <strong>存储：</strong><a-typography-text
        v-show="documentProperties.storage"
        :content="documentProperties.storage"
      />
    </a-typography-paragraph>
    <a-typography-paragraph>
      <strong>更新：</strong><a-typography-text
        v-show="documentProperties.updated"
        :content="documentProperties.updated"
      />
    </a-typography-paragraph>
    <a-typography-paragraph>
      <strong>内容：</strong><a-typography-text
        v-show="documentProperties.content"
        :content="documentProperties.content"
      />
    </a-typography-paragraph>
    <a-typography-paragraph>
      <strong>大小：</strong><a-typography-text
        v-show="documentProperties.size"
        :content="documentProperties.size"
      />
    </a-typography-paragraph>
  </el-dialog>
</template>

<script setup>
import { useJsonEditorStore } from '@/stores/jsonEditor'
import { deleteParam, getParam, setParam } from '@/utils/hashHandler.js'
/**
 * @type {Function}
 */
import JSONEditor from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile'
import { get, isEqual, debounce, cloneDeep, capitalize } from 'lodash-es'
import formatBytes from '@/utils/formatBytes.js'
import $axios from '@/plugins/Axios'

const [DefineEditor, ReuseEditor] = createReusableTemplate()

let editorLeft, editorRight

let startX = 0
let originWidth = 0
let moved = false

const codeLeft = ref({
  array: [
    1,
    2,
    3
  ],
  boolean: true,
  color: 'gold',
  null: null,
  number: 123,
  object: {
    a: 'b',
    c: 'd'
  },
  string: 'Hello World'
})
const codeRight = ref({})
const diff = ref(false)
const modalStatus = ref({
  type: '',
  leftOrRight: ''
})
const url = ref('')
const keyword = ref('')
const selectId = ref('')
const indent = ref(2)
const currentName = ref('')
const diffMap = ref({})
const leftMode = ref('code')
const rightMode = ref('tree')
const fullPanel = ref('')
const loading = ref(true)
const targetEditor = ref('')

const jsonEditorLeft = ref()
const jsonEditorRight = ref()
const uploader = ref()
const editorPanelContainerLeft = ref()
const editorPanel = ref()

const store = useJsonEditorStore()

const dataListAfterSearch = computed(() => {
  return store.dataList(keyword.value)
})

const codeLeftString = computed(() => {
  if (typeof codeLeft.value === 'string') {
    return codeLeft.value
  } else {
    return JSON.stringify(codeLeft.value, null, indent.value)
  }
})

const codeRightString = computed(() => {
  if (typeof codeRight.value === 'string') {
    return codeRight.value
  } else {
    return JSON.stringify(codeRight.value, null, indent.value)
  }
})

const documentProperties = computed(() => {
  if (modalStatus.value.leftOrRight === 'left') {
    let content
    if (typeof codeLeft.value === 'string') {
      content = '字符串类型'
    } else if (typeof codeLeft.value === 'number') {
      content = '数字类型'
    } else if (typeof codeLeft.value === 'boolean') {
      content = '布尔类型'
    } else if (Array.isArray(codeLeft.value)) {
      content = `数组类型，包含 ${codeLeft.value.length} 个对象`
    } else if (typeof codeLeft.value === 'object') {
      content = `对象类型，包含 ${Object.keys(codeLeft.value).length} 个属性`
    }
    return {
      name: store.leftData?.name,
      storage: store.leftData ? '浏览器本地' : '',
      updated: store.leftData?.updated,
      content,
      size: formatBytes(codeLeftString.value.length)
    }
  } else if (modalStatus.value.leftOrRight === 'right') {
    let content
    if (typeof codeRight.value === 'string') {
      content = '字符串类型'
    } else if (typeof codeRight.value === 'number') {
      content = '数字类型'
    } else if (typeof codeRight.value === 'boolean') {
      content = '布尔类型'
    } else if (Array.isArray(codeRight.value)) {
      content = `数组类型，包含 ${codeRight.value.length} 个对象`
    } else if (typeof codeRight.value === 'object') {
      content = `对象类型，包含 ${Object.keys(codeRight.value).length} 个属性`
    }
    return {
      name: store.rightData?.name,
      storage: store.rightData ? '浏览器本地' : '',
      updated: store.rightData?.updated,
      content,
      size: formatBytes(codeRightString.value.length)
    }
  } else {
    return {}
  }
})

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  if (editorLeft) {
    editorLeft.destroy()
  }
  if (editorRight) {
    editorRight.destroy()
  }
  window.removeEventListener('hashchange', hashChange)
  window.removeEventListener('keydown', downloadListener)
})

watch(() => store.leftId, (val) => {
  handleHashParams('left', val)
})

watch(() => store.rightId, (val) => {
  handleHashParams('right', val)
})

async function init () {
  if (store.syncCloud) {
    await store.getSyncData()
    loading.value = false
  } else {
    loading.value = false
  }
  fullPanel.value = store.fullStatus
  editorLeft = new JSONEditor(
    jsonEditorLeft.value,
    {
      mode: 'code',
      modes: ['code', 'tree'],
      onClassName,
      onChangeText: debounce((json) => {
        diffMap.value = {}
        try {
          codeLeft.value = JSON.parse(json)
        } catch (e) {
          codeLeft.value = json
        }
        editorLeft.refresh()
        editorRight.refresh()
        save('left')
      }, 100),
      onModeChange: (mode) => {
        leftMode.value = mode
        if (mode === 'code' && typeof codeLeft.value !== 'string') {
          editorLeft.updateText(codeLeftString.value)
        }
        save('left')
      },
      onError: (e) => {
        ElMessage.error(e.message)
      },
      onFocus: () => {
        targetEditor.value = 'left'
      },
      onBlur: () => {
        if (targetEditor.value === 'left') {
          targetEditor.value = ''
        }
      }
    }
  )
  editorRight = new JSONEditor(
    jsonEditorRight.value,
    {
      mode: 'tree',
      modes: ['code', 'tree'],
      onClassName,
      onChangeText: debounce((json) => {
        diffMap.value = {}
        try {
          codeRight.value = JSON.parse(json)
        } catch (e) {
          codeRight.value = json
        }
        editorLeft.refresh()
        editorRight.refresh()
        save('right')
      }, 100),
      onModeChange: (mode) => {
        rightMode.value = mode
        if (mode === 'code' && typeof codeRight.value !== 'string') {
          editorRight.updateText(codeRightString.value)
        }
        save('right')
      },
      onError: (e) => {
        ElMessage.error(e.message)
      },
      onFocus: () => {
        targetEditor.value = 'right'
      },
      onBlur: () => {
        if (targetEditor.value === 'right') {
          targetEditor.value = ''
        }
      }
    }
  )
  if (store.leftData && store.leftData.content) {
    if (store.leftData.content.json) {
      codeLeft.value = store.leftData.content.json
      editorLeft.set(store.leftData.content.json)
      editorLeft.setMode('tree')
    } else if (store.leftData.content.text) {
      try {
        codeLeft.value = JSON.parse(store.leftData.content.text)
      } catch (e) {
        codeLeft.value = store.leftData.content.text
      }
      editorLeft.setText(store.leftData.content.text)
      editorLeft.setMode('code')
    }
  } else {
    editorLeft.set(codeLeft.value)
  }
  if (store.rightData && store.rightData.content) {
    if (store.rightData.content.json) {
      codeRight.value = store.rightData.content.json
      editorRight.set(store.rightData.content.json)
      editorRight.setMode('tree')
    } else if (store.rightData.content.text) {
      try {
        codeRight.value = JSON.parse(store.rightData.content.text)
      } catch (e) {
        codeRight.value = store.rightData.content.text
      }
      editorRight.setText(store.rightData.content.text)
      editorRight.setMode('code')
    }
  } else {
    editorRight.set(codeRight.value)
  }
  const left = getParam('left')
  const right = getParam('right')
  if (left && left !== store.leftId) {
    selectId.value = left
    modalStatus.value.leftOrRight = 'left'
    openRecent()
  }
  if (right && right !== store.rightId) {
    selectId.value = right
    modalStatus.value.leftOrRight = 'right'
    openRecent()
  }
  await nextTick(() => {
    handleHashParams('left', store.leftId)
    handleHashParams('right', store.rightId)
    window.addEventListener('hashchange', hashChange)
    window.addEventListener('keydown', downloadListener)
  })
}

function copyRight () {
  if (typeof codeLeft.value === 'string') {
    editorRight.setMode('code')
    editorRight.updateText(codeLeft.value)
    codeRight.value = codeLeft.value
  } else {
    if (leftMode.value === 'code') {
      editorRight.updateText(editorLeft.getText())
    } else {
      editorRight.updateText(codeLeftString.value)
    }
    codeRight.value = cloneDeep(codeLeft.value)
  }
  editorLeft.refresh()
  editorRight.refresh()
  save('right')
}
function copyLeft () {
  if (typeof codeRight.value === 'string') {
    editorLeft.setMode('code')
    editorLeft.updateText(codeRight.value)
    codeLeft.value = codeRight.value
  } else {
    if (rightMode.value === 'code') {
      editorLeft.updateText(editorRight.getText())
    } else {
      editorLeft.updateText(codeRightString.value)
    }
    codeLeft.value = cloneDeep(codeRight.value)
  }
  editorLeft.refresh()
  editorRight.refresh()
  save('left')
}
function save (leftOrRight, name) {
  if (!leftOrRight || leftOrRight === 'left') {
    if (leftMode.value === 'tree') {
      store.saveData({
        left: true,
        id: store.leftId,
        content: editorLeft.get(),
        name
      })
    } else {
      store.saveData({
        left: true,
        id: store.leftId,
        content: editorLeft.getText(),
        name
      })
    }
  }
  if (!leftOrRight || leftOrRight === 'right') {
    if (rightMode.value === 'tree') {
      store.saveData({
        right: true,
        id: store.rightId,
        content: editorRight.get(),
        name
      })
    } else {
      store.saveData({
        right: true,
        id: store.rightId,
        content: editorRight.getText(),
        name
      })
    }
  }
}
function create (leftOrRight) {
  if (leftOrRight === 'left') {
    editorLeft.set({})
    codeLeft.value = {}
    store.saveData({
      left: true
    })
  } else if (leftOrRight === 'right') {
    editorRight.set({})
    codeRight.value = {}
    store.saveData({
      right: true
    })
  }
}
function open (key, leftOrRight) {
  modalStatus.value.leftOrRight = leftOrRight
  switch (key) {
    case 'recent':
      modalStatus.value.type = 'openRecent'
      break
    case 'file':
      uploader.value.click()
      break
    case 'url':
      modalStatus.value.type = 'openUrl'
      break
  }
}
function openRecent () {
  if (selectId.value && store.data(selectId.value) && store.data(selectId.value).content) {
    const data = store.data(selectId.value).content
    if (modalStatus.value.leftOrRight === 'left') {
      store.saveData({
        left: true,
        id: selectId.value
      })
      if (data.json) {
        codeLeft.value = data.json
        editorLeft.set(data.json)
        editorLeft.setMode('tree')
      } else if (data.text) {
        try {
          codeLeft.value = JSON.parse(data.text)
        } catch (e) {
          codeLeft.value = data.text
        }
        editorLeft.setText(data.text)
        editorLeft.setMode('code')
      }
    } else if (modalStatus.value.leftOrRight === 'right') {
      store.saveData({
        right: true,
        id: selectId.value
      })
      if (data.json) {
        codeRight.value = data.json
        editorRight.set(data.json)
        editorRight.setMode('tree')
      } else if (data.text) {
        try {
          codeRight.value = JSON.parse(data.text)
        } catch (e) {
          codeRight.value = data.text
        }
        editorRight.setText(data.text)
        editorRight.setMode('code')
      }
    }
  }
  selectId.value = ''
  closeModal()
}
function openFile (e) {
  if (e.target.files.length) {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result) {
        create(modalStatus.value.leftOrRight)
        if (modalStatus.value.leftOrRight === 'left') {
          codeLeft.value = reader.result
          editorLeft.setText(reader.result)
          save('left', file.name)
        } else if (modalStatus.value.leftOrRight === 'right') {
          codeRight.value = reader.result
          editorRight.setText(reader.result)
          save('right', file.name)
        }
      }
    }
    reader.readAsText(file)
  }
  e.target.value = ''
}
async function openUrl (url) {
  try {
    const res = (await $axios.get(url)).data
    if (res) {
      create(modalStatus.value.leftOrRight)
      if (modalStatus.value.leftOrRight === 'left') {
        codeLeft.value = res
        editorLeft.set(res)
        save('left')
      } else if (modalStatus.value.leftOrRight === 'right') {
        codeRight.value = res
        editorRight.set(res)
        save('right')
      }
      url.value = ''
      closeModal()
    }
  } catch (e) {
    ElMessage.error(e.message)
  }
}
function download (leftOrRight) {
  if (leftOrRight === 'left') {
    createFile(editorLeft.getText(), `${store.leftData?.name || 'left'}.json`)
  } else if (leftOrRight === 'right') {
    createFile(editorRight.getText(), `${store.rightData?.name || 'right'}.json`)
  }
}
function downloadListener (e) {
  if (e.keyCode === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
    e.preventDefault()
    if (targetEditor.value) {
      download(targetEditor.value)
    } else {
      ElMessage.warning('请先选中一个编辑器')
    }
  }
}
function changeOption (key, leftOrRight) {
  modalStatus.value.leftOrRight = leftOrRight
  switch (key) {
    case 'indentation':
      modalStatus.value.type = 'setIndentation'
      break
    case 'properties':
      modalStatus.value.type = 'documentProperties'
      break
    case 'delete':
      if (leftOrRight === 'left') {
        store.deleteData({ id: store.leftId })
      } else if (leftOrRight === 'right') {
        store.deleteData({ id: store.rightId })
      }
      break
  }
}
function changeIndentation () {
  editorLeft.indentation = indent.value
  editorRight.indentation = indent.value
  if (typeof codeLeft.value === 'object') {
    editorLeft.updateText(codeLeftString.value)
  }
  if (typeof codeRight.value === 'object') {
    editorRight.updateText(codeRightString.value)
  }
  closeModal()
}

function onEditStartLeft () {
  onEditStart('left')
}
function onEditStartRight () {
  onEditStart('right')
}
function onEditStart (leftOrRight, val) {
  currentName.value = documentProperties.value.name
  modalStatus.value.leftOrRight = leftOrRight || modalStatus.value.leftOrRight
}
function onEditChange (val) {
  currentName.value = val
}
function onEditEnd () {
  if (modalStatus.value.leftOrRight === 'left') {
    store.saveData({ id: store.leftId, name: currentName.value })
  } else if (modalStatus.value.leftOrRight === 'right') {
    store.saveData({ id: store.rightId, name: currentName.value })
  }
  currentName.value = ''
}

function changeDiff () {
  if (!diff.value) {
    if (typeof codeLeft.value === 'string' || typeof codeRight.value === 'string') {
      ElMessage.error('JSON存在错误')
      return
    }
    if (leftMode.value !== 'tree' || rightMode.value !== 'tree') {
      ElMessage.warning('对比模式仅在「树」模式下生效，请切换为树模式')
    }
  }
  diff.value = !diff.value
  editorLeft.refresh()
  editorRight.refresh()
}

function onClassName ({ path }) {
  if (diff.value && !fullPanel.value) {
    const leftValue = get(codeLeft.value, path)
    const rightValue = get(codeRight.value, path)
    if (isEqual(leftValue, rightValue)) {
      delete diffMap.value[path]
      return ''
    } else {
      diffMap.value[path] = true
      return 'differentElement'
    }
  } else {
    return ''
  }
}
function closeModal () {
  modalStatus.value.type = ''
  modalStatus.value.leftOrRight = ''
}
function handleHashParams (leftOrRight, val) {
  if (val != null) {
    setParam(leftOrRight, val)
  } else {
    deleteParam(leftOrRight)
  }
}
function hashChange () {
  const left = getParam('left')
  const right = getParam('right')
  if (left && left !== store.leftId) {
    selectId.value = left
    modalStatus.value.leftOrRight = 'left'
    openRecent()
  }
  if (right && right !== store.rightId) {
    selectId.value = right
    modalStatus.value.leftOrRight = 'right'
    openRecent()
  }
}
function startDrag (e) {
  // 只允许左键
  if (e.button !== 0) {
    return
  }
  moved = false
  originWidth = parseFloat(window.getComputedStyle(editorPanelContainerLeft.value).width)
  if (isNaN(originWidth)) {
    originWidth = 0
  }
  if (e.touches) {
    startX = e.touches[0].clientX
    document.addEventListener('touchend', this.endDrag)
    document.addEventListener('touchmove', this.dragMove)
  } else {
    startX = e.clientX
    document.addEventListener('mouseup', this.endDrag)
    document.addEventListener('mousemove', this.dragMove)
  }
}
function dragMove (e) {
  moved = true
  let clientX = 0
  if (e.touches) {
    clientX = e.touches[0].clientX
  } else {
    clientX = e.clientX
  }
  const width = originWidth - startX + clientX
  const editorPanelWidth = parseFloat(window.getComputedStyle(editorPanel.value).width)
  if (width < 435) {
    fullPanel.value = 'right'
    if (fullPanel.value !== store.fullStatus) { store.setFullStatus('right') }
  } else if (editorPanelWidth - 100 - width < 435) {
    fullPanel.value = 'left'
    if (fullPanel.value !== store.fullStatus) { store.setFullStatus('left') }
  } else {
    fullPanel.value = ''
    store.setSplitter(width / (editorPanelWidth - 100))
    if (fullPanel.value !== store.fullStatus) {
      store.setFullStatus()
    }
  }
}
function endDrag () {
  document.removeEventListener('mousemove', this.dragMove)
  document.removeEventListener('touchmove', this.dragMove)
  document.removeEventListener('mouseup', this.endDrag)
  document.removeEventListener('touchend', this.endDrag)
}
function clickDragger () {
  if (moved) { return }
  if (fullPanel.value === 'left') {
    store.setSplitter(1 - 435 / (parseFloat(window.getComputedStyle(editorPanel.value).width) - 100))
    fullPanel.value = ''
  } else if (fullPanel.value === 'right') {
    store.setSplitter(435 / (parseFloat(window.getComputedStyle(editorPanel.value).width) - 100))
    fullPanel.value = ''
  }
}
</script>

<style lang="scss" scoped>
.loadingPanel {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.editorPanel {
  display: flex;
  height: 100%;
  flex: 1 1;
}

.controller {
  height: 100%;
  width: 10rem;
  text-align: center;
  user-select: none;

  &.full {
    width: 5rem;
  }

  > :deep(.el-space) {
    width: calc(100% - 1.6rem);
    height: 100%;

    .emptySpace {
      display: block;
      width: 100%;
      height: 9.2rem;
    }

    .ant-btn {
      display: flex;
      align-items: center;

      span:not([class^="i-"]) {
        flex: 1;
      }

      [class^="i-"] {
        font-size: 1.8rem;
      }

      [class^="i-"] + span, span + [class^="i-"] {
        margin-left: 0;
      }
    }

    .el-space__item:last-child {
      flex: 1;
    }

    .drag {
      width: 100%;
      height: 100%;
      cursor: col-resize;
      display: inline-flex;
      border-radius: .3rem;
      flex: 4 1;
      align-items: center;

      &:hover {
        background: #dedede;
      }

      .dragIcon {
        color: #a8a8a8;
        width: 100%;
        text-align: center;

        svg {
          width: 3rem;
          height: 2.4rem;
        }
      }
    }

    .diffBtn {
      padding: 4px 0.9rem;
    }
  }
}

.editorPanelContainer {
  height: 100%;
  display: flex;
  flex-direction: column;

  &.full {
    @media (min-width: 1024px) {
      flex: 1 !important;
    }
  }

  &.hide {
    @media (min-width: 1024px) {
      display: none !important;
    }
  }

  &Left {
    @media (max-width: 1024px) {
      flex: 1 !important;
    }
  }
}

.editorController {
  display: flex;
  width: 100%;
  background: #71a8ff;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  .editorTitle {
    color: white;
    padding: .8rem;
    margin-right: auto;

    .ant-typography-edit-content {
      left: unset;
      margin: 0;
      display: inline-block;
    }

    :deep(.ant-typography) {
      color: white;

      .ant-typography-edit {
        color: white;
      }
    }
  }

  .editorControlButtons {
    margin: 0 .8rem;
    height: 35px;
  }
}

.buttonWithIcon {
  display: inline-flex;
  align-items: center;
}

:deep(.jsonEditor) {
  flex: 1;
  width: 100%;
  overflow: auto;

  &.jsonEditorLeft .differentElement {
    background-color: pink;

    .jsoneditor-field, .jsoneditor-value {
      color: red;
    }
  }

  &.jsonEditorRight .differentElement {
    background-color: #acee61;

    .jsoneditor-field, .jsoneditor-value {
      color: red;
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

.el-space {
  @media (max-width: 1024px) {
    margin-top: 1.2rem;
  }
}

.dataList {
  max-height: 50vh;
  overflow: auto;
  margin-top: .8rem;
  padding: 0 .8rem;
  border: 1px solid #dedede;

  .ant-list-item {
    cursor: pointer;

    &.selected {
      background: #dedede;
    }

    &:hover {
      background: #dedede;
    }
  }
}

:deep(.jsoneditor-poweredBy) {
  @media (max-width: 1024px) {
    display: none;
  }
}

.documentProperties {
  .ant-typography-edit-content {
    left: unset;
    margin: 0;
    display: inline-block;
    width: calc(100% - 42px);
  }
}
</style>
