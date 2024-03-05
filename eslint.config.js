// eslint.config.js
import antfu from '@antfu/eslint-config'
import autoImport from './.eslintrc-auto-import.json' assert {type: 'json'}

export default antfu(
  {
    unocss: true,
    ignores: ['src/assets/**/*', 'src/utils/**/*.js'],
  },
  {
    languageOptions: {
      globals: autoImport.globals,
    },
  },
  {
    rules: {
      'no-console': 'off',
      'curly': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      'no-restricted-globals': 'off',
      'ts/no-this-alias': 'off',
    },
  },
)
