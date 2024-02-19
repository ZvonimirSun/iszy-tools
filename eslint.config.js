// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({}, {
  rules: {
    'no-console': 'off',
    'curly': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
  },
})
