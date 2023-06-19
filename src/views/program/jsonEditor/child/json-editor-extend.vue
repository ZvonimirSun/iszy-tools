<template>
  <div
    ref="container"
    class="editorPanelContainer"
  >
    <div
      class="editorController"
    >
      <div class="editorTitle">
        {{ name }}
      </div>
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
                <span class="buttonWithIcon"><span class="i-icon-park-outline-indent-right" />&nbsp;缩进({{ indent }})</span>
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
      ref="editorWrapper"
      class="jsonEditor"
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
      <el-input v-model.number="indent" />
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
<script setup lang="ts">
/**
 * @type {Function}
 */
import JSONEditor from 'jsoneditor'
import type { JSONEditorMode, JSONEditorOptions } from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.min.css'
import createFile from '@/utils/createFile'
import { debounce } from 'lodash-es'
import formatBytes from '@/utils/formatBytes.js'
import type { Ref } from 'vue'

let editor: JSONEditor

const props = defineProps<{
  name?: string
  code?: string | object
  mode?: JSONEditorMode
}>()

const emit = defineEmits<{
  (e: 'update:name', val: string | undefined): void
  (e: 'update:code', val: string | object): void
  (e: 'create'): void
  (e: 'blur'): void
  (e: 'focus'): void
  (e: 'openRecent'): void
}>()

const editorWrapper: Ref<HTMLDivElement> = ref<HTMLDivElement>() as Ref<HTMLDivElement>
const uploader: Ref<HTMLInputElement> = ref<HTMLInputElement>() as Ref<HTMLInputElement>
const container: Ref<HTMLDivElement> = ref<HTMLDivElement>() as Ref<HTMLDivElement>

const code: Ref<string|object> = ref('')
const mode: Ref<JSONEditorMode> = ref<JSONEditorMode>('code')
const indent: Ref<number> = ref(2)
const name: Ref<string> = ref('')

const settingIndent: Ref<boolean> = ref(false)
const showDocumentProperties: Ref<boolean> = ref(false)

const documentProperties: Ref<{
  name?: string,
  storage?: string,
  updated?: string,
  content?: string,
  size?: string
}> = computed(() => {
  if (showDocumentProperties) {
    let content
    if (typeof code.value === 'string') {
      content = '字符串类型'
    } else if (Array.isArray(code.value)) {
      content = `数组类型，包含 ${code.value.length} 个对象`
    } else if (typeof code.value === 'object') {
      content = `对象类型，包含 ${Object.keys(code.value).length} 个属性`
    } else {
      content = '其他类型'
    }
    return {
      name: name.value,
      // todo
      // storage: store.leftData ? '浏览器本地' : '',
      // updated: store.leftData?.updated,
      storage: '',
      updated: '',
      content,
      size: formatBytes(typeof code.value === 'string' ? code.value.length : JSON.stringify(code.value, null, indent.value).length)
    }
  } else {
    return {}
  }
})

const update = debounce(function ({ name: _name, code: _code }: { name?: string, code?: string | object | null }) {
  if (_name != null && _name !== name.value) {
    name.value = _name
  }
  if (_code != null && _code !== code.value) {
    code.value = _code
  }
  if (editor) {
    updateEditor(editor, mode.value, code.value)
  }
}, 100)

onMounted(() => {
  if (props.name !== undefined) {
    name.value = props.name
  }
  if (props.code !== undefined) {
    code.value = props.code
  }
  if (props.mode !== undefined) {
    mode.value = props.mode
  }
  init()
})

onBeforeUnmount(() => {
  editor && editor.destroy()
})

watchEffect(() => {
  update({
    name: props.name,
    code: props.code
  })
})

watch(() => code.value, (val) => {
  emit('update:code', val)
})

watch(() => name.value, (val) => {
  emit('update:name', val)
})

defineExpose<{
  container: Ref<HTMLDivElement>
}>({
  container
})

function init () {
  editor = new JSONEditor(editorWrapper.value, {
    mode: mode.value,
    modes: [
      'code',
      'tree'
    ],
    onChangeText: debounce((json: string) => {
      if (mode.value === 'tree') {
        try {
          code.value = JSON.parse(json)
        } catch (e) {
          code.value = json
        }
      } else {
        code.value = json
      }
    }, 100),
    onModeChange: (_mode) => {
      mode.value = _mode
      code.value = updateEditor(editor, _mode, code.value)
    },
    onError: (err) => {
      ElMessage.error(err.message)
    },
    onFocus: () => {
      emit('focus')
    },
    onBlur: () => {
      emit('blur')
    }
  } as JSONEditorOptions)
  code.value = updateEditor(editor, mode.value, code.value, true)
}

function updateEditor (editor: JSONEditor, _mode: string, value: string | object, first = false): string | object {
  if (_mode === 'tree') {
    if (typeof value === 'string') {
      try {
        const tmp = JSON.parse(value)
        if (first) {
          editor.set(tmp)
        } else {
          editor.update(tmp)
        }
        return tmp
      } catch (e) {
        editor.setMode('code')
        if (first) {
          editor.setText(value)
        } else {
          editor.updateText(value)
        }
        mode.value = 'code'
        return value
      }
    } else {
      if (first) {
        editor.set(value)
      } else {
        editor.update(value)
      }
      return value
    }
  } else {
    if (typeof value === 'string') {
      if (first) {
        editor.setText(value)
      } else {
        editor.updateText(value)
      }
      return value
    } else {
      const tmp = JSON.stringify(value, null, indent.value)
      if (first) {
        editor.setText(tmp)
      } else {
        editor.updateText(tmp)
      }
      return tmp
    }
  }
}

function create () {
  emit('create')
  editor.set({})
}

function open (val: 'recent' | 'file' | 'url') {
  switch (val) {
    case 'file':
      uploader.value.click()
      break
    case 'recent':
      emit('openRecent')
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
        create()
        code.value = updateEditor(editor, mode.value, reader.result as string, true)
        name.value = file.name
      }
    }
    reader.readAsText(file)
  }
  target.value = ''
}

function download () {
  createFile(editor.getText(), name.value || '未命名.json')
}

let lastIndent = indent.value
function changeOption (val: 'indentation' | 'properties') {
  switch (val) {
    case 'indentation':
      lastIndent = indent.value
      settingIndent.value = true
      break
    case 'properties':
      showDocumentProperties.value = true
      break
  }
}

function cancelIndentation () {
  indent.value = lastIndent
  settingIndent.value = false
}

function changeIndentation () {
  if (typeof code.value === 'string') {
    try {
      code.value = updateEditor(editor, mode.value, JSON.parse(code.value))
    } catch (e) {
    }
  }
  settingIndent.value = false
}
</script>

<style lang="scss" scoped>
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
}

.el-space {
  @media (max-width: 1024px) {
    margin-top: 1.2rem;
  }
}

:deep(.jsoneditor-poweredBy) {
  @media (max-width: 1024px) {
    display: none;
  }
}
</style>
