<script setup lang="ts">
import { debounce } from 'lodash-es'
import { EditorView, ViewUpdate } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { undo, redo, undoDepth, redoDepth } from '@codemirror/commands'
import basic from './basic'
import { EditorPlugin } from './editor'

const editor = ref<HTMLDivElement>()

let cm: EditorView

const props = withDefaults(defineProps<{
  inputDefault?: string,
  plugin?: EditorPlugin
}>(), {
  inputDefault: '',
  plugin: () => basic
})

const emits = defineEmits<{(e: 'change', v: string): void}>()

const hasUndo = ref(false)
const hasRedo = ref(false)

onMounted(() => {
  cm = new EditorView({
    state: EditorState.create({
      extensions: [
        ...props.plugin.extensions,
        EditorView.updateListener.of(onChange)
      ],
      doc: props.inputDefault
    }),
    parent: editor.value
  })
})

onBeforeUnmount(() => {
  cm?.destroy()
})

const emitChange = debounce((val: string) => {
  emits('change', val)
}, 1000)

function onChange (update: ViewUpdate) {
  if (update.docChanged) {
    hasUndo.value = undoDepth(cm.state) > 0
    hasRedo.value = redoDepth(cm.state) > 0
    emitChange(update.state.doc.toString())
  }
}

function formatBtn () {
  const val = props.plugin.formatter(cm.state.doc.toString())
  cm.dispatch({
    changes: { from: 0, to: cm.state.doc.length, insert: val }
  })
}

function compactBtn () {
  const val = props.plugin.compactor(cm.state.doc.toString())
  cm.dispatch({
    changes: { from: 0, to: cm.state.doc.length, insert: val }
  })
}

function undoBtn () {
  if (!hasUndo.value) return
  undo(cm)
}

function redoBtn () {
  if (!hasRedo.value) return
  redo(cm)
}
</script>

<template>
  <div
    flex
    flex-col
  >
    <div
      class="controller"
      flex
    >
      <div
        title="格式化"
        class="controller-btn"
        @click="formatBtn"
      >
        <span class="i-iszy-editor-format" />
      </div>
      <div
        title="压缩"
        class="controller-btn"
        @click="compactBtn"
      >
        <span class="i-iszy-editor-compact" />
      </div>
      <div class="divider" />
      <div
        title="撤销"
        class="controller-btn"
        :class="{
          disabled: !hasUndo
        }"
        @click="undoBtn"
      >
        <span class="i-fa6-solid-arrow-rotate-left" />
      </div>
      <div
        title="重做"
        class="controller-btn"
        :class="{
          disabled: !hasRedo
        }"
        @click="redoBtn"
      >
        <span class="i-fa6-solid-arrow-rotate-right" />
      </div>
    </div>
    <div
      ref="editor"
      class="editor"
      w-full
    />
  </div>
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

.controller {
  background: var(--el-color-primary);
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;

  & .divider {
    width: 1px;
    height: calc(100% - 1rem);
    background: var(--el-color-primary-light-3);
  }

  &-btn {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--el-color-white);
    cursor: pointer;

    &.disabled {
      color: var(--el-color-primary-light-3);
    }

    &:not(.disabled):hover {
      background: var(--el-color-primary-light-3);
    }

    & > span {
      font-size: 1.6rem;
    }
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
