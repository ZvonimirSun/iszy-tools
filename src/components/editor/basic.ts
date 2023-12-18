import { basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { indentWithTab } from '@codemirror/commands'
import { keymap, drawSelection, EditorView, Panel, ViewUpdate, showPanel } from '@codemirror/view'
import { EditorPlugin } from './editor'

// 中文翻译
const chinesePhrases = {
  // @codemirror/view
  'Control character': '控制字符',
  // @codemirror/commands
  'Selection deleted': '删除所选内容',
  // @codemirror/language
  'Folded lines': '折叠行',
  'Unfolded lines': '展开行',
  to: '至',
  'folded code': '折叠的代码',
  unfold: '展开',
  'Fold line': '折叠行',
  'Unfold line': '展开行',
  // @codemirror/search
  'Go to line': '跳转至行',
  go: '确定',
  Find: '查找',
  Replace: '替换',
  next: '下一个',
  previous: '上一个',
  all: '全部',
  'match case': '匹配大小写',
  'by word': '按单词',
  replace: '替换',
  'replace all': '全部替换',
  close: '关闭',
  'current match': '当前匹配项',
  'replaced $ matches': '替换了 $ 个匹配项',
  'replaced match on line $': '替换了行 $ 的匹配项',
  'on line': '在行',
  // @codemirror/autocomplete
  Completions: '自动完成',
  // @codemirror/lint
  Diagnostics: '诊断',
  'No diagnostics': '无诊断信息'
}

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
