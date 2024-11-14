import type { EditorPlugin } from '@/types/editor'
import { indentWithTab } from '@codemirror/commands'
import { EditorState } from '@codemirror/state'
import { drawSelection, keymap } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import chinesePhrases from './chinese-phrases'

const plugin: EditorPlugin = {
  extensions: [
    basicSetup,
    EditorState.phrases.of(chinesePhrases),
    keymap.of([indentWithTab]),
    drawSelection(),
  ],
}

export default plugin
