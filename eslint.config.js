// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({}, {
  rules: {
    'no-console': 'off',
    'curly': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'no-restricted-globals': 'off',
    'ts/no-this-alias': 'off',
  },
}, {
  ignores: ['src/utils/**/*'],
})
