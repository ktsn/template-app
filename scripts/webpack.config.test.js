const path = require('path')
const glob = require('glob')
const merge = require('webpack-merge')
const config = require('./webpack.config.base')

module.exports = merge(config, {
  entry: glob.sync(path.resolve(__dirname, '../test/**/*.spec.js')),
  output: {
    path: path.resolve(__dirname, '../.tmp'),
    filename: 'test.js'
  },
  module: {
    rules: [
      {
        enforce: 'post',
        test: /\.spec\.js$/,
        use: 'webpack-espower-loader'
      }
    ]
  },
  devtool: 'source-map'
})
