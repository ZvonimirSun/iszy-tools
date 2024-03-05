import { xml } from '@codemirror/lang-xml'
import xmlFormat from 'xml-formatter'
import type { EditorPlugin } from '@/types/editor'

export function formatter(val: string, options: { indent?: number } & Record<string, any> = {}): string {
  try {
    const { indent = 2, ...other } = options
    return xmlFormat(val.trim(), {
      collapseContent: true,
      indentation: ' '.repeat(indent),
      lineSeparator: '\n',
      ...other,
    })
  }
  catch (e) {
    return val
  }
}

// 压缩xml
export function compactor(val: string): string {
  try {
    return xmlFormat(val.trim(), {
      collapseContent: true,
      indentation: '',
      lineSeparator: '',
    })
  }
  catch (e) {
    return val
  }
}

export function isValid(val: string): boolean {
  try {
    xmlFormat(val.trim())
    return true
  }
  catch (e) {
    return false
  }
}

const plugin: EditorPlugin = {
  formatter,
  compactor,
  isValid,
  extensions: [
    xml(),
  ],
}

export default plugin
