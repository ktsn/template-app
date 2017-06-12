const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.config.base')

module.exports = merge(config, {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    noInfo: true,
    proxy: {
      '/': {
        target: 'http://localhost:4000/',
        changeOrigin: true
      }
    }
  }
})
