import { Extension } from '@codemirror/state'

export type EditorValue = string | unknown

export type EditorPlugin = {
  extensions: Extension[],
  miniExtensions?: Extension[],
  isValid?: (v: string) => boolean,
  formatter?:(v: string, options?: Record<string, any>) => string,
  compactor?:(v: string) => string
}
