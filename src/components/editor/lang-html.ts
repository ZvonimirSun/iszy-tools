import { html } from '@codemirror/lang-html'
import basic from './lang-basic'
import { EditorPlugin } from './editor'
import { html as htmlBeautify } from 'js-beautify'

export function formatter (value: string, indent = 2) {
  return htmlBeautify(value, {
    indent_size: indent
  })
}

export function compactor (value: string) {
  return value
}

const plugin: EditorPlugin = {
  ...basic,
  formatter,
  compactor,
  extensions: [
    ...basic.extensions,
    html()
  ]
}

export default plugin
