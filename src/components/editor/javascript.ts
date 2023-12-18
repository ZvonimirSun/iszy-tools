import { javascript } from '@codemirror/lang-javascript'
import basic from './basic'
import { EditorPlugin } from './editor'

const plugin: EditorPlugin = {
  ...basic,
  extensions: [
    ...basic.extensions,
    javascript()
  ]
}

export default plugin
