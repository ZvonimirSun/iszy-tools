<script setup lang="ts">
import { Ref } from 'vue'
import { Content, JSONContent, JSONEditor, JSONValue } from 'vanilla-jsoneditor'
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'

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

const jsonEditorDiv: Ref<HTMLDivElement> = ref<HTMLDivElement>() as Ref<HTMLDivElement>
let jsonEditor:JSONEditor
const isDark = useDark()

const emits = defineEmits<{
  (e: 'change', data: string | JSONValue): void
}>()

defineExpose({
  update,
  set
})

const props = defineProps<{
  content: JSONValue | string,
  props: {
    [key: string]: any
  }
}>()

onMounted(() => {
  jsonEditor = new JSONEditor({
    target: jsonEditorDiv.value,
    props: {
      onChange: (updatedContent: Content) => {
        function _isJson (val: Content): val is JSONContent {
          return (val as JSONContent).json != null
        }

        if (_isJson(updatedContent)) {
          emits('change', updatedContent.json)
        } else {
          emits('change', updatedContent.text)
        }
      },
      ...pickDefinedProps(props.props, propNames)
    }
  })
  if (props.content != null) {
    if (typeof props.content === 'string') {
      jsonEditor.set({ text: props.content })
    } else {
      jsonEditor.set({ json: props.content })
    }
  }
})

onBeforeUnmount(() => {
  jsonEditor?.destroy()
})

watch(
  () => isDark,
  () => {
    jsonEditor?.refresh()
  }
)

onUpdated(() => {
  jsonEditor?.updateProps(pickDefinedProps(props.props, propNames))
  update(props.content)
  jsonEditor?.refresh()
})

function update (val: JSONValue | string) {
  if (val != null) {
    if (typeof val === 'string') {
      jsonEditor.update({ text: val })
    } else {
      jsonEditor.update({ json: val })
    }
  }
}

function set (val: JSONValue | string) {
  if (val != null) {
    if (typeof val === 'string') {
      jsonEditor.set({ text: val })
    } else {
      jsonEditor.set({ json: val })
    }
  }
}

function pickDefinedProps (object: Record<string, any>, propNames: string[]) {
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
  <div class="json-editor-wrapper">
    <div
      ref="jsonEditorDiv"
      class="json-editor"
      :class="{
        'jse-theme-dark': isDark
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.json-editor-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.json-editor {
  flex: 1;
}
</style>
