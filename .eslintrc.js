module.exports = {
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    './.eslintrc-auto-import.json'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'no-empty': 0,
    'no-template-curly-in-string': 0,
    'no-eval': 0,
    'no-useless-escape': 0,
    'no-loss-of-precision': 0,
    'no-unused-vars': 0,
    'vue/multi-word-component-names': 0
  }
}
