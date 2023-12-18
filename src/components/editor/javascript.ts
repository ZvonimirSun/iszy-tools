import { javascript, esLint } from '@codemirror/lang-javascript'
import { linter, lintGutter } from '@codemirror/lint'
import basic from './basic'
import { EditorPlugin } from './editor'

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

const plugin: EditorPlugin = {
  ...basic,
  extensions: [
    ...basic.extensions,
    javascript(),
    lintGutter(),
    // eslint-disable-next-line
    linter(esLint(new eslint.Linter(), config)),
  ]
}

export default plugin
