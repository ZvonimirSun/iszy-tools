<script setup lang="ts">
import { type Content, isJSONContent, JSONEditor } from 'vanilla-jsoneditor'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import createFile from '@/utils/createFile'
import formatBytes from '@/utils/formatBytes'
import { clone } from 'lodash-es'
import type { EditorValue } from '@/types/editor'

// JSONEditor properties as of version 0.3.60
const propNames = [
  'content',
  'mode',
  'mainMenuBar',
  'navigationBar',
  'statusBar',
  'readOnly',
  'indentation',
  'tabSize',
  'escapeControlCharacters',
  'escapeUnicodeCharacters',
  'validator',
  'onError',
  'onChange',
  'onChangeMode',
  'onClassName',
  'onRenderValue',
  'onRenderMenu',
  'queryLanguages',
  'queryLanguageId',
  'onChangeQueryLanguage',
  'onFocus',
  'onBlur'
]

const jsonEditorDiv = ref<HTMLDivElement>()
const container = ref<HTMLDivElement>()
const uploader = ref<HTMLInputElement>()
let jsonEditor:JSONEditor

const _name = ref('')
const _indent = ref(2)

const settingIndent = ref(false)
const showDocumentProperties = ref(false)

const editingName = ref(false)
const newName = ref('')

const documentProperties = computed<{
  name?: string,
  storage?: string,
  updated?: string,
  content?: string,
  size?: string
}>(() => {
  if (showDocumentProperties) {
    const data = jsonEditor.get()
    let content
    let code
    if (isJSONContent(data)) {
      code = data.json
    } else {
      code = data.text
    }
    if (typeof code === 'string') {
      content = '字符串类型'
    } else if (Array.isArray(code)) {
      content = `数组类型，包含 ${code.length} 个对象`
    } else if (code && typeof code === 'object') {
      content = `对象类型，包含 ${Object.keys(code).length} 个属性`
    } else {
      content = '其他类型'
    }
    return {
      name: _name.value,
      storage: _name.value ? '浏览器本地' : '',
      // todo
      // updated: store.leftData?.updated,
      updated: '',
      content,
      size: formatBytes(typeof code === 'string' ? code.length : JSON.stringify(code, null, _indent.value).length)
    }
  } else {
    return {}
  }
})

const emits = defineEmits<
  {(e: 'change', data: EditorValue): void
  (e: 'create'): void
  (e: 'changeName', name: string): void
  (e: 'open', file: { name: string, content: string }): void
  (e: 'openRecent'): void,
  (e: 'delete'): void}>()

let updating = false

defineExpose({
  container,
  update,
  set,
  refresh,
  get
})

const props = withDefaults(defineProps<{
  content?: EditorValue,
  config?: Record<string, any>,
  showMenuBar?: boolean,
  name?: string
}>(), {
  content: undefined,
  config: () => ({
    mode: 'text'
  }),
  showMenuBar: false,

  name: ''
})

let oldConfig: Record<string, any> = {}

onMounted(() => {
  if (!jsonEditorDiv.value) {
    return
  }
  oldConfig = clone(props.config)
  jsonEditor = new JSONEditor({
    target: jsonEditorDiv.value,
    props: {
      content: { json: {} },
      onChange: (updatedContent: Content) => {
        if (updating) return
        if (isJSONContent(updatedContent)) {
          emits('change', updatedContent.json)
        } else {
          emits('change', updatedContent.text)
        }
      },
      indentation: _indent.value,
      ..._pickDefinedProps(oldConfig, propNames)
    }
  })
  if (props.config.indentation) {
    _indent.value = props.config.indentation
  }
})

onBeforeUnmount(() => {
  jsonEditor?.destroy()
})

watch(
  () => useGlobalStore().isDark,
  () => {
    jsonEditor?.refresh()
  }
)

onUpdated(() => {
  let needUpdate = false
  for (const key in props.config) {
    if (props.config[key] !== oldConfig[key]) {
      needUpdate = true
      break
    }
  }
  if (needUpdate) {
    oldConfig = clone(props.config)
    jsonEditor?.updateProps(_pickDefinedProps(oldConfig, propNames))
  }
  if (props.content != null) {
    update(props.content)
  }
  _name.value = props.name
  jsonEditor?.refresh()
})

function create () {
  jsonEditor.set({ json: {} })
  emits('create')
}

function open (val: 'recent' | 'file') {
  switch (val) {
    case 'file':
      uploader.value?.click()
      break
    case 'recent':
      emits('openRecent')
      break
  }
}

function openFile (e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length) {
    const file = target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result) {
        emits('open', {
          name: file.name,
          content: reader.result as string
        })
      }
    }
    reader.readAsText(file)
  }
  target.value = ''
}

function update (val: EditorValue) {
  updating = true
  let data
  if (val != null) {
    if (typeof val === 'string') {
      data = val
    } else {
      data = JSON.stringify(val, null, _indent.value)
    }
    jsonEditor.update({ text: data })
  }
  setTimeout(() => {
    updating = false
  }, 0)
}

function set (val: EditorValue) {
  updating = true
  if (val != null) {
    if (typeof val === 'string') {
      jsonEditor.set({ text: val })
    } else {
      jsonEditor.set({ json: val })
    }
  }
  setTimeout(() => {
    updating = false
  }, 0)
}

