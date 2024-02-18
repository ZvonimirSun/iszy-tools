import { html } from '@codemirror/lang-html'
import type { EditorPlugin } from '@/types/editor'
import { html as htmlBeautify } from 'js-beautify'

export function formatter (value: string, { indent = 2 } = {}) {
  return htmlBeautify(value, {
    indent_size: indent
  })
}

export function compactor (value: string) {
  return value
}

const plugin: EditorPlugin = {
  formatter,
  compactor,
  extensions: [
    html()
  ]
}

export default plugin
