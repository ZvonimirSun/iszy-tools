<script setup lang="ts">
import { EditorView } from '@codemirror/view'
import { undo, redo, undoDepth, redoDepth } from '@codemirror/commands'
import basic from './lang-basic'
import type { EditorPlugin } from '@/types/editor'
import EditorMini from './EditorMini.vue'

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

const editor = ref<InstanceType<typeof EditorMini>>()
let cm: EditorView
const hasUndo = ref(false)
const hasRedo = ref(false)

const newPlugin: EditorPlugin = {
  ...props.plugin,
  miniExtensions: undefined,
  extensions: [
    basic.extensions,
    ...(props.plugin?.extensions || [])
  ]
}

onMounted(() => {
  if (!editor.value) { return }
  cm = editor.value.getView()
})

function onChange (val: string) {
  if (!cm) {
    return
  }
  hasUndo.value = undoDepth(cm.state) > 0
  hasRedo.value = redoDepth(cm.state) > 0
  emits('change', val)
}

function getView () {
  return editor.value?.getView()
}

function setInput (val: string) {
  editor.value?.setInput(val)
}

type Control = {
  title: string,
  event: () => void,
  isDisabled?: () => boolean,
  icon: string
}
const controls: Control[][] = [
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
const formatControls: Control[] = []
if (props.plugin?.formatter) {
  formatControls.push({
    title: '格式化',
    event: function formatBtn () {
      if (!props.plugin?.formatter) {
        return
      }
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
  })
}
if (props.plugin?.compactor) {
  formatControls.push({
    title: '压缩',
    event: function compactBtn () {
      if (!props.plugin?.compactor) {
        return
      }
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
  })
}
if (formatControls.length) {
  controls.unshift(formatControls)
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
    <EditorMini
      ref="editor"
      :input-default="inputDefault"
      :placeholder="placeholder"
      :plugin="newPlugin"
      :readonly="readonly"
      @change="onChange"
    />
  </div>
</template>

<style scoped lang="scss">
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
</style>
