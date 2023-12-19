import { javascript, esLint } from '@codemirror/lang-javascript'
import { linter, lintGutter } from '@codemirror/lint'
import basic from './lang-basic'
import { EditorPlugin } from './editor'
import { js as jsBeautify } from 'js-beautify'

// Uses linter.mjs
import * as eslint from 'eslint-linter-browserify'

const config = {
  // eslint configuration
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  }
}

export function formatter (value: string, indent = 2) {
  return jsBeautify(value, {
    indent_size: indent
  })
}

export function compactor (value: string) {
  return value
}

const plugin: EditorPlugin = {
  ...basic,
  formatter,
  compactor,
  extensions: [
    ...basic.extensions,
    javascript(),
    lintGutter(),
    // eslint-disable-next-line
    linter(esLint(new eslint.Linter(), config)),
  ]
}

export default plugin
