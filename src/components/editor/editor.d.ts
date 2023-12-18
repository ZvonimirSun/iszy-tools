import { Extension } from '@codemirror/state'

export type EditorPlugin = {
  extensions: Extension[],
  formatter:(v: string) => string,
  compactor:(v: string) => string
}
