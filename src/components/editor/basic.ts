import { basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { indentWithTab } from '@codemirror/commands'
import { keymap, drawSelection, EditorView, Panel, ViewUpdate, showPanel } from '@codemirror/view'
import { EditorPlugin } from './editor'
import chinesePhrases from './chinese-phrases'

// 基本信息条
function baseInfoPanel (view: EditorView): Panel {
  const dom = document.createElement('div')
  dom.style.padding = '0 .5rem'
  // 获取当前光标位置
  dom.textContent = getCursorAndSelection()
  return {
    dom,
    update (update: ViewUpdate) {
      if (update.selectionSet) {
        dom.textContent = getCursorAndSelection()
      }
    }
  }

  function getCursorAndSelection (): string {
    const selection = view.state.selection.main
    const line = view.state.doc.lineAt(selection.head)
    let info = `行: ${line.number} 列: ${selection.head - line.from}`
    if (!selection.empty) {
      info += `选中: ${Math.abs(selection.to - selection.from)} 字符`
    }
    return info
  }
}

const plugin: EditorPlugin = {
  extensions: [
    basicSetup,
    EditorState.phrases.of(chinesePhrases),
    keymap.of([indentWithTab]),
    drawSelection(),
    showPanel.of(baseInfoPanel)
  ],
  formatter: (value: string) => {
    return value
  },
  compactor: (value: string) => {
    return value
  }
}

export default plugin
