import { xml } from '@codemirror/lang-xml'
import basic from './basic'
import { EditorPlugin } from './editor'

const plugin: EditorPlugin = {
  ...basic,
  extensions: [
    ...basic.extensions,
    xml()
  ]
}

export default plugin
