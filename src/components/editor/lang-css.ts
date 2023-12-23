import { css } from '@codemirror/lang-css'
import { EditorPlugin } from '@/index'
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
  formatter,
  compactor,
  extensions: [
    css()
  ]
}

export default plugin
