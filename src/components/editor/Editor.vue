<script setup lang="ts">
import { EditorView, ViewUpdate } from '@codemirror/view'
import { Compartment, EditorState } from '@codemirror/state'
import { undo, redo, undoDepth, redoDepth } from '@codemirror/commands'
import basic from './lang-basic'
import { EditorPlugin } from './editor'
import { useStyleStore } from '@/stores/style'

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
const themeCompartment = new Compartment()

const hasUndo = ref(false)
const hasRedo = ref(false)

onMounted(() => {
  cm = new EditorView({
    state: EditorState.create({
      extensions: [
        ...props.plugin.extensions,
        EditorView.updateListener.of(onChange),
        themeCompartment.of(EditorView.theme({}, { dark: useStyleStore().isDark }))
      ],
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
    effects: themeCompartment.reconfigure(EditorView.theme({}, { dark: val }))
  })
})

function onChange (update: ViewUpdate) {
  if (update.docChanged) {
    hasUndo.value = undoDepth(cm.state) > 0
    hasRedo.value = redoDepth(cm.state) > 0
    emits('change', update.state.doc.toString())
  }
}

const controls: {
  title: string,
  event: () => void,
  isDisabled?: () => boolean,
  icon: string
}[][] = [
  [
    {
      title: '格式化',
      event: function formatBtn () {
        try {
          const val = props.plugin.formatter(cm.state.doc.toString())
          if (val && val !== cm.state.doc.toString()) {
            cm.dispatch({
              changes: { from: 0, to: cm.state.doc.length, insert: val }
            })
          }
        } catch (e) {}
      },
      icon: 'i-iszy-editor-format'
    },
    {
      title: '压缩',
      event: function compactBtn () {
        try {
          const val = props.plugin.compactor(cm.state.doc.toString())
          if (val && val !== cm.state.doc.toString()) {
            cm.dispatch({
              changes: { from: 0, to: cm.state.doc.length, insert: val }
            })
          }
        } catch (e) {}
      },
      icon: 'i-iszy-editor-compact'
    }
  ],
  [
    {
      title: '撤销',
      isDisabled: () => !hasUndo.value,
      event: function undoBtn () {
        if (!hasUndo.value) return
        undo(cm)
      },
      icon: 'i-fa6-solid-arrow-rotate-left'
    },
    {
      title: '重做',
      isDisabled: () => !hasRedo.value,
      event: function redoBtn () {
        if (!hasRedo.value) return
        redo(cm)
      },
      icon: 'i-fa6-solid-arrow-rotate-right'
    }
  ]
]
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
      <template v-for="(group, i) in controls">
        <div
          v-if="i !== 0"
          :key="'divider' + i"
          class="divider"
        />
        <div
          v-for="(btn, j) in group"
          :key="'btn' + i + j"
          :title="btn.title"
          class="controller-btn"

          :class="{
            disabled: btn.isDisabled?.()
          }"
          @click="btn.event"
        >
          <span :class="btn.icon" />
        </div>
      </template>
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
