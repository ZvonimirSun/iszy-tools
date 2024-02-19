import { esLint, javascript } from '@codemirror/lang-javascript'
import { linter } from '@codemirror/lint'
import { js as jsBeautify } from 'js-beautify'

// Uses linter.mjs
import * as eslint from 'eslint-linter-browserify'
import type { EditorPlugin } from '@/types/editor'

const config = {
  // eslint configuration
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
}

export function formatter(value: string, { indent = 2 } = {}) {
  return jsBeautify(value, {
    indent_size: indent,
  })
}

const plugin: EditorPlugin = {
  formatter,
  miniExtensions: [
    javascript(),
  ],
  extensions: [
    javascript(),
    linter(esLint(new eslint.Linter(), config)),
  ],
}

export default plugin
