module.exports = {
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'standard',
    './.eslintrc-auto-import.json'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
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
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-unused-vars': 0
  }
}
