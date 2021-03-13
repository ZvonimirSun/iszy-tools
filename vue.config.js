module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer.map((arg) => {
        const option = arg.options.terserOptions.compress
        option.drop_console = true // 打开开关
        option.drop_debugger = true // 打开开关
        return arg
      })
    }
  },
  devServer: {
    port: 3000,
    https: false,
    hotOnly: false
  }
}
