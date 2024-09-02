// eslint.config.js
import antfu from '@antfu/eslint-config'
import autoImport from './.eslintrc-auto-import.json' assert {type: 'json'}

export default antfu(
  {
    unocss: true,
    ignores: ['src/assets/**/*', 'src/utils/**/*.js', 'eslint.config.js'],
  },
  {
    languageOptions: {
      globals: autoImport.globals,
    },
  },
  {
    rules: {
      'no-console': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unused-imports/no-unused-vars': [
        'error', {
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
    },
  },
)
