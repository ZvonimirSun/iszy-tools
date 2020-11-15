module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }, 'antd'],
    ['import', { libraryName: 'lodash', libraryDirectory: '' }, 'lodash']
  ]
}
