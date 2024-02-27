import { basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { indentWithTab } from '@codemirror/commands'
import { keymap, drawSelection } from '@codemirror/view'
import type { EditorPlugin } from '@/types/editor'
import chinesePhrases from './chinese-phrases'

const plugin: EditorPlugin = {
  extensions: [
    basicSetup,
    EditorState.phrases.of(chinesePhrases),
    keymap.of([indentWithTab]),
    drawSelection()
  ]
}

export default plugin
