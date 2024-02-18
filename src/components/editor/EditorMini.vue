<script setup lang="ts">
import { EditorView, ViewUpdate, placeholder as PlaceHolder } from '@codemirror/view'
import { Compartment, EditorState } from '@codemirror/state'
import mini from './lang-mini'
import type { EditorPlugin } from '@/types/editor'
import { defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { oneDarkTheme, oneDarkHighlightStyle } from '@codemirror/theme-one-dark'

const props = withDefaults(defineProps<{
  inputDefault?: string,
  plugin?: EditorPlugin,
  placeholder?: string,
  readonly?: boolean
}>(), {
  inputDefault: '',
  plugin: undefined,
  placeholder: '',
  readonly: false
})
const emits = defineEmits<{(e: 'change', v: string): void}>()
defineExpose({
  getView,
  setInput
})

const editor = ref<HTMLDivElement>()
let cm: EditorView
const themeCompartment = new Compartment()
const highLightCompartment = new Compartment()

const extensions = [
  mini.extensions,
  props.plugin ? props.plugin.miniExtensions || props.plugin.extensions : [],
  EditorView.updateListener.of(onChange),
  themeCompartment.of(useStyleStore().isDark ? oneDarkTheme : EditorView.theme({}, { dark: false })),
  highLightCompartment.of(useStyleStore().isDark ? syntaxHighlighting(oneDarkHighlightStyle, { fallback: true }) : syntaxHighlighting(defaultHighlightStyle))
]
if (props.placeholder) {
  extensions.push(PlaceHolder(props.placeholder))
}
if (props.readonly) {
  extensions.push(EditorState.readOnly.of(true))
}

onMounted(() => {
  cm = new EditorView({
    state: EditorState.create({
      extensions,
      doc: props.inputDefault
    }),
    parent: editor.value
  })
})

onUnmounted(() => {
  cm?.destroy()
})

watch(() => useStyleStore().isDark, (val) => {
  cm.dispatch({
    effects: [
      themeCompartment.reconfigure(val ? oneDarkTheme : EditorView.theme({}, { dark: false })),
      highLightCompartment.reconfigure(val ? syntaxHighlighting(oneDarkHighlightStyle, { fallback: true }) : syntaxHighlighting(defaultHighlightStyle))
    ]
  })
})

function onChange (update: ViewUpdate) {
  if (update.docChanged) {
    emits('change', update.state.doc.toString())
  }
}

function setInput (val: string) {
  cm.dispatch({
    changes: {
      from: 0,
      to: cm.state.doc.length,
      insert: val
    }
  })
}

function getView (): EditorView {
  return cm
}
</script>

<template>
  <div
    ref="editor"
    class="editor"
    w-full
  />
</template>

<style scoped lang="scss">
:deep(.cm-editor) {
  max-height: none;
  border: none;
  height: 100%;

  &.cm-focused {
    outline: none;
  }
}

.editor {
  border: 1px solid var(--el-color-primary);;
  height: calc(100% - 3rem);
  overflow: auto;
  display: block;
  box-sizing: border-box;
}
</style>
