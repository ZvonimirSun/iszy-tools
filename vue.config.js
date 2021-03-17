module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0]
      const terserOptions = terserWebpackPlugin.options.terserOptions

      terserOptions.compress.drop_console = true
      terserOptions.compress.dead_code = false

      terserOptions.compress.drop_debugger = true
      terserOptions.compress.keep_classnames = false
      terserOptions.compress.keep_fnames = false
      terserOptions.compress.module = false

      terserOptions.keep_classnames = false
      terserOptions.keep_fnames = false
      terserOptions.module = false
    }
    config.resolve.fallback = {
      crypto: false
    }
  },
  devServer: {
    port: 3000,
    https: false,
    hotOnly: false
  }
}
