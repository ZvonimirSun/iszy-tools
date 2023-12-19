import { css } from '@codemirror/lang-css'
import basic from './lang-basic'
import { EditorPlugin } from './editor'
import { css as cssBeautify } from 'js-beautify'

export function formatter (val: string, indent = 2): string {
  return cssBeautify(val, { indent_size: indent })
}

export function compactor (val: string): string {
  return val.replace(/\s+|\n/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
}

const plugin: EditorPlugin = {
  ...basic,
  formatter,
  compactor,
  extensions: [
    ...basic.extensions,
    css()
  ]
}

export default plugin
