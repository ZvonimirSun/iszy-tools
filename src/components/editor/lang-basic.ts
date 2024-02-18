import { lintGutter } from '@codemirror/lint'
import { EditorView, Panel, ViewUpdate, showPanel } from '@codemirror/view'
import type { EditorPlugin } from '@/types/editor'

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
    let info = `总行数: ${view.state.doc.lines} 行数: ${line.number} 列数: ${selection.head - line.from}`
    if (!selection.empty) {
      info += `选中: ${Math.abs(selection.to - selection.from)} 字符`
    }
    return info
  }
}

const plugin: EditorPlugin = {
  extensions: [
    showPanel.of(baseInfoPanel),
    lintGutter()
  ]
}

export default plugin