function get () {
  const data = jsonEditor.get()
  if (isJSONContent(data)) {
    return data.json
  } else {
    return data.text
  }
}

function refresh () {
  jsonEditor?.refresh()
}

function download () {
  const data = jsonEditor.get()
  const name = _name.value ? _name.value + '.json' : '未命名.json'
  if (isJSONContent(data)) {
    createFile(JSON.stringify(data.json), name)
  } else {
    createFile(data.text, name)
  }
}

let lastIndent = _indent.value
function changeOption (val: 'indentation' | 'properties' | 'delete') {
  switch (val) {
    case 'indentation':
      lastIndent = _indent.value
      settingIndent.value = true
      break
    case 'properties':
      showDocumentProperties.value = true
      break
    case 'delete':
      emits('delete')
      break
  }
}

function cancelIndentation () {
  _indent.value = lastIndent
  settingIndent.value = false
}

function changeIndentation () {
  jsonEditor.updateProps({
    indentation: _indent.value
  })
  settingIndent.value = false
}

function startEditName () {
  newName.value = _name.value
  editingName.value = true
}

function cancelEdit () {
  editingName.value = false
}

function changeName () {
  if (newName.value) {
    emits('changeName', newName.value)
  }
  editingName.value = false
}

/** ************************* 辅助方法 *******************************/

function _pickDefinedProps (object: Record<string, any>, propNames: string[]) {
  const props: Record<string, any> = {}
  for (const propName of propNames) {
    if (object[propName] !== undefined) {
      props[propName] = object[propName]
    }
  }
  return props
}
</script>

<template>
  <div
    ref="container"
    class="json-editor-wrapper"
  >
    <div
      v-if="showMenuBar"
      class="json-editor-menu"
    >
      <div
        v-if="_name && !editingName"
        class="editorTitle"
      >
        {{ _name }}
        <i
          class="i-icon-park-outline-edit"
          @click="startEditName"
        />
      </div>
      <el-input
        v-if="editingName"
        v-model="newName"
        class="name-editor"
        placeholder="请输入名称"
      >
        <template #suffix>
          <i
            class="i-icon-park-outline-close"
            @click="cancelEdit"
          />
          <i
            class="i-icon-park-outline-check"
            @click="changeName"
          />
        </template>
      </el-input>
      <el-space class="editorControlButtons">
        <el-button
          size="small"
          type="primary"
          @click="create"
        >
          <span class="buttonWithIcon"><span class="i-icon-park-outline-file-addition-one" />&nbsp;新建</span>
        </el-button>
        <el-dropdown
          @command="open"
        >
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="recent">
                <span class="buttonWithIcon"><span class="i-icon-park-outline-history" />&nbsp;打开最近记录</span>
              </el-dropdown-item>
              <el-dropdown-item command="file">
                <span class="buttonWithIcon"><span class="i-icon-park-outline-computer" />&nbsp;打开本地文件</span>
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
          @click="download"
        >
          <span class="buttonWithIcon"><span class="i-icon-park-outline-save" />&nbsp;保存</span>
        </el-button>
        <el-dropdown
          @command="changeOption"
        >
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="indentation">
                <span class="buttonWithIcon"><span class="i-icon-park-outline-indent-right" />&nbsp;缩进({{ _indent }})</span>
              </el-dropdown-item>
              <el-dropdown-item command="properties">
                <span class="buttonWithIcon"><span class="i-icon-park-outline-info" />&nbsp;文档属性</span>
              </el-dropdown-item>
              <el-dropdown-item
                command="delete"
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
      ref="jsonEditorDiv"
      class="json-editor"
      :class="{
        'jse-theme-dark': useGlobalStore().isDark
      }"
    />
    <input
      v-show="false"
      ref="uploader"
      type="file"
      accept=".json,.geojson,.txt"
      @change="openFile"
    >
    <el-dialog
      v-model="settingIndent"
      title="设置缩进"
      :before-close="cancelIndentation"
    >
      <a-typography-paragraph>配置代码模式下用于缩进的空格数。 缩进同时应用于两个面板。</a-typography-paragraph>
      <el-input v-model.number="_indent" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelIndentation">取消</el-button>
          <el-button
            type="primary"
            @click="changeIndentation"
          >
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog
      v-model="showDocumentProperties"
      title="文档属性"
      class="documentProperties"
    >
      <a-typography-paragraph>
        <strong>名称：</strong><a-typography-text
          v-show="documentProperties.name"
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
  </div>
</template>

<style scoped lang="scss">
.json-editor-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.json-editor {
  height: 100%;
}

.json-editor-menu + .json-editor {
  height: calc(100% - 4rem);
}

.json-editor-menu {
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: var(--el-color-primary-dark-2);
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  .editorTitle {
    color: white;
    padding: .8rem;
    margin-right: auto;
    display: flex;
    align-items: center;

    i {
      margin-left: .5rem;
      cursor: pointer;
    }
  }

  .name-editor {
    margin-right: auto;
    margin-left: .8rem;
    max-width: 20rem;

    i {
      cursor: pointer;

      &:hover {
        color: var(--el-color-primary);
      }
    }

    i + i {
      margin-left: .5rem;
    }
  }

  .editorControlButtons {
    margin: 0 .8rem;
    height: 35px;
  }
}
</style>
