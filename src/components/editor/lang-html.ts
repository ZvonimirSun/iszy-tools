import { html } from '@codemirror/lang-html'
import { html as htmlBeautify } from 'js-beautify'
import type { EditorPlugin } from '@/types/editor'

export function formatter(value: string, { indent = 2 } = {}) {
  return htmlBeautify(value, {
    indent_size: indent,
  })
}

export function compactor(value: string) {
  return value
}

const plugin: EditorPlugin = {
  formatter,
  compactor,
  extensions: [
    html(),
  ],
}

export default plugin
