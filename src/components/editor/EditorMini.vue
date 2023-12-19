<script setup lang="ts">
import { EditorView, ViewUpdate, placeholder as PlaceHolder } from '@codemirror/view'
import { Compartment, EditorState } from '@codemirror/state'
import mini from './lang-mini'
import { useStyleStore } from '@/stores/style'
import { EditorPlugin } from '@/components/editor/editor'
import { defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { oneDarkTheme, oneDarkHighlightStyle } from '@codemirror/theme-one-dark'

const props = withDefaults(defineProps<{
  inputDefault?: string,
  plugin?: EditorPlugin,
  placeholder?: string
}>(), {
  inputDefault: '',
  plugin: undefined,
  placeholder: ''
})
const emits = defineEmits<{(e: 'change', v: string): void}>()

const editor = ref<HTMLDivElement>()
let cm: EditorView
const themeCompartment = new Compartment()
const hightLightCompartment = new Compartment()

onMounted(() => {
  const extensions = [
    ...mini.extensions,
    ...props.plugin ? props.plugin.miniExtensions || props.plugin.extensions : [],
    EditorView.updateListener.of(onChange),
    themeCompartment.of(useStyleStore().isDark ? oneDarkTheme : EditorView.theme({}, { dark: false })),
    hightLightCompartment.of(useStyleStore().isDark ? syntaxHighlighting(oneDarkHighlightStyle, { fallback: true }) : syntaxHighlighting(defaultHighlightStyle))
  ]
  if (props.placeholder) {
    extensions.push(PlaceHolder(props.placeholder))
  }
  cm = new EditorView({
    state: EditorState.create({
      extensions,
      doc: props.inputDefault
    }),
    parent: editor.value
  })
})

onBeforeUnmount(() => {
  cm?.destroy()
})

watch(() => useStyleStore().isDark, (val) => {
  cm.dispatch({
    effects: [
      themeCompartment.reconfigure(val ? oneDarkTheme : EditorView.theme({}, { dark: false })),
      hightLightCompartment.reconfigure(val ? syntaxHighlighting(oneDarkHighlightStyle, { fallback: true }) : syntaxHighlighting(defaultHighlightStyle))
    ]
  })
})

function onChange (update: ViewUpdate) {
  if (update.docChanged) {
    emits('change', update.state.doc.toString())
  }
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
