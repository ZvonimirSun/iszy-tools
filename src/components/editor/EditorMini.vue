<script setup lang="ts">
import type { ViewUpdate } from '@codemirror/view'
import type { EditorPlugin } from '@/types/editor'
import { Compartment, EditorState } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark'
import { EditorView, placeholder as PlaceHolder } from '@codemirror/view'
import { useGlobalStore } from '@/stores/global.ts'
import mini from './lang-mini'

const props = withDefaults(defineProps<{
  inputDefault?: string
  plugin?: EditorPlugin
  placeholder?: string
  readonly?: boolean
}>(), {
  inputDefault: '',
  plugin: undefined,
  placeholder: '',
  readonly: false,
})
const emits = defineEmits<{
  (e: 'change', v: string): void
}>()
defineExpose({
  getView,
  setInput,
})

const editor = ref<HTMLDivElement>()
let cm: EditorView
const themeCompartment = new Compartment()

const extensions = [
  mini.extensions,
  props.plugin ? props.plugin.miniExtensions || props.plugin.extensions : [],
  EditorView.updateListener.of(onChange),
  themeCompartment.of(useGlobalStore().isDark ? oneDark : EditorView.theme({}, { dark: false })),
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
      doc: props.inputDefault,
    }),
    parent: editor.value,
  })
})

onUnmounted(() => {
  cm?.destroy()
})

watch(() => useGlobalStore().isDark, (val) => {
  cm.dispatch({
    effects: [themeCompartment.reconfigure(val ? oneDark : EditorView.theme({}, { dark: false }))],
  })
})

function onChange(update: ViewUpdate) {
  if (update.docChanged) {
    emits('change', update.state.doc.toString())
  }
}

function setInput(val: string) {
  cm.dispatch({
    changes: {
      from: 0,
      to: cm.state.doc.length,
      insert: val,
    },
  })
}

function getView(): EditorView {
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
