const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const saveLicense = require('uglify-save-license')
const config = require('./webpack.config.base')
const pkg = require('../package.json')

const extractPlugin = new ExtractTextPlugin('css/app.css')

module.exports = merge.smart(config, {
  entry: pkg.dependencies && {
    vendor: Object.keys(pkg.dependencies)
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),

    new UglifyJsPlugin({
      output: {
        comments: saveLicense
      }
    }),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.s?css$/
    }),

    extractPlugin
  ]
})
