import type { EditorPlugin } from '@/types/editor'
import { css } from '@codemirror/lang-css'
import { css as cssBeautify } from 'js-beautify'

export function formatter(val: string, { indent = 2 } = {}) {
  return cssBeautify(val, { indent_size: indent })
}

export function compactor(val: string): string {
  return val.replace(/\s+/g, ' ')
    .replace(/\s*\{\s*/g, '{')
    .replace(/\s*\}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
}

const plugin: EditorPlugin = {
  formatter,
  compactor,
  extensions: [
    css(),
  ],
}

export default plugin
