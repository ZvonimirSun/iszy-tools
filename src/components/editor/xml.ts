import { xml } from '@codemirror/lang-xml'
import basic from './basic'
import { EditorPlugin } from './editor'
import xmlFormat from 'xml-formatter'

export function formatter (val: string): string {
  try {
    return xmlFormat(val.trim(), {
      collapseContent: true,
      indentation: '  ',
      lineSeparator: '\n'
    })
  } catch (e) {
    return val
  }
}

// 压缩xml
export function compactor (val: string): string {
  try {
    return xmlFormat(val.trim(), {
      collapseContent: true,
      indentation: '',
      lineSeparator: ''
    })
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
    xml()
  ]
}

export default plugin
