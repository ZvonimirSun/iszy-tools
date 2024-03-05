import { basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { indentWithTab } from '@codemirror/commands'
import { drawSelection, keymap } from '@codemirror/view'
import chinesePhrases from './chinese-phrases'
import type { EditorPlugin } from '@/types/editor'

const plugin: EditorPlugin = {
  extensions: [
    basicSetup,
    EditorState.phrases.of(chinesePhrases),
    keymap.of([indentWithTab]),
    drawSelection(),
  ],
}

export default plugin
