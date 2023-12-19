import { css } from '@codemirror/lang-css'
import basic from './basic'
import { EditorPlugin } from './editor'
import { css as cssBeautify } from 'js-beautify'

export function formatter (val: string): string {
  try {
    return cssBeautify(val, { indent_size: 2 })
  } catch (e) {
    return val
  }
}

export function compactor (val: string): string {
  try {
    return val.replace(/\s+|\n/g, ' ')
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*:\s*/g, ':')
      .replace(/\s*;\s*/g, ';')
  } catch (e) {
    return val
  }
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
